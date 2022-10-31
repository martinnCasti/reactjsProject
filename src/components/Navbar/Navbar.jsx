import "./navbar.css"
import CartWidget from "./CartWidget";

function Navbar(){

    return(
        <navbar className="container">
            <div className="containerLogo">
            <ul>
                <li><a href="/">Perrunos y Felinos</a></li>
            </ul>
            </div>
            <div className="containerMenu"> 
            <ul>
                <li><a href="/">Perros</a></li>
                <li><a href="/">Gatos</a></li>
                <li><a href="/">Contacto</a></li>
                <li><CartWidget/></li>
            </ul>
            </div>

            
            
        </navbar>
    );

}

export default Navbar;