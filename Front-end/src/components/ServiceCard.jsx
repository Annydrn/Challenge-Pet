import { useService } from "../context/ServiceContext";
import { Link } from "react-router-dom"; 

const ServiceCard = ({ service }) => {
 const {deleteService}=useService();
  return (
<div className="col-md-4 mb-4">
      <div className="card bg-warning m-2">
        <div className="card-header d-flex justify-content-between">
          <h1 className="font-weight-bold">{service.servicio}</h1>
          <div>
            <button className="btn btn-danger" onClick={()=>{
                deleteService(service._id)
            }}>Delete</button>
            <Link to={`/service/${service._id}`} className="btn btn-primary">Edit</Link>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{service.mascota}</p>
          <p className="card-text">{service.detalles}</p>
          <p className="card-text">{new Date(service.Fecha).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
  
export default ServiceCard;
