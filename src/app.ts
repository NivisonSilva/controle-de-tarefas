import entrada from "./entrada.json";
console.log(entrada);

const painelDigital = {
  contador: 99,
  dataHora: "2024-08-19 10:00:00",
};

console.log(painelDigital);

// Como incrementar o contador?
painelDigital["contador"]++;
painelDigital.contador++;

// Como alterar a hora para hora atual?
const dataHora = new Date();
painelDigital.dataHora = dataHora.toISOString();
console.log(painelDigital);

// Como exibir no console de uma forma mais legível?
const objJson = JSON.stringify(painelDigital, null, 2);
console.log(objJson);

// É comum, em algumas aplicações, recebermos um valor de JSON como texto
// ao invés de objeto. Como interpretá-lo como um objeto e manipulá-lo?
const jsonString =
  '{"curso": "FAST", "modulo": "Web API", "ano": 2024, "presencial": false}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

// [Plus] Como ler um arquivo JSON em Node?

// [Plus] Como salvar um arquivo JSON em Node?
