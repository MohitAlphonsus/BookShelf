import { ImBooks } from 'react-icons/im';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/" className="navbar__logo">
				<ImBooks className="navbar__logo--icon" />
			</NavLink>
			<ul className="navbar__links">
				<li>
					<NavLink to="/" className="navbar__link">
						Shelf
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart" className="navbar__link">
						<HiOutlineShoppingBag className="icon" />
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
