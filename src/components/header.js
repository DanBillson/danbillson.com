import styled from 'styled-components'
import Link from 'next/link'

export default function Header() {
  return (
    <Container>
      <Link href="/media">
        <Anchor>media</Anchor>
      </Link>
      <Link href="/">
        <Logo>
          DanBillson<span>.</span>
        </Logo>
      </Link>
      <Link href="/cheer">
        <Anchor>cheer</Anchor>
      </Link>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.colors.fg};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.23s ease-in-out;
  }
`

const Logo = styled.a`
  margin: 0 2rem;
  font-size: 2rem;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Anchor = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
