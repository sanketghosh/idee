import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type IdeaPostCardProps = {
  postContent: string;
};

export default function IdeaPostCard({ postContent }: IdeaPostCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-lg border px-4 py-3 shadow-md">
      <div className="flex w-full items-center justify-between">
        <p className="text-muted-foreground text-left text-sm font-medium md:text-sm">
          @johndoe69693
        </p>
        <p className="text-muted-foreground text-left text-sm font-medium">
          12.12.2024
        </p>
      </div>
      <Separator />
      <p className="text-sm leading-5 md:text-base">{postContent}</p>
      <Separator />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full p-1 text-lg"
          >
            ❤️‍🔥
          </Button>
          <p className="text-sm font-medium">200.3M</p>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full p-0.5 text-lg"
          >
            👎
          </Button>
        </div>
      </div>
    </div>
  );
}
