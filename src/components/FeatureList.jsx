function FeatureList({ items }) {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-md border border-[#d7eaff] bg-white px-4 py-3 shadow-[0_14px_36px_rgba(11,115,217,0.07)] transition hover:border-[#0b73d9] hover:bg-[#f7fbff]"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0b73d9] text-sm font-bold text-white">
            &#10003;
          </span>
          <p className="font-semibold text-[#102033]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
