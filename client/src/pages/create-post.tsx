import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePost() {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
        Write your latest idea here...
      </h1>
      <Textarea placeholder="Write your idea..." />
      <Button className="w-full">Post Idea</Button>
    </div>
  );
}
