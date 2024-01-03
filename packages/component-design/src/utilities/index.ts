export function flattenTokens(themeSpec: any) {
  const cssTokens: any = {};
  const themeTokens: any = {};

  const themeCSSVars = walkObject(themeSpec, (value, paths) => {
    if (value == null) return;

    const token = paths.join("-");

    const cssKey = `--${token}`;
    const cssVar = `var(${cssKey})`;

    cssTokens[token] = cssVar;
    themeTokens[cssKey] = value;

    return cssVar;
  });

  return { cssTokens, themeTokens, themeCSSVars };
}

const isObject = (value: Record<string, any>) => {
  return typeof value === "object" && value != null && !Array.isArray(value);
};

type Predicate<R = any> = (value: any, path: string[]) => R;

export const walkObject = <T, K>(target: T, predicate: Predicate<K>) => {
  function inner(value: any, path: string[] = []): any {
    if (isObject(value) || Array.isArray(value)) {
      const result: Record<string, string> = {};
      for (const [key, child] of Object.entries(value)) {
        const childPath = [...path, key];
        result[key] = inner(child, childPath);
      }
      return result;
    }

    return predicate(value, path);
  }

  return inner(target);
};

// 这个函数的作用是将驼峰命名法的字符串转换为短横线命名法的字符串
// 例如：camelToKebab("backgroundColor") -> "background-color"
// 这样做的目的是为了将JavaScript对象的属性名转换为CSS属性名
export function camelToKebab(camelCase: string) {
  // 使用正则表达式匹配小写字母后面跟着大写字母的组合，然后在中间插入一个短横线，并将所有字母转换为小写
  return camelCase.replace(/\B([A-Z])/g, "-$1").toLowerCase();
}

// 这个函数的作用是生成一个随机的CSS类名，长度默认为8个字符
// 例如：generateClassName() -> "ly_aBcD3fGh"
export function generateClassName(length = 8) {
  // CSS 类名中，开头不能以数字、特殊字符（除了连字符 - 和下划线 _）或者保留的 CSS 关键字作为有效的选择器。
  const classPrefix = "ly_";

  // 定义一个包含所有可能的字符的字符串，包括大小写字母和数字
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  // 循环length次，每次从characters中随机选择一个字符，拼接到类名后面
  const randomName = Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");

  // 返回生成的类名
  return classPrefix + randomName;
}

export function createStyleTag(id: string) {
  // 创建一个style标签元素
  const styleTag = document.createElement("style");
  // 设置style标签的id属性
  styleTag.id = id;
  // 将style标签添加到文档的head元素中，并返回style标签元素
  return document.head.appendChild(styleTag);
}
