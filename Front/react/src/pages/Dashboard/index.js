import { useEffect } from "react"
import Header from "../../components/Header"

function DashboardPage() {
  useEffect(() => {
    const logado = sessionStorage.getItem('logado')

    if (!logado) {
      alert('Você precisa estar logado para acessar essa página')
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <Header />

      <div>Bem vindo a area restrita</div>
    </>
  )
}

export default DashboardPage