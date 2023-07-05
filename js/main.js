document.addEventListener('DOMContentLoaded', () => {

const selectDrop = document.querySelector('#paises');

fetch('https://restcountries.com/v3.1/all').then(res => {

	return res.json();
}). then(data => {
	let output = "";
	data.forEach(pais => {
		console.log(pais.name);
		output += `<option>${pais.name}</option>`;
		console.log(output);
	});

selectDrop.innerHTML = output;

}).catch(error => {
	console.error(error);
})	

});