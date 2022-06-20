import { useLocation } from 'react-router-dom';

import SearchContact from './Contacts/SearchContact';
import { BACKGROUND, PURPLE } from '../helpers/colors';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand d-flex align-items-center justify-content-center">
              <i className="fas fa-id-badge" style={{ color: PURPLE }} />
              &nbsp;&nbsp; وب اپلیکیشن مدیریت&nbsp;
              <span style={{ color: PURPLE }}>مخاطبین </span>
            </div>
          </div>
          {location.pathname === '/contacts' ? (
            <div className="col">
              <SearchContact />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
