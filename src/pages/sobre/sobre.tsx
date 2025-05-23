// CRIANDO LINK DE PAGINACAO:
import { Link } from "react-router-dom";
//import "./home.css";
export function Sobre() {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/sobre">SOBRE</Link>
            <Link to="/contato">CONTATO</Link>
            <Link to="/produtos">PRODUTOS</Link>
        </nav>
    );
}
