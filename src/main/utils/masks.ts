export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
};

export const currency = {
  mask(value: number) {
    if (typeof value === "string") {
      return value;
    }
    return value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\d(?=(\d{3})+,)/g, "$&.");
  },
  unmask(mask: string) {
    return mask.replace(/\D/g, "");
  },
};
