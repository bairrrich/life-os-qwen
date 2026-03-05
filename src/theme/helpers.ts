/**
 * Утилиты для работы с цветами и темами
 * Включает функции для генерации, преобразования и управления цветами
 */

import { moduleColors } from './modules';
import { stateColors, dataTypeColors, progressColors } from './semantic';
import { chartColors } from './charts';

/** Функция для получения контрастного цвета текста */
export function getContrastColor(bgColor: string): 'text-white' | 'text-black' | 'text-foreground' {
  // Извлекаем значения из OKLCH строки
  const match = bgColor.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  if (match) {
    const lightness = parseFloat(match[1]);
    // Если светлота > 0.6, используем черный текст, иначе белый
    return lightness > 0.6 ? 'text-black' : 'text-white';
  }
  return 'text-foreground';
}

/** Функция для генерации оттенков одного цвета */
export function generateShades(hue: number, baseChroma: number = 0.28, count: number = 5): string[] {
  return Array.from({ length: count }, (_, i) => {
    const lightness = 0.4 + (i * 0.12); // от 0.4 до 0.8
    const chroma = baseChroma * (0.8 + (i * 0.04)); // небольшая вариация
    return `oklch(${Math.min(lightness, 0.95)}_${Math.min(chroma, 0.35)}_${hue})`;
  });
}

/** Функция для получения цвета на основе состояния */
export function getStateColor(state: keyof typeof stateColors, variant: 'bg' | 'text' | 'border' = 'bg', theme: 'light' | 'dark' = 'light'): string {
  return stateColors[state][theme][variant];
}

/** Функция для получения цвета на основе типа данных */
export function getDataTypeColor(type: keyof typeof dataTypeColors, theme: 'light' | 'dark' = 'light'): string {
  return dataTypeColors[type][theme];
}

/** Функция для получения цвета прогресса */
export function getProgressColor(level: 'complete' | 'almost' | 'halfway' | 'low', theme: 'light' | 'dark' = 'light'): string {
  return progressColors[level][theme];
}

/** Функция для смешивания цветов */
export function blendColors(color1: string, color2: string, ratio: number = 0.5): string {
  // Извлекаем OKLCH значения
  const match1 = color1.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  const match2 = color2.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  
  if (match1 && match2) {
    const l1 = parseFloat(match1[1]), c1 = parseFloat(match1[2]), h1 = parseFloat(match1[3]);
    const l2 = parseFloat(match2[1]), c2 = parseFloat(match2[2]), h2 = parseFloat(match2[3]);
    
    const blendedL = l1 * ratio + l2 * (1 - ratio);
    const blendedC = c1 * ratio + c2 * (1 - ratio);
    const blendedH = h1 * ratio + h2 * (1 - ratio);
    
    return `oklch(${blendedL.toFixed(3)}_${blendedC.toFixed(3)}_${blendedH.toFixed(1)})`;
  }
  return color1;
}

/** Функция для получения более светлого оттенка */
export function lightenColor(color: string, amount: number = 0.1): string {
  const match = color.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  if (match) {
    const lightness = Math.min(parseFloat(match[1]) + amount, 0.95);
    const chroma = Math.max(parseFloat(match[2]) - (amount * 0.1), 0.05);
    return `oklch(${lightness.toFixed(3)}_${chroma.toFixed(3)}_${parseFloat(match[3]).toFixed(1)})`;
  }
  return color;
}

/** Функция для получения более темного оттенка */
export function darkenColor(color: string, amount: number = 0.1): string {
  const match = color.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  if (match) {
    const lightness = Math.max(parseFloat(match[1]) - amount, 0.1);
    const chroma = Math.min(parseFloat(match[2]) + (amount * 0.1), 0.4);
    return `oklch(${lightness.toFixed(3)}_${chroma.toFixed(3)}_${parseFloat(match[3]).toFixed(1)})`;
  }
  return color;
}

/** Функция для получения цвета с прозрачностью */
export function colorWithAlpha(color: string, alpha: number): string {
  const match = color.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
  if (match) {
    return `oklch(${match[1]}_${match[2]}_${match[3]}/${alpha})`;
  }
  return color;
}

