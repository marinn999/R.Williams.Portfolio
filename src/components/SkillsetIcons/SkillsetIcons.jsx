import { useState, useEffect } from "react";
import s from "./SkillsetIcons.module.css";

const SkillsetIcons = () => {
  const [position, setPosition] = useState(0);
  const speed = 1; // move 1px

  const items = [
    { id: 1, width: 85, height: 21, icon: "icon-5" },
    { id: 2, width: 71, height: 29, icon: "icon-6" },
    { id: 3, width: 28, height: 28, icon: "icon-7" },
    { id: 4, width: 21, height: 21, icon: "icon-8" },
    { id: 5, width: 154, height: 25, icon: "icon-9" },
    { id: 6, width: 180, height: 140, icon: "icon-10" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev - speed); // move el left -1px
    }, 16); // every 16 ms
    return () => clearInterval(interval);
  }, []);

  const itemWidth = 200;
  const totalWidth = itemWidth * items.length;

  // Скидаємо позицію, коли список прокручено повністю
  if (Math.abs(position) >= totalWidth) {
    setPosition(0);
  }

  return (
    <section className={s.section}>
      <ul
        className={s.list}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {/* Дублюємо масив елементів для безшовного ефекту */}
        {[...items, ...items].map((item, index) => (
          <li key={index} className={s.item}>
            <svg className={s.icon} width={item.width} height={item.height}>
              <use href={`symbol-defs.svg#${item.icon}`} />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsetIcons;
