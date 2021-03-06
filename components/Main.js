import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from '../context/themeContext'
import { motion } from "framer-motion"
import Navigation from './Navigation'
import Footer from './Footer'

const addBrandToTitle = (title, addSuffix = true) => (addSuffix ? `${title} | RateMe` : title)

const Main = ({ title, children, titleSuffix = true }) => {
  const router = useRouter()

  return (
    <Fragment>
      <ThemeProvider>
        <div className="flex flex-col h-screen">

          <Navigation />
          <motion.main className='flex-1 overflow-y-scroll overscroll-x-none'
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.6 }}
          // exit={{ x: 100, opacity: 0 }} 
          >
            <NextSeo title={addBrandToTitle(title, titleSuffix)} />
            {children}
          </motion.main>
          {(router.pathname !== '/onboarding' && router.pathname !== '/apply') && <Footer />}

        </div>
      </ThemeProvider>
    </Fragment>
  )
}

export default Main
