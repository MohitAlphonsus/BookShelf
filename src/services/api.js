const url = 'https://books-api7.p.rapidapi.com/books';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_BOOKS_API_KEY,
		'X-RapidAPI-Host': 'books-api7.p.rapidapi.com',
	},
};

async function fetchBooks() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

export { fetchBooks };
