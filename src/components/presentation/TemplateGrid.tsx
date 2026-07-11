import TemplateCard from "./TemplateCard";
import {
  templates,
  TemplateType,
} from "./templates";

interface Props {
  selectedTemplate: TemplateType;
  onTemplateChange: (
    template: TemplateType
  ) => void;
}

export default function TemplateGrid({
  selectedTemplate,
  onTemplateChange,
}: Props) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          selected={selectedTemplate === template.id}
          onSelect={onTemplateChange}
        />
      ))}
    </div>
  );
}