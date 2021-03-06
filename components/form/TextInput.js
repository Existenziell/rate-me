const TextInput = ({ value, name, label, placeholder, onChange, required }) => {

  return (
    <label htmlFor={name} className="overlap mb-8 relative w-full cursor-pointer">
      <span className="absolute bg-white text-gray-500 text-xs left-6 -top-2 px-2">{label}</span>

      <input
        type="text"
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4 focus:shadow-inner"
      />
    </label>
  )
}

export default TextInput
