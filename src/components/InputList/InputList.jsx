import Input from "./Input";

const InputList = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 pb-6 ps-12 pt-8">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="pb-4 text-xl font-semibold text-slate-500"
      >
        Inputs
      </h1>
      <Input />
    </div>
  );
};

export default InputList;
