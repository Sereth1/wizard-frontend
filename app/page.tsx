"use client";

import { useState } from "react";
import { useHouses } from "@/hooks/useHouses";
import Spinner from "@/components/animation/Spinner";
import HouseCard from "@/components/cards/HouseCard";

export default function HousesPage() {
  const [query, setQuery] = useState("");
  const { houses, loading, error } = useHouses(query);

  const colorMap: Record<string, string> = {
    Gryffindor: "#ae0001",
    Ravenclaw: "#000a90",
    Hufflepuff: "#ffdb00",
    Slytherin: "#2a623d",
  };

  return (
    <div className="px-4 py-8">
      <input
        type="text"
        placeholder="Search houses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2 rounded mb-6 w-full max-w-md mx-auto block"
      />

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-center text-white">{error}</p>
      ) : houses.length === 0 ? (
        <p className="text-center text-white">Not found try again</p>
      ) : (
        houses.map((house) => (
          <HouseCard
            key={house.id}
            {...house}
            nameColor={colorMap[house.name] || "#000"}
          />
        ))
      )}
    </div>
  );
}
