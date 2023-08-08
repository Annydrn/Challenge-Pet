import Service from "../models/service.model.js";
import serviceSchema from "../models/service.model.js";

export const getServices = async (req, res) => {
try {
  const services = await serviceSchema
  .find({
    user: req.user.id, //aca le pido que me traiga las tareas solo del id(usuario) que esta autentificado
  })
  .populate("user"); //populate me cargara toda la informacion de ese usuario
res.json(services);
} catch (error) {
  return res.status(500).json({message: "Ocurrio un problema"})
}
};
export const createService = async (req, res) => {
try {
  const { servicio, mascota, fecha, detalles } = req.body;
  console.log(req.user); //clg para verificar en terminal el id del usuario
  const newService = new Service({
    servicio,
    mascota,
    fecha,
    detalles,
    user: req.user.id,
  });
  const savedService = await newService.save();
  res.json(savedService);
} catch (error) {
  return res.status(500).json({message: "Ocurrio un problema"})
}
};
export const getService = async (req, res) => {
try {
  const service = await serviceSchema.findById(req.params.id).populate("user");
  if (!service) return res.status(404).json({ message: " Service not found" });
  res.json(service);
} catch (error) {
  return res.status(404).json({message: "Servicio no encontrado"})
}
};
export const updateService = async (req, res) => {
try {
  const service = await serviceSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
} catch (error) {
  if (!service) return res.status(404).json({ message: "Service not found" });
}
};
export const deleteService = async (req, res) => {
try {
  const service = await serviceSchema.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ message: "Service not found" });
  return res.sendStatus(204);
} catch (error) {
  if (!service) return res.status(404).json({ message: "Service not found" });

}
};
