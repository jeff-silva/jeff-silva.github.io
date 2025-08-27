import { reactive } from "vue";
import axios from "axios";

export default (options = {}) => {
  options = {
    method: "get",
    url: null,
    data: {},
    params: {},
    headers: {},

    response: null,
    antiCors: false,
    autoSubmit: false,

    ...options,
  };

  const r = reactive({
    busy: false,
    ready: false,
    method: "get",
    url: null,
    data: {},
    params: {},
    headers: {},
    response: false,
    error: false,

    ...options,

    async submit() {
      r.error = false;
      r.busy = true;

      let axiosOptions = {};
      ["method", "url", "data", "params", "headers"].map((attr) => {
        axiosOptions[attr] = options[attr];
        if (typeof axiosOptions[attr] == "function") {
          axiosOptions[attr] = axiosOptions[attr]();
        }
      });

      if (options.antiCors) {
        // axiosOptions.url = "https://corsproxy.io/?" + encodeURIComponent(axiosOptions.url);
        axiosOptions.url = `https://thingproxy.freeboard.io/fetch/${axiosOptions.url}`;
      }

      try {
        const resp = await axios(axiosOptions);
        r.response = resp.data;
        r.ready = true;
      } catch (err) {
        r.error = err;
      }

      r.busy = false;
    },
  });

  if (options.autoSubmit) {
    r.submit();
  }

  return r;
};
