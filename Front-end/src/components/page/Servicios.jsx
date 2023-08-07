import { useEffect } from "react";
import { useService } from "../../context/ServiceContext.jsx";

const Servicios = () => {
  const{getServices}= useService();

  useEffect(()=>{
    getServices()
  }, [])

  return (
    <div>Servicios</div>
  )
}

export default Servicios