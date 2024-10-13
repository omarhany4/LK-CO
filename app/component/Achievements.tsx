"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Achievements() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 1000);

    return () => controls.stop();
  }, []);

  return (
    <div className="relative text-skin-secondary bg-skin-inverted  py-24 sm:py-32">
      <div className="absolute blur-3xl" aria-hidden="true"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            Work with us
          </h2>
          <p className="mt-6 text-xl leading-8 ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl text-xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6  text-xl font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-2xl leading-7 ">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  {stat.value}
                </dd>
                <motion.h1
                  className="text-2xl font-bold leading-9 tracking-tight "
                  transition={{
                    duration: 1000, // Animation duration
                    repeat: Infinity, // Make the animation continuous
                    repeatType: "reverse", // Type of repetition, 'loop' repeats from the start
                  }}
                >
                  {rounded}
                </motion.h1>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
