module.exports.isUserAuthorizedForOrderDetails = (req, res, next) => {
  //console.log(res.locals.userId, res.locals.orderUser);
  if (res.locals.userId === res.locals.orderUser) {
    res.json({ status: `ok`, data: res.locals.data });
  } else
    res.json({
      status: `error`,
      message: `You are not authorized to view this order`,
    });
};
//
