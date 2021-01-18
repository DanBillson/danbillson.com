import styled from 'styled-components'

import Social from './social'

export default function Footer() {
  return (
    <Container>
      <Social />
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.fg};

  @media screen and (min-width: 768px) {
    margin: 3rem auto 1rem;
    width: calc(100% - 2rem);
    border-radius: 1.5rem;
  }
`
