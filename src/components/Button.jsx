const ButtonVariant = {
  text: "bg-white hover:bg-blue-100 text-blue-500 border-0",
  outline: "border-blue-500 bg-white hover:bg-blue-100 text-blue-500",
  default: "hover:border-gray-500 bg-gray-200 hover:bg-gray-300 text-slate-600",
};

const ButtonVariantHover = {
  text: "bg-blue-100 text-blue-500 border-0",
  outline: "border-blue-500 bg-blue-100 text-blue-500",
  default: "border-gray-500 bg-gray-300 text-slate-600",
};

const ButtonSize = {
  small: "px-5 py-2 text-xs",
  medium: "px-6 py-2.5 text-sm",
  large: "px-7 py-3 text-base",
};

const ButtonDisabled =
  "disabled:pointer-events-none disabled:text-slate-400 disabled:hover:bg-inherit";

const Button = (props) => {
  const {
    variant = "default",
    disabled = false,
    startIcon,
    endIcon,
    size = "medium",
  } = { ...props };

  const labels = { ...props };

  const buttonStyle = `w-fit rounded-lg border-2 font-semibold `;

  const buttonStyleDefinitive = `
  ${buttonStyle} 
  ${ButtonVariant[variant]} 
  ${ButtonSize[size]} 
  ${disabled ? ButtonDisabled : null}
  `;
  const buttonStyleDefinitiveHover = `${buttonStyle} 
  ${ButtonVariantHover[variant]} 
  ${ButtonSize[size]} 
  ${disabled ? ButtonDisabled : null}`;

  return (
    <div className="flex gap-16">
      {" "}
      <div className="flex flex-col">
        <p className="pb-3 text-sm text-slate-500 ">
          {" "}
          {`<Button`}
          {Object.entries(labels).map((el) => (
            <span>
              {" "}
              {el[0]}= "{el[1].toString()}"
            </span>
          ))}
          {`/>`}{" "}
        </p>

        <button disabled={disabled} className={buttonStyleDefinitive}>
          {startIcon} Default {endIcon}
        </button>
      </div>
      <div className="flex flex-col">
        <p className="pb-3 text-sm text-slate-400">&:hover, &:focus</p>
        <button disabled={disabled} className={buttonStyleDefinitiveHover}>
          Default
        </button>
      </div>
    </div>
  );
};

export default Button;
