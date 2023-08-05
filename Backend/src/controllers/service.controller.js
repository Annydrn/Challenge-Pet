import Service from "../models/service.model.js"

export const getServices= async (req,res)=>{
    const services= await serviceSchema.find()
    res.json(services)
};
export const createService= async (req,res)=>{
    const{servicio, mascota, fecha} = req.body
    const newService= new Service({
        servicio,
        mascota,
        fecha
    });
    const savedService= await newService.save();
    res.json(savedService)
}
export const getService= async (req,res)=>{
    await serviceSchema.findById(req.params.id)
    if(!service) return res.status(404).json({message:" Service not found"})
    res.json(service)
}
export const updateService= async (req,res)=>{
    await serviceSchema.findByIdAndDelete(req.params.id, req.body, {
        new:true
    })
    if(!service) return res.status(404).json({message:"Service not found"})
    res.json(service)
}
export const deleteService= async (req,res)=>{
    await serviceSchema.findByIdAndUpdate(req.params.id)
    if(!service) return res.status(404).json({message:"Service not found"})
    res.json(service)
}
