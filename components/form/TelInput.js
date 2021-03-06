const TelInput = ({ value, name, label, placeholder, onChange, suffix, required }) => {

  return (
    <label htmlFor={name} className="overlap mb-8 relative w-full cursor-pointer">
      <span className="absolute bg-white text-gray-500 text-xs left-6 -top-2 px-2">{label}</span>
      <input
        type="tel"
        pattern=".*"
        minLength="6"
        maxLength="32"
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4 focus:shadow-inner"
      />
      {suffix &&
        <p className="pl-2 text-xl w-1/6 text-right	absolute top-1/4 right-16">{suffix}</p>
      }
    </label>
  )
}

export default TelInput
