export default function notFoundRoute(req, res, next) {
  const error: String = "Not Found";
  return next(error);
}
