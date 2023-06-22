const Footer = () => {
  return (
    <div className=" mt-auto w-full border-t-2 border-slate-400 p-3">
      <p className="cursor-default font-mono text-xs text-slate-500">
        created by{" "}
        <a
          href="https://github.com/Conwa"
          target="_blank"
          className="font-bold hover:text-slate-900"
          rel="noreferrer"
        >
          Conwa
        </a>{" "}
        - devchallenges.io
      </p>
    </div>
  );
};
export default Footer;
