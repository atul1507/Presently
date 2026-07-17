import TemplateCard from "./TemplateCard";

import {
  templateList,
  TemplateId,
} from "./templates";

interface Props {
  selectedTemplate: TemplateId;

  onTemplateChange: (
    template: TemplateId
  ) => void;
}

export default function TemplateGrid({
  selectedTemplate,
  onTemplateChange,
}: Props) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      {templateList.map((template) => (
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