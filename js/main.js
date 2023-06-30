const url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// https://restcountries.com/v3.1/all?fields=name

let users;

fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((data) => {
        const users = data.data
        console.log(users) })
    .catch((error) => {
        console.log(error);
})