interface Props {
  icon: string;
  title: string;
  children: React.ReactNode;
  accent?: "violet" | "blue" | "green" | "amber" | "rose";
}

const accentMap = {
  violet: "border-violet-500/30 bg-violet-950/20",
  blue:   "border-blue-500/30 bg-blue-950/20",
  green:  "border-green-500/30 bg-green-950/20",
  amber:  "border-amber-500/30 bg-amber-950/20",
  rose:   "border-rose-500/30 bg-rose-950/20",
};

const titleMap = {
  violet: "text-violet-300",
  blue:   "text-blue-300",
  green:  "text-green-300",
  amber:  "text-amber-300",
  rose:   "text-rose-300",
};

export default function ConceptCard({ icon, title, children, accent = "violet" }: Props) {
  return (
    <div className={`rounded-xl border p-5 my-5 ${accentMap[accent]}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className={`font-semibold text-base ${titleMap[accent]}`}>{title}</h3>
      </div>
      <div className="text-gray-300 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
