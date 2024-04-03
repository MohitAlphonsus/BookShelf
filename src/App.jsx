import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AnimatedLoading } from './components';
import { Shelf, BookDetails } from './pages';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<>
			{loading && <AnimatedLoading loading={loading} />}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Shelf />} />
					<Route path="/book-details/:book_id" element={<BookDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
