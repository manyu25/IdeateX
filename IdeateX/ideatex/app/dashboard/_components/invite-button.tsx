import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-white border-none max-w-[880px] w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
        <VisuallyHidden>
          <DialogTitle>Create Organization</DialogTitle>
        </VisuallyHidden>
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
