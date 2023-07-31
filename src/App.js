import NavBar from "./componentes/NavBar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="¡Hola! Bienvenido..."/>
    <Main />
    <Footer/>
    </>
  );
}

export default App;