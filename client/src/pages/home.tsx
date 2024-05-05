import IdeaPostCard from "@/components/idea-post-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { randomIdeas } from "@/constants";

export default function Home() {
  const tabsTrigger = [
    {
      value: "your",
      label: "🤠 Your",
    },
    {
      value: "top",
      label: "🔥 Top",
    },
    {
      value: "latest",
      label: "⏰ Latest",
    },
  ];

  return (
    <div>
      <Tabs defaultValue="top" className="w-full">
        <TabsList className="w-full">
          {tabsTrigger.map((item) => (
            <TabsTrigger value={item.value} key={item.value} className="flex-1">
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="your">
          <div className="space-y-4">
            {randomIdeas.map((item, idx) => (
              <IdeaPostCard postContent={item} key={idx} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="top">Change another</TabsContent>

        <TabsContent value="latest">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
