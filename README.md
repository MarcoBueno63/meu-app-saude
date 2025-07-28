# Sistema de Saúde - Anamnese Integrativa

Um sistema moderno e completo para coleta de anamnese médica, desenvolvido em React com interface intuitiva, arquitetura modular e armazenamento local dos dados.

## � Características Principais

- **Sistema Modular**: Anamnese dividida em 8 módulos especializados
- **Interface Responsiva**: Design moderno e elegante com gradiente azul/roxo
- **Auto-save**: Salvamento automático dos dados conforme digitação (300ms debounce)
- **Navegação Inteligente**: Progresso preservado entre sessões
- **Questões Específicas**: Módulos diferenciados para gênero feminino/masculino
- **Upload de Exames**: Sistema otimizado de upload de documentos médicos
- **Análise com IA**: Diagnósticos prováveis e recomendações de especialidades

## 📋 Módulos da Anamnese (Arquitetura Modular)

1. **Dados Pessoais** - Informações básicas do paciente
2. **Queixa Principal** - Motivo da consulta e evolução dos sintomas
3. **História Médica** - Medicamentos, alergias, cirurgias, hospitalizações
4. **História Familiar** - Antecedentes familiares e doenças hereditárias
5. **Hábitos de Vida** - Tabagismo, alcoolismo, atividade física, sono
6. **Revisão de Sistemas** - Avaliação sistemática por aparelhos
7. **Questões Femininas** - Ciclo menstrual, gestações, menopausa (condicional)
8. **Questões Masculinas** - Próstata, função sexual, urologia (condicional)

## 🛠️ Tecnologias Utilizadas

- **React** - Framework JavaScript para UI
- **React Router** - Navegação entre páginas
- **CSS3** - Estilização responsiva
- **localStorage** - Persistência de dados local
- **Speech Synthesis API** - Leitura por voz

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Instalação e Execução

1. Clone o repositório e navegue até a pasta:
```bash
git clone [URL_DO_REPOSITORIO]
cd meu-app-saude
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 🔐 Acesso Administrativo

Para acessar o painel administrativo:
1. Navegue para `/admin`
2. Use a senha: `admin123`

## 📱 Como Usar

### Fluxo do Paciente
1. **Login/Cadastro**: Acesse a aplicação
2. **Anamnese**: Preencha o formulário médico
3. **Exames**: Faça upload dos arquivos
4. **Resultado**: Visualize a análise da IA
5. **Dashboard**: Acesse seu painel pessoal

### Fluxo do Profissional
1. **Login Admin**: Acesse `/admin` com senha
2. **Dashboard**: Visualize lista de pacientes
3. **Filtros**: Use ferramentas de busca
4. **Detalhes**: Clique em "Ver Detalhes" do paciente
5. **Gestão**: Atualize status e observações

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Login.jsx
│   ├── Cadastro.jsx
│   ├── AnamneseForm.jsx
│   ├── UploadExames.jsx
│   ├── ResultadoIA.jsx
│   └── Dashboard.jsx
├── pages/              # Páginas administrativas
│   ├── AdminLogin.jsx
│   ├── AdminDashboard.jsx
│   └── AdminPaciente.jsx
├── services/           # Serviços e integrações
│   └── iaService.js
└── App.js             # Componente principal
```

## 🎯 Funcionalidades Principais

### Anamnese Inteligente
- Formulário dinâmico com perguntas condicionais
- Validação de dados em tempo real
- Salvamento automático no localStorage

### Upload de Exames
- Suporte para PDF, JPG e PNG
- Preview de arquivos selecionados
- Validação de tipos de arquivo

### Análise com IA
- Simulação de diagnósticos (preparado para integração real)
- Recomendação de especialidades médicas
- Orientações gerais para o paciente

### Dashboard Administrativo
- Lista completa de pacientes
- Filtros por gênero, sintomas e nome
- Ordenação por nome ou data
- Status clínico com cores visuais

## 🔧 Personalização

### Integração com IA Real
Para integrar com OpenAI ou outra IA:
1. Edite `src/services/iaService.js`
2. Adicione sua chave de API
3. Implemente as chamadas reais

### Banco de Dados
Para substituir localStorage:
1. Configure Firebase ou outro banco
2. Atualize os métodos de salvamento
3. Implemente sincronização em tempo real

## 🚀 Próximos Passos

- [ ] Integração com OpenAI para diagnósticos reais
- [ ] Autenticação com Firebase Auth
- [ ] Banco de dados na nuvem
- [ ] Notificações push
- [ ] Sistema de agendamento
- [ ] Telemedicina integrada

---

Desenvolvido com ❤️ para melhorar o atendimento médico através da tecnologia.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
