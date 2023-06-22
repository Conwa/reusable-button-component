const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full border-t-2 border-slate-400 p-3">
      <p className="font-mono text-xs text-gray-500">
        created by{" "}
        <a
          href="https://github.com/Conwa"
          target="_blank"
          className="font-bold"
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
