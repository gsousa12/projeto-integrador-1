import { useNavigate } from "react-router-dom";

interface DropdownMenuItemProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}
export const DropdownMenuItem = ({
  title,
  description,
  href,
  icon,
}: DropdownMenuItemProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-start gap-3 w-full text-left p-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none hover:cursor-pointer"
      onClick={() => navigate(href)}
      tabIndex={0}
      type="button"
    >
      {icon && <span className="mt-1 text-gray-500">{icon}</span>}
      <span>
        <span className="block font-semibold text-gray-800">{title}</span>
        <span className="block text-xs text-gray-500">{description}</span>
      </span>
    </button>
  );
};
