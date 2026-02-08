export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
};
