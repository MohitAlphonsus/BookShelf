import { Book } from '../components';
import { booksData } from '../../books';

import './Shelf.scss';

function Shelf() {
	return (
		<>
			<ul className="container shelf-books">
				{booksData.map(book => (
					<li key={book._id}>
						<Book book={book} />
					</li>
				))}
			</ul>
		</>
	);
}

export default Shelf;
