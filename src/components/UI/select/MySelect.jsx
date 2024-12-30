const MySelect = ({
  options, 
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select 
      value={value}
      onChange={event => onChange(event.target.value)}
      >
      {/* <option value='name'>По названию</option>
      <option value='description'>По описанию</option>
      <option value='date'>По дате</option> */}

      <option disabled value=''>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  )
}

export default MySelect