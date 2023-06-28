const inputStyle = `w-full rounded-md border border-black 
  px-4 py-4 text-sm font-semibold leading-tight text-slate-500`;

const Input = (props) => {
  const {
    error = false,
    disabled = false,
    helperText,
    startIcon,
    endIcon,
    value = "",
    size = "medium",
    fullwidth = false,
    multiline = false,
    row = 0,
  } = { ...props };

  const labels = { ...props };

  return (
    <div className="mb-4">
      <p className="pb-3 text-sm text-slate-500 ">
        {" "}
        {`<Input`}
        {Object.entries(labels).map((el) => (
          // eslint-disable-next-line react/jsx-key
          <span>
            {" "}
            {el[0]}= "{el[1].toString()}"
          </span>
        ))}{" "}
        {`/>`}
      </p>
      <label
        className="mb-2 block font-sans text-sm text-slate-700"
        htmlFor="inputElement"
      >
        Label
      </label>
      <input
        className={inputStyle}
        id="inputElement"
        type="text"
        value={value}
        placeholder="Placeholder"
      ></input>
      <label
        className="mt-1 block font-sans text-sm text-gray-500"
        htmlFor="inputElement"
      >
        {helperText}
      </label>
    </div>
  );
};

export default Input;
