import Logo from "../assets/heart.svg";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 pb-6 ps-12 pt-8">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="pb-4 text-xl font-semibold text-slate-500"
      >
        Buttons
      </h1>

      <Button />
      <Button variant={"outline"} />
      <Button variant={"text"} />
      <Button disableShadow />
      <div className="flex w-10/12 items-center gap-16">
        <Button disabled />
        <Button variant={"text"} disabled />
      </div>
      <div className="flex w-10/12 items-center gap-16">
        <Button startIcon={Logo} />
        <Button endIcon={Logo} />
      </div>
      <div className="flex w-10/12 items-center gap-16">
        <Button size="small" />
        <Button size="medium" />
        <Button size="large" />
      </div>
      <div className="flex w-10/12 items-center gap-16">
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>
    </div>
  );
};

export default ButtonList;
