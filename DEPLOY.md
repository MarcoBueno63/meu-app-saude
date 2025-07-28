# 🚀 Guia de Deploy - HealthSystem

## 📋 Pré-requisitos
- Node.js instalado
- Git instalado
- Conta no GitHub

## 🌐 Opções de Hospedagem Gratuita

### 1. **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm install -g vercel

# No diretório do projeto
vercel

# Seguir as instruções no terminal
```

### 2. **Netlify**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build do projeto
npm run build

# Deploy
netlify deploy --prod --dir=build
```

### 3. **GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar no package.json:
"homepage": "https://seuusuario.github.io/ProjetoHealts",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

### 4. **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar projeto
firebase init hosting

# Build e Deploy
npm run build
firebase deploy
```

## 🔧 Preparação para Deploy

### 1. Build de Produção
```bash
npm run build
```

### 2. Testar Build Local
```bash
npm install -g serve
serve -s build
```

### 3. Configurar Variáveis de Ambiente
Criar arquivo `.env` na raiz do projeto:
```
REACT_APP_API_URL=https://sua-api.com
REACT_APP_VERSION=1.0.0
```

## 📱 Funcionalidades Multiusuário

### Backend Necessário:
- **Firebase**: Autenticação + Firestore
- **Supabase**: PostgreSQL + Auth
- **AWS Amplify**: Full-stack
- **Node.js + MongoDB**: Custom backend

### Implementação com Firebase:
```bash
npm install firebase
```

## 🛡️ Segurança
- Implementar autenticação real
- Criptografar dados sensíveis
- Usar HTTPS
- Implementar rate limiting

## 📊 Monitoramento
- Google Analytics
- Sentry para error tracking
- Performance monitoring

## 🔄 CI/CD
- GitHub Actions
- Automação de deploy
- Testes automatizados
