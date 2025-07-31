import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    // Cadastrar usuário
    navigate('/dashboard');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2>Cadastro</h2>
        <form onSubmit={handleCadastro}>
          <input 
            type="text" 
            placeholder="Nome completo" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
        <p className="login-link">
          Já tem conta? <a href="/">Faça login</a>
        </p>
      </div>
    </div>
  );
}
