export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[rgba(0,131,164,1)] to-[rgba(0,131,164,0.8)] shadow-[0px_0px_12px_rgba(0,131,164,1)]">
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(0,131,164,.7)_inset] rounded-lg" />
      </div>
      <span>{props.children}</span>
    </button>
  );
};
