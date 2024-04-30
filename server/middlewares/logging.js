function logging(req, res, next) {
  console.log(
    `Server has received the request iP:${req.ip} Method:${req.method} Endpoint:${req.originalUrl}`
  );
  next();
}

export default logging;
