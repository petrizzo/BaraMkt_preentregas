function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Su correo está validado");
document.form1.text1.focus();
return true;
}
else
{
alert("Por favor, introduzca un formato de correo válido");
document.form1.text1.focus();
return false;
}
}