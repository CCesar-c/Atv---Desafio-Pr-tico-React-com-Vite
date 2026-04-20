import React from 'react';
import { useEffect, useState } from 'react'
// import axios from 'axios';
import '../css/App.css';
import Card, { Contador, ListaDeCompras } from '../components/Card.jsx'
import { Header } from '../components/Header.jsx'
function App() {
  const [Valor_class1, setClass1] = useState("tela1 enable")
  const [Valor_class2, setClass2] = useState("tela2 disable")
  const [Valor_class3, setClass3] = useState("tela3 disable")
  const [Valor_class4, setClass4] = useState("tela4 disable")
  const [Valor_sinal, setSinal] = useState("")
  const [Value_nro1, setValue_nro1] = useState(0)
  const [Value_nro2, setValue_nro2] = useState(0)
  const [Value_resultado, setResultado] = useState(0)

  // useEffect(() => {
  //   axios.get("[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao buscar itens:', error);
  //     });
  // }, []);
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
    <body>
      <Header id='Header'  >
        <button onClick={() => {
          setClass1("tela1 enable")
          setClass2("tela2 disable")
          setClass3("tela3 disable")
          setClass4("tela4 disable")
          setResultado(0)
        }} >Calculadora</button>
        <button onClick={() => {
          setClass1("tela1 disable")
          setClass2("tela2 enable")
          setClass3("tela3 disable")
          setClass4("tela4 disable")
          setResultado(0)
        }}  >Calculador de idade </button>
        <button onClick={() => {
          setClass1("tela1 disable")
          setClass2("tela2 disable")
          setClass3("tela3 enable")
          setClass4("tela4 disable")
          setResultado(0)
        }} >Lista de compras</button>
        <button onClick={() => {
          setClass1("tela1 disable")
          setClass2("tela2 disable")
          setClass3("tela3 disable")
          setClass4("tela4 enable")
          setResultado(0)
        }} >Tela de perfil</button>
      </Header>
      {/* tela 1 */}
      <home>
        <div id='capsule' className={Valor_class1} >
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
          <text>Resultado: {Value_resultado}</text>
        </div>
        {/* tela 2 */}
        <div id='capsule' className={Valor_class2} >
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
          <text>Voce tem: {Value_resultado}</text>
        </div>
        {/* tela 3 */}
        <div id='capsule' className={Valor_class3} >
          <h1>Tela de perfil</h1>
          <Card nome="Ana Silva" idade={28} profissao="Desenvolvedora Front-end" foto="https://i.pravatar.cc/150?img=5" />
          <br />
          <Card nome="gustavo Silva" idade={18} profissao="Desenvolvedora back-end" foto="https://i.pravatar.cc/150?img=1" />
        </div>
        {/* tela 4 */}
        <div id='capsule' className={Valor_class4} >
          <h1>Lista de compras</h1>
          <ListaDeCompras />
          <Contador />
        </div>
      </home>
    </body>
  )
}

export default App
