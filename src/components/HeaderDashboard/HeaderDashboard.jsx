import './HeaderDashboard.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function HeaderDashboard({ userName = 'Usuário' }) {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    setUser(null)
    navigate('/login')
  }

  return (
    <header className="header-dashboard">
      <div className="header-dashboard__inner">
        <div className="header-dashboard__left">
          <div className="header-dashboard__meta">
            <h1 className="header-dashboard__title">Olá, {userName}</h1>
            <p className="header-dashboard__subtitle">
              Bem-vindo(a) de volta! Use este painel para praticar os conceitos de React da disciplina.
            </p>
          </div>
        </div>

        <div className="header-dashboard__actions">
            <button
              type="button"
              className="btn-secondary header-dashboard__logout-btn"
              onClick={handleLogout}
            >
              Sair
            </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderDashboard
