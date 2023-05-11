export function formatDate(dateString) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleString("en-GB", options);
}
