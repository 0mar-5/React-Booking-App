function Button({ children, onClick }) {
  return (
    <button className="rounded-3xl bg-white text-black" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
