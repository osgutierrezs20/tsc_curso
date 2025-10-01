const h1 = document.querySelector('h1');
console.log(h1?.textContent);

let title : HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(title?.textContent);

const message = document.querySelector('#message') as HTMLInputElement;
console.log(message.placeholder);

console.log("Hola de nuevo");

//no es necesario subir src a un host, ya que public cuenta con lo necesario
