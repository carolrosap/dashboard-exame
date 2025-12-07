import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import './Dashboard.scss'

function Dashboard() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('Usuário')
  const { setUser } = useAuth()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        if (parsed?.name) {
          setUserName(parsed.name)
        }
      } catch {
        // se der erro no parse, ignora
      }
    }
  }, [])

  function handleLogout() {
    setUser(null)
    navigate('/login')
  }

  return (
    <div className="app-container dashboard-page">
      <HeaderDashboard userName={userName} />

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <nav>
            <ul>
              <li className="active">Dashboard</li>
              <li>Colaboradores</li>
              <li>Relatórios</li>
              <li>Configurações</li>
            </ul>
          </nav>
        </aside>

        <div className="dashboard-main">
          <div className="kpi-row">
            <div className="kpi-card">65<br/><small>Colaboradores</small></div>
            <div className="kpi-card">25%<br/><small>Turnover</small></div>
            <div className="kpi-card">R$ 2.500<br/><small>Média Salarial</small></div>
            <div className="kpi-card">35<br/><small>Média de Idade</small></div>
          </div>

          <div className="app-card dashboard-page__card">
            <main className="dashboard-content">
              <section className="dashboard-placeholder">
                <strong>Área do Exame:</strong> aqui você deverá criar e integrar o novo
                componente visual (por exemplo, um <code>CardInfo</code>) e exibir pelo menos 3
                cartões usando props.
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
