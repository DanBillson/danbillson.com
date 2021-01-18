import matter from 'gray-matter'

import Header from '../components/header'
import Hero from '../components/hero'
import Grid from '../components/grid'
import Event from '../components/event'
import Footer from '../components/footer'

export default function Home(props) {
  console.log({ props })
  return (
    <div>
      <Header />
      <Hero {...props} />
      <Grid title="Professional">
        {props.professional.map((job) => (
          <Event key={job.name} {...job} />
        ))}
      </Grid>
      <Footer />
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
