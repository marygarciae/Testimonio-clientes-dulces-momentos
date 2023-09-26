import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de nuestros Clientes </h1>
        <h4>  -Dulces Momentos by Mary Garcia-</h4>
        <Testimonio 
          nombre ='Familia Camargo Cardona'
          ciudad = 'Rionegro - Antioquia'
          imagen = 'familia'
          testimonio = 'Nos encanto nuestra escultura familiar, desde la experiencia de la impresion fue un plan super y ahora ver nuestras manos es unico'
          />;

        <Testimonio 
          nombre ='Familia Rodriguez Bustamante'
          ciudad = 'Bogota D.C.'
          imagen = 'pareja'
          testimonio = 'Despues de tantos años juntos, tener este hermoso regalo es un simbolo de muchos mas juntos, Trato hecho'/>
        <Testimonio 
          nombre ='Antonio'
          ciudad = 'Medellin'
          imagen = 'nino'
          testimonio = "La escultura de la mano de nuestro hijo antonio, sera un recuerdo maravilloso, para nosotros y para el cuando este grande..La mama"/>
      </div>
    </div>
  );
}

export default App;
