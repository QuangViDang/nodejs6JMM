const returnRes = (res, status, data = {}, message) => {
  return res
    .status(status)
    .json({ status: status, data: data, message: message });
};

module.exports = returnRes;
