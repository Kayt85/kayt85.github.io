console.log("calc JS loaded");

const answer = document.getElementById("result");

function answerAdd() {
  answer.innerHTML = 10 + 10;
}
function answerMultiply(c, d) {
  var number = c * d;
  answer.innerHTML = number;
  // how to give letters number values

}
function answerDivide(){
  var result = 10 / 10;
  answer.innerHTML = result;
  // how to do variable result
}
