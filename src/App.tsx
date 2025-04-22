import { Header } from './components/header';
import { Aluno } from './components/aluno';
import {Footer } from './components/footer';

export default function App() {
  return (
    <div>
      <Header title='Curso React + TypeScript'/>
      
      <Aluno name="Sujeito Programador" age={5} />
      <Aluno name="Fernando" age={44} />
      <Aluno name="Programador" age={44} />

      <Footer />
    </div>
  );
}

