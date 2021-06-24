/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
  */

 const createStudent = (name) => { const estudante = { name, feedback: () => 'Eita pessoa boa!' }
  return estudante;
}
const estudante = createStudent('Leandrão');

console.log(estudante.feedback());
console.log(estudante.name);

console.log(createStudent('Leandrão'));

module.exports = createStudent;
