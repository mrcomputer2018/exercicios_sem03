const nome = " marcelo";

console.log(nome); // marcelo

console.log(nome.trim()); //marcelo

console.log(nome.toUpperCase()); // MARCELO

console.log(nome.toLowerCase()); // marcelo

console.log(nome.length); // 8

console.log(nome.charAt(0)); // m

//usar o site MDN para conultas de funções de strings

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"