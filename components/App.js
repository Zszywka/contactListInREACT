// list of contact details
var contacts = [
  {
    id: 1,
    firstName: 'Aleksandra',
    lastName: 'Nowak',
    email: 'ala.nowak@ex.com',
    photo: './photos/woman.jpeg',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Piatek',
    email: 'adam.piatek@ex.com',
    photo: './photos/man1.jpeg',
  },
  {
    id: 3,
    firstName: 'Tomasz',
    lastName: 'Koziol',
    email: 'tomasz.koziol@ex.com',
    photo: './photos/man2.jpeg',
  }
];

// object [what should be in the form]
var contactForm = {
  firstName: '',
  lastName: '',
  email: '',
  photo: '',
};

// // object all App
var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {}),
      )
    );
  }
});
