"use server"
import { connectDB } from "../lib/db/mongodb"; 
import User from "../lib/models/User";
import bcrypt from "bcryptjs";


export const register = async (values: any) => {
    const { nombre, apellido, email, password } = values;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if(userFound){
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          nombre,
          apellido,
          email,
          password: hashedPassword,
        });
        const savedUser = await user.save();

    }catch(e){
        console.log(e);
    }
}