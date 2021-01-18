import YouTube from 'react-youtube'

export default function Video({ video }) {
  const opts = {
    height: '390',
    width: '100%',
  }

  return <YouTube videoId={video.split(`?v=`)[1]} opts={opts} />
}
