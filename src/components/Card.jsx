import React, { useState } from 'react';


export function CartaoPerfil({ nome, idade, profissao, foto, endereco, cpf, genero }) {
  return (
    <div className="cartao">
      <img className="foto" src={foto} alt={nome || 'Desconhecido'} />
      <h2 className="nome">{nome || 'Desconhecido'}</h2>
      <p className="idade">Idade: {idade || Math.floor(Math.random() * 100)} anos</p>
      <p className="profissao">Profissão: {profissao || 'Pelo visto nao sabe'}</p>
      <p className="endereco">Endereço: {endereco || 'Desconhecido'}</p>
      <p className="cpf">CPF: {cpf || Math.floor(Math.random() * 1000) + "." + Math.floor(Math.random() * 1000) + "." + Math.floor(Math.random() * 1000) + "-"  + Math.floor(Math.random() * 100)}</p>
      <p className="genero">Gênero: {genero || 'Nao sabe 🤨'}</p>
    </div>
  );
}


