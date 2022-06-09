import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
        nomeUsuario={'Arnold'}
        fotoUsuario={'https://i.pinimg.com/736x/e3/dd/31/e3dd31d565d655c092da9a0fee75df79--hey-arnold-avatar.jpg'}
        fotoPost={'https://picsum.photos/id/237/536/354'}
        />

        <Post
        nomeUsuario={'Helga'}
        fotoUsuario={'https://cdn.costumewall.com/wp-content/uploads/2017/10/helga.jpg'}
        fotoPost={'https://picsum.photos/536/354'}
        />
      </MainContainer>
    );
  }
}

export default App;
