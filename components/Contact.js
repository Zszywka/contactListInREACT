// single contact
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div',{className: 'contactItem'},
        React.createElement('img', {className: 'contactImage', src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}),
        React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: "Email " + this.props.item.email}, 'Email: ' + this.props.item.email)
      )
    )
  },
});
