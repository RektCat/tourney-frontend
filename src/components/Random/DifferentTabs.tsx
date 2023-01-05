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
    const tl = anime.timeline({
      duration: 750,
      easing: "easeOutQuad",
    });

    tl.add({
      targets: ".tab-content",
      opacity: [0, 1],
      translateX: ["100%", "0%"],
    }).add(
      {
        targets: ".tabs-header-border",
        opacity: [0, 1],
      },
      250
    );
  }, [selectedIndex]);

  return (
    <div className="flex flex-col overflow-hidden md:flex-row">
      <ul className="tabs-header relative isolate list-none md:w-1/4 md:border-r md:border-transparent">
        {tabs.map((tab, index) => (
          <li
            key={tab.label}
            className={`cursor-pointer py-2 px-4 font-bold text-black opacity-95 hover:opacity-100 ${
              index === selectedIndex ? "bg-gray-300 text-black" : "bg-gray-100 text-black/60"
            }`}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {tab.label}
          </li>
        ))}
        <span className="tabs-header-border absolute inset-0 -z-50 inline-block md:border-r md:border-gray-300"></span>
      </ul>
      <div className="tab-content relative flex-1 border-y-[1px] border-white p-4">
        <div>{tabs[selectedIndex].content}</div>
      </div>
    </div>
  );
}

export default DifferentTabs;
