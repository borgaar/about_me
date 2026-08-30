import { useEffect, useState } from "react";

export function useAnimate(delay: number = 100) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, []);

  return [isVisible] as const;
}
