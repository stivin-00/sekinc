
import React from 'react'
import Contacts from "../Contacts"
import { useGlobalContext } from '../../context';



const SignUp = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
<div onMouseOver={closeSubmenu}>
    <Contacts />
    </div>
    </>
  )
}

export default SignUp

