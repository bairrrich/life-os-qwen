/**
 * Цвета для графиков и аналитики
 * Использует OKLCH цвета для гармоничного восприятия
 * Основаны на модульных цветах для согласованности
 */

import { moduleHue } from './tokens';

/** Цвета для различных типов диаграмм */
export const chartColors = {
  /** Цвета для линейных графиков */
  line: {
    primary: `oklch(0.70_0.34_${moduleHue.goals})`, // orange
    secondary: `oklch(0.70_0.30_${moduleHue.workout})`, // blue
    tertiary: `oklch(0.74_0.30_${moduleHue.finance})`, // green
    quaternary: `oklch(0.76_0.28_${moduleHue.food})`, // yellow-green
  },

  /** Цвета для столбчатых диаграмм */
  bar: {
    positive: `oklch(0.74_0.30_${moduleHue.finance})`, // green (income)
    negative: `oklch(0.68_0.34_${18})`, // red (expense) - специальный оттенок
    neutral: `oklch(0.70_0.23_${moduleHue.logs})`, // gray-blue
    accent: `oklch(0.70_0.34_${moduleHue.goals})`, // orange
  },

 /** Цвета для круговых диаграмм */
  pie: [
    `oklch(0.76_0.28_${moduleHue.food})`, // food - yellow-green
    `oklch(0.70_0.30_${moduleHue.workout})`, // workout - blue
    `oklch(0.74_0.30_${moduleHue.finance})`, // finance - green
    `oklch(0.80_0.30_${moduleHue.recipes})`, // recipes - orange
    `oklch(0.68_0.34_${moduleHue.goals})`, // goals - orange-red
    `oklch(0.78_0.26_${moduleHue.water})`, // water - blue
    `oklch(0.78_0.2_${moduleHue.sleep})`, // sleep - purple
    `oklch(0.86_0.25_${moduleHue.mood})`, // mood - pink
    `oklch(0.70_0.24_${moduleHue.books})`, // books - yellow
    `oklch(0.74_0.27_${moduleHue.habits})`, // habits - teal-green
  ],

  /** Цвета для облачных диаграмм */
  area: {
    primary: `oklch(0.80_0.20_${moduleHue.goals})`, // lighter orange
    secondary: `oklch(0.78_0.2_${moduleHue.workout})`, // lighter blue
    gradient: [
      `oklch(0.82_0.18_${moduleHue.goals})`,
      `oklch(0.76_0.24_${moduleHue.goals})`,
    ],
  },

  /** Цвета для точечных диаграмм */
  scatter: {
    primary: `oklch(0.70_0.34_${moduleHue.goals})`,
    secondary: `oklch(0.70_0.30_${moduleHue.workout})`,
    tertiary: `oklch(0.74_0.30_${moduleHue.finance})`,
    outlier: `oklch(0.68_0.34_${18})`, // red for outliers
  },

  /** Цвета для тепловых карт */
  heatmap: {
    low: `oklch(0.85_0.15_${moduleHue.sleep})`, // light purple
    medium: `oklch(0.75_0.20_${moduleHue.mood})`, // medium pink
    high: `oklch(0.65_0.25_${moduleHue.goals})`, // strong orange
    extreme: `oklch(0.55_0.30_${18})`, // strong red
  },

  /** Цвета для гистограмм */
  histogram: {
    bars: [
      `oklch(0.76_0.28_${moduleHue.food})`,
      `oklch(0.74_0.30_${moduleHue.finance})`,
      `oklch(0.70_0.30_${moduleHue.workout})`,
      `oklch(0.78_0.26_${moduleHue.water})`,
      `oklch(0.72_0.28_${moduleHue.habits})`,
    ],
  },

  /** Цвета для радарных диаграмм */
  radar: {
    fill: `oklch(0.70_0.30_${moduleHue.goals})/0.2`,
    stroke: `oklch(0.70_0.34_${moduleHue.goals})`,
    point: `oklch(0.80_0.34_${moduleHue.goals})`,
  },
};

/** Цвета для аналитических метрик */
export const metricColors = {
  /** Цвета для KPI */
  kpi: {
    primary: `oklch(0.70_0.34_${moduleHue.goals})`, // orange
    positive: `oklch(0.74_0.30_${moduleHue.finance})`, // green
    negative: `oklch(0.68_0.34_${18})`, // red
    neutral: `oklch(0.70_0.23_${moduleHue.logs})`, // gray-blue
  },

  /** Цвета для трендов */
  trends: {
    up: `oklch(0.74_0.30_${moduleHue.finance})`, // green
    down: `oklch(0.68_0.34_${18})`, // red
    flat: `oklch(0.70_0.23_${moduleHue.logs})`, // gray-blue
    strongUp: `oklch(0.65_0.35_${moduleHue.finance})`, // strong green
    strongDown: `oklch(0.60_0.40_${18})`, // strong red
  },

  /** Цвета для прогресса */
  progress: {
    complete: `oklch(0.74_0.30_${138})`, // green
    almost: `oklch(0.80_0.28_${78})`, // yellow
    halfway: `oklch(0.70_0.30_${208})`, // blue
    low: `oklch(0.70_0.23_${242})`, // gray-blue
  },
};

