import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/LeftSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <LeftSidebar />
      <section className="pt-22 sm:pl-27 lg:pl-67.5">{children}</section>
    </main>
  );
};

export default RootLayout;
