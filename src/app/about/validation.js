var firstName = document.getElementById("first-name");
var sumbite = document.getElementById(`sumbit`);
var nameValidtion = document.getElementById("namevalidtion");
var lastNamevalidtion = document.getElementById("lastname");
var phonevalidtion = document.getElementById("phone");
var mailvalidtion = document.getElementById("mail");
function validate(name) {
  var regex = /^[A-Z]{1}[a-z]{3,10}\s?\S{0,}$/;
  if (regex.test(name)) {
    // firstName.classList.replace('is-invalid','is-valid')/
    nameValidtion.innerHTML = "Vaild Name";
    nameValidtion.classList.replace("text-danger", "text-success");
    return true;
  } else {
    nameValidtion.classList.add("text-danger");
    nameValidtion.innerHTML = "invaild Name";
    return false;
  }
}
function validateLast(name) {
  var regex = /^[A-Z]{1}[a-z]{3,10}\s?\S{0,}$/;
  if (regex.test(name)) {
    // firstName.classList.replace('is-invalid','is-valid')/
    lastNamevalidtion.innerHTML = "Vaild Name";
    lastNamevalidtion.classList.replace("text-danger", "text-success");
    return true;
  } else {
    lastNamevalidtion.classList.add("text-danger");
    lastNamevalidtion.innerHTML = "invaild Name";
    return false;
  }
}
function validateNumber(name) {
  let phoneRe = /^01[1250][0-9]{8}$/;
  if (phoneRe.test(name)) {
    phonevalidtion.classList.replace("text-danger", "text-success");
    phonevalidtion.innerHTML = "Vaild mail";
    return true;
  } else {
    phonevalidtion.classList.add("text-danger");
    phonevalidtion.innerHTML = `
          Phone number must be 11 No.
          `;
    return false;
  }
}
function ValidateEmail(mail) {
  let regax = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (regax.test(mail)) {
    mailvalidtion.classList.replace("text-danger", "text-success");
    mailvalidtion.innerHTML = "Vaild mail";
    return true;
  } else mailvalidtion.classList.add("text-danger");
  mailvalidtion.innerHTML = `Your Email Must Contain @ and end with .com or .org`;
  return false;
}
