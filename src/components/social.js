import styled from 'styled-components'
import Github from '../public/github.svg'
import Instagram from '../public/instagram.svg'
import Linkedin from '../public/linkedin.svg'
import Medium from '../public/medium.svg'

const social = [
  {
    icon: <Github />,
    link: `https://github.com/danbillson`,
  },
  {
    icon: <Instagram />,
    link: `https://www.instagram.com/danbillson/`,
  },
  {
    icon: <Linkedin />,
    link: `https://www.linkedin.com/in/danielbillson/`,
  },
  {
    icon: <Medium />,
    link: `https://medium.com/@danielbillson`,
  },
]

export default function Social() {
  return (
    <Container>
      {social.map(({ icon, link }) => (
        <a key={link} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 20px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 50px;
    fill: ${({ theme }) => theme.colors.bg};
    cursor: pointer;
  }
`
