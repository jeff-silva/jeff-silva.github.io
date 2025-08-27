<template>
  <div>
    <v-data-table :items="model.search.data" v-bind="model.options.datatable">
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>
            {{ model.options.plural }}
          </v-toolbar-title>

          <template #append>
            <v-btn icon="mdi-plus" @click="edit.show()" />
            <div style="width: 5px"></div>
          </template>
        </v-toolbar>
      </template>

      <template #headers="bind">
        <tr>
          <th style="width: 50px"></th>
          <slot name="table-header" v-bind="slotBind(bind)">
            <th>Name</th>
          </slot>
          <th style="width: 50px"></th>
        </tr>
      </template>

      <template #item="bind">
        <tr>
          <td></td>
          <slot name="table-row" v-bind="slotBind(bind)">
            <td>{{ bind.item.name }}</td>
          </slot>
          <td>
            <v-defaults-provider :defaults="buttonsDefaults">
              <v-menu location="start">
                <template #activator="bind">
                  <v-btn icon="mdi-dots-horizontal" v-bind="bind.props" />
                </template>

                <v-defaults-provider :defaults="buttonsDefaults">
                  <div class="d-flex pe-2" style="gap: 10px">
                    <template v-for="o in tableRowActions">
                      <v-btn v-bind="tableRowActionsBind(o, bind)" v-if="o" />
                    </template>
                  </div>
                </v-defaults-provider>
              </v-menu>
            </v-defaults-provider>
          </td>
        </tr>
      </template>
    </v-data-table>

    <!-- Edit -->
    <v-navigation-drawer v-model="edit.visible" location="end" width="600" absolute temporary>
      <v-form @submit.prevent="model.save()">
        <v-card-title>{{ model.data.id ? "Edit" : "Create" }} {{ model.options.singular }}</v-card-title>
        <v-card-text>
          <slot name="form" v-bind="slotBind({ model })">
            <v-text-field label="Name" v-model="model.data.name" />
          </slot>
          <pre>{{ model.error }}</pre>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="
              model.resetData();
              edit.hide();
            "
            >Close</v-btn
          >
          <v-spacer />
          <v-btn type="submit">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-navigation-drawer>

    <!-- <pre>{{ model.data }}</pre> -->
  </div>
</template>

<script setup>
import _ from "lodash";
import schema from "@/utils/schema";
import { reactive, defineProps } from "vue";
import useFireModel from "@/composables/useFireModel";

const props = defineProps({
  model: { type: String, default: "" },
  tableRowActions: { type: Object, default: () => ({}) },
});

const slotBind = (merge = {}) => {
  return { ...merge };
};

const model = useFireModel(schema[props.model] || {});
useHead({ title: model.options.plural });

model.events.push([
  "saved",
  () => {
    model.resetData();
    model.search.submit();
    edit.hide();
  },
]);
model.events.push([
  "deleted",
  () => {
    model.resetData();
    model.search.submit();
  },
]);
model.search.submit();

const buttonsDefaults = {
  VBtn: { size: 35, flat: true },
};

const tableRowActions = _.merge(
  {
    delete: {
      title: "Delete",
      icon: "mdi-delete",
      color: "error",
      onClick: (ev, bind) => {
        // model.delete({ ...bind.item });
      },
    },
    edit: {
      title: "Edit",
      icon: "mdi-pencil",
      color: "primary",
      onClick(ev, bind) {
        model.setData({ ...bind.item });
        edit.show();
      },
    },
  },
  props.tableRowActions
);

const tableRowActionsBind = (action, bind) => {
  if (typeof action != "object") return;
  for (let name in action) {
    const value = action[name];

    if (typeof value == "function") {
      action[name] = (ev) => {
        return value(ev, bind);
      };
    }
  }

  return action;
};

const edit = reactive({
  visible: false,
  show() {
    edit.visible = true;
  },
  hide() {
    edit.visible = false;
  },
});
</script>
