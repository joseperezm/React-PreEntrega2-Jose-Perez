import ItemListContainer from "./ItemListContainer";

function Main () {
    return (
        <>
        <main id="main" className="main text-center mb-5">
            <ItemListContainer greeting="¡Hola! Bienvenido..."/>
            <img src="/logo.png" alt="" className="logo"/>
        </main>
        </>
    )
}

export default Main