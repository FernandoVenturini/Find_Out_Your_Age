import { Header } from './components/header';
import { Aluno } from './components/aluno';
import { Footer } from './components/footer';
import { useState } from 'react';

interface InfoAlunoProps {
  name: string;
  age: string;
}

export default function App() {

  const [input, setInput] = useState("");
  const [age, setAge] = useState("");
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      name: input,
      age: age,
    });
  };

  function adicionar() {
    setContador(valorAtual => valorAtual + 1);
  };

  function diminuir() {
    if(contador === 0) {
      return; 
    }
    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div>
      <Header title="Curso React + TypeScript" />
      <h1>Conhecendo useState</h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter your age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <br />
      <br />
      <hr />
      <h3>Bem vindo: {infoAluno?.name}</h3>
      <h3>Idade: {infoAluno?.age}</h3>
      <br />
      <hr />
      <h1>Contador com useState</h1>
      <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
      <br />
      <hr />
      <Aluno name="Sujeito Programador" age={5} />
      <Aluno name="Fernando" age={44} />
      <Aluno name="Programador" age={4} />
      <br />
      <hr />
      <Footer />
    </div>
  );
}

