// import React from 'react';
// import './Add.css'

// const Add = () => {
//   return (
//     <div className='page'>
//       Add
//     </div>
//   );
// }

// export default Add;

import React, { useState } from 'react';

function Add() {
  const [contacts, setContacts] = useState([]);

  const handleClick = async () => {
    if ('contacts' in navigator) {
      try {
        const contactsData = await navigator.contacts.select(['name', 'phoneNumbers']);
        setContacts(contactsData);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log('Contacts API not supported');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Contacts</button>
      {contacts.length > 0 && (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.name.formatted} <br />
              <strong>Phone:</strong> {contact.phoneNumbers[0].value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Add;

