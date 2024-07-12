import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
      type:String,
      default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pinterest.com%2Fstrawberryblushing%2Faesthetic-blank-profile-picture%2F&psig=AOvVaw1x4VvHvhlWSdA_CXCOJuzn&ust=1720890194557000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiGz9z9oYcDFQAAAAAdAAAAABAE",  
    },
},{timestamps:true}
);
const User = mongoose.model('User', userSchema);

export default User;