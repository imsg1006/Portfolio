import React from "react";
import { IconRocket, IconCode, IconDeviceDesktop, IconCloudUpload } from "@tabler/icons-react";

const Approach = () => {
  const steps = [
    {
      title: "Strategy & Planning",
      description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      icon: <IconRocket className="w-10 h-10 text-purple" />,
    },
    {
      title: "Design & Development",
      description: "Once we have a plan, I plunge into the coding process. From initial sketches to polished code, I keep you updated every step of the way.",
      icon: <IconCode className="w-10 h-10 text-purple" />,
    },
    {
      title: "Testing & Optimization",
      description: "Before launch, I conduct thorough testing to ensure everything works flawlessly across all devices and browsers. I also optimize for speed and SEO.",
      icon: <IconDeviceDesktop className="w-10 h-10 text-purple" />,
    },
    {
      title: "Deployment & Support",
      description: "Finally, we go live! I handle the technical setup and provide ongoing support to keep your site running smoothly and securely.",
      icon: <IconCloudUpload className="w-10 h-10 text-purple" />,
    },
  ];

  return (
    <section className="py-20 w-full" id="approach">
      <h1 className="heading">
        My <span className="text-purple">Development Process</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-3xl border border-white/[0.1] bg-[#04071d] hover:bg-[#0c0e23] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-fuchsia-600 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />
            
            <div className="mb-6 p-4 rounded-2xl bg-[#161a31] group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 z-10">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed z-10">
              {step.description}
            </p>
            
            {/* Step Number Indicator */}
            <div className="absolute top-4 right-6 text-5xl font-bold text-white/[0.03] select-none">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
