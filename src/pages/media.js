import matter from 'gray-matter'

import Header from '../components/header'
import Heading from '../components/heading'
import MediaList from '../components/mediaList'
import Box from '../components/box'
import Social from '../components/social'

export default function Media({ list, ...props }) {
  console.log({ list })
  return (
    <div>
      <Header />
      <Heading {...props} />
      <MediaList list={list} />
      <Box>
        <Social />
      </Box>
    </div>
  )
}

export async function getStaticProps() {
  const media = await import('../data/media.md')
  const { data } = matter(media.default)

  return {
    props: {
      ...data,
    },
  }
}
