import { createContext, useContext, useState } from "react";
import { createServiceRequest, getServicesRequest } from "../api/service.js";

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

  return (
    <ServiceContext.Provider value={{ service, createService, getServices, }}>
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContext;
