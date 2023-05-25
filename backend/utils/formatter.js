 const responseFormatter = (status, data, meta = {}, error = null) => {
  let response = {
    status,
  };

  if (data) {
    response = {...response, data, meta};
  } else if (error) {
    response = {...response, error};
  }

  return response;
};

module.exports = {
    responseFormatter
}