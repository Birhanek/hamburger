import { useState } from 'react';
import '../components/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [search,setSearch] = useState('')
    const [isExpended,setIsExpended] = useState(false)
    return (
      <div className="App">
          <nav className='navigation'>
            <div className='logo__name'>
              <img className='logo' src='/download.png' alt='logo'/>
              <h2 className='logo__title'>Arho</h2>
            </div> {/* contains logo and name of the website*/}
            <div className='searching'>
              <input type='text' className={isExpended? 'search expanded':'search'} id='search' name='search' placeholder='search sth here ...' value={search} onChange={e=>setSearch(e.target.value)}/>
            </div> {/* contains search*/}
            <FontAwesomeIcon onClick={()=>setIsExpended(!isExpended)} className='hamburger' icon={isExpended? faXmark: faBars} />
            <div className='clickable__links'>
                  <ul className={isExpended? 'menu expanded':'menu'}>
                      <li><NavLink className='links' to="/" onClick={()=>setIsExpended(false)}>Home</NavLink></li>
                      <li><NavLink className='links' to="/gallery" onClick={()=>setIsExpended(false)}>Gallery</NavLink></li>
                      <li><NavLink className='links' to="/blog" onClick={()=>setIsExpended(false)}>Blog</NavLink> </li>
                      <li><NavLink className='links' to="/About" onClick={()=>setIsExpended(false)}>About</NavLink></li>
                  </ul>
            </div> {/* contains some clickable buttons*/}
          </nav>
      </div>
    );
}

export default Navbar