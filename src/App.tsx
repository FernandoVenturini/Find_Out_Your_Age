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
{/*
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null); // useRef
  const firstRender = useRef(true);

  const [input, setInput] = useState(""); // useState
  const [tasks, setTasks] = useState<string[]>([]); // useState

  const [editTask, setEditTask] = useState({ // useState
    enabled: false,
    task: ''
  });

  useEffect(() => {
    const tarefaSalvas = localStorage.getItem("@cursoreact");

    if (tarefaSalvas) {
      setTasks(JSON.parse(tarefaSalvas));
    }

  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem("@cursoreact", JSON.stringify(tasks));

  }, [tasks]);


  const handleRegister = useCallback(() => {
    if (!input) {
      alert("Preencha o nome da sua tarefa!");
      return;
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
  }, [input, tasks]);


function handleSaveEdit() {
  const findIndexTask = tasks.findIndex(task => task === editTask.task);
  const allTasks = [...tasks];
  allTasks[findIndexTask] = input;
  setTasks(allTasks);

  setEditTask({
    enabled: false,
    task: ''
  });
  setInput('');
}

function handleDelete(item: string) {
  const removeTask = tasks.filter(task => task !== item);
  setTasks(removeTask);
}

function handleEdit(item: string) {

  inputRef.current?.focus(); //Quando clicar no input, o cursor ja fica piscando.

  setInput(item)
  setEditTask({
    enabled: true,
    task: item
  })
}

const totalTarefas = useMemo(() => {
  return tasks.length;
}, [tasks]);

return (
  <>
    <h1>Lista de Tarefas</h1>
    <input
      placeholder='Digite o nome da tarefa...'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      ref={inputRef}
    />
    <button onClick={handleRegister}>
      {editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}
    </button>

    <hr />

    <strong>Voce tem {totalTarefas}</strong>
    <br /><br />

    {tasks.map((item, index) => (
      <section key={item}>
        <span>{item}</span>
        <button onClick={() => handleEdit(item)}>Editar</button>
        <button onClick={() => handleDelete(item)}>Excluir</button>
      </section>
    ))}
  </>
)
}
*/}

{/*********************************************RENDERIZACAO CONDICIONAL********************************************
>>>>>>> 279db395cd56a1fcdd09a617a7cadae592646dfb
import { useState } from "react";
import './App.css';

function App() {
  
const [signed, setSigned] = useState(false);
const [userName, setUsername] = useState('Fernando');

  return (
    <div>
      {userName.length >= 9 && <p>User name muito grande!</p>}

      <button onClick={() => setSigned(true)}>Entrar</button>

      <br /><br />

      {signed && (
        <div>
          <h1>Bem vindo Fernando!</h1>
          <p>Usuario online!</p>
          <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}

    </div>
  );

}

export default App;
*/}


{
  /***************************PROJETO DEVFRASE***********************************
import { useState } from "react";
import './App.css';
import logoImg from './assets/logo.png';

function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivacao",
      frase: [
        "A vida é 10% o que acontece e 90% como reagimos a isso.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frase: [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      ],
    },
    {
      id: 3,
      nome: "Boa tarde",
      frase: [
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      ],
    },
    {
      id: 4,
      nome: "Boa noite",
      frase: [
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Acredite em si mesmo e todo o resto virá naturalmente.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setTextoFrase('');
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frase.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frase[numeroAleatorio]}"`);
  }

  return (
    <div className="container">
      <img src={logoImg} alt="logo" className="logo" />
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={() => handleSwitchCategory(index)}
            >
            {item.nome}
          </button>
        ))};
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>};

    </div>
  );
}

export default App;
*/}

{/********************************END - PROJETO DEVFRASE**********************************/}

  {
    /*******************************START - PROJETO IDADE**********************************
import { useState } from "react";

function App() {

  const [name, setName] = useState<string>('');
  const [currentYear] = useState<number>(2025);
  const [yearOfBirth, setYearOfBirth] = useState<number>(0);
  const [age, setAge] = useState<number>(0);

  function calcularIdade() {
    setAge(currentYear - yearOfBirth);
  }

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "10px",
        display: "flex",
        padding: 20,
        flexDirection: "column",
        background: "#1d2490",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#f00",
        }}
      >
        Find Out Your Age
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "0.5rem", color: "#fff" }}>
        Enter your name:
      </p>
      <input
        style={{
          padding: 10,
          marginBottom: "2rem",
          borderRadius: "5px",
          border: "none",
        }}
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p style={{ fontSize: "18px", marginBottom: "0.5rem", color: "#fff" }}>
        Enter the year you were born:
      </p>
      <input
        style={{
          padding: 10,
          marginBottom: "2rem",
          borderRadius: "5px",
          border: "none",
        }}
        type="number"
        placeholder="Enter your year of birth..."
        value={yearOfBirth}
        onChange={(e) => setYearOfBirth(Number(e.target.value))}
      />

      <button
        style={{
          padding: 10,
          background: "yellow",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
          fontSize: "18px",
          fontWeight: "bold",
          color: "blue",
        }}
        onClick={calcularIdade}
      >
        Find Out Age
      </button>

      {age > 0 && (
        <p
          style={{
            color: "purple",
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "30px",
            background: "#ccc",
            borderRadius: "5px",
          }}
        >
          Hello, {name}! Your age: {age} years.
        </p>
      )}
    </div>
  );
}

export default App;*/}
{
  /********************************END - PROJETO DEVFRASE**********************************/
}

{/*******************************START - REACT ROUTER DOM***********************************/}

// IMPORTANDO ROUTER
import { RouterProvider } from "react-router-dom";
// IMPORTANDO routes.tsx
import { router } from './routes';
import './App.css';
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

