const livrosEncontrados = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        imagem: 'https://m.media-amazon.com/images/I/61x1ZHomWUL._SY522_.jpg',
        disponivel: true
    },
    {
        id: 2, 
        titulo: "Verity",
        autor: "Colleen Hoover",
        imagem: 'https://m.media-amazon.com/images/I/91SDZ2eUj+L._SY522_.jpg',
        disponivel: false
    },
    {
        id: 3,
        titulo: "A Empregada",
        autor: "Freida McFadden",
        imagem: 'https://m.media-amazon.com/images/I/81BdpMhm3iL._SY522_.jpg',
        disponivel: true
    },
    {
        id: 4,
        titulo: "A revolução dos bichos",
        autor: "George Orwell",
        imagem: 'https://m.media-amazon.com/images/I/513ByDjZhdL._SY445_SX342_ML2_.jpg',
        disponivel: true
    },
];

const resultadosBusca = document.getElementById("resultadosBusca");

function exibirLivros(livros){
    livros.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card-livro");

        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = `Autor: ${livro.autor}`;

        const status = document.createElement("p");
        status.classList.add("status");

        if(livro.disponivel){
            status.textContent = "Disponível";
            status.classList.add("disponivel");
        }else{
            status.textContent = "Indisponível";
            status.classList.add("indisponivel");
        }

        const botao = document.createElement ("button");
        botao.textContent = "Reservar";
        botao.setAttribute("data-id", livro.id);

        if(!livro.disponivel){
            botao.disabled = true;
        }

        botao.addEventListener("click", () => {
            botao.textContent = "Reservado!";
            botao.disabled = true;

            status.textContent = "Indisponível";
            status.classList.remove("disponivel");
            
            status.classList.add("indisponivel");

            console.log(`Livro reservado: ${livro.titulo}`);
        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        resultadosBusca.appendChild(card);

    },);
}

exibirLivros(livrosEncontrados);