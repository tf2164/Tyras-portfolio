
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mreovblo");
  if (state.succeeded) {
      return <p>Thanks for the message! I'll get back to you shortly. </p>;
  }
  return (
    <form onSubmit={handleSubmit}>

        <h2 style={{ color: 'white'}}>Let's Talk</h2>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
         <label htmlFor="email">
        Message to Developer
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}



export default ContactForm;