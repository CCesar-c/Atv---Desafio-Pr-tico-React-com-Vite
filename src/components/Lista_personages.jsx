import { useEffect, useState } from 'react'
import React from 'react'
import { Rodape } from './rodape';
import { CartaoPerfil } from './Card';
import { Texto } from './Texto';
export function Personagens_naruto() {
    const [ninjas, setNinjas] = useState([
        { id: 1, nome: 'Naruto Uzumaki', rank: 'Genin', aldeianatal: 'Konoha', justus: "Rasengan", foto: "https://myanimelist.net/images/characters/2/284121.jpg" },
        { id: 2, nome: 'Sasuke Uchiha', rank: 'Genin', aldeianatal: 'Konoha', justus: "Chidori", foto: "https://myanimelist.net/images/characters/9/131317.jpg" },
        { id: 3, nome: 'Sakura Haruno', rank: 'Chunin', aldeianatal: 'Konoha', justus: "Healing Jutsu", foto: "https://myanimelist.net/images/characters/9/69275.jpg" },
        { id: 4, nome: 'Kakashi Hatake', rank: 'Jonin', aldeianatal: 'Konoha', justus: "Copy Ninja", foto: "https://myanimelist.net/images/characters/7/284129.jpg" },
        { id: 5, nome: 'Rock Lee', rank: 'Genin', aldeianatal: 'Konoha', justus: "Yamaki Jutsu", foto: "https://myanimelist.net/images/characters/13/433353.jpg" },
    ])
    return (
        <div style={{ display: "flex", flexDirection: "column" }} >
            <h1>Naruto a.t.v 22/04</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }} >
                {ninjas.length > 0 ? ninjas.map((ninja) => {
                    return (
                        <div key={ninja.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", padding: 10, borderRadius: 5 }}>
                            <img src={ninja.foto} alt={ninja.nome} style={{ width: 100, height: 100, borderRadius: 50 }} />
                            <h2>{ninja.nome}</h2>
                            <p>Rank: {ninja.rank}</p>
                            <p>Aldeia Natal: [{ninja.aldeianatal}]</p>
                            <p>Jutsus: [{ninja.justus}]</p>
                            
                        </div>
                    )
                }) : <p>Lista vazia</p>}
            </div>
            <Rodape />
        </div>
    );
}

export function Personagens_reais() {
    {/* https://api.jikan.moe/v4/characters/{id} */ }
    const Pessoas = [

        { nome: "Cesar", profissao: "Desenvolvedor", foto: "https://myanimelist.net/images/characters/12/619337.jpg" },
        { nome: "Gustavo", profissao: "Desenvolvedor", foto: "https://myanimelist.net/images/characters/16/563864.jpg" }
    ]
    return (
        <div style={{ flexDirection: "column", display: "flex" }} >
            <Texto>Pessoas aleatorias</Texto>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }} >
                {Pessoas.map((pessoa, key) => {
                    return (
                        <CartaoPerfil nome={pessoa.nome} genero={"masculino"} profissao={pessoa.profissao} foto={pessoa.foto} />
                    )
                })}
            </div>
        </div>
    )
}
