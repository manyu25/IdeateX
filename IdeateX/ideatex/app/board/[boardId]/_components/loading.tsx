import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <main className="h-screen w-screen relative bg-neutral-100 touch-none flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      </div>
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
