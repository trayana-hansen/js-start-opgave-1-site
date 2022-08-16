// target the h1 by tag because it is only one on the page
let h1 = document.getElementsByTagName("h1");
console.log(h1);

//target the h2's by their class name
let h2 = document.getElementsByClassName("smallHeadline");
console.log(h2);

//show the content of the specific paragraph through id
let mainParagraph = document.getElementById("mainParagraph").innerHTML;
console.log(mainParagraph);

//show what the legend contains by its id
let legendMain = document.getElementById("legendMain").innerHTML;
console.log(legendMain);

//target all the labels by their mutual class name
let label = document.getElementsByClassName("label");
console.log(label);

//show the state of all the different input fields by their id
let monthOne = document.getElementById("monthOne");
console.log(monthOne.value);

let colorOne = document.getElementById("colorOne");
console.log(colorOne.value);

let radioOne = document.getElementById("radioOne");
console.log(radioOne.value);

let radioTwo = document.getElementById("radioTwo");
console.log(radioTwo.value);

let radioThree = document.getElementById("radioThree");
console.log(radioThree.value);

let rangeOne = document.getElementById("rangeOne");
console.log(rangeOne.value);

let buttonOne = document.getElementById("buttonOne");
console.log(buttonOne.value);

let reset = document.getElementById("resetOne");
console.log(reset.value);

let submit = document.getElementById("submitOne");
console.log(submit.value);

let buttonTwo = document.getElementById("buttonTwo");
console.log(buttonTwo.value);

let selectOne = document.getElementById("selectOne");
console.log(selectOne.value);

let selectTwo = document.getElementById("selectTwo");
console.log(selectTwo.value);

let selectThree = document.getElementById("selectThree");
console.log(selectThree.value);

let selectFour = document.getElementById("selectFour");
console.log(selectFour.value);

let selectFive = document.getElementById("selectFive");
console.log(selectFive.value);

let selectSix = document.getElementById("selectSix");
console.log(selectSix.value);
