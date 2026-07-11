import TemplateCard from "./TemplateCard";
import { templates } from "./templates";

export default function TemplateGrid() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
        />
      ))}
    </div>
  );
}