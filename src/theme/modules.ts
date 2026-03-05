/**
 * Модульные цвета для каждой страницы
 * Использует hue значения из tokens.ts для генерации согласованных цветовых схем
 * Каждый модуль имеет уникальный цвет, но использует общую систему параметров
 */

import { moduleHue, colorParams } from './tokens';

/** Интерфейс цветовой схемы модуля */
export interface ModuleColorScheme {
  light: string;
  DEFAULT: string;
  text: string;
  border: string;
  shadow?: string;
  soft?: string; // более мягкий вариант для фона
  accent?: string; // акцентный цвет для выделения
}

/** Генерация цветовой схемы для модуля на основе hue */
export function generateModuleColors(hue: number, lightMode: boolean = true): ModuleColorScheme {
  const params = lightMode ? colorParams.light : colorParams.dark;
  
  return {
    light: `bg-[oklch(${params.lightness.tertiary}_${params.chroma.secondary}_${hue})]`,
    DEFAULT: `bg-[oklch(${params.lightness.primary}_${params.chroma.primary}_${hue})]`,
    text: `text-[oklch(${params.lightness.tertiary}_${params.chroma.secondary}_${hue})]`,
    border: `border-[oklch(${params.lightness.primary}_${params.chroma.primary}_${hue})/0.45]`,
    shadow: `shadow-[oklch(${params.lightness.primary}_${params.chroma.primary}_${hue})/0.32]`,
    soft: `bg-[oklch(${params.lightness.secondary}_${params.chroma.tertiary}_${hue})/0.15]`,
    accent: `text-[oklch(${params.lightness.primary}_${params.chroma.primary}_${hue})]`
  };
}

/** Цветовые схемы для каждого модуля */
export const moduleColors = {
  food: generateModuleColors(moduleHue.food),
  workout: generateModuleColors(moduleHue.workout),
  finance: generateModuleColors(moduleHue.finance),
  water: generateModuleColors(moduleHue.water),
  sleep: generateModuleColors(moduleHue.sleep),
  mood: generateModuleColors(moduleHue.mood),
  books: generateModuleColors(moduleHue.books),
  recipes: generateModuleColors(moduleHue.recipes),
  habits: generateModuleColors(moduleHue.habits),
  goals: generateModuleColors(moduleHue.goals),
  logs: generateModuleColors(moduleHue.logs),
  settings: generateModuleColors(moduleHue.settings),
} as const;

/** Цветовые схемы для темного режима */
export const moduleColorsDark = {
  food: generateModuleColors(moduleHue.food, false),
  workout: generateModuleColors(moduleHue.workout, false),
  finance: generateModuleColors(moduleHue.finance, false),
  water: generateModuleColors(moduleHue.water, false),
  sleep: generateModuleColors(moduleHue.sleep, false),
  mood: generateModuleColors(moduleHue.mood, false),
  books: generateModuleColors(moduleHue.books, false),
  recipes: generateModuleColors(moduleHue.recipes, false),
  habits: generateModuleColors(moduleHue.habits, false),
  goals: generateModuleColors(moduleHue.goals, false),
  logs: generateModuleColors(moduleHue.logs, false),
  settings: generateModuleColors(moduleHue.settings, false),
} as const;

/** Хелпер для получения цвета модуля */
export function getModuleColor(
  module: keyof typeof moduleColors,
  variant: keyof ModuleColorScheme = 'light',
  isDarkMode: boolean = false
): string {
  const colors = isDarkMode ? moduleColorsDark[module] : moduleColors[module];
  return colors[variant] || '';
}

/** Хелпер для получения всех цветов модуля */
export function useModuleColors(module: keyof typeof moduleColors, isDarkMode: boolean = false) {
  return isDarkMode ? moduleColorsDark[module] : moduleColors[module];
}

