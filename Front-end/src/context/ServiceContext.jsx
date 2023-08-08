import { createContext, useContext, useState } from "react";
import {
  createServiceRequest,
  getServicesRequest,
  deleteServiceRequest,
    getServiceRequest,
    updateServiceRequest,
} from "../api/service.js";

const ServiceContext = createContext();

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService debe ser usado dentro de un  ServiceProvider");
  }
  return context;
};

export function ServiceProvider({ children }) {
  const [service, setService] = useState([]);

  const getServices = async () => {
    try {
      const res = await getServicesRequest();
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createService = async (service) => {
    const res = await createServiceRequest(service);
    console.log(res);
  };

  const deleteService = async (id) => {
    try {
      const res = await deleteServiceRequest(id);
      if (res.status === 204)
        setService(service.filter((service) => service._id != id));
    } catch (error) {
      console.log(error);
    }
  };

const getService= async(id)=>{
try {
  const res= await getServiceRequest(id);
console.log(res)
return(res)
} catch (error) {
  console.log(error)
}
};

const updateService = async (id, service)=> {
try {
  const res= await updateServiceRequest(id, service)
  console.log(res.data)
} catch (error) {
  console.log(error)
}

}



  return (
    <ServiceContext.Provider
      value={{ service, createService, getServices, deleteService, getService, updateService ,}}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContext;
