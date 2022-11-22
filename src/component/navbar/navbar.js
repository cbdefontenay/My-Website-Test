import {Component} from "react";
import './navbar.css';



class NavBar extends Component {

    render(){
        return(
            <nav>
                <ul className="navbar">
                    <a href="https://www.linkedin.com/in/cyprien-de-fontenay-28a867220/" target='_blank' rel="noopener noreferrer"> <li>My linkedin</li> </a>
                    <a href="https://github.com/breizhdaviken?tab=repositories" target='_blank' rel="noopener noreferrer"><li>My github</li></a>
                </ul>
            </nav>
        )
    }
}

export default NavBar; 