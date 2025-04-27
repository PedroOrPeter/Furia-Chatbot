# FURIA Chatbot + Landpage

Este repositório contém a aplicação que implementa um chatbot e uma landpage para a organização FURIA Esports. O chatbot responde perguntas relacionadas à FURIA utilizando inteligência artificial (GPT). A landpage exibe informações sobre a equipe da FURIA no CS:GO, incluindo uma apresentação da atual lineup, um vídeo de demonstração e algumas estatísticas básicas. O backend foi desenvolvido em Node.js, e o frontend foi desenvolvido com React.js usando Vite.

## Tecnologias Utilizadas

- **Backend**: Node.js
- **Frontend**: React.js com Vite
- **Inteligência Artificial**: GPT (Gratuita)
- **Estilo**: CSS (ou Tailwind, se preferir)
- **Ambiente de Desenvolvimento**: Vite

## Funcionalidades

### Chatbot

- Responde a perguntas relacionadas à FURIA Esports.
- Utiliza um modelo de IA gratuito do GPT para responder automaticamente.
- Algumas informações específicas foram atualizadas manualmente no arquivo `index.ts` do backend para garantir que os dados da FURIA estão sempre atualizados.
- O chatbot é ativado através de um botão na landpage e tem uma interface simples de conversa.

### Landpage

- Exibe um botão para iniciar a conversa com o chatbot.
- Mostra a atual lineup da FURIA no CS:GO.
- Apresenta um vídeo de demonstração da FURIA.
- Exibe estatísticas básicas da FURIA.
- Documentação adicional sobre a FURIA, incluindo sua história e informações chave.

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar a aplicação, você precisa ter as seguintes dependências instaladas:

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)

### Passos para Iniciar

1. **Clone o Repositório**

   Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/furia-chatbot-landpage.git
   cd furia-chatbot-landpage

2. **Instale as dependências**
    No diretório do projeto, instale as dependências do backend e frontend:

    ```bash
    cd backend
    npm install

    cd Furia-ChatBot
    npm install

3. **Configuração do Backend**
   O backend é desenvolvido em Node.js e utiliza uma constante no arquivo index.ts para armazenar informações atualizadas sobre a FURIA. Para garantir que as respostas do chatbot sejam      precisas, atualize o arquivo com as últimas informações sobre a equipe, caso necessário.

   Acesse o diretório do backend: cd backend

   Abra o arquivo index.ts e altere as informações da constante de dados da FURIA, caso necessário.

4. **Rodando Backend**
  
   ```bash  
   cd backend
   npm run dev

5. **Rodando Frontend**
   
   ```bash
   cd Furia-ChatBot
   npm run dev

6. **Acessando a Aplicação**

   Abra seu navegador e acesse ( URL A SER MUDADA ) para visualizar a landpage e interagir com o chatbot.


**Documentação**
*Como o Chatbot Funciona*
O chatbot utiliza uma API gratuita do GPT para responder a perguntas sobre a FURIA. Ele está configurado no backend, onde uma série de tópicos foram predefinidos e podem ser atualizados no arquivo index.ts. O backend lida com as solicitações do chatbot, filtra as perguntas e encaminha as respostas com base nas informações mais recentes.

*Atualizando a Lineup da FURIA*
A lineup da FURIA no CS:GO é apresentada dinamicamente na landpage. A informação sobre os jogadores, funções e outras estatísticas são armazenadas no backend.

Estatísticas
As estatísticas básicas da FURIA são fornecidas na landpage e podem ser atualizadas no código. Inclui dados como vitórias recentes, posições em torneios e outras métricas relacionadas ao desempenho da equipe.

Feito com muita Furia por Pedro Maciel.

