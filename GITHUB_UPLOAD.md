# 📚 Instruções para Upload no GitHub

## 🚀 Passo a Passo para Upload do Projeto

### 1. Criar Repositório no GitHub
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository" (repositório novo)
3. Nome sugerido: `sistema-saude-anamnese`
4. Descrição: "Sistema modular de anamnese médica em React"
5. Marque como **Público** ou **Privado** conforme preferência
6. **NÃO** marque "Add a README file" (já temos um)
7. Clique em "Create repository"

### 2. Comandos Git (Execute no Terminal)

Abra o PowerShell ou Terminal na pasta do projeto e execute:

```bash
# 1. Inicializar repositório Git (se não existir)
git init

# 2. Adicionar origem remota (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/sistema-saude-anamnese.git

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer o primeiro commit
git commit -m "🎉 Initial commit - Sistema modular de anamnese médica

✨ Recursos implementados:
- 8 módulos especializados de anamnese
- Auto-save com localStorage
- Interface responsiva com gradiente azul/roxo
- Navegação inteligente entre etapas
- Questões condicionais por gênero
- Sistema de upload otimizado
- Validação de formulários
- Tratamento robusto de erros"

# 5. Enviar para o GitHub
git push -u origin main
```

### 3. Se der erro de autenticação

#### Opção A: Token de Acesso Pessoal
1. Vá em GitHub → Settings → Developer settings → Personal access tokens
2. Clique em "Generate new token (classic)"
3. Dê um nome: "Upload Sistema Saúde"
4. Marque: `repo` (Full control of private repositories)
5. Clique em "Generate token"
6. **Copie o token** (você não verá novamente!)
7. Use o token como senha quando o Git pedir

#### Opção B: GitHub CLI (Mais fácil)
```bash
# Instalar GitHub CLI
winget install --id GitHub.cli

# Fazer login
gh auth login

# Criar e fazer upload do repositório
gh repo create sistema-saude-anamnese --public --source=. --remote=origin --push
```

### 4. Estrutura que será enviada

```
📁 sistema-saude-anamnese/
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🔥 AnamneseIntegrativa.jsx (PRINCIPAL)
│   │   ├── 📤 UploadExames.jsx
│   │   └── 📁 anamnese/ (MÓDULOS)
│   │       ├── 👤 DadosPessoais.jsx
│   │       ├── 🗣️ QueixaPrincipal.jsx
│   │       ├── 🏥 HistoriaMedica.jsx
│   │       ├── 👨‍👩‍👧‍👦 HistoriaFamiliar.jsx
│   │       ├── 🏃‍♀️ HabitosVida.jsx
│   │       ├── 🔍 RevisaoSistemas.jsx
│   │       ├── 👩 QuestoesFemininas.jsx
│   │       └── 👨 QuestoesMasculinas.jsx
│   └── 📁 styles/
├── 📄 package.json
├── 📄 README.md (ATUALIZADO)
├── 📄 .gitignore
└── 📄 GITHUB_UPLOAD.md (este arquivo)
```

### 5. Após o Upload

1. **Verifique** se todos os arquivos foram enviados
2. **Atualize a descrição** do repositório no GitHub
3. **Adicione tópicos/tags**: `react`, `healthcare`, `medical`, `anamnesis`, `modular`
4. **Configure GitHub Pages** (se quiser hospedar online):
   - Settings → Pages → Source: Deploy from a branch
   - Branch: main → /build (depois de fazer `npm run build`)

### 6. Link do Repositório

Após criar, seu repositório estará em:
```
https://github.com/SEU_USUARIO/sistema-saude-anamnese
```

### 7. Comandos Úteis para Atualizações Futuras

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Commit com mensagem
git commit -m "✨ Descrição das mudanças"

# Enviar atualizações
git push

# Ver histórico
git log --oneline
```

---

## 🔧 Solução de Problemas Comuns

### Erro: "repository not found"
- Verifique se o nome do repositório está correto
- Confirme se você tem acesso ao repositório

### Erro: "Authentication failed"
- Use token de acesso pessoal em vez de senha
- Ou use GitHub CLI: `gh auth login`

### Erro: "large files"
- Remova node_modules: `rm -rf node_modules`
- Verifique se .gitignore está funcionando

### Arquivos grandes demais
Certifique-se que o .gitignore exclui:
- `node_modules/`
- `build/`
- `.env`
- Arquivos de log

---

**🎉 Parabéns! Seu sistema modular de anamnese estará no GitHub!**
