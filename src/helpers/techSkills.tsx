import React from "react";
import { 
  SiC, 
  SiCplusplus, 
  SiPython, 
  SiJavascript,
  SiTypescript,
  SiDart,
  SiKotlin,
  SiSolidity,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiAndroid,
  SiOpencv,
  SiNvidia,
  SiNumpy,
  SiPandas,
  SiGit,
  SiGithub,
  SiArduino,
  SiCmake,
  SiRender,
  SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; 

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export interface TechCategory {
  categoryName: string;
  items: TechItem[];
}

export function getTechStack(): TechCategory[] {
  return [
    {
      categoryName: "All Skills",
      items: [
        { name: "C", icon: <SiC className="w-5 h-5 text-[#00599C]" /> },
        { name: "C++", icon: <SiCplusplus className="w-5 h-5 text-[#00599C]" /> },
        { name: "Python", icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
        { name: "Java", icon: <FaJava className="w-5 h-5 text-[#007396]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-[#347adc]" /> },
        { name: "Dart", icon: <SiDart className="w-5 h-5 text-[#0175C2]" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-5 h-5 text-[#7F52FF]" /> },
        { name: "Solidity", icon: <SiSolidity className="w-5 h-5 text-[#363636]" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss className="w-5 h-5 text-[#1572B6]" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="5 h-5 text-[#0d199d]" />},
        { name: "React", icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-foreground" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
        { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-[#02569B]" /> },
        { name: "Android", icon: <SiAndroid className="w-5 h-5 text-[#3DDC84]" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-5 h-5 text-[#5C3EE8]" /> },
        { name: "CUDA", icon: <SiNvidia className="w-5 h-5 text-[#76B900]" /> },
        { name: "NumPy", icon: <SiNumpy className="w-5 h-5 text-[#013243]" /> },
        { name: "Pandas", icon: <SiPandas className="w-5 h-5 text-[#150458]" /> },
        { name: "Git", icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="w-5 h-5 text-foreground" /> },
        { name: "Arduino", icon: <SiArduino className="w-5 h-5 text-[#00979D]" /> },
        { name: "CMake", icon: <SiCmake className="w-5 h-5 text-[#064F8C]" /> },
        { name: "Render", icon: <SiRender className="w-5 h-5 text-[#46E3B7]" /> },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5 text-foreground" /> },
      ],
    },
  ];
}