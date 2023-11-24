import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import styles from './header.module.scss'
import { useEffect, useState } from 'react';

function Header() {
  const [logado, setLogado] = useState(false)
  const [auth, setAuth] = useState(null)

  const logout = () => {
    sessionStorage.removeItem('logado')
    sessionStorage.removeItem('auth')
    setLogado(false)
    setAuth(null)
  }

  useEffect(() => {
    // verifica se usuário está logado
    const logado = sessionStorage.getItem('logado')
    setLogado(logado)
    
    const auth = sessionStorage.getItem('auth')
    setAuth(JSON.parse(auth))
  }, [])

  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          Prontu<span>Care</span>
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          {!logado && <li><Link to={'/login'}>Login</Link></li>}
        </ul>
        {logado && auth && <h3>{auth.nome}</h3>}
        {logado && <FontAwesomeIcon icon={faRightFromBracket} style={{ cursor: 'pointer' }} onClick={logout} />}
      </nav>
    </header>
  );
};

export default Header;
