class LaramakeBase {
  constructor(params = {}) {
    this.uuid = params.uuid || this.uuid();
    this.onInit(params);
  }

  onInit(params = {}) {}

  uuid(prefix='') {
    return (prefix+ [1e8] + 0).replace(/[018]/g, c =>
      ( c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))) ).toString(16)
    );
  }

  root() {
    // let currentThis = this;
    // while (currentThis) {
    //   if (currentThis instanceof LaramakeApp) {
    //     return currentThis;
    //   }
    //   currentThis = currentThis.parent();
    // }
  }

  newInstance(staticClass, params) {
    params = new staticClass(params);
    let me = this;
    params.parent = function() { return me; };
    return params;
  }

  newInstances(staticClass, arr) {
    return (arr || []).map(item => this.newInstance(staticClass, item));
  }

  remove(attr, uuid) {
    if (typeof uuid=='object') uuid = uuid.uuid;
    let items = this[attr] || [];
    items.forEach((item, index) => {
      if (item.uuid != uuid) return;
      items.splice(index, 1);
    });
  }
}


class LaramakeApp extends LaramakeBase {
  onInit(params = {}) {
    this.storeId = params.storeId || false;

    if (this.storageData()) {
      params = this.storageData();
    }

    this.name = params.name || '';
    this.database = this.newInstance(LaramakeDatabase, params.database || {});

    const objProxy = new Proxy(this, {
      set: function (target, key, value) {
        console.log(`${key} set from ${obj.foo} to ${value}`);
        // target[key] = value;
        return true;
      },
    });
  }

  storageData() {
    if (!this.storeId) return false;
    try {
      return JSON.parse(localStorage.getItem(this.storeId) || 'false') || false;
    } catch(err) {
      return false;
    }
  }

  storageSave() {
    localStorage.setItem(this.storeId, JSON.stringify(this));
  }

  databaseTableAdd(params = {}) {
    this.database.tables.push(this.newInstance(LaramakeDatabaseTable, params));
    this.storageSave();
  }

  databaseTableRemove(table) {
    const index = this.database.tables.indexOf(table);
    this.database.tables.splice(index, 1);
    this.storageSave();
  }

  databaseTablesList() {
    return this.database.tables.map(item => item.name);
  }

  databaseTableFieldsList(tableName) {
    if (!tableName) return [];
    for(let i in this.database.tables) {
      let table = this.database.tables[i];
      if (table.name==tableName) {
        return table.fields.map(item => item.name);
      }
    }
    return [];
  }

  projectDownload() {
    const content = JSON.stringify(this, ' ', 2);
    const blob = new Blob([content], { type: 'application/json' });

    const link = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: `${this.name}.json`,
    }).click();
  }

  files() {
    let files = [];

    this.database.tables.forEach(table => {
      try {
        let studlyName = laravelJsStr.studly(table.name);
        let file = `/app/Models/${studlyName}.php`;
        let fillable = JSON.stringify(table.fields
          .map(field => field.name)
          .filter(field => !['created_at', 'updated_at'].includes(field))
        ).replace(/"/g, "'");

        let content = ['<?php', ''];
        content.push(`namespace App\\Models;`, '');
        content.push(`use Illuminate\\Database\\Eloquent\\Model;`, '');
        content.push(`class ${studlyName} extends Model {`);
        content.push(`  use HasFactory;`, '');
        content.push(`  protected $table = '${table.name}';`);
        content.push(`  protected $fillable = ${fillable};`);
        content.push(`}`);

        files.push({ file, content: content.join("\n") });
      } catch(err) {}
    });

    this.database.tables.forEach(table => {
      try {
        let studlyName = laravelJsStr.studly(table.name) +'Controller';
        let file = `/app/Http/Controllers/${studlyName}.php`;

        let content = ['<?php', ''];
        content.push(`namespace App\\Http\\Controllers;`, '');
        content.push(`use Illuminate\\Http\\Request;`);
        content.push(`use Illuminate\\Support\\Facades\\Route;`, '');
        content.push(`class ${studlyName} extends Controller {`);
        content.push(`}`);

        files.push({ file, content: content.join("\n") });
      } catch(err) {}
    });

    let content = [
      `<?php`,
      '',
      'use Illuminate\\Http\\Request;',
      'use Illuminate\\Support\\Facades\\Route;',
      '',
    ];

    this.database.tables.forEach(table => {
      try {
        let studlyName = laravelJsStr.studly(table.name) +'Controller';
        content.push(`Route::apiResource('${table.name}', '\\App\\Http\\Controllers\\${studlyName}');`);
      } catch(err) {}
    });

    files.push({
      file: `/routes/api.php`,
      content: content.join("\n"),
    });

    return files;
  }
}


class LaramakeDatabase extends LaramakeBase {
  onInit(params = {}) {
    this.tables = this.newInstances(LaramakeDatabaseTable, params.tables || []);
  }

  diagramSource() {
    let source = [];

    this.tables.forEach(table => {
      source.push(`[${table.name}]`);
      table.fields.forEach(field => {
        let field_name = [];
        if (field.fk_table && field.fk_field) {
          field_name.push('+');
        }
        field_name.push(field.name);
        source.push(field_name.join(''));
      });
      source.push('');
    });

    this.tables.forEach(table => {
      table.fields.forEach(field => {
        if (!field.fk_table || !field.fk_field) return;
        source.push(`${table.name} *--* ${field.fk_table}`);
      });
    });

    return source.join("\n");
  }

  diagramUrl() {
    const source = this.diagramSource();
    // console.clear(); console.log(source);
    let data = new TextEncoder('utf-8').encode(source);
    data = pako.deflate(data, { level: 9, to: 'string' });
    data = btoa(data) .replace(/\+/g, '-').replace(/\//g, '_');
    return `https://kroki.io/erd/svg/${data}`;
  }
}


class LaramakeDatabaseTable extends LaramakeBase {
  onInit(params = {}) {
    this.name = params.name || '';
    this.fields = this.newInstances(LaramakeDatabaseTableField, params.fields || [
      { name: 'id', type: 'id' },
      { name: 'name', type: 'string' },
      { name: 'created_at', type: 'datetime' },
      { name: 'updated_at', type: 'datetime' },
    ]);
  }

  fieldAdd(param = {}) {
    this.fields.push(this.newInstance(LaramakeDatabaseTableField, param));
  }

  fieldRemove(field) {
    const index = this.fields.indexOf(field);
    this.fields.splice(index, 1);
  }
}


class LaramakeDatabaseTableField extends LaramakeBase {
  onInit(params = {}) {
    this.name = params.name || '';
    this.type = params.type || '';
    this.fk_table = params.fk_table || null;
    this.fk_field = params.fk_field || null;
  }

  typesList() {
    return [
      {
        id: 'id',
        name: 'ID',
        type: 'bigint',
      },
      {
        id: 'string',
        name: 'Simple text',
        type: 'varchar(255)',
      },
      {
        id: 'text',
        name: 'Big text',
        type: 'text',
      },
      {
        id: 'enum',
        name: 'Enum',
        type: 'enum()',
      },
      {
        id: 'datetime',
        name: 'Date time',
        type: 'datetime',
      },
      {
        id: 'decimal',
        name: 'Decimal',
        type: 'decimal(10, 2)',
      },
      {
        id: 'file',
        name: 'File',
        type: 'BLOB',
      },
      {
        id: 'relation',
        name: 'Relation',
        type: 'bigint',
      },
    ];
  }
}
