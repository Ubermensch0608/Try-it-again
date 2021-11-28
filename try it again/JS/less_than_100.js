//기입한 숫자를 컴포넌트 창에 표출
function currentNumber() {
  const getNumber = document.getElementById("textBox").value;
  document.getElementById("setNumber").innerText = getNumber;
}

// 100보다 작거나 같은 수  or  1보다 크거나 같은 수 요구
function checkNumber() {
  const getNumber = document.getElementById("textBox").value;
  const makeNumber = Number(getNumber);
  if (!Number.isInteger(makeNumber) || getNumber > 100 || getNumber < 1) {
    alert("You should put a number 'less than 100 as integers' ");
  } else {
    alert("You put " + getNumber);
  }
}
