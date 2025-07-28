@echo off
echo ========================================
echo   UPLOAD PARA GITHUB - SISTEMA SAUDE
echo ========================================
echo.

cd /d "c:\Users\marco\OneDrive\Área de Trabalho\ProjetoHealts\meu-app-saude"

echo 🔍 Verificando status do Git...
git status

echo.
echo 📁 Adicionando todos os arquivos...
git add .

echo.
echo 💾 Fazendo commit das mudanças...
git commit -m "🚀 Sistema modular de anamnese médica - Upload para GitHub

✨ Recursos implementados:
- 8 módulos especializados de anamnese
- Auto-save com localStorage  
- Interface responsiva com gradiente azul/roxo
- Navegação inteligente entre etapas
- Questões condicionais por gênero
- Sistema de upload otimizado
- Validação de formulários
- Tratamento robusto de erros

📋 Módulos:
- DadosPessoais.jsx
- QueixaPrincipal.jsx  
- HistoriaMedica.jsx
- HistoriaFamiliar.jsx
- HabitosVida.jsx
- RevisaoSistemas.jsx
- QuestoesFemininas.jsx
- QuestoesMasculinas.jsx

🎨 Design:
- Cores originais restauradas (azul/roxo)
- CSS modular organizado
- Responsivo para mobile/desktop

📝 Documentação:
- README.md atualizado
- Instruções de upload
- Guias de implementação"

echo.
echo 🌐 Verificando origem remota...
git remote -v

echo.
echo ⚠️  IMPORTANTE: 
echo    Se não há origem remota configurada, você precisa:
echo    1. Criar um repositório no GitHub
echo    2. Adicionar origem: git remote add origin [URL]
echo    3. Fazer push: git push -u origin main
echo.

set /p "continuar=Deseja continuar com o push? (s/n): "
if /i "%continuar%" neq "s" goto :fim

echo.
echo 🚀 Fazendo push para o GitHub...
git push -u origin main

:fim
echo.
echo ✅ Script finalizado!
echo    Verifique o repositório no GitHub
pause
