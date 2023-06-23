
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
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
                    <li><a href="/" onClick={()=>setIsExpended(false)}>Home</a></li>
                    <li><a href="/gallery" onClick={()=>setIsExpended(false)}>Gallery</a></li>
                    <li><a href="/blog" onClick={()=>setIsExpended(false)}>Blog</a> </li>
                    <li><a href="/About" onClick={()=>setIsExpended(false)}>About</a></li>
                </ul>
          </div> {/* contains some clickable buttons*/}
        </nav>
    </div>
  );
}

export default App;
