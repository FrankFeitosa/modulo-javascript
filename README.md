# modulo-javascript
Aqui é o repositório para aprender a linguagem de programação JavaScript

# inicia o node
npm init -y

# abre um pacote para simular uma API serve para quando a parte de FrontEnd estiver pronta para rodar o projeto enquanto aguarda o banco de dados ficar disponivel.
npm install json-server@0.17.4

# cria arquivo .json
api.json

# comando que levanta um servidor e um endpoint 'tarefas'
npx json-server api.json --watch --port 

