// single contact
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('div',{className: 'contactItem'},
        // React.createElement('img', {className: 'contactImage', src: './photos/woman.jpeg'}),
        React.createElement('img', {className: 'contactImage', src: this.props.item.photo}),
        React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: "Email " + this.props.item.email}, 'Email: ' + this.props.item.email)
      )
    )
  },
});
