import { useForm } from "react-hook-form";
import { useService } from "../context/ServiceContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SolicitudTareas = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createService, getService, updateService } = useService();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadService() {
      if (params.id) {
        const {data} = await getService(params.id);
        console.log(data);
        setValue("servicio", data.servicio);
        setValue("mascota", data.mascota);
        setValue("detalles", data.detalles);
      }
    }
    loadService();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateService(params.id, data);
    } else {
      createService(data);
    }
    navigate("/services");
  });

  return (
    <div className="container-fluid bg-secondary py-4">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Servicio"
          {...register("servicio")}
          className="w-100 bg-warning  p-2 rounded"
          autoFocus
        />

        <input
          type="text"
          placeholder="Mascota"
          {...register("mascota")}
          className="w-100 bg-warning  p-2 rounded"
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Detalles que nos quieras informar"
          {...register("detalles")}
          className="w-100 bg-light p-2 rounded"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default SolicitudTareas;
