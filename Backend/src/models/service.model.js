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
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    }
},{timestamps:true
})

export default mongoose.model("Service", serviceSchema)