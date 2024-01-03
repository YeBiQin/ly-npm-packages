import { camelToKebab, createStyleTag, generateClassName } from "../utilities";

// 这个类的作用是实现一个系统设计的功能，可以根据主题规范和CSS对象动态生成和应用样式
class SystemDesign {
  // 定义两个私有的属性，分别是用于存放主题样式和类名样式的style标签元素
  themeStyle: HTMLElement;
  classesStyle: HTMLElement;

  // 定义一个映射，用于缓存已经生成的类名和对应的CSS键值对
  classesMap: Map<string, string> = new Map();

  // 构造函数，在创建实例时执行
  constructor() {
    // 调用createStyleTag方法，创建两个style标签，并分别赋值给themeStyle和classesStyle属性
    this.themeStyle = createStyleTag("theme-style");
    this.classesStyle = createStyleTag("classes-style");
  }

  updateThemeContent = (styles: string) => {
    this.themeStyle.textContent = `:root {\n${styles}\n}`;
  };

  // 这个方法的作用是根据CSS对象，生成并返回对应的类名字符串
  // 参数cssObject是一个对象，包含了CSS的属性和值的themeCSSVars键值对，如果没有传入，就返回空字符串
  assembleClassNames = (cssObject?: any) => {
    if (!cssObject) return "";

    // 定义一个数组，用于存放生成的类名
    const classesList: string[] = [];

    // 遍历CSS对象的键值对，对于每一对，执行以下操作
    Object.entries(cssObject).forEach(([cssKey, cssValue]: any) => {
      // 调用camelToKebab方法，将CSS的属性名从驼峰命名法转换为短横线命名法
      const kebabCss = camelToKebab(cssKey);
      // 定义一个缓存的键，由CSS的属性名和属性值拼接而成，用于在classesMap中查找是否已经存在对应的类名
      const cacheKey = `${cssKey}_${cssValue}`;

      // 尝试从classesMap中获取缓存的类名，如果没有找到，就执行以下操作
      let className = this.classesMap.get(cacheKey);
      if (!className) {
        // 调用generateClassName方法，生成一个随机的类名
        className = generateClassName();
        // 将生成的类名和缓存的键存放到classesMap中，方便下次查找
        this.classesMap.set(cacheKey, className);
        // 创建一个文本节点，内容是一个CSS规则，选择器是生成的类名，属性和值是CSS对象的键值对
        this.classesStyle.appendChild(
          document.createTextNode(`.${className} { ${kebabCss}: ${cssValue}; }`)
        );
      }

      // 将生成或获取的类名添加到类名数组中
      classesList.push(className);
    });

    // 返回类名数组用空格连接起来的字符串，例如："class1 class2 class3"
    return classesList.join(" ");
  };
}

// 创建一个SystemDesign的实例，并导出为design变量，供其他模块使用
export const design = new SystemDesign();
