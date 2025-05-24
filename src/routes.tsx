// IMPORTANDO ROUTER PARA RODAR NO BROWSER:
import {createBrowserRouter} from 'react-router-dom';
// IMPORTANDO index.tsx(HOME) DE PAGES:
import {Home} from './pages/home/home';
// IMPORTANDO index.tsx(SOBRE) DE PAGES:
import {Sobre} from './pages/sobre/sobre';
// IMPORTANDO index.tsx(CONTATO) DE PAGES:
import {Contato} from './pages/contato/contato';
// IMPORTANDO index.tsx(PRODUTOS) DE PAGES:
import {Produtos} from './pages/produtos/produtos';

import { Layout } from './components/layouts/layout';

// CRIANDO O ROTEADOR COM AS ROTAS:
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/sobre",
            element: <Sobre />,
        },
        {
            path: "/contato",
            element: <Contato />,
        },
        {
            path: "/produtos",
            element: <Produtos />,
        },
        ],
    },
]);

export { router };