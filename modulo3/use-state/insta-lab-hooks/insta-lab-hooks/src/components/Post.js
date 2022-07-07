import { useState } from "react";
function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.

  const [curtido, mudarCurtida] = useState(false)
  const [numeroCurtidas, mudarNumeroCurtidas] = useState(0)
  const [comentando, mudarCaixaComentario] = useState(false)
  const [numeroComentarios, mudarNumeroComentariosPost] = useState(0)
  const [comentarios, adicionarComentarios] = useState([])
  const [inputValue, adicionarInputValue] = useState("")

  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      mudarCurtida(!curtido)
      mudarNumeroCurtidas(numeroCurtidas - 1)
    } else {
      mudarCurtida(!curtido)
      mudarNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  // Passo7
  const onClickComentario = () => {
    mudarCaixaComentario(!comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
    adicionarInputValue(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    adicionarComentarios(listaDeComentarios)
    mudarCaixaComentario(false)
    mudarNumeroComentariosPost(numeroComentarios + 1)
    adicionarInputValue("")
  };

  {/* Passo6 */ }
  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => enviarComentario(inputValue)} >Enviar</button>
    </>
  ) : (
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
        <p>{comentario}</p>
       </div>
      )
    })
    // Passo8
    
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
    
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario} >
            {/* Passo6 */}
            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;