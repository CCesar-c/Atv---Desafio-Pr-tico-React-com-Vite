import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import { CartaoPerfil } from '../components/Card.jsx'
import { Contador } from '../components/Contador.jsx'
import { ListaDeCompras } from '../components/listaCompras.jsx'
import { Header } from '../components/Header.jsx'
import { Texto } from '../components/Texto.jsx'
import { Lista_filmes, Calculadora, Lista_Axios_user, Calcular_idade, Criar_pessoas } from '../components/Lista_coisas.jsx';
import { Personagens_naruto, Personagens_reais } from '../components/Lista_personages.jsx'
function App() {
  var Array_botoes = [
    { nome: "Calculadora", telaid: "tela1" },
    { nome: "Calculador de idade", telaid: "tela2" },
    { nome: "Cartão de perfil", telaid: "tela3" },
    { nome: "Lista de compras", telaid: "tela4" },
    { nome: "contador", telaid: "tela5" },
    { nome: "Tela Axios", telaid: "tela6" },
    { nome: "Atv Naruto", telaid: "tela7" },
    { nome: "Perfil", telaid: "tela8" },
    { nome: "Filmes", telaid: "tela9" }
  ]
  const [Valor_class, setClass] = useState("tela1")

  const [Valor_sinal, setSinal] = useState("")
  const [Value_nro1, setValue_nro1] = useState(0)
  const [Value_nro2, setValue_nro2] = useState(0)
  const [Value_resultado, setResultado] = useState(0)

  return (
    <>
      <Header id='Header'  >
        {Array_botoes.map((item, key) => {
          return (
            <button key={key} onClick={() => { setClass(item.telaid) }} >{item.nome}</button>
          )
        })}
      </Header>
      {/* tela 1 */}
      <div id='container'>
        {/* tela 1 */}
        {Valor_class == "tela1" ?
          Calculadora(Valor_sinal, setResultado, setValue_nro1, setValue_nro2, setSinal, Value_resultado, Value_nro1, Value_nro2)
          : null}
        {/* tela 2 */}
        {Valor_class == "tela2" ? Calcular_idade(setResultado, Value_nro1, Value_nro2, Valor_sinal, setValue_nro1, setValue_nro2, Value_resultado) : null}
        {/* tela 3 */}
        {Valor_class == "tela3" ? <div id='capsule' style={{ display: "flex", flexDirection: "column", margin: "10px" }}  >
          <h1>Tela de perfil</h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
            {
            Criar_pessoas({ objeto: [{ nome: "João", idade: 30, profissao: "Desenvolvedor" }, { nome: "Ana", idade: 28, profissao: "Desenvolvedora" }] })
            }
          </div>
        </div>
          : null}
        {/* tela 4 */}
        {Valor_class == "tela4" ? <div id='capsule' style={{ display: "flex", flexDirection: "column" }} >
          <h1>Lista de compras</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ListaDeCompras />
          </div>
        </div> : null}
        {/* { tela5} */}
        {Valor_class == "tela5" ? <div id='capsule' style={{ display: "flex", flexDirection: "column" }} >
          <h1>Tela de contador</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Contador />
          </div>
        </div> : null}
        {/*  tela 6 */}
        {Valor_class == "tela6" ?
          <Lista_Axios_user /> : null}
        {/* tela 7 */}
        {Valor_class == "tela7" ?
          <div style={{ display: "flex", flexDirection: "row" }} >
            <Personagens_naruto />
          </div> : null}
        {/* tela 8 */}
        {Valor_class == "tela8" ?
          <Personagens_reais />
          : null}
        {/* tela 9 */}
        {Valor_class == "tela9" ?
          <Lista_filmes />
          : null}

      </div>
    </>
  )
}

export default App
