import axios from "./axios.js";
//creare todas las funciones aca

export const getServicesRequest = () => axios.get("/services");
export const getServiceRequest = (id) => axios.get(`/service/${id}`);
export const createServiceRequest = (service) =>
  axios.post("/service", service);
export const updateServiceRequest = (service) =>
  axios.put(`/service/${service._id}`, service);
export const deleteServiceRequest = (id) => axios.delete(`/service/${id}`);
