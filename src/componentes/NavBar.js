import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <>
        <nav id="NavBar" className="NavBar">
            <h3>ADBJJ Store</h3>
            <NavLinks />
            <CartWidget />
        </nav>
        </>
    )
}

export default NavBar