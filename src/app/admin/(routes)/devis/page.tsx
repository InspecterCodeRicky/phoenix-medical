import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainDemandes from "./_components/demandes/main";

const DevisPage = () => {
  return (
    <div className="bg-white h-full">
      <p className="text-lg font-bold px-4 mb-3 pt-2">Devis</p>
      <Tabs defaultValue="demandes" className="px-4">
        <TabsList>
          <TabsTrigger value="demandes">Demandes</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="demandes" >
          <MainDemandes/>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default DevisPage;
