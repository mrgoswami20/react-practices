function Input({ name, value, id, handleChange }) {
    return (
      <>
        <input
          type="radio"
          name={name}
          value={value}
          id={id}
          onChange={handleChange}
        />
        <label htmlFor={id}>{id}</label>
      </>
    );
  }

  export default Input;