"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    console.log("Theme attribute:", document.documentElement.className);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
