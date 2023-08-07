import { useEffect } from "react";
import { useService} from "../../context/ServiceContext.jsx";

const Servicios = () => {
  const { getServices, service } = useService();

  useEffect(() => {
    getServices();
  }, []);

  if(service.length===0) return <h1>No haz pedido ningun  servicio</h1>

  return (
    <div>
      {service.map((service) => (
        <div key={service._id}>
          <h1>{service.servicios}</h1>
          <p>{service.mascota}</p>
          <p>{service.detalles}</p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
