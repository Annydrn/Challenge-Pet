import { useEffect } from "react";
import { useService} from "../../context/ServiceContext.jsx";
import ServiceCard from "../ServiceCard.jsx";

function Servicios (){
  const { getServices, service } = useService();

  useEffect(() => {
    getServices()
  }, []);

  if(service.length===0) return <h1>No haz pedido ningun  servicio</h1>

  return (
    <div>
      {service.map((service) => (
        <ServiceCard service={service} key={service._id}/>
      ))}
    </div>
  );
}

export default Servicios;
