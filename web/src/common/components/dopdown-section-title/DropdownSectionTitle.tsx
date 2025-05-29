interface DropdownSectionTitleProps {
  title: string;
  icon?: any;
}
export const DropdownSectionTitle = ({
  title,
  icon,
}: DropdownSectionTitleProps) => (
  <h2 className="flex items-center gap-2 font-bold text-lg mb-3 text-gray-800">
    {icon}
    {title}
  </h2>
);
