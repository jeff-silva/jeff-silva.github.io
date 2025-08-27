// https://validatejs.org/

import { reactive } from "vue";
import validate from "validate.js";
import _ from "lodash";

const constraints = {
  required(value) {
    return {
      presence: { allowEmpty: false },
    };
  },
  email(value) {
    return { email: true };
  },
  min(value, minimum = 3) {
    return {
      // presence: { allowEmpty: false },
      length: { minimum },
    };
  },
  max(value, maximum = 10) {
    return {
      length: { maximum },
    };
  },
};

export default (options = {}) => {
  options = {
    values: {},
    rules: {},
    ...options,
  };

  const r = reactive({
    rules: options.rules,
    values: options.values,
    constraints: {},
    errors: Object.fromEntries(
      Object.entries(options.values).map(([name]) => {
        return [name, []];
      })
    ),

    isValid() {
      return 0 == r.errorsTotal();
    },

    errorsTotal(errors = null) {
      if (errors === null) {
        errors = validate(r.values, r.constraints) || {};
      }

      let errorsTotal = 0;
      Object.entries(errors).map(([rule, errors]) => {
        errorsTotal += errors.length;
      });
      return errorsTotal;
    },

    constraintsCreate(name, rules = null) {
      rules = Array.isArray(rules) ? rules : r.rules[name] || [];
      let fieldConstraints = {};
      const value = r.values[name] || "";
      rules.map((rule) => {
        let [method, args = ""] = rule.split(":");
        args = [value, ...args.split(",")].map((arg) => (isNaN(arg) ? arg : parseFloat(arg)));
        const mergeConstraints = constraints[method].apply(null, args);
        fieldConstraints = _.merge(fieldConstraints, mergeConstraints);
      });
      return fieldConstraints;
    },

    validate(name = null) {
      const errors = validate(r.values, r.constraints) || {};

      if (name) {
        r.errors[name] = errors[name] || [];
      }

      // r.errors = validate(r.values, r.constraints) || {};
    },

    bind(name, rules = null) {
      if (typeof r.constraints[name] == "undefined") {
        r.constraints[name] = r.constraintsCreate(name, rules);
      }

      return {
        errorMessages: typeof r.errors[name] == "undefined" ? [] : r.errors[name],
        onChange: () => r.validate(name),
        onBlur: () => r.validate(name),
      };
    },
  });

  r.validate();

  return r;
};
