export const filterArray = (array, filterKey, filterValue) => {
  return array.filter((item) => item[filterKey] === filterValue);
};

export const multiFilterArray = (array, filters) => {
  return array.filter((item) => {
    let isFilterSatisfied = true;
    Object.entries(filters).forEach(([filterKey, filterValue]) => {
      if (item[filterKey] !== filterValue) {
        return (isFilterSatisfied = false);
      }
    });
    return isFilterSatisfied;
  });
};

export const calcTotal = (array, totalKey) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + +currentValue[totalKey];
  }, 0);
};
