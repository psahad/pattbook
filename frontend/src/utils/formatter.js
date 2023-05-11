export function formatDate(dateString, includeTime = false) {
  let options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  if (includeTime) {
    options = {
      ...options,
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h12"
    };
  }

  const date = new Date(dateString);
  return date.toLocaleString("en-GB", options);
}
