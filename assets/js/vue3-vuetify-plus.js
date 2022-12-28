/* Dependencies:
  <!-- Dayjs -->
  <script src="https://unpkg.com/dayjs@1.11.7/dayjs.min.js"></script>
  <script src="https://unpkg.com/dayjs@1.11.7/locale/en.js"></script>
  <script src="https://unpkg.com/dayjs@1.11.7/plugin/localeData.js"></script>
  <script>dayjs.locale('en'); dayjs.extend(dayjs_plugin_localeData);</script>
*/

const createVuetifyPlus = (options = {}) => ({
  install(app, options = {}) {
    app.component('vv-calendar', {
      props: {
        modelValue: {
          type: [Boolean, String],
          default: dayjs().format('YYYY-MM-DD'),
        },
        dates: {
          type: Array,
          default: () => ([]),
        },
      },
      computed: {
        month: {
          set(value) {},
          get() {
            const d = dayjs(this.modelValue);
            const r = {};
            r.date = d.format('YYYY-MM-DD');
            r.year = d.format('YYYY');
            r.month = d.format('MM');
            r.day = d.format('DD');
            r.monthName = d.format('MMMM');
            r.daysInMonth = d.daysInMonth();
            r.firstDay = d.startOf("month").day();
            r.weekdays = dayjs.weekdays().map(weekday => weekday.substring(0, 3));
            r.days = (() => {
              const dayDefault = {id:null, day:null, dayName:null, dayAbbr:null, dates:[]};
              let days=[];

              for(let i=0; i<r.firstDay; i++) {
                days.push({ ...dayDefault });
              }
              for(let i=1; i<=r.daysInMonth; i++) {
                const dd = d.set('date', i);
                let day = { ...dayDefault };
                day.id = dd.format();
                day.date = dd.format('YYYY-MM-DD');
                day.day = dd.format('DD');
                day.dayName = dayjs.weekdays()[ dd.day() ];
                day.dayAbbr = day.dayName.substring(0, 3);
                days.push(day);
              }

              days = days.map(day => {
                if (!day.id) return day;
                day.dates = this.dates.filter(d => {
                  return d.date.startsWith(day.date);
                });
                return day;
              });
              
              const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
              return chunk(days, 7);
            })();
            return r;
          },
        },
      },
      methods: {
        monthAdd(n) {
          const month = dayjs(this.modelValue).add(n, 'month').format('YYYY-MM-DD');
          this.$emit('update:modelValue', month);
        },
        slotBind(merge = {}) {
          return {
            modelValue: this.modelValue,
            ...merge
          };
        },
      },
      template: `<div>
        <v-table>
          <template #default>
            <thead>
              <tr>
                <th colspan="2" class="p-0 text-left">
                  <v-btn flat :size="30" icon="mdi-chevron-left" @click="monthAdd(-1)"></v-btn>  
                </th>
                <th colspan="3" class="p-0 text-center">
                  {{ month.year }} {{ month.monthName }}
                </th>
                <th colspan="2" class="p-0 text-right">
                  <v-btn flat :size="30" icon="mdi-chevron-right" @click="monthAdd(1)"></v-btn>  
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="wdays in month.days">
                <tr>
                  <template v-for="d in wdays">
                    <td class="text-center pa-0">
                      <slot name="day" v-bind="slotBind(d)">
                        <v-btn block flat :size="35">{{ d.day }}</v-btn>
                      </slot>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </template>  
        </v-table>
      </div>`,
    });

    app.component('vv-app-layout', {
      props: {
        drawerWidth: {
          type: [Number],
          default: 300,
        },
      },

      methods: {
        slotBind() {
          return {};
        },
        onResize() {
          this.headerHeight = this.$refs.header.$el.offsetHeight;
        },
      },

      data: () => ({
        useDisplay: Vuetify.useDisplay(),
        showDrawer: true,
        headerHeight: 50,
      }),

      template: `<v-layout v-resize="onResize">
        <v-navigation-drawer
            v-model="showDrawer"
            :width="drawerWidth"
            elevation="1"
          >
          <slot name="drawer" v-bind="slotBind()"></slot>
        </v-navigation-drawer>

        <v-app-bar elevation="1" ref="header">
          <div class="d-flex align-center flex-grow-1 px-2" style="gap:10px;">
            <v-btn
              icon="mdi-menu"
              @click="showDrawer=true"
              v-if="!useDisplay.lgAndUp"
            ></v-btn>
            <slot name="header" v-bind="slotBind()"></slot>
          </div>
        </v-app-bar>

        <v-main>
          <div class="pa-3" :style="\`height:calc(100vh - \${headerHeight}px); overflow:auto;\`">
            <slot v-bind="slotBind()"></slot>
          </div>
        </v-main>
      </v-layout>`,
    });
  },
});