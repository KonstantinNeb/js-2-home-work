"use strict";

// var p = 'Чжан Сюэчэн — китайский философ и историк эпохи Цин, крупнейший представитель \'Чжэдунской школы\'. ' +
//         'В 1778 году удостоился высшей учёной степени цзиньши, преподавал в частных конфуцианских академиях. Служил ' +
//         'секретарём высокопоставленного чиновника и учёного Би Юаня, работал в комиссии по составлению продолжения ' +
//         'свода \'Цзы чжи тун цзянь\', но так и не сумел сделать официальной карьеры. Будучи конфуцианцем-рационалистом, ' +
//         'он рассматривал канон как исторический источник, поэтому отвергал неоконфуцианскую метафизику и настаивал на ' +
//         'внимании к вопросам современности. Его философские взгляды были близки янминизму, но без акцента на ' +
//         'религиозные вопросы.';
//
// var b = p.replace(/\'/g, "\"");
// console.log('b: ', b);

function validateName(name) {
  return /[а-яА-Я]+/.test(name);
}

function validatePhone(phone) {
  return /\+7\S\d\d\d\S\d\d\d\S\d\d\d\d/.test(phone);
}

function validateEmail(email) {
  return /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(email);
}

var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var inputName = document.getElementById('input-name');
  var isNameValid = validateName(inputName.value);
  if (!isNameValid) {
    inputName.classList.add('error');
  } else {
    inputName.classList.remove(['error'])
  }

  var inputPhone = document.getElementById('input-phone');
  var isPhoneValid = validatePhone(inputPhone.value);
  if (!isPhoneValid) {
    inputPhone.classList.add('error');
  } else {
    inputPhone.classList.remove(['error'])
  }

  var inputEmail = document.getElementById('input-email');
  var isEmailValid = validateEmail(inputEmail.value);
  if (!isEmailValid) {
    inputEmail.classList.add('error');
  } else {
    inputEmail.classList.remove(['error'])
  }
});