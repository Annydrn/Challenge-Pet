import { Link } from "react-router-dom";
import "./login.css";
import videoBg from "./assets/videoBg.mp4";
import { useForm } from "react-hook-form";
import { useAuth } from "./context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors:SigninErrors} = useAuth()

  const onSubmit = handleSubmit((data) => {
   signin(data);
});

  return (
    <>
      <div className="video-fondo">
        <video src={videoBg} autoPlay loop muted />
      </div>

      <div className="login template d-flex justify-content-center align-items-center vh-100 ">
        <div className="form_container p-5 ">

        {
  SigninErrors && SigninErrors.map((error, i) => (
    <div className=" bg-danger " key={i}>
      {error}
    </div>
  ))
}
          <form onSubmit={onSubmit}>
            <h3 className="text-center mb-4 texto-titulo">¡Bienvenido!</h3>
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
                <p className="text-warning">La contraseña es requerido</p>
              )}
            </div>
           
            
            <div className="d-grid">
              <button type="submit" className="btn-bg">
                {" "}
                Entrar
              </button>
            </div>
            <p className="text-end mt-2">
              ¿No tienes una cuenta?
              <Link to="/signup" className="ms-2 link_color">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

                            
                            
export default Login;
