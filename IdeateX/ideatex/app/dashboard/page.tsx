"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { use } from "react";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favourites?: string;
  }>;
}

const Dashboardpage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  // Use React's `use` hook to unwrap the Promise in client components
  const resolvedSearchParams = use(searchParams);

  const query = {
    search: resolvedSearchParams.search || undefined,
    favourites: resolvedSearchParams.favourites === "true",
  };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default Dashboardpage;
