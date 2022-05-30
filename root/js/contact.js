let errors = new Array();

document.getElementById("error").style.display = "none"; //verbergen errors
document.getElementById("goed").style.display = "none"; //verbergen van allert bij goed verlope registratie
document.getElementById("btn-contact").addEventListener("click", validateForm);
let naam = document.getElementById("naam").value;
let voornaam = document.getElementById("voornaam").value;
let email = document.getElementById("email").value;
let telefoon = document.getElementById("telefoon").value;
let bericht = document.getElementById("bericht").value;

function validateForm() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = "none";
    errors = [];
checkEmptyField(naam, "Het veld naam is vereist");
checkEmptyField(voornaam, "Het veld voornaam is vereist");
checkEmptyField(Email, "Het veld email is vereist");
validateEmail(Email);
//betaling

if (errors.length != 0) {
  document.getElementById("error").style.display = "block";
  document.getElementById("betaling").style.display = "none";
  document.getElementById("error").innerHTML += "<h4>Yikes,errors...</h4>";
  for (i = 0; i < errors.length; i++) {
    document.getElementById("error").innerHTML +=
      "<p>" + errors[i].toString() + ".<p>";
  }
} else if (errors == 0) {
  document.getElementById("goed").style = "block";
}
}
function validateEmail(email) {
  var regex =
    /([a-z A-Z 0-9\_]{1}[a-z A-Z 0-9\.\_\-]*)@([a-z A-Z 0-9]{1}[a-z A-Z,0-9 \.\-]*)/;
  return regex.test(email);
}

function checkEmptyField(veld, melding) {
  if (veld.length == 0) {
    errors.push(melding);
  } else return;
}
