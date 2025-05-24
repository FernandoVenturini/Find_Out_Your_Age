import { Link } from "react-router-dom";
import '../header/header.css';

export function Header() {
    return (
        <header>
            <h2>Sujeito Programador</h2>

            <div>
            <Link className="link_menu" to="/">
                Home
            </Link>
            <Link className="link_menu" to="/sobre">
                Sobre
            </Link>
            <Link className="link_menu" to="/contato">
                Contato
            </Link>
            <Link className="link_menu" to="/produtos">
                Produtos
            </Link>
            </div>
        </header>
    );
}