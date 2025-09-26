# Usar imagem oficial do Node.js
FROM node:18

# Criar diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json primeiro (para cache das dependências)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar restante do código
COPY . .

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
