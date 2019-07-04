const numero1 = 1;
const numero2 = 2;
let num1 = 1;
let num2 = 2;
let arreglo = [1,2,3,4,5];
let objeto = {
    att: 'hola mundo',
    att2: 'hola mundo 2'
}
console.log(arreglo, objeto);
arreglo = objeto;
console.log(arreglo);
if(true){
    const resultado = numero1 + numero2;
    let res = num1 + num2;
    console.log(`Resultado var: ${JSON.stringify(objeto)}, Resultado let: ${res}`);
}

process.argv.forEach((value, index)=>{
    console.log(`índice: ${index}, value: ${value}`);
})

for(let i=0; i< process.argv.length;  i++){
    console.log(`índice: ${i}, value: ${process.argv[i]}`);
}

let funcion = (param1, param2) => param1 + param2;

console.log(`funcion: ${funcion(6,5)}`);