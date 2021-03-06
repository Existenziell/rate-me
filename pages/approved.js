import Link from 'next/link'
import Main from '../components/Main'

const Approved = () => (
  <Main title='You’re Approved'>
    <div className='flex flex-col items-center justify-center my-16 px-6 text-center w-full md:w-1/2 mx-auto'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        className="text-brand w-1/3">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <h1 className="my-6">You’re Approved!</h1>
      <p className="">
        Now let’s lock in your rate.
          </p>
      <p>
        Congratulations! Your rate reflects our best possible pricing.
        Let’s make sure your new mortgage stays just how you like it!
            Protect it from changing by locking your rate with{' '}
        <Link href='/'><a>one more click</a></Link>.
          </p>
    </div>
  </Main>
)

export default Approved
