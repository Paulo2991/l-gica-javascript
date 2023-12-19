let numero = "Apple";
console.log(numero == "Apple");
console.log(numero === "Apple");
console.log(numero !== "Apple");
// = atribuição
// == é para comparar o valor
// === compara o valor e o formato
// !== é diferente
let cpfBloqueado = "123.456.222-45";
let cpfUsuario = "222.111.456.-33";
let ehCPFBloqueado = cpfUsuario === cpfBloqueado;
console.log("O usuário pode embarcar ? " + ehCPFBloqueado);