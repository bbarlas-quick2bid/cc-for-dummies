interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="pt-16 pb-10 border-b border-white/10">
      {eyebrow && (
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
