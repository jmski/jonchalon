interface CardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 flex flex-col justify-between min-h-32 ${className}`}
    >
      <h3 className="font-bold text-lg text-black dark:text-white">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      {children}
    </div>
  );
}
