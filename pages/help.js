import Link from 'next/link'
import Main from '../components/Main'
import config from '../app.config'

const Help = () => (
  <>
    <Main title='Help' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16 px-6">
        <h1>Help</h1>
        <div className="my-8 px-6 md:px-16 lg:px-32">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Link href="/">
          <a>
            <button>Back</button>
          </a>
        </Link>
      </div>
    </Main>

    <style jsx>{`
      h2 {
        margin-top: 48px;
        margin-bottom: 12px;
        font-size: 1.5rem;
      }
    `}</style>
  </>
)

export default Help
