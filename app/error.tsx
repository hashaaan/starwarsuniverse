"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PlanetsError = () => {
  const urlSearchParams = useSearchParams();
  const searchTerm = urlSearchParams.get("search") ?? "";

  const handleSearchTermChange = (term: string) => {
    const newSearchParams = new URLSearchParams(urlSearchParams);
    newSearchParams.set("search", term.toString());
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  };

  return (
    <main className="container min-h-screen mt-8">
      <div className="flex flex-row justify-between items-center mb-4">
        <Link href="/">
          <h1 className="text-center text-2xl font-bold text-blue-500">
            Star Wars Planets
          </h1>
        </Link>

        <Input
          className="h-8 w-[300px]"
          placeholder="Search for planets..."
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
        />
      </div>

      <div className="text-blue-500 font-bold text-xl text-center py-12">
        Something Went Wrong!
      </div>
    </main>
  );
};

export default PlanetsError;
