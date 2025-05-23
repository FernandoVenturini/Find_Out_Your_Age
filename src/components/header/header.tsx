import { Link } from "react-router-dom";
import '../../App.css';

export function Header() {
    return (
        <header>
            <h2>Sujeito Programador</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/produtos">Produtos</Link>
            </div>
        </header>
    );
}