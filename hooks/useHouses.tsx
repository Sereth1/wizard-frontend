// hooks/useHouses.ts
"use client";

import { useEffect, useState } from "react";

export interface Trait {
  id: string;
  name: string;
}

export interface Head {
  id: string;
  firstName: string;
  lastName: string;
}

export interface House {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
}

export function useHouses(query: string) {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const q = query.trim().length > 0 ? `?name=${query}` : "";
        const res = await fetch(`/api/get_houses${q}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: House[] = await res.json();
        setHouses(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [query]);

  return { houses, loading, error };
}
