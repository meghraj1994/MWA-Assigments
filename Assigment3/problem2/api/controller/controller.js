const multFunction = function (req, res) {
  console.log('This is multiply function');
  let paramNum = req.params.paramNum;
  let queryNum = req.query.num;
  let multiplication = paramNum * queryNum;
  console.log(multiplication);
  res.status(200).json(multiplication);
};

module.exports = {
  multFunction: multFunction,
};
