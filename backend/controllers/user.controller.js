const User = require("../models/user.model")


const signup = async(req,res)=> {

    try{
        
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(user){
            return res.status(400).send("User already exists")
        }
        const newUser = new User({
            email,
            password,
        });

        await newUser.save();

        res.send({data:newUser})
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {signup};