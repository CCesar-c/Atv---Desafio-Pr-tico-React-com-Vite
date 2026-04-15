import React from 'react';
import { useEffect, useState } from 'react'
import '../css/App.css';
import  Card, { Contador, ListaDeCompras } from '../components/Card.jsx'
import { Header } from '../components/Header.jsx'
function App() {
  const [Valor_class1, setClass1] = useState("tela1 enable")
  const [Valor_class2, setClass2] = useState("tela2 disable")
  const [Valor_sinal, setSinal] = useState("")
  const [Value_nro1, setValue_nro1] = useState(0)
  const [Value_nro2, setValue_nro2] = useState(0)
  const [Value_resultado, setResultado] = useState(0)
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
          setResultado(0)
        }} >Calculadora</button>
        <button onClick={() => {
          setClass1("tela1 disable")
          setClass2("tela2 enable")
          setResultado(0)
        }}  >Calculador de idade </button>
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
      </home>
      <Card nome="Ana Silva" idade={28} profissao="Desenvolvedora Front-end" foto="https://i.pravatar.cc/150?img=5" />
      <Card nome="gustavo Silva" idade={18} profissao="Desenvolvedora back-end" foto="https://i.pravatar.cc/150?img=1" />
      <Contador />

    </body>
  )
}

export default App
