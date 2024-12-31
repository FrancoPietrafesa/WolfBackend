import axios from 'axios';
import Button from './ButtonGrad';
import { useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { animate, animate3, animate4 } from '../animation/anim';

const Contact = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/submit-form', { name, email }); // Cambié a '/api/submit-form'
      alert(response.data); // Mostrar la respuesta del backend
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <section className='h-[50vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <motion.div
          ref={ref}
          variants={animate}
          initial='initial'
          animate={isInView ? 'open' : 'initial'}
          className='flex items-center w-fit px-3 py-[6px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'
        >
          <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
            <img
              src='/images/Asterix.svg'
              height={'12px'}
              width={'12px'}
              alt='asterisco'
            />
          </div>
          <p className='text-center font-semibold text-[14px]'>
            {' '}
            JOIN THE PROGRAM
          </p>
        </motion.div>
        <motion.h2
          ref={ref2}
          variants={animate3}
          initial='initial'
          animate={isInView2 ? 'open' : 'initial'}
          className='text-[20px] text-center lg:text-[60px] text-white font-bold leading-[1.2em]'
        >
          Complete Your Application
        </motion.h2>
        <motion.div
          ref={ref3}
          variants={animate4}
          initial='initial'
          animate={isInView3 ? 'open' : 'initial'}
          className='flex flex-col gap-3 max-w-2xl w-full'
        >
          <form
            id='form'
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 text-base lg:text-xl justify-center items-center'
          >
            <div className='flex flex-col gap-3 w-full text-white'>
              <input
                type='text'
                id='name'
                name='name'
                className='framer-input rounded-full'
                placeholder='Enter Your Name'
                aria-label='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type='email'
                id='email'
                name='email'
                className='framer-input rounded-full'
                placeholder='Enter Your Email'
                aria-label='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button buttonText={'Enter the Program Today'} type='submit' />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
