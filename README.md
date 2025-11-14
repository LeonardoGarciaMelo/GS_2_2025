# GS - 2º Semestre 2025
Projeto desenvolvido para a Global Solution (GS) - 2º Semestre 2025
- Tema: DataWork: Inteligência Analítica no Mundo Corporativo
- Disciplina: Advanced Programming & Mobile Dev
- Professor: Hete Caetano
- Curso: Engenharia da Computação

## Integrantes do Grupo
- Nome: Guiherme Moraes Pagani  Rm: 99445
- Nome: Leonardo Garcia Melo    Rm: 99471
- Nome: Gustavo Dell Rocca      Rm: 551595

## Visão Geral
Aplicativo móvel em React Native que aborda o tema "DataWork" ao focar na análise de bem-estar e produtividade pessoal.

O projeto não utiliza backend. Toda a lógica de "DataWork" é simulada localmente: o aplicativo coleta dados diários do usuário, os armazena de forma persistente no dispositivo usando AsyncStorage e, em seguida, utiliza esses dados para gerar um dashboard com estatísticas e insights inteligentes.

A solução permite que o usuário rastreie métricas vitais como nível de estresse, horas de sono, produtividade percebida e humor, transformando dados brutos em inteligência analítica para o próprio indivíduo.

## Funcionalidades Principais
- Registro Diário: O usuário pode adicionar um novo registro diário informando seu nível de estresse, horas de sono, produtividade, humor e número de tarefas concluídas.
- Dashboard Pessoal: Uma tela principal que exibe estatísticas-chave calculadas a partir dos dados locais:
- Total de registros.
- Produtividade média.
- Média de horas de sono.
- Insights Inteligentes: O app analisa os dados salvos para gerar correlações simples, como a relação entre horas de sono e produtividade, ou alertar sobre níveis de estresse elevados (calculations.ts).
- Histórico Completo: Uma tela que lista todos os registros passados, permitindo ao usuário visualizar e excluir entradas antigas.
- Persistência Local (AsyncStorage): Todos os dados são salvos localmente. O aplicativo demonstra isso ao carregar os dados salvos sempre que é iniciado, e mantendo os registros mesmo após ser fechado e reaberto (como demonstrado no vídeo "Plus").

## Tecnologias Utilizadas
- React Native: Framework principal para o desenvolvimento do aplicativo.
- AsyncStorage: Utilizado para a persistência de dados local (salvar e carregar os registros de bem-estar).
- TypeScript: Para tipagem e robustez do código.
- Expo (Go): Utilizado para o desenvolvimento e testes do aplicativo.

## Como Configurar e Rodar o Projeto
Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos
- Node.js
- npm
- Expo Go(Caso for rodar em celular)

### Passos para a instalação
1 - Clonar o repositório
- Para Windows:
```
git clone https://github.com/LeonardoGarciaMelo/GS_2_2025.git
```

- Para Linux:
```
git clone git@github.com:LeonardoGarciaMelo/GS_2_2025.git
```

2 - Acessar o Projeto
```
cd GS_2_2025
```

3 - Instalar as dependências
```
npm install
```

4 - Rodar:
```
npm start
```