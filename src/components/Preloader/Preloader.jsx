import React from 'react';
import './Preloader.css';
import { PRELOADER_TEXT } from '../../constants/variables';

const Preloader = ({ hideText, hidePreloader }) => (
  <div className={`preloader${hidePreloader ? ' preloader--hide' : ''}`}>
    <h5 className={`loading-text text-large-bold${hideText ? ' loading-text--hide' : ''}`}>{PRELOADER_TEXT}</h5>
  </div>
);

export default Preloader;
