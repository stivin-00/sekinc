import React from 'react'
import Service from '../Service'
import { useGlobalContext } from '../../context';



const Services = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubmenu} >
      <Service />
    </div>
  )
}
export default Services