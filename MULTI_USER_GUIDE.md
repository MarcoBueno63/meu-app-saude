# 🏥 HealthSystem - Guia do Sistema Multi-Usuário

## 📋 Visão Geral

O HealthSystem agora suporta múltiplos usuários com funcionalidades avançadas de compartilhamento de dados médicos entre pacientes, médicos e administradores.

## 👥 Tipos de Usuários

### 1. **👤 Usuário/Paciente**
- Cadastro de anamnese
- Upload de exames
- Análise por IA
- Geração de relatórios
- Compartilhamento de dados com médicos
- **Permissões**: `usuario`, `anamnese`, `exames`, `consultas`

### 2. **👨‍⚕️ Médico**
- Todas as funcionalidades de usuário
- Gerenciamento de consultas
- Prescrições médicas
- Análise de pacientes
- Laudos médicos
- Telemedicina
- **Permissões**: `medico`, `usuario`, `consultas`, `pacientes`, `prescricoes`, `exames`

### 3. **🔧 Administrador**
- Todas as funcionalidades anteriores
- Gerenciamento de usuários
- Estatísticas do sistema
- Configurações avançadas
- **Permissões**: `admin`, `usuario`, `medico`, `cadastros`, `relatorios`, `estatisticas`, `todos`

## 🚀 Como Começar

### 1. **Primeiro Acesso**

1. Acesse a aplicação no navegador
2. Na tela de login, clique em **"Cadastro"**
3. Preencha os dados:
   - Nome completo
   - E-mail
   - Senha (mínimo 6 caracteres)
   - Confirme a senha
   - Selecione o tipo de usuário
4. Clique em **"Cadastrar"**
5. Faça login com suas credenciais

### 2. **Usuários Demo Predefinidos**

Para teste rápido, use os botões de acesso rápido:

- **🔧 Admin**: `admin@healthsystem.com` / `admin123`
- **👤 Usuário**: `usuario@healthsystem.com` / `user123`
- **👨‍⚕️ Médico**: `medico@healthsystem.com` / `medico123`

## 🔗 Funcionalidades Multi-Usuário

### **Compartilhamento de Dados**

1. **Acessar Compartilhamento**:
   - No menu principal, clique em "🔗 Compartilhamento"

2. **Compartilhar Dados**:
   - Selecione o usuário destinatário
   - Escolha o tipo de dados (Consultas, Exames, Anamnese, Prescrições)
   - Clique em "Compartilhar Dados"

3. **Receber Dados Compartilhados**:
   - Visualize na seção "📥 Dados Compartilhados Comigo"
   - Clique em "✅ Aceitar" para importar os dados
   - Ou "❌ Rejeitar" para recusar

### **Isolamento de Dados**

- Cada usuário possui seus dados isolados
- Dados pessoais ficam em chaves específicas: `consultas_email@usuario.com`
- Compartilhamento é controlado e auditado
- Usuários podem aceitar ou rejeitar dados compartilhados

## 📊 Fluxo de Trabalho Recomendado

### **Para Pacientes**:
1. Registre-se como "Usuário/Paciente"
2. Preencha a anamnese
3. Faça upload de exames
4. Solicite análise por IA
5. Compartilhe dados com seu médico
6. Receba e aceite prescrições do médico

### **Para Médicos**:
1. Registre-se como "Médico"
2. Receba dados compartilhados de pacientes
3. Analise anamneses e exames
4. Crie prescrições e laudos
5. Compartilhe relatórios com pacientes
6. Use ferramentas de telemedicina

### **Para Administradores**:
1. Monitore o sistema através do dashboard
2. Gerencie usuários e permissões
3. Visualize estatísticas de uso
4. Configure parâmetros do sistema

## 🔐 Segurança e Privacidade

- **Autenticação**: Login seguro por email/senha
- **Autorização**: Permissões específicas por tipo de usuário
- **Isolamento**: Dados pessoais segregados por usuário
- **Auditoria**: Registros de compartilhamento e acesso
- **Controle**: Usuários controlam quem acessa seus dados

## 🚀 Deploy e Acesso Multi-Usuário

O sistema está pronto para deploy com as seguintes opções:

### **1. Vercel (Recomendado)**
```bash
npm install -g vercel
vercel --prod
```

### **2. Netlify**
```bash
npm run build
# Upload da pasta build/ para netlify.com
```

### **3. GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

### **4. Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 📱 Recursos Avançados

### **Notificações**
- Sistema de notificações quando dados são compartilhados
- Alertas de novos usuários registrados
- Notificações de prescrições recebidas

### **Dashboard Inteligente**
- Estatísticas de uso por tipo de usuário
- Métricas de compartilhamento
- Análises de engajamento

### **API de Integração**
- Sistema preparado para futuras integrações
- Estrutura modular para plugins
- Suporte a webhooks e callbacks

## 🛠️ Resolução de Problemas

### **Problemas Comuns**:

1. **"Dados não aparecem"**:
   - Verifique se está logado
   - Confirme se os dados foram aceitos
   - Limpe o cache do navegador

2. **"Não consigo compartilhar"**:
   - Verifique se há dados para compartilhar
   - Confirme se o usuário destinatário existe
   - Tente atualizar a página

3. **"Login não funciona"**:
   - Verifique email/senha
   - Tente com usuários demo
   - Limpe localStorage: `localStorage.clear()`

## 📞 Suporte Técnico

Para suporte técnico ou dúvidas:
- E-mail: marco.bueno.cmkt@gmail.com
- GitHub: [Repositório do Projeto]
- Documentação técnica em `/DEPLOY.md`

## 🎯 Próximas Funcionalidades

- [ ] Chat em tempo real entre usuários
- [ ] Integração com APIs médicas
- [ ] Backup automático na nuvem
- [ ] App mobile (React Native)
- [ ] Sistema de agendamento avançado
- [ ] Integração com dispositivos IoT médicos

---

*HealthSystem v2.0 - Sistema de Gestão de Saúde Multi-Usuário*
*Desenvolvido com React, localStorage e arquitetura modular*
