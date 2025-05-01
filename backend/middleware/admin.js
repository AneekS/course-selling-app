const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD  = "super-super-secret-key"

// function middleware(password) {
//     return function(req, res, next) {
//         const token = req.headers.token;
//         const decoded = jwt.verify(token, password);

//         if (decoded) {
//             req.userId = decoded.id;
//             next()
//         } else {
//             res.status(403).json({
//                 message: "You are not signed in"
//             })
//         }    
//     }
// }

function adminMiddleware(req, res, next) {
    //additionally pass the token via req headers token:"gvavcxhvcxzhvachvhxcv"
    // check the admin is logged in or authenticated/ not
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

    // if authenticated : pass the userId via the req.param.heaader.
    if (decoded) {
        // passing the user id , if authenricated to the next gateway.
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }

}

module.exports = {
    adminMiddleware: adminMiddleware
}