import { Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <Cpu className="h-6 w-6 text-primary mr-2" />
          <p className="text-lg font-semibold">LDS Data Solutions</p>
        </div>
        <p className="text-sm">
          &copy; {currentYear} LDS Data Solutions. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Providing exceptional BPO and Data services to help your business thrive.
        </p>
      </div>
    </footer>
  );
}