/** Цвета для навигации по модулям */
export const navigationColors = {
  food: 'text-[oklch(0.76_0.28_68)]',
  workout: 'text-[oklch(0.70_0.30_218)]',
  finance: 'text-[oklch(0.73_0.28_145)]',
  water: 'text-[oklch(0.78_0.26_208)]',
  sleep: 'text-[oklch(0.66_0.28_278)]',
  mood: 'text-[oklch(0.74_0.31_312)]',
  books: 'text-[oklch(0.70_0.24_48)]',
  book: 'text-[oklch(0.70_0.24_48)]',
  recipes: 'text-[oklch(0.80_0.30_58)]',
  recipe: 'text-[oklch(0.80_0.30_58)]',
  habits: 'text-[oklch(0.74_0.27_118)]',
  habit: 'text-[oklch(0.74_0.27_118)]',
  goals: 'text-[oklch(0.68_0.34_38)]',
  goal: 'text-[oklch(0.68_0.34_38)]',
  logs: 'text-[oklch(0.70_0.23_242)]',
  settings: 'text-[oklch(0.58_0.18_255)]',
  analytics: 'text-[oklch(0.70_0.23_242)]',
  catalog: 'text-[oklch(0.70_0.23_242)]',
} as const;

/** Цвета для статусов и прогресса внутри модулей */
export const moduleStatusColors = {
  food: {
    completed: 'text-[oklch(0.74_0.30_138)]', // green
    pending: 'text-[oklch(0.70_0.30_218)]',   // blue
    overdue: 'text-[oklch(0.68_0.34_18)]',    // red
  },
  workout: {
    completed: 'text-[oklch(0.74_0.30_138)]', // green
    inProgress: 'text-[oklch(0.75_0.15_85)]', // yellow
    rest: 'text-[oklch(0.70_0.30_218)]',     // blue
  },
  finance: {
    income: 'text-[oklch(0.74_0.30_138)]',   // green
    expense: 'text-[oklch(0.68_0.34_18)]',   // red
    neutral: 'text-[oklch(0.70_0.23_242)]',  // gray
  },
  habits: {
    completed: 'text-[oklch(0.74_0.30_138)]', // green
    skipped: 'text-[oklch(0.76_0.28_68)]',   // yellow
    missed: 'text-[oklch(0.68_0.34_18)]',    // red
    weekend: 'text-[oklch(0.76_0.28_68)]',   // yellow (lighter)
  },
  goals: {
    achieved: 'text-[oklch(0.74_0.30_138)]', // green
    progress: 'text-[oklch(0.75_0.15_85)]', // yellow
    behind: 'text-[oklch(0.68_0.34_18)]',   // red
    planning: 'text-[oklch(0.70_0.30_218)]', // blue
  }
} as const;

