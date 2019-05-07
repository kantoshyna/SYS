var user = localStorage.getItem('user');

if (user.brain > 0) {
    $('#statusOrgan11').css('display', 'block');
} else if (user.brain == 0) {
    $('#statusOrgan12').css('display', 'block');
} else {
    $('#statusOrgan13').css('display', 'block');
}

if (user.leftkidney > 0) {
    $('#statusOrgan21').css('display', 'block');
} else if (user.leftkidney == 0) {
    $('#statusOrgan22').css('display', 'block');
} else {
    $('#statusOrgan23').css('display', 'block');
}

if (user.rightkidney > 0) {
    $('#statusOrgan31').css('display', 'block');
} else if (user.rightkidney == 0) {
    $('#statusOrgan32').css('display', 'block');
} else {
    $('#statusOrgan33').css('display', 'block');
}

if (user.leftlung > 0) {
    $('#statusOrgan41').css('display', 'block');
} else if (user.leftlung == 0) {
    $('#statusOrgan42').css('display', 'block');
} else {
    $('#statusOrgan43').css('display', 'block');
}

if (user.rightlung > 0) {
    $('#statusOrgan51').css('display', 'block');
} else if (user.rightlung == 0) {
    $('#statusOrgan52').css('display', 'block');
} else {
    $('#statusOrgan53').css('display', 'block');
}

if (user.stomach > 0) {
    $('#statusOrgan61').css('display', 'block');
} else if (user.stomach == 0) {
    $('#statusOrgan62').css('display', 'block');
} else {
    $('#statusOrgan63').css('display', 'block');
}

if (user.liver > 0) {
    $('#statusOrgan71').css('display', 'block');
} else if (user.liver == 0) {
    $('#statusOrgan72').css('display', 'block');
} else {
    $('#statusOrgan73').css('display', 'block');
}

//================== FILLING UPPER DIV ======================

var sex, country, resus;
if (user.sex) {
    sex = "Чоловік";
} else {
    sex = "Жінка";
}
if (user.resus) {
    resus = "+";
} else {
    resus = "-";
}
$('#sex').text(user.sex);
$('#bloodgroup').text(user.bloodgroup);
$('#resus').text(user.resus);

$('#profile-name').text(user.nickname);
$('#profile-country').text(user.country);
$('#icon').attr('src', user.icon);

console.log('--executed statuses.js');