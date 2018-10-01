var button = document.getElementById('knap')
button.addEventListener('click', addFunction)

function addFunction(){
  let i = document.createElement('li')
  let inputText = (<HTMLInputElement>document.getElementById('input')).value
  let it = document.createTextNode(inputText)
  i.appendChild(it)
  i.setAttribute("id", "5")
  let l = document.getElementById('listeUsund')
  l.appendChild(i)
}
