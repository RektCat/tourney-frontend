import React, { useState, useEffect } from "react";
import anime from "animejs";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function DifferentTabs({ tabs }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    anime({
      targets: ".tab-content",
      translateX: ["100%", "0%"],
      duration: 250,
      easing: "easeOutExpo",
    });
  }, [selectedIndex]);

  return (
    <div className="flex flex-col overflow-hidden md:flex-row">
      <ul className="list-none md:w-1/4 md:border-r md:border-gray-300">
        {tabs.map((tab, index) => (
          <li
            key={tab.label}
            className={`cursor-pointer py-2 px-4 font-bold text-black ${
              index === selectedIndex ? "bg-gray-300 text-black" : "bg-gray-100 text-black/60"
            }`}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content relative flex-1 p-4">
        <div className="absolute inset-0">{tabs[selectedIndex].content}</div>
      </div>
    </div>
  );
}

export default DifferentTabs;
