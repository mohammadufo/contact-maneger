import { Link } from 'react-router-dom';

import Contact from './Contact';
import Spinner from '../Spinner';

import { PINK, CURRENTLINE, ORANGE } from '../../helpers/colors';

import { useContext } from 'react';
import { ContactContext } from '../../context/contactContext';

const Contacts = () => {
  const { contacts, loading, deleteContact, filteredContacts } =
    useContext(ContactContext);

  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link
                  to="add"
                  className="btn mx-2"
                  style={{ backgroundColor: PINK }}
                >
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle m-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <Contact
                  deleteContact={() => deleteContact(c.id, c.fullname)}
                  key={c.id}
                  contact={c}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                </p>
                <img
                  src={require('../../assets/no-found.gif')}
                  alt="پیدا نشد"
                  className="w-25"
                />
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Contacts;
