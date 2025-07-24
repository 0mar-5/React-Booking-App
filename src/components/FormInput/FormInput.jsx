function FormInput({
  label,
  id,
  type = "text",
  register,
  name,
  rules,
  error,
  options,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {options ? (
        <select
          id={id}
          {...register(name, rules)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">-- Select Country --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      )}

      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default FormInput;
