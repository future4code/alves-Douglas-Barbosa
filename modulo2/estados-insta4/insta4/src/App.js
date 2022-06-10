import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { IconeComContador } from './components/IconeComContador/IconeComContador'
import iconeComentario from './img/comment_icon.svg'
import iconeMarcacaoPreto from './img/marcacaoPreto.png'
import iconeMarcacaoBranco from './img/marcacaoBranco.png'
import iconeCoracaoBranco from './img/favorite-white.svg'
import iconeCoracaoPreto from './img/favorite.svg'
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class App extends React.Component {
  state = {
    arrayPosts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Arnold',
        fotoUsuario: 'https://i.pinimg.com/736x/e3/dd/31/e3dd31d565d655c092da9a0fee75df79--hey-arnold-avatar.jpg',
        fotoPost: 'https://picsum.photos/id/237/536/354'
      },
      {
        nomeUsuario: 'Helga',
        fotoUsuario: 'https://cdn.costumewall.com/wp-content/uploads/2017/10/helga.jpg',
        fotoPost: 'https://picsum.photos/536/354',
      },
    ],
    arrayOutrasPostagens: [
      {
        inputNomeUsuarioPost: 'Gerald',
        inputFotoUsuarioPost: 'https://pbs.twimg.com/media/EbOkYXVXgAAleoJ.jpg',
        inputImagemPost: 'https://picsum.photos/seed/picsum/536/354',
      },
    ],
    inputNomeUsuarioPost: '',
    inputFotoUsuarioPost: '',
    inputImagemPost: '',

    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false
  };

  onClickCurtida = () => {
    if (this.state.numeroCurtidas === 0) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcacao = () => {
    this.setState({
      marcacao: !this.state.marcacao
    })
  }

  adicionaPostagem = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaPostagem = {

      inputNomeUsuarioPost: this.state.inputNomeUsuarioPost,
      inputFotoUsuarioPost: this.state.inputFotoUsuarioPost,
      inputImagemPost: this.state.inputImagemPost
    };

    const novoArrayPostagens = [...this.state.arrayOutrasPostagens, novaPostagem]

    this.setState({ arrayOutrasPostagens: novoArrayPostagens })
  }

  onChangeInputNomeUsuarioPost = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ inputNomeUsuarioPost: event.target.value });
  };

  onChangeInputFotoUsuarioPost = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ inputFotoUsuarioPost: event.target.value });
  };

  onChangeInputImagemPost = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ inputImagemPost: event.target.value });
  };



  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let iconeMarcacao
    if (this.state.marcacao) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }


    const listaDePosts = this.state.arrayPosts.map((post) => {
      return <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost} />
    }
    )

    const novaListaDePosts = this.state.arrayOutrasPostagens.map((novoPost, indice) => {
      return <PostContainer key={indice}>
      <PostHeader>
        <UserPhoto src={novoPost.inputFotoUsuarioPost} alt={'Imagem do usuario'} />
        <p>{novoPost.inputNomeUsuarioPost}</p>
      </PostHeader>

      <PostPhoto src={novoPost.inputImagemPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
    })

    return (
      <MainContainer>
        <div>{listaDePosts}</div>
        <div>{novaListaDePosts}</div>
        <input
          value={this.state.inputNomeUsuarioPost}
          onChange={this.onChangeInputNomeUsuarioPost}
          placeholder={"Nome"}
        />
        <input
          value={this.state.inputFotoUsuarioPost}
          onChange={this.onChangeInputFotoUsuarioPost}
          placeholder={"Link: foto do usuario"}
        />
        <input
          value={this.state.inputImagemPost}
          onChange={this.onChangeInputImagemPost}
          placeholder={"Link: Imagem a ser postada"}
        />
        <button onClick={this.adicionaPostagem}>Postar</button>
      </MainContainer>
    );
  }
}

export default App;
