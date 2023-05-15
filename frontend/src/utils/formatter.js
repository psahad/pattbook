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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}