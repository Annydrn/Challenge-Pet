import DarkVariantExample from "./Carrusel-inicio";
import "./home.css"

const Home = () => {
  return (
    
     <div className="contenedor_presentacion">
      <DarkVariantExample />
      <br />
     
      <p className="texto_presentacion px-5 py-3 text-center text-ligth"> 
        Estamos comprometidos con brindar los mejores
        servicios para satisfacer todas las necesidades de tus queridas
        mascotas. Desde cuidados personalizados hasta alimentación balanceada,
        paseos llenos de diversión y una higiene impecable, nuestra pasión es
        asegurarnos de que tus amigos de cuatro patas reciban el amor y atención
        que merecen. Somos un equipo de amantes de los animales, dedicados a
        proporcionar un entorno seguro y enriquecedor para tus mascotas, donde
        cada caricia y ladrido se traduce en una experiencia memorable. 
      </p>
<br />
      </div>

    
  );
};

export default Home;
