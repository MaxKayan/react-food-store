export const toLocalePrice = (number) =>
  number.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
