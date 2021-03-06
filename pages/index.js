import { useSession } from 'next-auth/client'
import { motion } from "framer-motion"
import Link from 'next/link'
import Main from '../components/Main'
import Button from '../components/form/Button'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <>
      <Main title='RateMe' titleSuffix={false}>
        <div className="bg-cozumel bg-cover bg-center flex flex-col items-center justify-center px-6 h-full">

          <h1 className="text-center sm:w-1/3 md:w-2/5 text-brand">
            A fresh approach to customer care.
          </h1>

          <h2 className="mt-8 mb-16 text-center w-2/3 md:w-2/5 p-4 bg-opacity-60 bg-white">
            More transparency through real ratings. Perks &amp; Rewards for good customers!
          </h2>

          <Link href="/explore">
            <motion.a className="mb-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }} >
              <Button text="Explore" modifier="primary promo" icon='search' size={220} />
            </motion.a>
          </Link>

          <Link href="/apply">
            <motion.a
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }} >
              <Button text="Rate now" modifier="primary promo" icon='thumb' size={220} />
            </motion.a>
          </Link>

        </div>
      </Main>
    </>
  )
}
