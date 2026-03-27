interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  step?: number;
  totalSteps?: number;
}

export default function PageHeader({ eyebrow, title, subtitle, step, totalSteps }: Props) {
  return (
    <div className="pt-16 pb-10 border-b border-brand-100">
      <div className="flex items-center justify-between mb-3">
        {eyebrow && (
          <p className="text-xs font-bold text-brand-400 uppercase tracking-widest">
            {eyebrow}
          </p>
        )}
        {step && totalSteps && (
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i < step ? "bg-brand-500" : "bg-brand-100"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-brand-300 font-medium">{step} of {totalSteps}</span>
          </div>
        )}
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-500 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
