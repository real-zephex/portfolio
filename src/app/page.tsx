import HeaderSection from "@/components/ui/header-section";
import Pointer from "@/components/ui/pointer";
import TabsSection from "@/components/ui/tabs-section";

const App = async () => {
  return (
    <main className="container mx-auto">
      <Pointer />
      <HeaderSection />
      <TabsSection />
    </main>
  );
};

export default App;
