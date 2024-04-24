import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Alert } from 'flowbite-react';
import FormField from '../components/FormField';
import validator from 'validator';
import logo from '../assets/LogoMarArt.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
    hiddenField1: '', // Valor predeterminado para el campo oculto 1
    hiddenField2: ''  // Valor predeterminado para el campo oculto 2
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleHiddenFieldChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formErrors = {};
    if (!validator.isEmail(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (!validator.isLength(formData.name, { min: 1, max: 80 })) {
      formErrors.name = 'Name is required and must be less than 80 characters';
    }
    if (!validator.isLength(formData.subject, { min: 1, max: 120 })) {
      formErrors.subject = 'Subject is required and must be less than 120 characters';
    }
    // Validation mesasge field
    if (!formData.message) {
      formErrors.message = 'Message is required';
    } else if (formData.message.length > 400) {
      formErrors.message = 'Message must be less than 400 characters';
    }

    //validation hidden fields
    const hiddenField1 = formData.hiddenField1.trim();
    const hiddenField2 = formData.hiddenField2.trim();
    if (hiddenField1 || hiddenField2) {
      setErrorMessage('No se permite el envío de campos ocultos');
      return;
    }

    // validation form
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // send form

    setShowModal(true);
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
          <img src={logo} alt="Logo de Mar" className='w-21 h-21' style={{ display: 'inline', verticalAlign: 'middle' }} />
          </Link>
          <p className='text-sm mt-5'>
          Do you have any doubts or questions?. Contact me.
          </p>

        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <FormField
              id="email"
              label="Your email"
              type="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormField
              id="name"
              label="Your name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FormField
              id="subject"
              label="Subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <FormField
              id="message"
              label="Message"
              type="textarea"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            {/* Campos ocultos */}
              <input type="hidden" id="hiddenField1" name="hiddenField1" value={formData.hiddenField1} onChange={handleHiddenFieldChange} />
              <input type="hidden" id="hiddenField2" name="hiddenField2" value={formData.hiddenField2} onChange={handleHiddenFieldChange} />
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </form>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    {/* Modal */}
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Thank you for contacting us!!</p>
            <p>We'll get back to you in a few strokes.</p>
            <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none block mx-auto">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
