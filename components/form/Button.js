const Button = ({ text, size, modifier, icon }) => {

  let isPromo
  if (modifier) {
    isPromo = modifier.includes('promo')
  }

  return (
    <>
      <button
        className={`button font-sans flex items-center 
          ${isPromo ? 'text-white' : 'text-gray-700'} 
          ${modifier}
        `}
        style={{ width: size ? `${size}px` : `auto` }}
      >
        {icon === 'search' &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
        {icon === 'thumb' &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        }
        {text}
      </button>

      <style jsx>{`
        .button {
          box-shadow: -5px -5px 10px #111, 5px 5px 10px #333;
        }
        .button:hover {
          box-shadow: -2px -2px 5px #111, 2px 2px 5px #333;
        }
      `}</style>
    </>
  )
}

export default Button
