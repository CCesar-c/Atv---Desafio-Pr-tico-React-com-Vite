import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Texto } from "./Texto.jsx";

export function Lista_filmes() {
    const [filmes, setFilmes] = useState([]);
    const obter_filmes = async () => {
        const response = await axios.get('http://localhost:3000/filmes');
        setFilmes(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        obter_filmes();
    }, []);
    return (
        <div>
            <h1>Fimes disponiveis</h1>
            <ul>
                {filmes.map((filme) => (
                    <li key={filme.id}>{filme.nome} - {filme.preco} - {filme.genero}</li>
                ))}
            </ul>
        </div>
    );
}

export function Calculadora(Valor_sinal, setResultado, setValue_nro1, setValue_nro2, setSinal, Value_resultado, Value_nro1, Value_nro2) {
    function calcular_valor() {
        switch (Valor_sinal) {
            case "+":
                setResultado(Value_nro1 + Value_nro2)
                break;
            case "-":
                setResultado(Value_nro1 - Value_nro2)
                break;
            case "*":
                setResultado(Value_nro1 * Value_nro2)
                break;
            case "/":
                setResultado(Value_nro1 / Value_nro2)
                break;
            default:
                setResultado("Sinal indefinido: " + Valor_sinal)
                break;
        }

    }
    return (
        <div id='capsule'  >
            <h1 >Calculadora </h1>
            <input placeholder='Primeiro nro da conta' type='number' maxLength={10} onChange={(e) => {
                setValue_nro1(Number(e.target.value.trim()))
            }} />
            <br />
            <input placeholder='tipo da conta' type='text' maxLength={1} onChange={(e) => {
                setSinal(e.target.value.trim())
            }} />
            <br />
            <input placeholder='Segundo numero da conta' type='number' maxLength={10} onChange={(e) => {
                setValue_nro2(Number(e.target.value.trim()))
            }} />
            <br />
            <button onClick={() => { calcular_valor() }} >Calcular o resultado</button>
            <br />
            <Texto>Resultado: {Value_resultado}</Texto>
        </div>
    )
}

export function Calcular_idade(setResultado, Value_nro1, Value_nro2, Valor_sinal, setValue_nro1, setValue_nro2, Value_resultado) {
    function calcular_idade() {
        var pergunta = String(prompt("Ja fez aniversario??"))
        if (pergunta.trim() == "sim") {
            setResultado(Value_nro2 - Value_nro1)
        } else if (pergunta.trim() == "nao") {
            setResultado((Value_nro2 - Value_nro1) - 1)
        } else {
            setResultado("Resposta indefinida fdp: " + Valor_sinal)
        }
    }
    return (
        <div id='capsule'  >
            <h1>Calculador de idade </h1>
            <input placeholder='Ano de nascimento' type='number' maxLength={10} onChange={(e) => {
                setValue_nro1(Number(e.target.value.trim()))
            }} />
            <br />
            <input placeholder='Ano atual' type='number' maxLength={10} onChange={(e) => {
                setValue_nro2(Number(e.target.value.trim()))
            }} />
            <br />
            <button onClick={() => { calcular_idade() }} >Calcular o resultado</button>
            <br />
            <Texto>Voce tem: {Value_resultado}</Texto>
        </div>
    )
}

export function Lista_Axios_user() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);

    async function buscarUsuarios() {

        setLoading(true);

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsuarios(response.data);
        } catch (error) {

            console.error("Erro!", error);

        } finally {

            setLoading(false);

        }

    }
    return (
        <div id='capsule' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
            <h1>React + Axios (Consumo de API) 20/04 </h1>
            <button onClick={() => { buscarUsuarios() }} >{loading ? "Carregando..." : "Buscar usuarios"}</button>
            {usuarios != null ? usuarios.map((user, key) => {
                return (
                    <div style={{ margin: "7px", padding: "5px", border: "1px solid black", borderRadius: "8px" }} >
                        <div key={key}>
                            <Texto>Nome: {user.name} </Texto>
                            <Texto>Email: {user.email} </Texto>
                            <Texto>Cidade: {user.address.city} </Texto>
                        </div>
                    </div>
                )
            }) : <Texto>Sem usuarios</Texto>}
        </div>
    )
}