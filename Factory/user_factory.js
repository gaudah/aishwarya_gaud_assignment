var User =  require('../Model/user');

exports.userInsert = (req, h) => {

    var myData = new User(req.payload)

    return myData.save().then((user) => {

        return { message: "user inserted successfully", user: user };

    }).catch((err) => {

        return { err: err };

    });
}


exports.loginValidInvalid = (req,h) => {
    if (req.payload.username && req.payload.password) {
        return User.findOne({
            "username": req.payload.username,
            "password": req.payload.password
        }).exec().then((user) => {
            if (!user) return {message: 'Invalid username or password entered'};

            return {user: {msg:"Login Successfully",user_details: user}};
            //return {user: user};

        }).catch((err) => {

            return {err: err};

        });
    }
    else {
        return  {err: "Username and Password are required"}
    }
}

