import { design } from "./design";
import { flattenTokens } from "../utilities";
import { defaultThemeSpecs } from "../theme";

function generateThemeFromSpec<T>(themeSpec: T): T {
  const { cssTokens, themeTokens, themeCSSVars } = flattenTokens(themeSpec);
  console.log(
    "%c >>>>> cssTokens, themeTokens, -7",
    "font-size:13px; background:pink; color:#000;",
    cssTokens,
    themeTokens
  );

  const styleString = Object.entries(themeTokens)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

  design.updateThemeContent(styleString);

  return themeCSSVars;
}

export const theme = generateThemeFromSpec(defaultThemeSpecs);
