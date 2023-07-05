document.addEventListener('DOMContentLoaded', () => {

const selectDrop = document.querySelector('#paises');

fetch('https://restcountries.com/v3.1/all').then(res => {
	return res.json();
}). then(data => {
	let selection = "";
	data.sort((a, b) => ('' + a.name.common).localeCompare(b.name.common))
	data.forEach(pais => {
		console.log(pais.name.common);
		selection += `<option>${pais.name.common}</option>`;
		console.log(selection);
	});
selectDrop.innerHTML = selection;
}).catch(error => {
	console.error(error);
})	

});