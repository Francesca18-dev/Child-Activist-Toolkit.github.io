/* .js files add interaction to your website */
var factList = [
"Approximately 5 children die every day due to child abuse.",
"1 out of 3 girls and 1 out of 5 boys will be sexually abused before age 18.",
"68%  of children are abused by a family member.",
 "Abused and neglected children are 11 times more likely to engage in criminal behavior as an adult." 
];

console.log(factList[0])

var fact = document.getElementById("fact");
var myButton = document.getElementById("f1u");
var count = 0;
console.log(factList.length)

if (f1u) {
  f1u.addEventListener("click", displayFact);
}

myButton.addEventListener("click", displayFact);

function displayFact(){
fact.innerHTML = factList[count];
count++;
if (count == factList.length) {
  count = 0;
}
};
  