"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSearchParams, useRouter } from "next/navigation";
import { capitalize, capitalizeWords } from "@/lib/utils";
import PaginationBar from "@/components/pagination-bar";
import useSuspensePlantsList from "./use-suspense-planets-list.hook";
import { Input } from "@/components/ui/input";
import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const PER_PAGE = 10;

const PlanetsTable = () => {
  const urlSearchParams = useSearchParams();
  const router = useRouter();
  const [sortByDiameter, setSortByDiameter] = useState(false);
  const [sorted, setSorted] = useState(false);
  const currentPage = Number(urlSearchParams.get("page") ?? 1);
  const searchTerm = urlSearchParams.get("search") ?? "";
  const deferredTerm = useDeferredValue(searchTerm);

  const planetsListQuery = useSuspensePlantsList(currentPage, deferredTerm);
  const planets = planetsListQuery.data;
  let planetsList = planets.results;

  if (sorted) {
    const sortedPlanets = planetsList.sort(
      (a, b) => parseInt(a.diameter) - parseInt(b.diameter)
    );
    if (sortByDiameter) {
      planetsList = sortedPlanets.reverse();
    } else {
      planetsList = sortedPlanets;
    }
  }

  console.log("planets", planets);

  const getPlanetId = (url: string): number => {
    const regex = /\/planets\/(\d+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return 0;
  };

  const handleSearchTermChange = (term: string) => {
    const newSearchParams = new URLSearchParams(urlSearchParams);
    newSearchParams.set("search", term.toString());
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  };

  const handleFilterByDiameter = () => {
    setSorted(true);
    setSortByDiameter(!sortByDiameter);
  };

  return (
    <>
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

      {planets?.results?.length > 0 ? (
        <Table className="mb-4">
          <TableCaption className="sr-only">
            A list Star Wars plants.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="flex flex-row items-center gap-2">
                <div>Diameter (Km)</div>
                <Button
                  variant="ghost"
                  className="h-6 px-1"
                  onClick={() => handleFilterByDiameter()}
                >
                  {sortByDiameter ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </TableHead>
              <TableHead>Terrain</TableHead>
              <TableHead className="text-right">Population</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planetsList?.map((planet) => (
              <TableRow
                className="cursor-pointer"
                key={planet.name}
                onClick={() =>
                  router.push(
                    getPlanetId(planet?.url)
                      ? `/planets/${getPlanetId(planet?.url)}`
                      : "#"
                  )
                }
              >
                <TableCell className="font-medium">{planet.name}</TableCell>
                <TableCell>{capitalizeWords(planet.diameter)}</TableCell>
                <TableCell>{capitalizeWords(planet.terrain)}</TableCell>
                <TableCell className="text-right">
                  {capitalize(planet.population)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center font-bold text-xl text-blue-500 my-12">
          No Planets Found!
        </div>
      )}

      {planets?.count > PER_PAGE && (
        <PaginationBar
          perPage={PER_PAGE}
          totalPages={planets?.count ?? 0}
          currentPage={currentPage}
          searchParams={urlSearchParams}
        />
      )}
    </>
  );
};

export default PlanetsTable;
