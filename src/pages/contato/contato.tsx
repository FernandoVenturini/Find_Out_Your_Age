// CRIANDO LINK DE PAGINACAO:
import { Link } from "react-router-dom";

export function Contato() {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/sobre">SOBRE</Link>
            <Link to="/contato">CONTATO</Link>
            <Link to="/produtos">PRODUTOS</Link>
        </nav>
    );
}
