import { generateColorPalette } from "./generator";

export const defaultThemeSpecs = {
  color: {
    red: generateColorPalette({ baseColor: "#e61a1a" }),
    green: generateColorPalette({ baseColor: "#29d680" }),
    blue: generateColorPalette({ baseColor: "#0080ff" }),
    orange: generateColorPalette({ baseColor: "#f9a806" }),
    gray: generateColorPalette({ baseColor: "#bfbfbf" }),
  },
  padding: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  gap: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
};

const testTheme = {
  color: {
    blue: {
      "5": "#ebf5ff",
      "10": "#d7ebff",
      "20": "#abd6ff",
      "30": "#80c0ff",
      "40": "#57acff",
      "50": "#2c96ff",
      "60": "#0080ff",
      "70": "#005fbd",
      "80": "#003f7d",
      "90": "#001f3e",
      "95": "#00101f",
    },
  },
  padding: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  gap: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
};

type Theme = {
  [key: string]: string | number | Theme;
};

// 扁平化主题函数
const flattenTheme = (theme: Theme, prefix: string = ""): Theme => {
  let result: Theme = {};

  for (const key in theme) {
    const value = theme[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && !Array.isArray(value)) {
      result = { ...result, ...flattenTheme(value as Theme, newKey) };
    } else {
      result[newKey] = value;
    }
  }

  return result;
};

// 扁平化后的主题
const flattenedTheme = flattenTheme(testTheme);
console.log('%c >>>>> flattenedTheme -85', 'font-size:13px; background:pink; color:#000;', flattenedTheme)
