// ==================================================
//             ** OBJETOS LITERAIS **
// ==================================================

// ==================== LIVRO 1 ======================
const livro1 = {
	capa: "https://m.media-amazon.com/images/I/71LJ4k-k9hL.jpg",
	titulo: "Pequeno Príncipe",
	autor: "Antoine de Saint-Exupéry",
	preco: 16.28,
	categoria: "Infantil",
}

document.querySelector("#capa").src = livro1.capa
document.querySelector("p#titulo").textContent = livro1.titulo
document.querySelector("p#genero").textContent = livro1.categoria
document.querySelector("p#autor").textContent = livro1.autor
document.querySelector("p#preco").textContent = `R$ ${livro1.preco}`

// ==================== LIVRO 2 ======================
const livro2 = {
	capa: "https://m.media-amazon.com/images/I/81Ew3-U+sRL._AC_UF1000,1000_QL80_.jpg",
	titulo: "Quarto de Despejo",
	autor: "Carolina Maria de Jesus",
	preco: 67.75,
	categoria: "Autobiografia",
}
document.querySelector("#capa2").src = livro2.capa
document.querySelector("#titulo2").textContent = livro2.titulo
document.querySelector("#genero2").textContent = livro2.categoria
document.querySelector("#autor2").textContent = livro2.autor
document.querySelector("#preco2").textContent = `R$ ${livro2.preco}`
// ==================== LIVRO 3 ======================
const livro3 = {
	capa: "https://cdn.awsli.com.br/1304/1304678/produto/85900220/61b06e91a9.jpg",
	titulo: "1984",
	autor: "George Orwell",
	preco: 42.97,
	categoria: "Ficção",
}
document.querySelector("#capa3").src = livro3.capa
document.querySelector("#titulo3").textContent = livro3.titulo
document.querySelector("#genero3").textContent = livro3.categoria
document.querySelector("#autor3").textContent = livro3.autor
document.querySelector("#preco3").textContent = `R$ ${livro3.preco}`
// ==================== LIVRO 4 ======================
const livro4 = {
	capa: "https://m.media-amazon.com/images/I/81caWsOd1BL._AC_UF1000,1000_QL80_.jpg",
	titulo: "O Alienista",
	autor: "Machado de Assis",
	preco: 16.36,
	categoria: "Suspense",
}
document.querySelector("#capa4").src = livro4.capa
document.querySelector("#titulo4").textContent = livro4.titulo
document.querySelector("#genero4").textContent = livro4.categoria
document.querySelector("#autor4").textContent = livro4.autor
document.querySelector("#preco4").textContent = `R$ ${livro4.preco}`
// ==================== LIVRO 5 ======================
const livro5 = {
	capa: "https://m.media-amazon.com/images/I/8115Gj1cb6L._UF1000,1000_QL80_.jpg",
	titulo: "A Metamorfose",
	autor: "Franz Kafka",
	preco: 28.76,
	categoria: "Ficção",
}
document.querySelector("#capa5").src = livro5.capa
document.querySelector("#titulo5").textContent = livro5.titulo
document.querySelector("#genero5").textContent = livro5.categoria
document.querySelector("#autor5").textContent = livro5.autor
document.querySelector("#preco5").textContent = `R$ ${livro5.preco}`

// ==================================================
//                 ** CLASSES **
// ==================================================

const cadastro = document.querySelector("#cadastro")
const aparecer = document.querySelector("#aparecer")
const novoLivro = document.querySelector("#addNovoLivro")

cadastro.addEventListener("click", () => {
	aparecer.classList.toggle("hidden")
})

novoLivro.addEventListener("click", () => {
	const form = {
		capa: document.querySelector("#add-capa"),
		titulo: document.querySelector("#add-titulo"),
		genero: document.querySelector("#add-genero"),
		autor: document.querySelector("#add-autor"),
		preco: document.querySelector("#add-preco"),
		catalogo: document.querySelector("#catalogo"),
	}

	console.log(form.titulo.value)
	console.log(form.preco.value)
})
