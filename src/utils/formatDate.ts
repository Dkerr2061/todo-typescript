export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getDate())) {
      return "Invalid date.";
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (err) {
    console.log(err);
  }
};
