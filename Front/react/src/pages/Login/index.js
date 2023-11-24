import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import styles from "./login.module.scss";

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/login')
    const auth = await response.json()
    
    if (!auth) {
      alert('Usuário não encontrado')
      return
    }

    if (auth.email !== email || auth.password !== password) {
      alert('Usuário não encontrado')
    } else {
      alert('Usuário logado com sucesso')

      sessionStorage.setItem('logado',  true)
      sessionStorage.setItem('auth', JSON.stringify(auth))
      navigate('/')
    }
  }

  useEffect(() => {
    // verifica se usuário está logado
    const logado = sessionStorage.getItem('logado')
  
    if (logado) {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <Header />
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="form-control" placeholder="Digite seu e-mail" onChange={updateEmail} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" className="form-control" placeholder="Digite sua senha" onChange={updatePassword} />
          </div>

          <button className="btn btn-primary">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;