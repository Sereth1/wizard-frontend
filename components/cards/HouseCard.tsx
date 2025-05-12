// components/HouseCard.tsx
import React from "react";
import { Trait } from "@/hooks/useHouses";

interface HouseCardProps {
  name: string;
  founder: string;
  animal: string;
  traits: Trait[];
  nameColor: string;
}

export default function HouseCard({
  name,
  founder,
  animal,
  traits,
  nameColor,
}: HouseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-4 w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl text-black font-bold">{name}</h2>
        <p className="text-black">{animal}</p>
      </div>

      <div
        className="h-2 rounded-full mb-3"
        style={{
          background: `linear-gradient(to right, ${nameColor} 0%, black 100%)`,
        }}
      />

      <p className="mb-2 text-black text-sm">
        Founder: <span className="font-bold text-black">{founder}</span>
      </p>

      <div className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <span
            key={trait.id}
            className="bg-neutral-800 text-white text-xs px-3 py-1 rounded-full"
          >
            {trait.name}
          </span>
        ))}
      </div>
    </div>
  );
}
