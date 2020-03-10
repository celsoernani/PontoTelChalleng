

## Tabela de Conteúdo

  - [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Imagens](#imagens)
  - [Feito Com](#feito-com)
  - [Explorando](#explorando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Visão geral](#vis%C3%A3o-geral)
  - [Observações](#observações)
  - [Possiveis Melhorias](#melhorias)

- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Projeto

Esse projeto consiste em um aplicativo que lista os lançamentos contido na SpaceX , nele você pode obter informaçãos gerais de uma forma rápida e prática além de poder criar uma lista infinita com todos.

### Imagens
Algumas imagens das principais telas do aplicativo.
<div class="row">
  <img src="https://i.ibb.co/ryW3h8t/screenshot-2020-03-10-00-18-18-189.png" width="30%" height="30%" />
  <img src="https://i.ibb.co/nj0zNZM/screenshot-2020-03-10-00-18-28-205.png" width="30%" height="30%" />
  <img src="https://i.ibb.co/R4MzXsq/screenshot-2020-03-10-00-18-34-825.png" width="30%" height="30%" />
<div>


### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;

- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;


- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;

- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;

- [Immer](https://immerjs.github.io/immer/docs/introduction) -  O Immer é um pacote  que permite trabalhar com o estado imutável de uma maneira mais conveniente.

- [react-native-video](https://github.com/react-native-community/react-native-video) - Componente de vídeo para React-Native.

- [react-native-webview](https://github.com/react-native-community/react-native-webview) - O React Native WebView é um WebView moderno, bem suportado e de plataforma cruzada para o React Native. Ele pretende substituir o WebView interno;

- [react-native-youtube](https://github.com/davidohayon669/react-native-youtube/tree/v1.1.0) -  Componente de vídeos do YouTube para React-Native;

- [redux](https://redux.js.org/) - Redux é um contêiner de estado previsível para aplicativos JavaScript;

- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;

- [redux-saga](https://github.com/redux-saga/redux-saga) -  Biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos, mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores no tratamento de falhas.

- [styled-components](https://styled-components.com/) Permite a criação de componentes com estilo e permitem que você escreva o código CSS real para estilizar seus componentes. Também remove o mapeamento entre componentes e estilos.


- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;


## Explorando
Vamos da uma olhada mais de perto nos arquivos do projeto e suas funções.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
Projetos
├── src/
│   ├── components/
│   │   └── nomeComponente
│   │       ├── index.js
│   │       └── styles.js
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── pages/
│   │   └── nomePagina
│   │       ├── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── store/
│   │   ├── index.js
│   │   ├── createStore.js
│   │   ├── modules/
│   │       ├── rootReducer.js
│   │       ├── rootSaga.js
│   │       └── nomeModulo/
│   │           ├── actionsModulo.js
│   │           ├── reducerModulo.js
│   │           └── sagasModulo.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .flowconfig
├── .prettierrc.js
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── .watchmanconfig
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
└── .watchmanconfig
```


### Visão geral

Uma breve explicação de como o template do projeto foi estruturado, para assim facilitar seu compreendimento.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;


  - **assets** - Diretório para armazenar assets em geral que possam ser utilizadas na aplicação, nesse projeto estão as fonts e as imagens da aplicação.

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **pageName** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página.
      - **styles.js** - Arquivo com a estilização da página.

  - **componenets** - Essse Diretório segue o mesmo padrão descrito no "PageName", entretanto para componentes gerais da aplicação.

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

  - **store** - Diretório onde fica toda a configuração de redux e redux-saga da aplicação, também se encontra os módulos e o único ponto de verdade da aplicação;

      - **modules/launches** - Diretório exemplo de uma módulo do redux cujo o nome é **launches**. Aqui se encontra suas actions, sagas e não menos importante o reducer de launches.

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.



### Observações
  - Utilizei o Yarn como package manager.
  - Programando com Android, para rodar basta:
    ```sh
       yarn
    ```
    e logo depois:
    ```sh
      react-native run-android
    ```


  - Para rodar no iOS deverá rodar(além de outras configurações especificas por componente):
      ```sh
        pod install
      ```
      e logo depois:
    ```sh
      react-native run-ios
    ```
  - Foram utilizadas dois componentes de video, devido ao componente ***react-native-video*** não possuir suporte para videos providos pelo YouTube. Logo, existe uma lógica para escolher qual componente executar o vídeo.

### Possíveis Melhorias
  - Utilização de PropTypes para checagem dos tipos de props que chegam nos componentes.
  - Animações para o aplicativo ficar mais fluído e interassante para o cliente
  - Realização de Testes, podendo ser Unitários ou TDD, usando JEST.


## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.



## Contato

Celso Sales - [Github](https://github.com/celsoernani
) - **celsoernane@gmail.com**
