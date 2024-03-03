import { NavLink } from 'react-router-dom';
import { NavbarData } from './Data';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {NavbarData.map(({ label, value, id }) => (
          <NavLink key={id} to={value}>
            {label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
