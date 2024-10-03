import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  isActive: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  const pathname = usePathname();

  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full justify-between border-none font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent",
        isActive ? "bg-white/10 text-white" : "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
