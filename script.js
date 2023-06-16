let openModalExperiencias = document.querySelector(".links .link-experiencia .botao-experiencias")

let overLayExperiencias = document.querySelector(".overlay-modal-experiencias")

let closeModalExperiencias = document.querySelector(
  ".overlay-modal-experiencias .modal .modal-title .fechar-modal"
)

openModalExperiencias.addEventListener("click", function () {
  overLayExperiencias.classList.add("active")
})

closeModalExperiencias.addEventListener("click", function () {
  overLayExperiencias.classList.remove("active")
})

let openModalFormacoes = document.querySelector(
  ".links .link-formacao .botao-formacoes"
)

let overLayFormacoes = document.querySelector(".overlay-modal-formacoes")

let closeModalFormacoes = document.querySelector(
  ".overlay-modal-formacoes .modal .modal-title .fechar-modal"
)

openModalFormacoes.addEventListener("click", function () {
  overLayFormacoes.classList.add("active")
})

closeModalFormacoes.addEventListener("click", function () {
  overLayFormacoes.classList.remove("active")
})

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Aglailson2.jpeg")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Aglailson2.jpeg")
  }
}
