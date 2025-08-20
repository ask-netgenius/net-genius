"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState, useTransition } from "react";
import { Progress } from "@/components/ui/progress";

type LoadingContextType = {
  isLoading: boolean;
  startLoading: (cb: () => void) => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);

  const startLoading = (cb: () => void) => {
    setLoading(true);
    startTransition(() => {
      cb();
    });
  };

  useEffect(() => {
    if (!isPending) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isPending]);
  
  useEffect(() => {
    // Hide loading on initial load after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading: loading || isPending, startLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export function useLoadingRouter() {
  const router = useRouter();
  const { startLoading } = useLoading();

  const push = (href: string) => {
    startLoading(() => {
      router.push(href);
    });
  };

  return { push };
}
