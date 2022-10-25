import { Overlay, Container, Footer } from "./style";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import Button from '../Button';

export default function Modal ({ danger }) {

    return ReactDOM.createPortal(
    <Overlay>
        <Container danger={danger}>
            <h1>Título do Modal</h1>
            <p>Corpo do Modal</p>

            <Footer>
                <button className="cancel-button" type="button">Cancelar</button>
                <Button danger={danger} type="button">Deletar</Button>
            </Footer>

        </Container>
    </Overlay>,
    document.getElementById('modal-root')
    )

}

Modal.PropTypes = {
    danger: PropTypes.bool,
}

Modal.defaultProps = {
    danger: false,
}
