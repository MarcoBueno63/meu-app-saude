import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../services/userService';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    tipoUsuario: 'usuario', // 'usuario' ou 'admin'
    nome: '',
    confirmeSenha: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' ou 'error'

  // Usuários predefinidos para demonstração
  const usuariosPredefinidos = {
    'marco.bueno.cmkt@gmail.com': {
      senha: '123456',
      tipo: 'admin',
      nome: 'Marco Bueno',
      permissoes: ['admin', 'usuario', 'medico', 'cadastros', 'relatorios', 'estatisticas', 'todos']
    },
    'admin@healthsystem.com': {
      senha: 'admin123',
      tipo: 'admin',
      nome: 'Administrador',
      permissoes: ['admin', 'usuario', 'cadastros', 'relatorios', 'estatisticas']
    },
    'usuario@healthsystem.com': {
      senha: 'user123',
      tipo: 'usuario',
      nome: 'Usuário Comum',
      permissoes: ['usuario', 'anamnese', 'exames', 'consultas']
    },
    'medico@healthsystem.com': {
      senha: 'medico123',
      tipo: 'medico',
      nome: 'Dr. Médico',
      permissoes: ['medico', 'usuario', 'consultas', 'pacientes']
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    try {
      if (isRegistering) {
        // Validação do cadastro
        if (formData.senha !== formData.confirmeSenha) {
          setMessage('As senhas não coincidem!');
          setMessageType('error');
          setIsLoading(false);
          return;
        }
        
        if (formData.senha.length < 6) {
          setMessage('A senha deve ter pelo menos 6 caracteres!');
          setMessageType('error');
          setIsLoading(false);
          return;
        }
        
        // Registrar novo usuário
        const resultado = UserService.registrarUsuario({
          email: formData.email,
          senha: formData.senha,
          nome: formData.nome,
          tipo: formData.tipoUsuario,
          permissoes: getPermissoesPorTipo(formData.tipoUsuario)
        });
        
        if (resultado.sucesso) {
          setMessage('Usuário cadastrado com sucesso! Faça login agora.');
          setMessageType('success');
          setIsRegistering(false);
          setFormData({
            email: formData.email,
            senha: '',
            tipoUsuario: 'usuario',
            nome: '',
            confirmeSenha: ''
          });
        } else {
          setMessage(resultado.mensagem);
          setMessageType('error');
        }
        setIsLoading(false);
        return;
      }
      
      // Tentativa de login com usuários registrados
      const resultadoLogin = UserService.login(formData.email, formData.senha);
      
      if (resultadoLogin.sucesso) {
        setMessage('Login realizado com sucesso!');
        setMessageType('success');
        setTimeout(() => {
          navigate('/menu');
        }, 1000);
      } else {
        // Fallback para usuários predefinidos
        const usuarioData = usuariosPredefinidos[formData.email];
        
        if (usuarioData && usuarioData.senha === formData.senha) {
          const dadosUsuario = {
            email: formData.email,
            nome: usuarioData.nome,
            tipo: usuarioData.tipo,
            permissoes: usuarioData.permissoes,
            loggedIn: true,
            loginTime: new Date().toISOString()
          };
          
          localStorage.setItem('usuario', JSON.stringify(dadosUsuario));
          setMessage('Login realizado com sucesso!');
          setMessageType('success');
          setTimeout(() => {
            navigate('/menu');
          }, 1000);
        } else {
          setMessage('Email ou senha incorretos!');
          setMessageType('error');
        }
      }
    } catch (error) {
      setMessage('Erro interno. Tente novamente.');
      setMessageType('error');
    }
    
    setIsLoading(false);
  };
  
  const getPermissoesPorTipo = (tipo) => {
    switch (tipo) {
      case 'admin':
        return ['admin', 'usuario', 'medico', 'cadastros', 'relatorios', 'estatisticas', 'todos'];
      case 'medico':
        return ['medico', 'usuario', 'consultas', 'pacientes', 'prescricoes', 'exames'];
      case 'usuario':
      default:
        return ['usuario', 'anamnese', 'exames', 'consultas'];
    }
  };

  const handleDemoLogin = (tipoDemo) => {
    const demos = {
      admin: 'admin@healthsystem.com',
      usuario: 'usuario@healthsystem.com',
      medico: 'medico@healthsystem.com'
    };
    
    const email = demos[tipoDemo];
    const userData = usuariosPredefinidos[email];
    
    setFormData({
      email: email,
      senha: userData.senha,
      tipoUsuario: tipoDemo,
      nome: '',
      confirmeSenha: ''
    });
    setIsRegistering(false);
  };
  
  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setFormData({
      email: '',
      senha: '',
      tipoUsuario: 'usuario',
      nome: '',
      confirmeSenha: ''
    });
    setMessage('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>HealthSystem</h1>
          <p>Sistema de Gestão de Saúde</p>
          <div className="mode-toggle">
            <button 
              type="button" 
              className={`toggle-btn ${!isRegistering ? 'active' : ''}`}
              onClick={() => !isRegistering || toggleMode()}
            >
              Login
            </button>
            <button 
              type="button" 
              className={`toggle-btn ${isRegistering ? 'active' : ''}`}
              onClick={() => isRegistering || toggleMode()}
            >
              Cadastro
            </button>
          </div>
        </div>
        
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="login-form">
          {isRegistering && (
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input 
                type="text" 
                id="nome"
                name="nome"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha"
              name="senha"
              placeholder={isRegistering ? "Mínimo 6 caracteres" : "Digite sua senha"}
              value={formData.senha}
              onChange={handleChange}
              required
              minLength={isRegistering ? 6 : undefined}
            />
          </div>
          
          {isRegistering && (
            <>
              <div className="form-group">
                <label htmlFor="confirmeSenha">Confirme a Senha</label>
                <input 
                  type="password" 
                  id="confirmeSenha"
                  name="confirmeSenha"
                  placeholder="Digite a senha novamente"
                  value={formData.confirmeSenha}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tipoUsuario">Tipo de Usuário</label>
                <select 
                  id="tipoUsuario"
                  name="tipoUsuario"
                  value={formData.tipoUsuario}
                  onChange={handleChange}
                  required
                >
                  <option value="usuario">👤 Usuário/Paciente</option>
                  <option value="medico">👨‍⚕️ Médico</option>
                  <option value="admin">🔧 Administrador</option>
                </select>
              </div>
            </>
          )}
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (isRegistering ? 'Cadastrando...' : 'Entrando...') : (isRegistering ? 'Cadastrar' : 'Entrar')}
          </button>
        </form>

        {!isRegistering && (
          <div className="demo-section">
            <p>Acesso rápido para demonstração:</p>
            <div className="demo-buttons">
              <button 
                type="button" 
                className="demo-btn admin"
                onClick={() => handleDemoLogin('admin')}
              >
                🔧 Admin
              </button>
              <button 
                type="button" 
                className="demo-btn usuario"
                onClick={() => handleDemoLogin('usuario')}
              >
                👤 Usuário
              </button>
              <button 
                type="button" 
                className="demo-btn medico"
                onClick={() => handleDemoLogin('medico')}
              >
                👨‍⚕️ Médico
              </button>
            </div>
          </div>
        )}
        
        <div className="login-footer">
          <p>
            {isRegistering ? 'Já tem conta?' : 'Não tem conta?'}{' '}
            <button type="button" className="link-button" onClick={toggleMode}>
              {isRegistering ? 'Faça login aqui' : 'Cadastre-se aqui'}
            </button>
          </p>
          {!isRegistering && <p><a href="/recuperar-senha">Esqueci minha senha</a></p>}
        </div>
      </div>
    </div>
  );
}
