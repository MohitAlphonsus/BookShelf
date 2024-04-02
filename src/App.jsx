import { useEffect } from 'react';
import { booksData } from '../books';

function App() {
	useEffect(function () {
		{
			booksData.map(book => console.log(book));
		}
	}, []);
	return <div>App</div>;
}

export default App;
