// create a form:
var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Write the Name',
          value: this.props.contact.firstName
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Write the Surname',
          value: this.props.contact.lastName
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Write the Email',
          value: this.props.contact.email
        }),
        React.createElement('input', {
          type: 'file',
          placeholder: 'Add photo',
          value: this.props.contact.photo
        }),
        React.createElement('button', {type: 'submit'}, 'Add new contact')
      )
    )
  },
});
