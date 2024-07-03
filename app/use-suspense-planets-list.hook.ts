import { api } from "@/lib/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PlanetsResponse } from "@/lib/types";

const useSuspensePlantsList = (page: number, search?: string) => {
  console.log(page, search);
  return useSuspenseQuery({
    queryKey: ["planets", page, search],
    queryFn: async () =>
      await api
        .get("planets", {
          searchParams: { page, search: search ?? "" },
        })
        .json<PlanetsResponse>(),
  });
};

export default useSuspensePlantsList;
