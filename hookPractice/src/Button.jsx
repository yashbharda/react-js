function Button({ onClick }) {
  console.log("Button Rendered")

  return (
    <button onClick={onClick}>
      Increase
    </button>
  )
}

export default Button