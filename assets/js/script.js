const button = document.querySelector(".button");
const image = document.querySelector("img");
let result = document.querySelector(".result");

function ageCalc(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

function manAge(birthYear){
  if (birthYear >= 1900 && birthYear <= 1960) {
    image.src = "assets/images/idosomasc.png"
  } else if (birthYear > 1960 && birthYear <= 1990) {
    image.src = "assets/images/adultomasc.png"
  } else if (birthYear > 1990 && birthYear <= 2010) {
    image.src = "assets/images/jovemmasc.png"
  } else if (birthYear > 2010 && birthYear <= 2023) {
    image.src = "assets/images/bebemasc.png"
  } else {
    result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
  }
}

function womanAge(birthYear){
  if (birthYear >= 1900 && birthYear <= 1960) {
    image.src = "assets/images/idosafem.png"
  } else if (birthYear > 1960 && birthYear <= 1990) {
    image.src = "assets/images/adultofem.png"
  } else if (birthYear > 1990 && birthYear <= 2010) {
    image.src = "assets/images/jovemfem.png"
  } else if (birthYear > 2010 && birthYear <= 2023) {
    image.src = "assets/images/bebefem.png"
  } else {
    result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
  }
}

function getGender(){
  if (gender[1].checked){
    return 'homem'
  } else {
    return 'mulher'
  }
}

button.addEventListener("click", (e) => {
  const container = document.querySelector(".container");
  container.style.height = "450px";
  
  const gender = document.querySelectorAll(".gender");
  const birthYear = document.querySelector("#birth-year").value;

  const phrase = `Detectamos um${gender[1].checked ? "" : "a"} ${getGender()}  com ${ageCalc(birthYear)} anos de idade.`
  result.innerHTML = phrase;

  if (gender[1].checked) {    
    manAge(birthYear)
  } else {
    womanAge(birthYear)
  }
});
