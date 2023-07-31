// Las imágenes se pueden agregar de manera tradicional, pero usando como root la carpeta public.
// O se pueden agregar importándolas de la carpeta src.

function Main () {
    return (
        <>
        <main id="main" className="main text-center mb-5">
            <img src="/logo.png" alt="" className="logo"/>
        </main>
        </>
    )
}

export default Main