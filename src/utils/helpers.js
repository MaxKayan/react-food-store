export const toLocalePrice = (number) =>
  parseInt(number).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export const clampValue = (num, min, max) => {
  const parsed = num ? parseInt(num) : min;
  return Math.min(Math.max(parsed, min), max);
};
