import { Link, useNavigate } from "react-router-dom";
import fotoBg from "/img/fotoBg.jpg";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
 
function Signup (){
  const { register, handleSubmit, formState:{errors} } = useForm();
  const {signup, isAuthenticated, errors: signUpErrors}= useAuth();
const navigate= useNavigate();

useEffect(()=> {
if (isAuthenticated)navigate ("/services")
}, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
  signup(values)
   
  });
  return (
    <>
      <div className="imagen-fondo">
        <img src={fotoBg} />
      </div>
      <div className="login template d-flex justify-content-center align-items-center vh-100 ">
        <div className="form_container p-5 ">
        {
            signUpErrors.map((error, i)=>(
              <div className="text-danger p-2" key={i}>
                {error}
              </div>
            ))
          }

          <form onSubmit={onSubmit}>
            <h3 className="text-center mb-4 texto-titulo">Crea tu cuenta</h3>
            <div className="mb-2">
              <label htmlFor="firstname"> Nombre</label>
              <br />
              <input
                type="text"
                placeholder="  Escribe tu nombre"
                className="cuadro_texto"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && ( 
                <p className="text-warning">Nombre es requerido</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="lasttname"> Apellido</label>
              <br />
              <input
                type="text"
                placeholder="  Escribe tu apellido"
                className="cuadro_texto"
                {...register("lastname", { required: true })}
              />
               {errors.lastname && ( 
                <p className="text-warning">Apellido es requerido</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="email"> Email</label>
              <br />
              <input
                type="email"
                placeholder="  Escribe tu Email"
                className="cuadro_texto"
                {...register("email", { required: true })}
              />
               {errors.email && ( 
                <p className="text-warning">E-mail es requerido</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password"> Contraseña</label>
              <br />
              <input
                type="password"
                placeholder="  Escribe tu contraseña"
                className="cuadro_texto"
                {...register("password", { required: true })}
              />
                {errors.password && ( 
                <p className="text-warning">La clave es requerido</p>
              )}

            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Recuerdame
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn-bg">
                {" "}
                Entrar
              </button>
            </div>
            <p className="text-end mt-2">
              Registro completo
              <Link to="/" className="ms-2 link_color">
                Iniciar Sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
