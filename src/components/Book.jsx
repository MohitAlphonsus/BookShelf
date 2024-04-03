import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import './Book.scss';

function Book({ book }) {
	const { cover, title, author, book_id } = book;
	const navigate = useNavigate();

	return (
		<figure
			className="book"
			onClick={() => navigate(`/book-details/${book_id}`)}
		>
			<img src={cover} alt={title} className="book__cover" />
			<figcaption className="book__caption">
				<div className="book__main">
					<p className="book__title">{title}</p>
					<span className="book__author">
						<em>{`${author.first_name} ${author.last_name}`}</em>
					</span>
				</div>
				<div className="book__footer">
					<span className="book__price">$30</span>
					<a className="book__icon">
						<HiArrowNarrowRight />
					</a>
				</div>
			</figcaption>
		</figure>
	);
}

export default Book;
