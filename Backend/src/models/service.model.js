import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    servicio:{
        type:String,
        require:true
    },
    mascota:{
        type:String,
        require: true
    },
    Fecha:{
        type: Date,
        default: Date.now
    },
},{timestamps:true
})

export default mongoose.model("Service", serviceSchema)