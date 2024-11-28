import React from 'react';

interface FooterSectionProps {
  title: string;
  items: string[];
  renderItem?: (item: string) => React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  renderItem = (item) => (
    <a href="#" className="hover:text-sky-500 transition-colors">
      {item}
    </a>
  ),
}) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;