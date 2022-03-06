import { FaCreditCard, FaBook } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import React from 'react';
// import pxs1 from "./images/img-1.jpg"
// import pxs5 from "./images/img-2.jpg"
const sublinks = [
  {
    page: 'service',
    links: [
      { label: 'E-comerce', icon: <FaCreditCard />, url: '/services' },
      { label: 'Portfolio', icon: <FaCreditCard />, url: '/services' },
      { label: 'Mobile-Apps', icon: <FaCreditCard />, url: '/services' },
    
    ],
    image:
      'https://giphy.com/embed/3o6ZtpxSZbQRRnwCKQ',
  },
  {
    page: 'team',
    links: [
      { label: 'Stivin', icon: <GoPerson />, url: '/developers' },
      { label: 'Kamal', icon: <GoPerson />, url: '/developers' },
      { label: 'Jide', icon: <GoPerson />, url: '/developers' },
      { label: 'Ade', icon: <GoPerson />, url: '/developers' },
      
    ],
    image:
      'https://giphy.com/embed/t5ZSgNIg1k5sEWXcL0',
  },
  {
    page: 'projects',
    links: [
      { label: 'Autinos', icon: <FaBook />, url: '/projects' },
      { label: 'Divante-Fx', icon: <FaBook />, url: '/projects' },
      { label: 'De-cool', icon: <FaBook />, url: '/projects' },
      { label: 'Tour-Naija', icon: <FaBook />, url: '/projects' },
      { label: 'E-shop', icon: <FaBook />, url: '/projects' },
      { label: 'Eflix', icon: <FaBook />, url: '/projects' },
      
    ],
    image:
    'https://giphy.com/embed/l0IpWh9L1ULADQJlC',
  },
];

export default sublinks;
