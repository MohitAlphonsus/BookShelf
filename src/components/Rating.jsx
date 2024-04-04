import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Rating.scss';

export default function Rating({ maxRating = 5, color, size, rating }) {
	const styles = {
		width: `${size}rem`,
		height: `${size}rem`,
		color,
		display: 'block',
	};

	const ratingStars = Array.from({ length: maxRating }, (_, i) => {
		return (
			<span key={i}>
				{rating >= i + 1 ? (
					<FaStar style={styles} />
				) : rating >= i + 0.1 ? (
					<FaStarHalfAlt style={styles} />
				) : (
					<FaRegStar style={styles} />
				)}
			</span>
		);
	});

	return (
		<div className="stars">
			<span>({rating})</span>
			{ratingStars}
		</div>
	);
}
