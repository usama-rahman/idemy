import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
