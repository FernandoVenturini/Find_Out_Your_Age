interface AlunoProps {
    name: string;
    age: number;
}

export function Aluno({ name, age }: AlunoProps) {
    return (
        <>
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
        </>
    );
}
