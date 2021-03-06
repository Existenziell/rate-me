const Select = ({ values, name, label, placeholder, onChange, selected, required }) => {

  return (
    <label htmlFor={name} className="overlap mb-8 relative w-full cursor-pointer">
      <span className="absolute bg-white text-gray-500 text-xs left-6 -top-2 px-2">{label}</span>

      <select
        id={name}
        name={name}
        defaultValue={selected}
        className='state-select'
        onChange={(e) => onChange(e)}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4 focus:shadow-inner"
        required={required}
      >
        <option value={""} className="first">{placeholder}</option>
        {values.map((item, index) => {
          return (
            <option key={item.abbreviation} value={item.abbreviation} name={name}>
              {item.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default Select
