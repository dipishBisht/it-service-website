import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div
      className={cn(
        "grid grid-cols-4 max py-10 gap-5 max-1200:grid-cols-2 max-700:grid-cols-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            animate={{
              scale: hoveredIndex === idx || (hoveredIndex === null && idx === 0) ? 1.1 : 1,
              opacity: hoveredIndex === idx || (hoveredIndex === null && idx === 0) ? 1 : 0.5,
              transition: { duration: 0.3 },
            }}
            className="relative z-20"
          >
            <Card>
              <img src={item.imageUrl} className="w-[60px]" alt="" />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full py-4 overflow-hidden bg-white border-[1px] border-slate-700 group-hover:border-slate-700 relative",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold text-2xl tracking-wide mt-2 max-550:text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-[#333] tracking-wide text-sm", className)}>
      {children}
    </p>
  );
};
