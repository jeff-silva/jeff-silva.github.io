import dayjs from "dayjs";

export default () => {
  return {
    formatDate() {
      return "zzz";
    },
    formatDateBetween(dateStart, dateFinal) {
      dateFinal = dayjs(dateFinal);
      const months = dateFinal.diff(dateStart, "month") % 12;
      const years = dateFinal.diff(dateStart, "year");
      console.log({ months, years });

      let text = [];

      if (years == 1) text.push(`${years} ano`);
      else if (years > 1) text.push(`${years} anos`);

      if (months == 1) text.push(`${months} mês`);
      else if (months > 1) text.push(`${months} meses`);

      return text.join(" ");
    },
    formatLocation(location) {
      return [location.city, location.state, location.country].filter((v) => !!v).join(", ");
    },
  };
};
