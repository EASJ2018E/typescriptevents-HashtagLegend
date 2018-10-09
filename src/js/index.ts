var button = document.getElementById('knap')
button.addEventListener('click', addFunction)

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(){
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("World")


function addFunction(){
  console.log(greeter)
  let i = document.createElement('li')
  let inputText = (<HTMLInputElement>document.getElementById('input')).value
  let it = document.createTextNode(inputText)
  i.appendChild(it)
  i.setAttribute("id", "5")
  let l = document.getElementById('listeUsund')
  l.appendChild(i)
}

console.log(greeter)
