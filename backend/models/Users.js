const mongoose=require("mongoose")
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
})
const UserModel =mongoose.model("Users",UserSchema)
module.exports=UserModel; 