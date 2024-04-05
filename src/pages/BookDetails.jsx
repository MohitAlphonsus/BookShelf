import { useParams } from 'react-router-dom';
import { Rating, AddToCart } from '../components';
import { booksData } from '../../books.js';
import './BookDetails.scss';

function BookDetails() {
	const { book_id } = useParams();
	const { author, cover, genres, plot, rating, reviews, title } =
		booksData.filter(book => book.book_id == book_id)[0];

	const styles = {
		backgroundImage: `url(${cover})`,
	};

	return (
		<div className="container">
			<div className="details">
				<div className="details__cover" style={styles}>
					&nbsp;
				</div>
				<div className="details__right">
					<h2 className="heading-tertiary">{title}</h2>
					<span className="details__author">
						&mdash; {` ${author.first_name} ${author.last_name}`}
					</span>
					<Rating maxRating={5} color="#FFC300" size={2} rating={rating} />
					<p className="details__plot">{plot}</p>
					<div className="details__genres">
						{genres.map(genre => (
							<span key={genre}>{genre}</span>
						))}
					</div>
					<AddToCart />
				</div>
			</div>
		</div>
	);
}

export default BookDetails;
