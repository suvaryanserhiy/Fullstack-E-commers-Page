// HeroSection.js
import './HeroSection.css';

function HeroSection() {
	return (
		<div className='hero-section'>
			{' '}
			{/* Add class here */}
			<video autoPlay loop muted>
				<source src='/videos/home_background.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default HeroSection;
