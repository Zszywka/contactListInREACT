// show list of contacts:
var Contacts = React.createClass({
  propTypes: {
//  in this array is a list of contacs from App.js
    items: React.PropTypes.array.isRequired,
  },
  // mapping the contact table -> changing the contacts on React elements
  render: function(){
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {item: contact, key: contact.id});
    })
  // create list <ul> and insert React elements created on line 10
    return (
      React.createElement('ul', {className: 'contactList'}, contacts)
    );
  }
});
