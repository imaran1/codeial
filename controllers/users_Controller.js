
const User = require('../models/user')
//Rendring Users Profile
module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: 'User Profile'
    })

}

//Rnedering Sign Up Page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: 'Codeial  Sign Up'
    })
}

//Rendering Sign In Page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: 'Codeial  Sign In'
    })
}

//rendering User Posts
module.exports.post = function(req, res){
    return res.render('user_post',{
        title: 'User Post'
    })
}

//Get the Sign Up Data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err) {console.log('error in creating user while in signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}

//sign in and create session for the user
module.exports.createSession = function(req, res){
   //todo later
}