/** Функция для получения случайного цвета из палитры модуля */
export function getRandomModuleColor(module: keyof typeof moduleColors, variants: Array<keyof typeof moduleColors[keyof typeof moduleColors]> = ['light', 'DEFAULT', 'text']): string {
  const availableVariants = variants.filter(v => moduleColors[module][v]);
  if (availableVariants.length === 0) return '';
  const randomVariant = availableVariants[Math.floor(Math.random() * availableVariants.length)];
  return moduleColors[module][randomVariant] || '';
}

/** Функция для получения цветовой палитры для модуля */
export function getModulePalette(module: keyof typeof moduleColors): string[] {
  return [
    moduleColors[module].light,
    moduleColors[module].DEFAULT,
    moduleColors[module].text,
    moduleColors[module].soft || moduleColors[module].light,
    moduleColors[module].accent || moduleColors[module].DEFAULT,
  ];
}

/** Функция для проверки контрастности */
export function checkContrastRatio(foreground: string, background: string): number {
  // Упрощенный расчет контрастности для OKLCH
  const fgMatch = foreground.match(/oklch\(([\d.]+)_/);
  const bgMatch = background.match(/oklch\(([\d.]+)_/);
  
  if (fgMatch && bgMatch) {
    const fgLightness = parseFloat(fgMatch[1]);
    const bgLightness = parseFloat(bgMatch[1]);
    return Math.abs(fgLightness - bgLightness) * 10; // Приблизительный коэффициент
  }
  return 1;
}

/** Функция для получения цвета на основе числового значения */
export function getColorByValue(value: number, minValue: number, maxValue: number, hue: number): string {
  const ratio = (value - minValue) / (maxValue - minValue);
  const lightness = 0.4 + (ratio * 0.4); // от 0.4 до 0.8
  const chroma = 0.2 + (ratio * 0.15); // от 0.2 до 0.35
  
  return `oklch(${Math.min(lightness, 0.9)}_${Math.min(chroma, 0.35)}_${hue})`;
}

/** Функция для получения градиентного цвета */
export function getGradientColor(startColor: string, endColor: string, steps: number = 5): string[] {
  return Array.from({ length: steps }, (_, i) => {
    const ratio = i / (steps - 1);
    return blendColors(startColor, endColor, ratio);
  });
}

/** Функция для получения цвета на основе темы */
export function getThemedColor(
  lightColor: string, 
  darkColor: string, 
  isDarkMode: boolean = false
): string {
  return isDarkMode ? darkColor : lightColor;
}

/** Функция для получения цвета модуля с учетом темы */
export function getThemedModuleColor(
  module: keyof typeof moduleColors,
  variant: keyof typeof moduleColors[keyof typeof moduleColors] = 'light',
  isDarkMode: boolean = false
): string {
  if (isDarkMode) {
    // Для темного режима используем немного другие значения
    const moduleIndex = Object.keys(moduleColors).indexOf(module);
    const hue = (moduleIndex * 30 + 20) % 360;
    const baseColor = moduleColors[module][variant];

    // Преобразуем цвет для темного режима
    if (!baseColor) return '';
    const match = baseColor.match(/oklch\(([\d.]+)_([\d.]+)_([\d.]+)\)/);
    if (match) {
      const lightness = Math.min(parseFloat(match[1]) + 0.1, 0.95);
      return `oklch(${lightness.toFixed(3)}_${match[2]}_${match[3]})`;
    }
    return baseColor;
  }
  return moduleColors[module][variant] || '';
}

/** Функция для получения CSS переменной цвета */
export function getCssVariable(name: string): string {
  return `var(--${name})`;
}

/** Функция для генерации CSS переменных для модуля */
export function generateModuleCssVariables(module: keyof typeof moduleColors, hue: number): Record<string, string> {
  return {
    [`--hue-${module}`]: hue.toString(),
    [`--color-${module}-primary`]: `oklch(0.76_0.28_${hue})`,
    [`--color-${module}-light`]: `oklch(0.88_0.22_${hue})`,
    [`--color-${module}-dark`]: `oklch(0.60_0.24_${hue})`,
    [`--color-${module}-text`]: `oklch(0.82_0.24_${hue})`,
  };
}