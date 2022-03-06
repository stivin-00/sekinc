import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links, image },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links, image])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
 <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
        <div  className='happyy'>
          {links.map((link, index) => {
            const { url, icon, label,  } = link
            return (
              
              <div className="bitch">
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
              </div>
              
            )
          })}
          </div>
              <>
           <div className="hellloo" ><iframe src={image} className="hiiy" frameborder="0" title="hirwe"></iframe></div>
           </>

        </div>
            
          
         
       
      </section>
    </aside>
  )
}

export default Submenu
