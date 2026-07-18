import { Scale, BarChart2, Search, Landmark, FolderOpen, Lightbulb } from "lucide-react";

const ICON_MAP = {
  Scale,
  BarChart2,
  Search,
  Landmark,
  FolderOpen,
  Lightbulb,
};

export default function SectionContent({ sec }) {
  const Icon = ICON_MAP[sec.icon];

  return (
    <div className="fsap-section">
      <div className="fsap-section-heading">
        {Icon && <Icon size={15} strokeWidth={2} />} {sec.label}
      </div>

      {sec.stats && (
        <div className="fsap-stats">
          {sec.stats.map((s) => (
            <div key={s.num} className="fsap-stat-card">
              <span className="fsap-stat-num">{s.num}</span>
              <span className="fsap-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {sec.content && (
        <div dangerouslySetInnerHTML={{ __html: sec.content }} />
      )}

      {sec.listItems && (
        <ol className="fsap-list">
          {sec.listItems.map((item, i) => (
            <li key={i} className="fsap-list-item">
              <span className="fsap-list-badge">{i + 1}</span>
              <span><strong>{item.title}:</strong> {item.text}</span>
            </li>
          ))}
        </ol>
      )}

      {sec.cases && sec.cases.map((c) => (
        <div key={c.name} className="fsap-case-card">
          <div className="fsap-case-name">{c.name}</div>
          <p className="fsap-case-desc">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