/** Цвета для легенд и подписей */
export const legendColors = {
  /** Цвета для текста легенды */
  text: {
    primary: 'oklch(0.20_0.03_240)', // dark gray
    secondary: 'oklch(0.40_0.02_240)', // medium gray
    disabled: 'oklch(0.60_0.01_240)', // light gray
  },

  /** Цвета для границ легенды */
  border: {
    primary: 'oklch(0.80_0.02_240)', // very light gray
    secondary: 'oklch(0.70_0.01_240)', // light gray
  },

  /** Цвета для фона легенды */
  background: {
    primary: 'oklch(0.98_0.005_240)', // almost white
    secondary: 'oklch(0.95_0.01_240)', // very light gray
    transparent: 'oklch(1_0_0)/0.8', // semi-transparent white
  },
};

/** Цвета для осей и сетки */
export const axisColors = {
  /** Цвета для осей */
  axis: {
    line: 'oklch(0.70_0.01_240)', // light gray line
    tick: 'oklch(0.50_0.02_240)', // medium gray ticks
    label: 'oklch(0.30_0.03_240)', // dark gray labels
  },

  /** Цвета для сетки */
  grid: {
    primary: 'oklch(0.85_0.01_240)/0.5', // light gray semi-transparent
    secondary: 'oklch(0.80_0.01_240)/0.3', // lighter gray more transparent
    tertiary: 'oklch(0.90_0.01_240)/0.7', // very light almost white
  },
};

/** Цвета для индикаторов и маркеров */
export const indicatorColors = {
  /** Цвета для индикаторов */
  indicator: {
    primary: `oklch(0.70_0.34_${moduleHue.goals})`, // orange
    secondary: `oklch(0.70_0.30_${moduleHue.workout})`, // blue
    success: `oklch(0.74_0.30_${moduleHue.finance})`, // green
    warning: `oklch(0.80_0.28_${78})`, // yellow
    error: `oklch(0.68_0.34_${18})`, // red
    info: `oklch(0.70_0.30_${moduleHue.workout})`, // blue
  },

  /** Цвета для маркеров данных */
  markers: {
    active: `oklch(0.80_0.34_${moduleHue.goals})`, // bright orange
    inactive: 'oklch(0.60_0.05_240)', // dark gray
    highlight: `oklch(0.90_0.20_${moduleHue.goals})`, // light bright orange
    outlier: `oklch(0.85_0.25_${18})`, // light red
  },
};

/** Цвета для темного режима */
export const chartColorsDark = {
  /** Цвета для линейных графиков в темном режиме */
  line: {
    primary: `oklch(0.80_0.28_${moduleHue.goals})`, // lighter orange
    secondary: `oklch(0.78_0.24_${moduleHue.workout})`, // lighter blue
    tertiary: `oklch(0.80_0.24_${moduleHue.finance})`, // lighter green
    quaternary: `oklch(0.82_0.2_${moduleHue.food})`, // lighter yellow-green
  },

  /** Цвета для круговых диаграмм в темном режиме */
  pie: [
    `oklch(0.82_0.22_${moduleHue.food})`, // lighter food
    `oklch(0.78_0.24_${moduleHue.workout})`, // lighter workout
    `oklch(0.80_0.24_${moduleHue.finance})`, // lighter finance
    `oklch(0.86_0.24_${moduleHue.recipes})`, // lighter recipes
    `oklch(0.76_0.28_${moduleHue.goals})`, // lighter goals
    `oklch(0.84_0.20_${moduleHue.water})`, // lighter water
    `oklch(0.84_0.18_${moduleHue.sleep})`, // lighter sleep
    `oklch(0.92_0.18_${moduleHue.mood})`, // lighter mood
    `oklch(0.78_0.18_${moduleHue.books})`, // lighter books
    `oklch(0.80_0.21_${moduleHue.habits})`, // lighter habits
  ],

  /** Цвета для тепловых карт в темном режиме */
  heatmap: {
    low: `oklch(0.65_0.12_${moduleHue.sleep})`, // darker purple
    medium: `oklch(0.55_0.16_${moduleHue.mood})`, // darker pink
    high: `oklch(0.45_0.22_${moduleHue.goals})`, // darker orange
    extreme: `oklch(0.35_0.28_${18})`, // darker red
  },
};

/** Функция для получения цвета графика по типу */
export function getChartColor(type: keyof typeof chartColors, index?: number): string | string[] {
  const chartType = chartColors[type as keyof typeof chartColors];
  if (Array.isArray(chartType)) {
    return index !== undefined ? chartType[index % chartType.length] : chartType;
  }
  if (typeof chartType === 'string') {
    return chartType;
  }
  // Для объектов возвращаем первичный цвет или преобразуем
  if (chartType && typeof chartType === 'object') {
    return (chartType as any).primary || (chartType as any).fill || Object.values(chartType)[0];
  }
  return String(chartType);
}

/** Функция для получения цвета графика для темного режима */
export function getChartColorDark(type: keyof typeof chartColorsDark, index?: number): string | string[] {
  const chartType = chartColorsDark[type as keyof typeof chartColorsDark];
  if (Array.isArray(chartType)) {
    return index !== undefined ? chartType[index % chartType.length] : chartType;
  }
  if (typeof chartType === 'string') {
    return chartType;
  }
  if (chartType && typeof chartType === 'object') {
    return (chartType as any).primary || (chartType as any).fill || Object.values(chartType)[0];
  }
  return String(chartType);
}