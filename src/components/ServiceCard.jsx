function ServiceCard({ icon, title, description }) {
  return (
    <article className="group h-full rounded-lg border border-[#d6e8fb] bg-white p-6 shadow-[0_18px_45px_rgba(11,115,217,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0b73d9] hover:shadow-[0_24px_55px_rgba(11,115,217,0.16)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf5ff] text-[#0b73d9] ring-1 ring-[#b9dcff] transition group-hover:bg-[#0b73d9] group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#071c33]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#42617d]">{description}</p>
    </article>
  );
}

export default ServiceCard;
