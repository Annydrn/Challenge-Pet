import { useForm } from "react-hook-form";

const SolicitudTareas = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
