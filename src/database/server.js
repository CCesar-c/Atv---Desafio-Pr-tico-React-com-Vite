const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let filmes = [
    { id: 0, nome: 'Vingadores', preco: 1, genero: 'Ação' },
    { id: 1, nome: 'Vingadores 2', preco: 20, genero: 'Ação' },
    { id: 2, nome: 'Vingadores 3', preco: 60, genero: 'Ação' },
]

let produtos = [
    { id: 0, nome: 'Notebook', preco: 10000, categoria: 'Eletrônicos' },
    { id: 1, nome: 'Mouse', preco: 500, categoria: 'Perifericos' },
    { id: 2, nome: 'Teclado', preco: 70, categoria: 'Perifericos' },
    { id: 3, nome: 'Monitor', preco: 500, categoria: 'Eletrônicos' }
];

app.get('/filmes', (req, res) => {
    res.json(filmes);
});

app.get('/filmes/:id', (req, res) => {
    const id = req.params.id; // ou const { id } = req.params
    if (id != null) {
        res.json(filmes[id]);
    }
    res.json(filmes);

})
app.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    if (id != null) {
        res.json(produtos[id]);
    }
    res.json(produtos);

})
app.post('/filmes', (req, res) => {
    const { nome, preco, categoria } = req.body;
    preco = Number(preco);
    filmes.push({
        id: filmes.length,
        nome,
        preco,
        categoria
    });
    res.json(filmes);
})

app.delete('/filmes/:id', (req, res) => {
    const { id } = req.params;
    filmes = filmes.find((filme) => filme.id != id);
    res.json(filmes);
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});