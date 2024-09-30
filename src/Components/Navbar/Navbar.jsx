import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'; // Import user and cart icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const NAV_ITEMS_LEFT = ['home', 'products', 'about us', 'events'];
	const NAV_ITEMS_RIGHT = ['blog', 'faq', 'profile', 'cart'];

	const ICON_MAP = {
		profile: faUser,
		cart: faCartShopping,
	};

	const navBarLeft = NAV_ITEMS_LEFT.map((item, index) => (
		<li key={index} className='nav-item'>
			<Link
				to={
					item === 'home' ? '/' : `/${item.replace(/\s+/g, '-').toLowerCase()}`
				}
				className='nav-links'
			>
				{item.toUpperCase()}
			</Link>
		</li>
	));

	const navBarRight = NAV_ITEMS_RIGHT.map((item, index) => (
		<li key={index} className='nav-item'>
			<Link
				to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
				className='nav-links'
			>
				{ICON_MAP[item] ? ( // Check if there is an icon for the item
					<FontAwesomeIcon icon={ICON_MAP[item]} /> // Use the mapped icon
				) : (
					item.toUpperCase() // Display item in uppercase if no icon exists
				)}
			</Link>
		</li>
	));

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<ul className='nav-items-left'>{navBarLeft}</ul>

				<div className='navbar-logo'>
					<Link to='/'>LUXORA</Link>
				</div>
				<ul className='nav-items-right'>{navBarRight}</ul>
			</div>
		</nav>
	);
}

export default Navbar;
