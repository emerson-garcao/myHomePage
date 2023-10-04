function toggleMode(){
  //inserir light ao clicar
  const html = document.documentElement
  html.classList.toggle("light")

  //alteração de fotos do profile
  const img = document.querySelector("#profile img")
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/Avatar-Light.png")
    img.setAttribute("Alt","Foto de Emerson Martins com camisa clara óculos escuros e fundo amarelo")
  } else {
    img.setAttribute("src", "./assets/Avatar-dark.png")
    img.setAttribute("Alt","Foto de Emerson Martins com terno e gravata azul, barba e cabelo penteado para trás e plano de fundo azul escuro.")
  }

  
}