/** Цвета для карточек модулей */
export const moduleCardColors = {
  food: {
    bg: 'bg-[oklch(0.8_0.22_68)]/15',
    hover: 'hover:bg-[oklch(0.88_0.22_68)]/25',
    border: 'border-[oklch(0.76_0.28_68)]/20',
  },
  workout: {
    bg: 'bg-[oklch(0.82_0.24_218)]/15',
    hover: 'hover:bg-[oklch(0.82_0.24_218)]/25',
    border: 'border-[oklch(0.70_0.30_218)]/20',
  },
  finance: {
    bg: 'bg-[oklch(0.85_0.22_145)]/15',
    hover: 'hover:bg-[oklch(0.85_0.22_145)]/25',
    border: 'border-[oklch(0.73_0.28_145)]/20',
  },
  water: {
    bg: 'bg-[oklch(0.90_0.20_208)]/15',
    hover: 'hover:bg-[oklch(0.90_0.20_208)]/25',
    border: 'border-[oklch(0.78_0.26_208)]/20',
  },
  sleep: {
    bg: 'bg-[oklch(0.78_0.22_278)]/15',
    hover: 'hover:bg-[oklch(0.78_0.22_278)]/25',
    border: 'border-[oklch(0.66_0.28_278)]/20',
  },
  mood: {
    bg: 'bg-[oklch(0.86_0.25_312)]/15',
    hover: 'hover:bg-[oklch(0.86_0.25_312)]/25',
    border: 'border-[oklch(0.74_0.31_312)]/20',
  },
  books: {
    bg: 'bg-[oklch(0.82_0.18_48)]/15',
    hover: 'hover:bg-[oklch(0.82_0.18_48)]/25',
    border: 'border-[oklch(0.70_0.24_48)]/20',
  },
  recipes: {
    bg: 'bg-[oklch(0.90_0.24_58)]/15',
    hover: 'hover:bg-[oklch(0.90_0.24_58)]/25',
    border: 'border-[oklch(0.80_0.30_58)]/20',
  },
  habits: {
    bg: 'bg-[oklch(0.86_0.21_118)]/15',
    hover: 'hover:bg-[oklch(0.86_0.21_118)]/25',
    border: 'border-[oklch(0.74_0.27_118)]/20',
  },
  goals: {
    bg: 'bg-[oklch(0.80_0.28_38)]/15',
    hover: 'hover:bg-[oklch(0.80_0.28_38)]/25',
    border: 'border-[oklch(0.68_0.34_38)]/20',
  },
  logs: {
    bg: 'bg-[oklch(0.82_0.17_242)]/15',
    hover: 'hover:bg-[oklch(0.82_0.17_242)]/25',
    border: 'border-[oklch(0.70_0.23_242)]/20',
  },
  settings: {
    bg: 'bg-[oklch(0.72_0.14_255)]/15',
    hover: 'hover:bg-[oklch(0.72_0.14_255)]/25',
    border: 'border-[oklch(0.58_0.18_255)]/20',
  },
} as const;

/** Цвета для иконок модулей */
export const moduleIconColors = {
  food: 'text-[oklch(0.76_0.28_68)]',
  workout: 'text-[oklch(0.70_0.30_218)]',
  finance: 'text-[oklch(0.73_0.28_145)]',
  water: 'text-[oklch(0.78_0.26_208)]',
  sleep: 'text-[oklch(0.66_0.28_278)]',
  mood: 'text-[oklch(0.74_0.31_312)]',
  books: 'text-[oklch(0.70_0.24_48)]',
  recipes: 'text-[oklch(0.80_0.30_58)]',
  habits: 'text-[oklch(0.74_0.27_118)]',
  goals: 'text-[oklch(0.68_0.34_38)]',
  logs: 'text-[oklch(0.70_0.23_242)]',
  settings: 'text-[oklch(0.58_0.18_255)]',
} as const;

/** Цвета для активных состояний модулей */
export const moduleActiveColors = {
  food: 'bg-[oklch(0.76_0.28_68)]/10 ring-[oklch(0.76_0.28_68)]/30',
  workout: 'bg-[oklch(0.70_0.30_218)]/10 ring-[oklch(0.70_0.30_218)]/30',
  finance: 'bg-[oklch(0.73_0.28_145)]/10 ring-[oklch(0.73_0.28_145)]/30',
  water: 'bg-[oklch(0.78_0.26_208)]/10 ring-[oklch(0.78_0.26_208)]/30',
  sleep: 'bg-[oklch(0.66_0.28_278)]/10 ring-[oklch(0.66_0.28_278)]/30',
  mood: 'bg-[oklch(0.74_0.31_312)]/10 ring-[oklch(0.74_0.31_312)]/30',
  books: 'bg-[oklch(0.70_0.24_48)]/10 ring-[oklch(0.70_0.24_48)]/30',
  recipes: 'bg-[oklch(0.80_0.30_58)]/10 ring-[oklch(0.80_0.30_58)]/30',
  habits: 'bg-[oklch(0.74_0.27_118)]/10 ring-[oklch(0.74_0.27_118)]/30',
  goals: 'bg-[oklch(0.68_0.34_38)]/10 ring-[oklch(0.68_0.34_38)]/30',
  logs: 'bg-[oklch(0.70_0.23_242)]/10 ring-[oklch(0.70_0.23_242)]/30',
  settings: 'bg-[oklch(0.58_0.18_255)]/10 ring-[oklch(0.58_0.18_255)]/30',
} as const;