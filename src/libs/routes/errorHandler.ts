export default function errorHandler(err, req, res, next) {
  const msg: string = "error";
  let myStatus = res.status;
  let start = new Date();
  res.json({
    error: err,
    message: msg,
    status: 500,
    timestamp: start
  });
  next();
}
