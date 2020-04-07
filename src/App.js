import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div class="Title">
          no<br/>espelho<br/>dos olhos
        </div>
      </header>

      <div className="Content">
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
            com o propósito de <b>aquecer mais corações</b>: vamos construir um clipe 
            para a música <b>"Ao Deijar Fluir"</b>, do artista 
            joseense <b>Advan Haschi</b>, usando apenas imagens capturadas em vídeo chamadas.
          </p>
          <p>
            quer <b>fazer parte</b>? siga as instruções! compartilhe em suas redes!</p>       
          <p>
            não temos pressa, então não vamos estabelecer uma <b>data limite</b> para os envios.
            vamos ir <b>costurando</b> os vídeos conforme forem chegando.
          </p>
          <p>
            fique em casa e fique bem!
          </p>
        </div>

        <div className="Instructions">
        <p className="Subtitle">como fazer parte</p>
          <ol>
            <li>certifique-se de que seu dispositivo está apto a realizar gravações de tela.<br/>
                ➥ instruções: <a rel="noopener noreferrer" className="Link" target="_blank" 
                href="https://support.apple.com/pt-br/HT207935"> iOS
                </a> | <a rel="noopener noreferrer" className="Link" target="_blank" 
                href="https://www.techtudo.com.br/dicas-e-tutoriais/2017/11/como-gravar-a-tela-do-celular-android-em-video.ghtml">
                Android</a>
            </li>
            <li>pense em uma <b>pessoa especial</b> com quem deseja dividir cerca de <b>3 minutos</b> em 
            silêncio. é <b>fundamental</b> que ela esteja <b>ciente</b> de que a conversa será gravada.
            </li>
            <li>inicie a <b>chamada de vídeo</b>, comece a <b>gravação da tela</b> e coloque  
              a <a rel="noopener noreferrer" className="Link" target="_blank" 
              href="https://soundcloud.com/advanhaschi/ao-deijar-fluir-rouxinol">música</a> pra tocar. 
              tente se conectar apenas com o <b>olhar</b> de sua <b>pessoa especial</b> e
              deixe a <b>emoção</b> rolar. você não precisa falar nada. mas, se quiser, pode! 
            </li>
            <li>sua <b>pessoa especial</b> também pode gravar a chamada do lado dela para nos enviar. 
              vai ser muito legal poder contar com experiências <b>multi-ângulo</b> ;)
            </li>
            <li>por fim, envie as gravações para o email
                <br/>➥ <a rel="noopener noreferrer" className="Link" target="_blank" 
                href="mailto:no.espelho.dos.olhos@gmail.com">no.espelho.dos.olhos@gmail.com</a>
                <br/><br/>
                assim que o vídeo ficar pronto, você vai receber o link por email para compartilhar 
                com outras <b>pessoas especiais</b> da sua vida.
            </li>
          </ol>
        </div>

        <iframe className="Song" title="song" scrolling="no" frameborder="no" allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309064171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
      </div>

      <footer className="Footer">
        feito com <span className="HeartIcon">♥</span> por <a rel="noopener noreferrer" className="Link"
         target="_blank" href="https://github.com/fernandomachado90/espelho-dos-olhos">Fernando Machado</a>
      </footer>
    </div>
  );
}

export default App;
