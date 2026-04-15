import React, { useState } from 'react';
import '../css/App.css';

export function ListaDeCompras() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      const novoItem = {
        id: Date.now(),
        nome: novoItem,
        comprado: false,
        quantidade: 1,
      };
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  const marcarComprado = (id) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const removerItem = (id) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  const limparComprados = () => {
    setItens(itens.filter((item) => !item.comprado));
  };

  const totalItens = itens.length;
  const totalComprados = itens.filter((item) => item.comprado).length;
  const totalQuantidade = itens.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.comprado}
                  onChange={() => marcarComprado(item.id)}
                />
                {item.nome} - Quantidade: {item.quantidade}
              </label>
              <button onClick={() => removerItem(item.id)}>🗑️</button>
              <style jsx>{`
                input:checked + button {
                  text-decoration: line-through;
                }
              `}</style>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={limparComprados}>Limpar Comprados</button>
      </div>
      <div>
        <p>Total de itens: {totalItens}</p>
        <p>Total comprados: {totalComprados}</p>
        <p>Total de quantidade: {totalQuantidade}</p>
      </div>
    </div>
  );
}

function CartaoPerfil({ nome, idade, profissao, foto }) {
  return (
    <div className="cartao">
      <img className="foto" src={foto} alt={nome} />
      <h2 className="nome">{nome}</h2>
      <p className="idade">{idade} anos</p>
      <p className="profissao">{profissao}</p>
    </div>
  );
}
export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const incrementar5 = () => {
    setContador(contador + 5);
  };

  const resetar = () => {
    setContador(0);
  };

  const mensagem = () => {
    if (contador === 0) {
      return 'Comece a contar!';
    } else if (contador > 0 && contador < 10) {
      return 'Continue assim!';
    } else if (contador >= 10) {
      return 'Você está indo muito bem! 🎉';
    } else {
      return 'Ops, valor negativo!';
    }
  };

  const cor = () => {
    if (contador > 0) {
      return 'green';
    } else if (contador < 0) {
      return 'red';
    } else {
      return 'gray';
    }
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <p>{mensagem()}</p>
      <button onClick={incrementar}>Incrementar (+1)</button>
      <button onClick={decrementar}>Decrementar (-1)</button>
      <button onClick={incrementar5}>Incrementar +5</button>
      <button onClick={resetar}>Resetar</button>
      <h1 style={{ color: cor() }}>{contador}</h1>
    </div>
  );
}


export default CartaoPerfil