"use client";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  // Handle click event for category box
  const handleClick = useCallback(() => {
    let currentQuery = {};
    // Parse the current search params
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };
    // Remove category from query if it is already selected
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    // Create the updated URL with the new query parameters
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    // Navigate to the updated URL
    router.push(url);
  }, [label, router, params]);
  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};
export default CategoryBox;
