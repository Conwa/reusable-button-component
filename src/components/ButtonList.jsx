import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex w-full flex-col items-start gap-4 ps-12 pt-8">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="pb-4 text-xl font-semibold text-slate-500"
      >
        Buttons
      </h1>
      <Button variant={"default"} />
      <Button disabled={true} />
    </div>
  );
};

export default ButtonList;
