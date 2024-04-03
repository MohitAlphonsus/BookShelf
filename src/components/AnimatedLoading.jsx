import './AnimatedLoading.scss';

function AnimatedLoading() {
	return (
		<div className="loading-container">
			<svg viewBox="0 0 400 160">
				<text x="50%" y="50%" textAnchor="middle" className="loading-text">
					BookShelf
				</text>
			</svg>
		</div>
	);
}

export default AnimatedLoading;
