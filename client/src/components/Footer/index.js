import React from 'react';
import { useState } from "react";
import '../Footer/footer.css';

import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import twitter from './icons/twitter.png';

import mongo from './icons/mongo.png';
import express from './icons/express.png';
import react from './icons/react.png';
import node from './icons/node.png';
import stripe from './icons/stripe.png';

export default function Footer() {
  const [animation1, setAnimation1] = useState('');
  const [animation2, setAnimation2] = useState('');
  const [animation3, setAnimation3] = useState('');

  const [animation4, setAnimation4] = useState('');
  const [animation5, setAnimation5] = useState('');
  const [animation6, setAnimation6] = useState('');
  const [animation7, setAnimation7] = useState('');
  const [animation8, setAnimation8] = useState('');

  return (
    <footer>
      <div className='section'>
        <p>Follow us:</p>
        <div className='icons'>
          <a className={animation1} onMouseEnter={() => setAnimation1('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation1('')}
          target="_blank" href="*" rel="noreferrer"><img src={facebook} alt="Facebook logo" /></a>
          <a className={animation2} onMouseEnter={() => setAnimation2('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation2('')}
          target="_blank" href="*" rel="noreferrer"><img src={instagram} alt="Instagram logo" /></a>
          <a className={animation3} onMouseEnter={() => setAnimation3('animate__animated animate__headShake animate__repeat-1')} onMouseLeave={() => setAnimation3('')}
          target="_blank" href="*" rel="noreferrer"><img src={twitter} alt="Twitter logo" /></a>
        </div>
      </div>
      <div className='section'>
        <p>This project was created by Group 1 with:</p>
        <div className='icons'>
          <a className={animation4} onMouseEnter={() => setAnimation4('')} onMouseLeave={() => setAnimation4('')}
          target="_blank" href="https://www.mongodb.com/" rel="noreferrer"><img src={mongo} alt="MongoDB logo" /></a>
          <a className={animation5} onMouseEnter={() => setAnimation5('')} onMouseLeave={() => setAnimation5('')}
          target="_blank" href="https://expressjs.com/" rel="noreferrer"><img src={express} alt="Express.js logo" /></a>
          <a className={animation6} onMouseEnter={() => setAnimation6('')} onMouseLeave={() => setAnimation6('')}
          target="_blank" href="https://react.dev/" rel="noreferrer"><img src={react} alt="React logo" /></a>
          <a className={animation7} onMouseEnter={() => setAnimation7('')} onMouseLeave={() => setAnimation7('')}
          target="_blank" href="https://nodejs.org/en" rel="noreferrer"><img src={node} alt="Node.js logo" /></a>
          <a className={animation8} onMouseEnter={() => setAnimation8('')} onMouseLeave={() => setAnimation8('')}
          target="_blank" href="https://stripe.com/" rel="noreferrer"><img src={stripe} alt="Stripe logo" /></a>
        </div>
      </div>
    </footer>
  );
};