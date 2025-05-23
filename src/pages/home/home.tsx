// CRIANDO LINK DE PAGINACAO:
import { Link } from "react-router-dom";

import { Header } from "../../components/header/header";

export function Home() {
    return (
      <div>
        <Header/>

        <h1>Home</h1>
        <span>Primeira pagina com navegacao</span>
        <br />
        
        <Link to="/sobre">SOBRE</Link>
        <Link to="/sobre">CONTATO</Link>
        <Link to="/sobre">PRODUTOS</Link>
      </div>
    );
}