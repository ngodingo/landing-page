export function formatDate (date) {
  const dateYYYYMMDD = date.split("T").shift()
  const formatedDate = new Date(dateYYYYMMDD)
  .toLocaleDateString("id-ID", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatedDate;
}