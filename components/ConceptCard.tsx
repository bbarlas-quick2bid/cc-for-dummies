interface Props {
  icon: string;
  title: string;
  children: React.ReactNode;
  accent?: "brand" | "blue" | "green" | "amber" | "rose";
}

const accentMap = {
  brand: "border-brand-200 bg-brand-50",
  blue:  "border-blue-200 bg-blue-50",
  green: "border-green-200 bg-green-50",
  amber: "border-amber-200 bg-amber-50",
  rose:  "border-rose-200 bg-rose-50",
};

const titleMap = {
  brand: "text-brand-500",
  blue:  "text-blue-700",
  green: "text-green-700",
  amber: "text-amber-700",
  rose:  "text-rose-700",
};

const bodyMap = {
  brand: "text-brand-700",
  blue:  "text-blue-900",
  green: "text-green-900",
  amber: "text-amber-900",
  rose:  "text-rose-900",
};

export default function ConceptCard({ icon, title, children, accent = "brand" }: Props) {
  return (
    <div className={`rounded-xl border p-5 my-5 ${accentMap[accent]}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className={`font-semibold text-base ${titleMap[accent]}`}>{title}</h3>
      </div>
      <div className={`text-sm leading-relaxed space-y-2 ${bodyMap[accent]}`}>
        {children}
      </div>
    </div>
  );
}
