// list of contact details
var contacts = [
  {
    id: 1,
    firstName: 'Aleksandra',
    lastName: 'Nowak',
    email: 'ala.nowak@ex.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Piatek',
    email: 'adam.piatek@ex.com',
  },
  {
    id: 3,
    firstName: 'Tomasz',
    lastName: 'Koziol',
    email: 'tomasz.koziol@ex.com',
  }
];

// object [what should be in the form]
var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
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
