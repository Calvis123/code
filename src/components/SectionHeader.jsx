function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b73d9]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071c33] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#42617d]">{description}</p>
    </div>
  );
}

export default SectionHeader;
