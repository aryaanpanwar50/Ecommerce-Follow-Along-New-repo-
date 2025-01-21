const User = require("../models/user.model")
const bcrypt = require('bcrypt')


const signup = async(req,res)=> {

    try{
        
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(user){
            return res.status(400).send("User already exists")
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            email,
            password:hashPassword,
        });

        await newUser.save();

        res.send({data:newUser})
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {signup};