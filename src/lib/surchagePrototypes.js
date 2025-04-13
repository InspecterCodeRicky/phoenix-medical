if (!Array.prototype.filterString) {
  Array.prototype.filterString = function (value, arrayOfKeys =  []) {
    const escapedValue = (value || "")
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "|");
    const regex = new RegExp(escapedValue, "gi");

    return this.filter((elm) => {
      if (typeof elm === "string") {
        return regex.test(elm);
      }
      
      return (
        !value ||
        (Array.isArray(arrayOfKeys) && arrayOfKeys.length > 0
          ? arrayOfKeys.some((key) => regex.test(elm[key]))
          : Object.values(elm).some((val) => regex.test(val)))
      );
    });
  };
}
