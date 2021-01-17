import styled from 'styled-components'
import Social from '../components/social'

export default function Hero({ title, tagline, image }) {
  return (
    <Container>
      <Content>
        <div>
          <Title>{title}</Title>
          <Tagline>{tagline}</Tagline>
          <Social />
        </div>
        <img src={image} alt="Coding" />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 50vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.fg};
  border-radius: 1.5rem;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 3rem;
  padding: 3rem;
  max-width: 1024px;

  img {
    display: none;
    height: 50vh;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    img {
      display: block;
    }
  }
`

const Title = styled.h1`
  margin-top: 0;
  font-size: 3rem;
  font-family: 'Bodoni Moda', serif;
`

const Tagline = styled.p`
  max-width: 395px;
`
