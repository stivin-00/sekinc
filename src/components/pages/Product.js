import React from 'react';

import Products from '../Products';
import { useGlobalContext } from '../../context';



export default function Product() {
  const { closeSubmenu } = useGlobalContext();
  return <>
    <div onMouseOver={closeSubmenu} >
      <Products />
      </div>
    </>;
}
