export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  let arr = [];
  for (let i = 0; i < totalPages; i++) {
    arr.push(i + 1);
  }
  return arr;
};
