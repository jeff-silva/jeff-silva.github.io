import dayjs from "dayjs";
import textile from "textile-js";

export default () => {
  return {
    formatDate() {
      return "zzz";
    },
    formatDateBetween(dateStart, dateFinal) {
      dateFinal = dayjs(dateFinal);
      const months = dateFinal.diff(dateStart, "month") % 12;
      const years = dateFinal.diff(dateStart, "year");

      let text = [];

      if (years == 1) text.push(`${years} ano`);
      else if (years > 1) text.push(`${years} anos`);

      if (years > 0 && months > 0) text.push("e");

      if (months == 1) text.push(`${months} mês`);
      else if (months > 1) text.push(`${months} meses`);

      return text.join(" ");
    },
    formatLocation(location) {
      return [location.city, location.state, location.country].filter((v) => !!v).join(", ");
    },
    markdownToHtml(content) {
      return textile(content);
    },
  };
};
