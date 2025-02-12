
"use client"; // Add this for Next.js app directory compatibility

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface DropdownProps {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
  }
const Dropdown: React.FC<DropdownProps> = ({  options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const options = ["Option 1", "Option 2", "Option 3"];
    const [selected, setSelected] = useState<string | null>(null);

  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleSelect = (option: string) => {
        setSelected(option);
        onSelect(option); // Trigger the callback
        setIsOpen(false);
      };
  
    return (
    <div className="relative inline-block w-64">
    {/* Dropdown Button */}
    <button
      onClick={toggleDropdown}
      className="flex font-inter font-medium text-sm text-[#1959AC]"
    >
      Lorem
      <ChevronDownIcon className="w-5 h-5 text-[#1959AC]" />
    </button>

    {/* Dropdown Menu */}
    {isOpen && (
      <ul className="absolute left-0   border rounded-lg shadow-lg mt-2 z-10">
        {options.map((option) => (
          <li
            key={option}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
           handleSelect(option)
                //   setIsOpen(false);
            //    alert(`You selected: ${option}`);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
    );

}

export default Dropdown