{/*
import { Header } from './components/header';
import { Aluno } from './components/aluno';
import { Footer } from './components/footer';
import { useState } from 'react';

interface InfoAlunoProps {
  name: string;
  age: string;
}

interface userProps {
  name:string;
  cargo:string;
}

export default function App() {

  const [input, setInput] = useState("");
  const [age, setAge] = useState("");
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);
  const [user, setUser] = useState('visitante!');
  const [user2, setUser2] = useState<userProps>({
    name: 'Visitante',
    cargo: ''
  });

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

  function handleLogin() {
    setUser('Fernando');
  }

  function handleLogout() {
    setUser('visitante!');
  }

  function handleLogin2() {
    setUser2({
      name: 'Sujeito Programador',
      cargo: 'Programador'
    });
  };

  function handleLogout2() {
    setUser2({
      name: 'Visitante',
      cargo: ''
    })
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
      <hr />

      <h3>Bem vindo: {infoAluno?.name}</h3>
      <h3>Idade: {infoAluno?.age}</h3>
      <br />
      <hr />

      <h1>Contador com useState</h1>
      <button onClick={adicionar}>+</button> 
        {contador}
      <button onClick={diminuir}>-</button>
      <br />
      <hr />

      <Aluno name="Sujeito Programador" age={5} />
      <Aluno name="Fernando" age={44} />
      <Aluno name="Programador" age={4} />
      <br />
      <hr />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>Hello, {user}!</p>
      <br />
      <hr />

      <button onClick={handleLogin2}>Login</button>
      <button onClick={handleLogout2}>Logout</button>
      <p>Hello, {user2.name}!</p>
      <strong>{user2.cargo}</strong>

      <Footer />
    </div>
  );
}
*/}

{/*--------------------------FUEL PROJECT---------------------------------
//import { useState } from 'react';
import logoImg from './assets/img_01.jpg';
import './index.css';
import './App.css';
import { useState, FormEvent } from 'react';

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

export default function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar alcool!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br",
      {
        style: "currency",
        currency: "BRL"
      })

      return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo de fundo" />
        <h1 className="title">Qual melhor opcao?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Alcool (preco por litro)</label>
          <input
            type="number"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label htmlFor="">Petrol (preco por litro)</label>
          <input
            type="number"
            className="input"
            placeholder="6,90"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className='button' type="submit" value="Calcular" />

        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>
              {info.title}
            </h2>

            <span>Alcool {info.alcool}</span>
            <span>Petrol {info.gasolina}</span>
          </section>
        )}

      </main>
    </div>
  );
}
*/ }

{/*------------------------------LISTA DE TAREFAS_________________________*/ }
import { useState } from 'react'

export default function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    'Estudar react com TypeScript',
    'Comprar pao meio dia',
    'Estudar ingles a noite'
  ]);

  function handleRegister() {
    if (!input) {
      alert("Preencha o nome da sua tarefa!");
      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <input
        placeholder='Digite o nome da tarefa...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRegister}>Adicionar tarefa</button>
      <hr />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button>Excluir</button>
        </section>
      ))}
    </>
  )
}