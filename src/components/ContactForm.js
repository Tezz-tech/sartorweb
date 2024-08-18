import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [firstName, setFirstName] = useState('');
  // ... (other state variables)

  // ... (your existing functions)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;

    script.onload = () => {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ02yJ6YdpzwSzn8_tuf7bkFOuaboUIiuPiIatY9AM2QtmKDQ8o_4PX88GVRd8wIhDSd5kh013n7?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
        target: script,
      });

      // Hide the form after the script is loaded
      setShowForm(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {showForm ? (
        <div className="container bg-body-tertiary p-5">
          <form >
            {/* ... (your form code) */}
          </form>
          <button
            style={{ padding: "10px 20px", border: "2px solid " }}
            data-aos="zoom-in"
            type="submit"
            className="btn fw-bold sartor-talk"
          >
            Book Now
          </button>
        </div>
      ) : null}
      {/* Your footer code here */}
    </>
  );
};

export default ContactForm;
