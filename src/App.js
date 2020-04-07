import React from 'react';
import './App.css';

const Link = ( props ) => {
  return(
    <a className="Link" rel="noopener noreferrer"  target="_blank" 
      href={props.url}>{props.text}
    </a>
  )
}

const Header = ( props ) => {
  return(
    <header className="Header">
      <div class="Title">
        no<br/>espelho<br/>dos olhos
      </div>
    </header>
  )
}

const Content = ( props ) => {
  return(
    <div className="Content">
      <Purpose />
      <Instructions />
      <Player 
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309064171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
  )
}

const Purpose = ( props ) => {
  return (
    <div className="Purpose">
      <p><b>planeta terra</b>, algum dia de abril de 2020</p>
      <p>
        estamos vivendo um fenômeno inédito para as nossas gerações: 
        uma pandemia global colocou uma pausa no ritmo acelerado da humanidade, 
        nos fazendo questionar <b>o que nos move enquanto indivíduos</b> ao 
        mesmo tempo que aprendemos <b>novas formas de caminhar em sociedade</b>.
      </p>
      <p>
        em tempos de quarentena e distanciamento social, quando estamos 
        longe do carinho e do contato físico de quem a gente ama, 
        a <b>tecnologia</b> aparece como uma <b>grande aliada</b>, 
        promovendo <b>conexões</b> entre pessoas que estão distantes
        através de <b>chamadas de vídeo</b>.
      </p>
      <p>
        pensando na beleza das <b>emoções humanas</b> que 
        estão transitando pelas redes na forma de <b>zeros e uns</b>, 
        queremos propor um <b>experimento de arte social e colaborativa</b> 
        com o propósito de <b>aquecer mais corações</b>: vamos construir um videoclipe 
        para a música <b>"Ao Deijar Fluir"</b>, do artista 
        joseense <b>Advan Haschi</b>, usando apenas imagens capturadas em vídeo chamadas.
      </p>
      <p>
        quer <b>fazer parte</b>? siga as instruções! divulgue o projeto em suas redes!</p>       
      <p>
        não temos pressa e não vamos estabelecer uma <b>data limite</b> para os envios.
        vamos ir <b>costurando</b> os vídeos conforme forem chegando e atualizaremos
        essa página quando tivermos novidades.
      </p>
      <p>
        fique em casa e fique bem!
      </p>
    </div>
  )
}

const Instructions = ( props ) => {
  return(
    <div className="Instructions">
      <p className="Subtitle">como fazer parte</p>
      <ol>
        <li>antes de qualquer coisa, certifique-se de que seu dispositivo 
            está apto a realizar <b>gravações de tela</b>.<br/>
            ➥ instruções: <Link text="iOS" url="https://support.apple.com/pt-br/HT207935"/> | <Link text="Android"
            url="https://www.techtudo.com.br/dicas-e-tutoriais/2017/11/como-gravar-a-tela-do-celular-android-em-video.ghtml" />
        </li>
        <li>pense em uma <b>pessoa especial</b> com quem deseja dividir cerca de <b>3 minutos</b> em 
        silêncio. é <b>fundamental</b> que ela esteja <b>ciente</b> e <b>autorize</b> a 
        gravação da conversa e o uso das imagens para composição de um videoclipe.
        </li>
        <li>inicie a <b>chamada de vídeo</b>, comece a <b>gravação da tela</b> e coloque  
          a <Link text="música" url="https://soundcloud.com/advanhaschi/ao-deijar-fluir-rouxinol"/> pra tocar. 
          tente se conectar apenas com o <b>olhar</b> de sua <b>pessoa especial</b> e
          deixe a <b>emoção</b> rolar. você não precisa falar nada. mas, se quiser, pode! 
        </li>
        <li>sua <b>pessoa especial</b> também pode gravar a chamada do lado dela para nos enviar. 
          vai ser muito legal poder contar com experiências <b>multi-ângulo</b> ;)
        </li>
        <li>por fim, envie as <b>gravações</b> junto com seus <b>nomes</b> para o 
          email <Link text="no.espelho.dos.olhos@gmail.com" url="mailto:no.espelho.dos.olhos@gmail.com"/> 
        </li>
        <li>
            assim que o videoclipe estiver pronto, você vai receber 
            um link para compartilhar o resultado com 
            outras <b>pessoas especiais</b> da sua vida.
        </li>
      </ol>
    </div>
  )
}

const Player = ( props ) => {
  return(
    <iframe className="Player" title="player" scrolling="no" frameborder="no" allow="autoplay" 
      src={props.url}>
    </iframe>
  )
}

const Footer = ( props ) => {
  return(
    <footer className="Footer">
      feito com <span className="HeartIcon">♥</span> por <Link text={props.credits} url={props.url} /> 
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content />
      <Footer credits="Fernando Machado" url="https://github.com/fernandomachado90/espelho-dos-olhos" />
    </div>
  );
}

export default App;
