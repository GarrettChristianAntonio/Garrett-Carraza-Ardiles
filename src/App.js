import './App.css';
import Header from "./Componentes/Header/Header.js"
import Main from "./Componentes/Main/Main.js"
import Aside from "./Componentes/Aside/Aside.js"
import Menu from "./Componentes/Menu/Menu.js"
import Footer from "./Componentes/Footer/Footer.js"

function App() {
  return (
    <div className="App">
     <Header titulo="Trabajo practico Nº 1"></Header>
     <Menu></Menu>
     <Main integrantes={['Christian Garrett','Gabriel Ardiles','Javier Carranza']}></Main>
     <Aside></Aside>
     <Footer></Footer>
    </div>
  );
}

export default App;
