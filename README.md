# Squid Challenge App

<img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/Resultado.png" alt="exemplo imagem">

##Link para o projeto: <a href="https://squid-challenge-app.netlify.app" target=”_blank”>https://squid-challenge-app.netlify.app</a>
### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Criar um modal para exibir a imagem e as informações dela, como comentários, data de pub e mais infos que vem da api
- [x] Melhorar página do Dashboard, deixando as informaçoes mais claras
- [x] Quem sabe criar uma outra página voltada apenas para os influencers que chegam da api
- [ ] Tarefa 4
- [ ] Tarefa 5

## 🚀 Instalando o Squid Challenge App

Para instalar o Squid Challenge App, siga estas etapas:

Linux e macOS:
```
git clone https://github.com/levyhanunes/squid-challenge-app.git
cd squidchallange-app
npm install
```

Windows:
```
git clone https://github.com/levyhanunes/squid-challenge-app.git
cd squidchallange-app
npm install
```

## 📫 Componentes do Projeto
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Segue a lista 👀😎: 

### 1. Feed:
  O componente Feed é composto por 4 arquivos e seus respectivos arquivos de estilo, que estão declarados como Nome_do_componente.module.css como demonstrado abaixo:

  <img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/Feed.png" alt="exemplo imagem">
  
  Este componente é responsável por estruturar o feed, recebendo a requisição da api utilizando o Hook useFetch.js e passando essas informaçoes para os seus microcomponentes, como o FeedPhotos.js e o FeedPhotosItems.js

### 2. Dashboard:

  <img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/Estatistica.png" alt="exemplo imagem">
  
  Este componente foi criado para exibir alguns dados que vem junto com o fetch da api, nos gráficos eu comparo algumas informaçoes como Upvotes, Total de impressões no eixo Y, e a data da publicação percorrento o eixo X. Estrutura do Dashboard:
  
  <img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/Dashboard.png" alt="exemplo imagem">
  
  Para construir estre componente eu utilizei de uma lib chamada Victory, que me da todas as ferramentas necessárias para contruir os gráficos:
    
  UseEffect para pegar os dados da api e definor o eixo X e o Y do gráfico
      <img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/UseEffect%20para%20pegar%20os%20dados%20Victory.png" alt="exemplo imagem">
      
  Usar o {data} do useEffect para definir os dados para o VictorPieChart
      <img src="https://raw.githubusercontent.com/levyhanunes/squid-challenge-app/master/Assets/readme/VictoryPie.png" alt="exemplo imagem">
 
 
### 3. Helpers

  Defini 3 componentes Helpers para o projeto:
    
   1- Error, que me mostra uma tela de erro 'caso ocorra'
   
   2- Head, que não tem nenhuma funcionalidade vizual, ele apenas altera o title para o nome do arquivo, para nao ter que ficar mudando no html toda vez que for trabalhar em uma nova página
   
   <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/head.gif" alt="exemplo imagem">
   
   3- Image, que define um Skeleton para as imagens toda vez que o estado da busca da API esta em Loading:
   
   <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/gifSkeleton.gif" alt="exemplo imagem">
  
   4- Loading, caso nada tenha carregado ainda "Ele é bem rápido pq a maioria das vezes o Skeleton por ser feito somente em css carrega mais rapido":
   
   <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/gifLoading.gif" alt="exemplo imagem">
    
    
   

### 4. Hooks

  No projeto utilizei a maior parte do projeto de um Hook:
    
   1- useFetch, para que quando eu estiver buscando dados na API ele possa me retornar 4 estados, para que eu consiga setar os componentes acima, eles são os: data "retorna o data da requisiçao", loading "muito utilizado para definir o estado de Loading", error "utilizado para nao chrashar retornando null caso o erro nao tenha tratativa", e o por ultimo ele retorna o próprio request
    
    
## O Projeto também é responsivo 💁🏻👌

  <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/responsivo.gif" alt="exemplo imagem">
  
  <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/FeedMobile.png" alt="exemplo imagem">
  <img src="https://github.com/levyhanunes/squid-challenge-app/blob/master/Assets/readme/graphMobile.png" alt="exemplo imagem">
    
## 🤝 Contato

Abaixo deixarei minhas informações de contato 😁:

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/levyhanunes/">
        <img src="https://avatars.githubusercontent.com/u/56304278?v=4" width="100px;" alt="Minha foto GitHub"/><br>
        <sub>
          <b>Levy Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" min-width="400px" max-width="400px" width="400px" align="right" alt="Computador iuriCode">

<p align="left"> 
  Sou estudante de análise e desenvolvimento de sistemas na UNIP.

  Atualmente estou estudando desenvolvimento mobile e também faço alguns freelances na área de desenvolvimento web, atualmente sou <strong>Desenvolvedor iOS na @BRQ Digital Solutions</strong>
  Quero muito me desenvolver profissionalmente para que um dia eu possa me tornar um grande desenvolvedor.
</p>

<p align="left">
  🦄 Linguagens: <a href="https://www.apple.com/br/swift/" title="Swift"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/swift.svg" alt="Java" width="21px" height="21px"></a>
<a href="https://docs.oracle.com/en/java/" title="Java"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/java.svg" alt="Java" width="21px" height="21px"></a>
<a href="https://docs.spring.io/spring-framework/docs/current/reference/html/" title="Spring"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/spring.svg" alt="Typescript" width="21px" height="21px"></a>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/kotlin.svg" alt="Kotlin" width="21px" height="21px"></a>
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/html-5.svg" alt="HTML5" width="21px" height="21px"></a>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/javascript.svg" alt="Javascript" width="21px" height="21px"></a>
<a href="https://pt-br.reactjs.org/docs/create-a-new-react-app.html" title="React"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/preact.svg" alt="React" width="21px" height="21px"></a>
<a href="https://git-scm.com/" title="Git"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/git-icon.svg" alt="Git" width="21px" height="21px"></a>
</p>

<p align="left">
  💌 Entre em contato: ⤵️
</p>

<p align="left">
  <a href="https://www.linkedin.com/in/levyhanunes/" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" /></a>

  <a href="https://api.whatsapp.com/send?phone=5511954317385&text=Ol%C3%A1%20Dev%2C%20j%C3%A1%20quero%20te%20contratar!!%20%F0%9F%98%8D%E2%9D%A4%EF%B8%8F" alt="WhatsApp">
  <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=flat-square&labelColor=25d366&logo=whatsapp&logoColor=white&link=API-DO-SEU-WHATSAPP"/></a>
</p>  
