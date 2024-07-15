/* eslint-disable react/prop-types */
const Form = ({ onSubmit }) => {
  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const name = e.target[0].value;
    const email = e.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="flex flex-col items-center justify-center h-full -mt-20 gap-10 mx-5"
    >
      <input
        type="text"
        placeholder="Insira seu nome..."
        required
        className="alura-input"
      />
      <input
        type="email"
        placeholder="Insira seu e-mail..."
        required
        className="alura-input"
      />
      <button type="submit" className="alura-btn">
        Seguir
      </button>
    </form>
  );
};

export default Form;
