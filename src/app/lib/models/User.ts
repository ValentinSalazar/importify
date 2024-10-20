import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
    _id: string;
    nombre: string;
    apellido: string;
    phone: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
    email: {
        type: String,
        uniqued: true,
        required: [true, "Email es requerido."],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email es invalido"],
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: [true, "Nombre es requerido"]
    },
    apellido: {
        type: String,
        required: [true, "Apellido es requerido"]
    }
},
    {
        timestamps: true,
    }
)

const  User  =  mongoose.models?.User  ||  model<UserDocument>('User', userSchema);
export  default  User;