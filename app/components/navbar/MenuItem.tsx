"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string | null;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  console.log("🚀 ~ file: MenuItem.tsx:9 ~ label:", label);
  return (
    <div
      onClick={onClick}
      className="
    px-4
    py-3
    hover: bg-neutral-100
    transition
    font-semibold  
    hover:bg-gray-100
  "
    >
      {label}
    </div>
  );
};

export default MenuItem;
