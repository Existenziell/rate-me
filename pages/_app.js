import { Provider as AuthProvider } from 'next-auth/client'
import { AppWrapper } from '../context/state'
import Head from '../components/Head'
import { AnimatePresence } from "framer-motion"

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/mediaqueries.css'

const RateMeApp = ({ Component, pageProps, router }) => {

  // Added exitBeforeEnter prop to AnimatePresence to make sure the exiting page finishes its exit animation before the next page starts animating.
  // Added a key prop to <Component> and set it to the current route. 
  // This is important so that AnimatePresence can track the presence of child components in the tree.

  return (
    <AuthProvider
      options={{ clientMaxAge: 0, keepAlive: 1 }}
      session={pageProps.session} >

      <AppWrapper>
        <Head />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} router={router} key={router.route} />
        </AnimatePresence>
      </AppWrapper>

    </AuthProvider>
  )
}

export default RateMeApp
