import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

function Main () {
    return (
        <>
        <main id="main" className="main text-center mb-5">
            <a href="/">
             <img src="/logo.png" alt="" className="logo mb-4" />
            </a>
            <ItemListContainer greeting="¡Hola! Bienvenido..."/>
        </main>
        </>
    )
}

export default Main