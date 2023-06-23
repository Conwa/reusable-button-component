const ButtonVariant = {
  text: "bg-white hover:bg-blue-100 text-blue-500 border-0",
  outline: "border-blue-500 bg-white hover:bg-blue-100 text-blue-500",
  default:
    "hover:border-gray-400 border-gray-300 bg-gray-300 hover:bg-gray-400 text-slate-600",
};

const ButtonVariantHover = {
  text: "bg-blue-100 text-blue-500 border-0",
  outline: "border-blue-500 bg-blue-100 text-blue-500",
  default: "border-gray-400 bg-gray-400 text-slate-600",
};

const ButtonSize = {
  small: "px-5 py-2 text-xs",
  medium: "px-6 py-2.5 text-sm",
  large: "px-7 py-3 text-base",
};

const ButtonDisabled =
  "disabled:pointer-events-none disabled:text-slate-400 disabled:hover:bg-inherit";

const ButtonDisableShadow =
  "bg-blue-600 text-white border-blue-600 hover:bg-blue-600 hover:border-blue-600";

const Button = (props) => {
  const {
    variant = "default",
    disabled = false,
    disableShadow = false,
    startIcon,
    endIcon,
    size = "medium",
  } = { ...props };

  const labels = { ...props };
  console.log(props.variant);

  const buttonStyle = `w-fit rounded-lg border-2 font-semibold `;

  const buttonStyleDefinitive = `
  ${buttonStyle} 
  ${ButtonVariant[variant]} 
  ${ButtonSize[size]} 
  ${disabled ? ButtonDisabled : null}
  ${disableShadow ? ButtonDisableShadow : null}
  `;
  const buttonStyleDefinitiveHover = `${buttonStyle} 
  ${ButtonVariantHover[variant]} 
  ${ButtonSize[size]} 
  ${disabled ? ButtonDisabled : null} 
  `;
  if (props.variant && labels.disabled !== true) {
    return (
      <div className="flex w-6/12 justify-between gap-16">
        {" "}
        <div className="flex  flex-col">
          <p className="pb-3 text-sm text-slate-500 ">
            {" "}
            {`<Button`}
            {Object.entries(labels).map((el) => (
              // eslint-disable-next-line react/jsx-key
              <span>
                {" "}
                {el[0]}= "{el[1].toString()}"
              </span>
            ))}
            {`/>`}{" "}
          </p>

          <button disabled={disabled} className={buttonStyleDefinitive}>
            {startIcon ? <img src={startIcon} /> : null} Default {endIcon}
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
  } else {
    return (
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
        <button
          disabled={disabled}
          className={buttonStyleDefinitive}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".3rem",
          }}
        >
          {startIcon ? (
            <img src={startIcon} className="m-0 h-7 w-auto" />
          ) : null}
          Default
          {endIcon ? <img src={endIcon} className="m-0 h-7 w-auto" /> : null}
        </button>
      </div>
    );
  }
};

export default Button;
