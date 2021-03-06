import { signIn, signOut, useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
// import Toggle from './form/Toggle'

export default function Navigation() {
  let links = ['Explore', 'Reviews', 'Contact', 'Help']
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    initNav()
  }, [])

  const initNav = () => {
    const navbar = document.getElementById('navbar')
    const navbarOnChange = navbar.querySelector('.navbar-onChange')

    function openMobileNavbar() {
      navbar.classList.add('opened')
      navbarOnChange.setAttribute('aria-label', 'Close navigation menu.')
    }

    function closeMobileNavbar() {
      navbar.classList.remove('opened')
      navbarOnChange.setAttribute('aria-label', 'Open navigation menu.')
    }

    navbarOnChange.addEventListener('click', (e) => {
      e.preventDefault()
      if (navbar.classList.contains('opened')) {
        closeMobileNavbar()
        document.querySelector('main').removeEventListener('click', closeMobileNavbar)

      } else {
        openMobileNavbar()
        document.querySelector('main').addEventListener('click', closeMobileNavbar)
      }
    })

    const navbarLinks = navbar.querySelector('.navbar-links')
    const navbarLinksContainer = navbar.querySelector('.navbar-links')

    navbarLinksContainer.addEventListener('click', (e) => {
      e.stopPropagation()
    })
    navbarLinks.addEventListener('click', closeMobileNavbar)
  }

  return (
    <nav id='navbar' className='flex justify-between items-center border-b p-4 sticky top-0 bg-gray-50 z-10 w-full'>

      <div className="w-1/3">
        <ul className='min-w-90 md:min-w-90 navbar-links flex flex-auto justify-start'>
          {links.map((value, index) => {
            let l = `/${value.toLowerCase()}`
            return (
              <li className='py-2' key={index}>
                <Link href={l}>
                  <a className={`navbar-link ${router.pathname === l ? 'active' : ''}`}>{value}</a>
                </Link>
              </li>
            )
          })}
        </ul>

        <button type='button' className='navbar-onChange visible' aria-label='Open navigation menu'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
      </div>

      <Link href='/'>
        <a className='flex justify-center max-w-1/4 text-4xl'>
          RateMe
        </a>
      </Link>

      <div className="w-4/12 flex flex-row items-center justify-end">

        {!session ?
          <button onClick={() => signIn('auth0')} className='navbar-link'>
            Sign in
          </button>
          :
          <>
            <Link href='/account'>
              <a className='account-icon'>
                <span className="navbar-link-fake">Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
            </Link>
            <button onClick={() => signOut()} className="navbar-link-fake ml-4">
              Sign out
            </button>
          </>
        }
        {/* <Toggle /> */}
      </div>

    </nav>
  )
}
