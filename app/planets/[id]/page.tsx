import { api } from "@/lib/api";
import { capitalizeWords } from "@/lib/utils";
import Link from "next/link";

type PlanetDetailPageProps = {
  params: {
    id: number;
  };
};

const PlanetDetailPage = async ({ params: { id } }: PlanetDetailPageProps) => {
  const planet = await api.get(`planets/${id}`).json<{
    name: string;
    diameter: string;
    terrain: string;
    climate: string;
    population: string;
    gravity: string;
    rotation_period: string;
  }>();

  const calculateRotationSpeed = (radius: number, period: number): number => {
    const pi = Math.PI;
    return (2 * pi * radius) / period;
  };

  const maxDiameter = 118000; // Diameter of Bespin largest planet on the list
  const scaleFactor = 500;

  const scale = (Number(planet?.diameter) / maxDiameter) * scaleFactor;

  return (
    <main className="container min-h-screen mt-8">
      <div className="flex flex-row justify-between items-center mb-4">
        <Link href="/">
          <h1 className="text-center text-2xl font-bold text-blue-500">
            Star Wars Planets
          </h1>
        </Link>

        <div></div>
      </div>

      <div className="flex flex-row">
        <div className="flex-1">
          <div className="flex items-center justify-center m-4">
            <div
              className="flex items-center justify-center text-white bg-blue-500 rounded-full"
              style={{ width: `${scale}px`, height: `${scale}px` }}
            >
              <span className="text-xs text-nowrap">{planet?.name}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Planet Name: </div>
            <div className="flex-1 text-blue-500 font-bold">{planet?.name}</div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Diameter: </div>
            <div className="flex-1 text-blue-500 font-bold">
              {Number(planet?.diameter) > 0
                ? `${planet.diameter} Km`
                : "Not available"}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Terrain: </div>
            <div className="flex-1 text-blue-500 font-bold text-wrap">
              {capitalizeWords(planet?.terrain)}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Climate: </div>
            <div className="flex-1 text-blue-500 font-bold text-wrap">
              {capitalizeWords(planet?.climate)}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Population: </div>
            <div className="flex-1 text-blue-500 font-bold">
              {planet?.population}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Gravity: </div>
            <div className="flex-1 text-blue-500 font-bold">
              {capitalizeWords(planet?.gravity)}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-1 text-white/60">Rotation Speed: </div>
            <div className="flex-1 text-blue-500 font-bold">
              {Number(planet?.diameter) > 0
                ? calculateRotationSpeed(
                    Number(planet?.diameter) / 2,
                    Number(planet?.rotation_period)
                  ).toFixed(3) + " Km/h"
                : "Not available"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanetDetailPage;
