const myArray = [
  "verde",
  "football",
  "rojo",
  "dinosaurio",
  "abeja",
  "dormitorio",
];
let listac = bigWords("bocina", myArray);
list1 = document.getElementById("listado");
imprimali(listac);

function imprimali(array2) {
  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    list1.innerHTML += `<li id="lista">${array2[i]}</li>`;
  }
}

function bigWords(s, array1) {
  list1 = [];
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (s.length < array1[i].length) {
      list1.push(array1[i]);
    }
  }
  return list1;
}
