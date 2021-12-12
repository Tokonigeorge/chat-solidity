export const getDate = (date) => {
  let _date = new Date(date);
  // return _date.toLocaleString(en, {hour12: true, month: "short", year: "numeric"})
  if (
    _date.toLocaleString("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) ===
    new Date().toLocaleString("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  ) {
    return (
      "Today, " +
      _date
        .toLocaleString("en-US", {
          hour12: "true",
        })
        .split(",")[1]
    );
  } else {
    return _date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour12: "true",
    });
  }
};
