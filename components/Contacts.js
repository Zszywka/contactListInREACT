// show list of contacts:
var Contacts = React.createClass({
  propTypes: {
//  in this array is a list of contacs from App.js
    items: React.PropTypes.array.isRequired,
  },
  render: function(){
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {item: contact, key: contact.id});

    return (
      React.createElement('ul', {className: 'contactList'}, contacts)
    );
  }
});
