import React from 'react';
import { PRELOADER_TEXT } from '../../constants/variables';
import { PreloaderWrap, LoadingText } from './Preloader.styles';

const Preloader = ({ hideText, hidePreloader }) => (
  <PreloaderWrap $hide={hidePreloader}>
    <LoadingText $hide={hideText} className='text-large-bold'>
      {PRELOADER_TEXT}
    </LoadingText>
  </PreloaderWrap>
);

export default Preloader;
