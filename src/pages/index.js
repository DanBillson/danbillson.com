import matter from 'gray-matter'

import Header from '../components/header'
import Hero from '../components/hero'

export default function Home(props) {
  return (
    <div>
      <Header />
      <Hero {...props} />
    </div>
  )
}

export async function getStaticProps() {
  const home = await import('../data/home.md')
  const { data } = matter(home.default)

  return {
    props: {
      ...data,
    },
  }
}
