'use client'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export function useScrollRevealBottom ()  {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false, 
    });
  }, []);
};

export const useScrollRevealLeft = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal-left', {
      origin: 'left',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false, 
    });
  }, []);
};

export const useScrollRevealRight = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal-right', {
      origin: 'right',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: false, 
    });
  }, []);
};
