import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Login.scss'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setUser } = useAuth()

  function handleSubmit(event) {
    event.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const fakeUser = {
        name: 'Estudante React',
        email
      }

      setUser(fakeUser)
      setLoading(false)
      navigate('/dashboard')
    }, 800)
  }

  return (
    <div className="app-container login-page">
      <div className="app-card login-page__card">
        <div className="login-page__header">
          <h1>Login</h1>
          <p>Faça login para acessar a dashboard do exame de recuperação.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
