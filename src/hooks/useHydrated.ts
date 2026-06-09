"use client";

import { useEffect, useState } from "react";

/** True only after client mount — gate motion `initial` and `animate` to avoid hydration mismatches. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
