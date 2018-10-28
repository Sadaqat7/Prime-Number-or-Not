function primeNum() {
    let userInp = parseInt(document.querySelector('input').value)
    let i;
    for ( i = 2; i < userInp; i++) {

        if (userInp % i === 0) {
            break;
        }
    }
    if (i === userInp) {
        alert("Prime Number");
    }
    else {
        alert("Not Prime Number")
    }
}
function getFocus() {           
  document.querySelector("input").focus();
}
function mySubmitFunction() {
	return false;
}
