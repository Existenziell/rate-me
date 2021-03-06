import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-center border-t bg-gray-50 px-8 py-3">

        <div className="flex flex-row items-center justify-between text-xs w-full">
          <div>
            <span className="relative top-0.5 mr-0.5">&copy;</span>{' '}
            <Link href="/"><a className="">2021 | RateMe</a></Link>
          </div>
          <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
        </div>
      </footer>
    </>
  )
}
