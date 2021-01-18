import matter from 'gray-matter'

import Header from '../components/header'
import Hero from '../components/hero'
import Grid from '../components/grid'
import Event from '../components/event'
import Preview from '../components/preview'
import Box from '../components/box'
import Social from '../components/social'

export default function Home(props) {
  return (
    <div>
      <Header />
      <Hero {...props} />
      <Grid title="Professional">
        {props.professional.map((job) => (
          <Event key={job.name} {...job} />
        ))}
      </Grid>
      <Box>
        <Grid title="Blog">
          {props.blog.map((preview) => (
            <Preview key={preview.title} {...preview} />
          ))}
        </Grid>
        <Social />
      </Box>
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
