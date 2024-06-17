import './App.css';
import logo from './img/logo.ico';
import fondo from './img/fondo.png';



function App() {
  return (

<div className='container'>
  
  <p className='textHeader'>Texto de header top</p>
    <nav className="navbar bg-body-tertiary">
      <navbar> 
      <img src={logo} height={40} width={90} alt="logo" className='logo' ></img>  
      </navbar> 
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <button variant="link" className='button' >Inicio</button>
    <button variant="link" className='button'>Sección 2</button>
    <button variant="link" className='button'>Sección 3</button>
    </div>
    </nav> 

    <div className='box'>
    <img src={fondo} fluid alt="fondo"></img>
    <p className='text1'>Texto previo al título</p>
    <p className='text2'>Título banner principal</p>
    <button className='buttonSend'>Enviar</button>
    </div>
</div>

  );
}

export default App;
