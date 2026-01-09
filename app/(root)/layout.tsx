import Navbar from "@/components/navigation/navbar";
import DesktopNavigation from "@/components/navigation/navbar/DesktopNavigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <DesktopNavigation />
      <section className="pt-22 sm:pl-26 lg:pl-66.5">{children}</section>
    </main>
  );
};

export default RootLayout;
