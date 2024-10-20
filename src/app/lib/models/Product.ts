import mongoose, { Schema, model } from 'mongoose';

export interface ProductDocument {
    _id: string;
    titulo: string,
    descripcion: string,
    imagenes: string[];
    coleccion: "tecnologia" | "termos" | "ropa" | "ofertas",
    categoria: "hombre" | "mujer" | "unisex",
    marca: string,
    precio: number,
    stock: number,
    enOferta: boolean,
    createdAt: Date,
    updatedAt: Date,
}

const productSchema = new Schema<ProductDocument>({
    titulo: {
        type: String,
        required: [true, "Titulo del producto obligatorio."],
        maxlength: [35, "El titulo no puede tener más de 35 caracteres."]
    },
    descripcion: {
        type: String,
        maxlength: [256, "La descripción del título no puede tener mas de 256 caracteres."]
    },
    imagenes: {
        type: [String],
        validate: {
            validator: (array: string[]) => array.length > 0 && array.length <= 8,
            message: 'Debe haber al menos una imagen y un máximo de 8.'
        },
    },
    categoria: {
        type: String,
        maxlength: [35, "La colección debe tener máximo 35 caracteres."]
    },
    marca: {
        type: String,
        maxlength: [35, "La colección debe tener máximo 35 caracteres."]
    },
    precio: {
        type: Number,
        min: [0, "El precio del producto debe ser positivo."]
    },
    stock: {
        type: Number,
        min: [0, "El stock del producto debe ser positivo"],
        max: [99, "Solamente puede tener un stock de maximo 99"]
    },
    enOferta: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    }
)

const  User  =  mongoose.models?.Product  ||  model<ProductDocument>('User', productSchema);
export  default  User;