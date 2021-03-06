import dynamic from 'next/dynamic'
import Main from '../components/Main'

const Explore = () => {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading Map...",
    ssr: false
  })

  return (
    <Main title='Explore' titleSuffix={true}>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overscroll-none">
        <Map />
      </div>
    </Main>
  )
}

export default Explore
