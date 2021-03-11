const formatDigit = (value) => {
  return value.toLocaleString().replace(/,/g, '.')
}
export default formatDigit;