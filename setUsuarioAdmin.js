// setUsuarioAdmin.js
// Este script deve ser executado com: node setUsuarioAdmin.js
// Ele só funciona em ambiente Node.js e serve para simular o localStorage do navegador em um arquivo localStorage.json

const fs = require('fs');
const path = require('path');

const usuario = {
  nome: "Administrador",
  email: "admin@admin.com",
  tipo: "admin",
  dataCadastro: new Date().toISOString().split('T')[0]
};

const localStoragePath = path.join(__dirname, 'public', 'localStorage.json');
let localStorage = {};

if (fs.existsSync(localStoragePath)) {
  localStorage = JSON.parse(fs.readFileSync(localStoragePath, 'utf8'));
}

localStorage['usuario'] = JSON.stringify(usuario);

fs.writeFileSync(localStoragePath, JSON.stringify(localStorage, null, 2));
console.log('Usuário admin definido no localStorage.json!');
