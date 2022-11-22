import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {

    render () {
        return(
            <Container>
                <div>
                    <a href="https://www.linkedin.com/in/cyprien-de-fontenay-28a867220/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </Container>
        )
    }
}

export default Footer;