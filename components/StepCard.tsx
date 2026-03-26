interface Props {
  step: number;
  title: string;
  children: React.ReactNode;
  note?: string;
}

export default function StepCard({ step, title, children, note }: Props) {
  return (
    <div className="flex gap-5 my-8">
      {/* Step number */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center text-sm font-bold text-white shadow-sm">
          {step}
        </div>
        <div className="flex-1 w-px bg-brand-100 mt-2" />
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <h3 className="text-brand-500 font-bold text-base mb-3">{title}</h3>
        <div className="text-slate-700 text-sm leading-relaxed space-y-3">
          {children}
        </div>
        {note && (
          <div className="mt-4 flex gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <span className="text-amber-500 flex-shrink-0">💡</span>
            <p className="text-amber-800 text-xs leading-relaxed">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
