/**
 * Unified Color System for Life OS
 *
 * Минимизированная система цветов:
 * - Использует CSS variables
 * - Поддерживает light/dark темы
 * - Поддерживает accent color
 * - Минимум базовых цветов
 *
 * Все реальные цвета определяются в CSS:
 *
 * :root {
 *   --accent-hue: 220;
 *
 *   --color-bg: oklch(0.98 0.01 240);
 *   --color-surface: oklch(0.95 0.02 240);
 *   --color-border: oklch(0.88 0.02 240);
 *
 *   --color-text: oklch(0.30 0.03 240);
 *   --color-text-soft: oklch(0.55 0.03 240);
 *
 *   --color-accent: oklch(0.70 0.22 var(--accent-hue));
 *   --color-accent-soft: oklch(0.82 0.14 var(--accent-hue));
 *
 *   --color-success: oklch(0.74 0.30 140);
 *   --color-warning: oklch(0.78 0.22 85);
 *   --color-danger: oklch(0.66 0.34 20);
 *   --color-info: oklch(0.70 0.26 220);
 * }
 *
 * .dark {
 *   --color-bg: oklch(0.18 0.02 240);
 *   --color-surface: oklch(0.24 0.02 240);
 *   --color-border: oklch(0.32 0.02 240);
 *
 *   --color-text: oklch(0.94 0.02 240);
 *   --color-text-soft: oklch(0.75 0.02 240);
 * }
 */

import { cn } from "@/lib/utils"

/* =========================================================
   TYPES
========================================================= */

export type ModuleType =
  | "food"
  | "workout"
  | "finance"
  | "water"
  | "sleep"
  | "mood"
  | "books"
  | "recipes"
  | "habits"
  | "goals"
  | "logs"
  | "settings"

export type ItemType =
  | "vitamin"
  | "medicine"
  | "herb"
  | "cosmetic"
  | "product"

export interface ColorScheme {
  light: string
  DEFAULT: string
  text: string
  border?: string
  shadow?: string
}

/* =========================================================
   BASE HELPERS
========================================================= */

const soft = (color: string) =>
  `bg-[${color}/0.12] text-[${color}]`

const solid = (color: string) =>
  `bg-[${color}] text-white`

const border = (color: string) =>
  `border-[${color}/0.35]`

/* =========================================================
   CORE UI COLORS
========================================================= */

export const uiBase = {
  bg: "bg-[var(--color-bg)]",
  surface: "bg-[var(--color-surface)]",
  border: "border-[var(--color-border)]",
  text: "text-[var(--color-text)]",
  textSoft: "text-[var(--color-text-soft)]",
}

/* =========================================================
   ACCENT
========================================================= */

export const accentColor: ColorScheme = {
  light: soft("var(--color-warning)"),
  DEFAULT: solid("var(--color-warning)"),
  text: "text-[var(--color-warning)]",
  border: border("var(--color-warning)"),
  shadow:
    "shadow-[0_6px_20px_var(--color-warning)/0.35]",
}

/* FAB */

export const fabColor = {
  light: "bg-[var(--color-warning)/0.20]",
  DEFAULT: "bg-[var(--color-warning)]",
  text: "text-white",
  shadow:
    "shadow-[0_10px_30px_var(--color-warning)/0.45]",
}

/* =========================================================
   STATUS COLORS
========================================================= */

export const statusColors = {
  success: {
    light: soft("var(--color-success)"),
    DEFAULT: solid("var(--color-success)"),
    text: "text-[var(--color-success)]",
    icon: "text-[var(--color-success)]",
    bg: "bg-[var(--color-success)/0.15]",
  },
  warning: {
    light: soft("var(--color-warning)"),
    DEFAULT: solid("var(--color-warning)"),
    text: "text-[var(--color-warning)]",
    icon: "text-[var(--color-warning)]",
    bg: "bg-[var(--color-warning)/0.15]",
  },
  danger: {
    light: soft("var(--color-danger)"),
    DEFAULT: solid("var(--color-danger)"),
    text: "text-[var(--color-danger)]",
    icon: "text-[var(--color-danger)]",
    bg: "bg-[var(--color-danger)/0.15]",
  },
  error: {
    light: soft("var(--color-danger)"),
    DEFAULT: solid("var(--color-danger)"),
    text: "text-[var(--color-danger)]",
    icon: "text-[var(--color-danger)]",
    bg: "bg-[var(--color-danger)/0.15]",
  },
  info: {
    light: soft("var(--color-info)"),
    DEFAULT: solid("var(--color-info)"),
    text: "text-[var(--color-info)]",
    icon: "text-[var(--color-info)]",
    bg: "bg-[var(--color-info)/0.15]",
  },
  syncing: {
    light: soft("var(--color-info)"),
    DEFAULT: solid("var(--color-info)"),
    text: "text-[var(--color-info)]",
    icon: "text-[var(--color-info)]",
    bg: "bg-[var(--color-info)/0.15]",
  },
}

/* =========================================================
   MODULE COLORS
========================================================= */

export const moduleColors: Record<ModuleType, ColorScheme> = {
  food: accentColor,
  workout: statusColors.info,
  finance: statusColors.success,
  water: statusColors.info,
  sleep: statusColors.success,
  mood: statusColors.warning,
  books: accentColor,
  recipes: accentColor,
  habits: statusColors.success,
  goals: accentColor,
  logs: statusColors.info,
  settings: {
    light: soft("var(--color-text-soft)"),
    DEFAULT: solid("var(--color-text-soft)"),
    text: "text-[var(--color-text-soft)]",
  },
}

/* =========================================================
   ITEM COLORS
========================================================= */

export const itemColors: Record<ItemType, ColorScheme> = {
  vitamin: statusColors.warning,
  medicine: statusColors.danger,
  herb: statusColors.success,
  cosmetic: accentColor,
  product: statusColors.info,
}

/* =========================================================
   PRIORITY
========================================================= */

export const priorityColors = {
  low: statusColors.info,
  medium: statusColors.warning,
  high: statusColors.danger,
  critical: statusColors.danger,
}

/* =========================================================
   PROGRESS
========================================================= */

export const progressColors = {
  complete: statusColors.success,
  almost: statusColors.warning,
  halfway: statusColors.info,
  low: statusColors.danger,
}

/* =========================================================
   ANALYTICS
========================================================= */

export const analyticsColors = {
  calories: "var(--color-warning)",
  protein: "var(--color-info)",
  fat: "var(--color-warning)",
  carbs: "var(--color-success)",
  income: "var(--color-success)",
  expense: "var(--color-danger)",
  workout: "var(--color-info)",
  pie: [
    "var(--color-accent)",
    "var(--color-success)",
    "var(--color-warning)",
    "var(--color-info)",
    "var(--color-danger)",
  ],
}

/* =========================================================
   UI ACTIONS
========================================================= */

export const uiColors = {
  favorite: { ...accentColor, fill: "fill-[var(--color-accent)]" },
  delete: { ...statusColors.danger, hover: "text-[var(--color-danger)]" },
  success: statusColors.success,
}

/* =========================================================
   HABITS
========================================================= */

export const habitColors = {
  fire: statusColors.warning,
  check: statusColors.success,
  missed: statusColors.danger,
}

export const habitColorArray = [
  habitColors.fire,
  habitColors.check,
  habitColors.missed,
]

/* =========================================================
   BOOKS
========================================================= */

export const bookColors = {
  reading: statusColors.info,
  completed: statusColors.success,
  planned: {
    light: soft("var(--color-text-soft)"),
    DEFAULT: solid("var(--color-text-soft)"),
    text: "text-[var(--color-text-soft)]",
  },
  paused: statusColors.warning,
  dropped: {
    light: soft("var(--color-text-soft)"),
    DEFAULT: solid("var(--color-text-soft)"),
    text: "text-[var(--color-text-soft)]",
  },
  ratingFill: "fill-[var(--color-warning)]",
  rating: "text-[var(--color-warning)]",
}

/* =========================================================
   RECIPES
========================================================= */

export const recipeColors = {
  food: accentColor,
  breakfast: statusColors.warning,
  lunch: statusColors.success,
  dinner: statusColors.info,
  snack: accentColor,
  drink: statusColors.info,
  cocktail: accentColor,
  rating: { fill: "fill-[var(--color-warning)]", DEFAULT: "text-[var(--color-warning)]" },
  calories: { bg: "bg-[var(--color-warning)/0.15]", text: "text-[var(--color-warning)]" },
  cuisine: { bg: "bg-[var(--color-info)/0.15]", text: "text-[var(--color-info)]", border: "border-[var(--color-info)/0.35]" },
  courseType: { bg: "bg-[var(--color-accent)/0.15]", text: "text-[var(--color-accent)]", border: "border-[var(--color-accent)/0.35]" },
  cookingMethod: { bg: "bg-[var(--color-warning)/0.15]", text: "text-[var(--color-warning)]", border: "border-[var(--color-warning)/0.35]" },
  servingTemperature: { bg: "bg-[var(--color-text)/0.15]", text: "text-[var(--color-text)]", border: "border-[var(--color-text)/0.35]" },
  spicy: { active: "bg-[var(--color-danger)]", inactive: "bg-[var(--color-danger)/0.15]" },
  dietary: { bg: "bg-[var(--color-success)/0.15]", text: "text-[var(--color-success)]", border: "border-[var(--color-success)/0.35]" },
  drinkType: { bg: "bg-[var(--color-info)/0.15]", text: "text-[var(--color-info)]", border: "border-[var(--color-info)/0.35]" },
  base: { bg: "bg-[var(--color-accent)/0.15]", text: "text-[var(--color-accent)]", border: "border-[var(--color-accent)/0.35]" },
  carbonated: { yes: "bg-[var(--color-info)/0.15] text-[var(--color-info)]", no: "bg-[var(--color-text-soft)/0.15] text-[var(--color-text-soft)]" },
  caffeine: { bg: "bg-[var(--color-text)/0.15]", text: "text-[var(--color-text)]", border: "border-[var(--color-text)/0.35]" },
  alcoholic: { yes: "bg-[var(--color-accent)/0.15] text-[var(--color-accent)]", no: "bg-[var(--color-text-soft)/0.15] text-[var(--color-text-soft)]" },
  baseSpirit: { bg: "bg-[var(--color-text)/0.15]", text: "text-[var(--color-text)]", border: "border-[var(--color-text)/0.35]" },
  cocktailMethod: { bg: "bg-[var(--color-warning)/0.15]", text: "text-[var(--color-warning)]", border: "border-[var(--color-warning)/0.35]" },
  glassType: { bg: "bg-[var(--color-info)/0.15]", text: "text-[var(--color-info)]", border: "border-[var(--color-info)/0.35]" },
  iceType: { bg: "bg-[var(--color-info)/0.15]", text: "text-[var(--color-info)]", border: "border-[var(--color-info)/0.35]" },
  color: { bg: "bg-[var(--color-accent)/0.15]", text: "text-[var(--color-accent)]", border: "border-[var(--color-accent)/0.35]" },
  protein: { bg: "bg-[var(--color-success)/0.15]", text: "text-[var(--color-success)]" },
  fat: { bg: "bg-[var(--color-warning)/0.15]", text: "text-[var(--color-warning)]" },
  carbs: { bg: "bg-[var(--color-info)/0.15]", text: "text-[var(--color-info)]" },
  fiber: { bg: "bg-[var(--color-success)/0.15]", text: "text-[var(--color-success)]" },
  sugar: { bg: "bg-[var(--color-accent)/0.15]", text: "text-[var(--color-accent)]" },
  sodium: { bg: "bg-[var(--color-text-soft)/0.15]", text: "text-[var(--color-text-soft)]" },
  garnish: { bg: "bg-[var(--color-accent)/0.15]", text: "text-[var(--color-accent)]", border: "border-[var(--color-accent)/0.35]" },
  tools: { bg: "bg-[var(--color-text)/0.15]", text: "text-[var(--color-text)]", border: "border-[var(--color-text)/0.35]" },
}

/* =========================================================
   HELPERS
========================================================= */

export function getModuleColor(
  module: ModuleType,
  variant: keyof ColorScheme = "DEFAULT"
) {
  return moduleColors[module][variant]
}

/* merge helper */

export function mergeColors(...classes: string[]) {
  return cn(classes)
}

/* =========================================================
   ADDITIONAL COLORS (for compatibility)
========================================================= */

/* BMI */
export const bmiColors = {
  underweight: { text: "text-[var(--color-info)]", bg: "bg-[var(--color-info)/0.15]", DEFAULT: "bg-[var(--color-info)/0.15]" },
  normal: { text: "text-[var(--color-success)]", bg: "bg-[var(--color-success)/0.15]", DEFAULT: "bg-[var(--color-success)/0.15]" },
  overweight: { text: "text-[var(--color-warning)]", bg: "bg-[var(--color-warning)/0.15]", DEFAULT: "bg-[var(--color-warning)/0.15]" },
  obese: { text: "text-[var(--color-danger)]", bg: "bg-[var(--color-danger)/0.15]", DEFAULT: "bg-[var(--color-danger)/0.15]" },
}

/* Body */
export const bodyColors = {
  weight: accentColor,
  height: statusColors.info,
  bmi: {
    underweight: { text: "text-[var(--color-info)]", bg: "bg-[var(--color-info)/0.15]", DEFAULT: "bg-[var(--color-info)/0.15]" },
    normal: { text: "text-[var(--color-success)]", bg: "bg-[var(--color-success)/0.15]", DEFAULT: "bg-[var(--color-success)/0.15]" },
    overweight: { text: "text-[var(--color-warning)]", bg: "bg-[var(--color-warning)/0.15]", DEFAULT: "bg-[var(--color-warning)/0.15]" },
    obese: { text: "text-[var(--color-danger)]", bg: "bg-[var(--color-danger)/0.15]", DEFAULT: "bg-[var(--color-danger)/0.15]" },
  },
  trend: {
    down: "text-[var(--color-success)]",
    up: "text-[var(--color-danger)]",
    stable: "text-[var(--color-warning)]",
  },
  stats: {
    max: "text-[var(--color-danger)]",
    min: "text-[var(--color-info)]",
    avg: "text-[var(--color-success)]",
  },
}

/* Item Type Tabs */
export const itemTypeTabsColors = {
  all: "",
  vitamin: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
  medicine: "data-[state=active]:bg-[var(--color-danger)] data-[state=active]:text-white",
  herb: "data-[state=active]:bg-[var(--color-success)] data-[state=active]:text-white",
  cosmetic: "data-[state=active]:bg-[var(--color-accent)] data-[state=active]:text-white",
  product: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
}

/* Book Status Tabs */
export const bookStatusTabsColors = {
  all: "",
  reading: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
  completed: "data-[state=active]:bg-[var(--color-success)] data-[state=active]:text-white",
  planned: "data-[state=active]:bg-[var(--color-text-soft)] data-[state=active]:text-white",
  paused: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
  dropped: "data-[state=active]:bg-[var(--color-text-soft)] data-[state=active]:text-white",
}

/* Recipe Type Tabs */
export const recipeTypeTabsColors = {
  all: "",
  food: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
  drink: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
  cocktail: "data-[state=active]:bg-[var(--color-accent)] data-[state=active]:text-white",
}
export const bookStatusColorsLegacy = {
  reading: "text-[var(--color-info)]",
  completed: "text-[var(--color-success)]",
  planned: "text-[var(--color-text-soft)]",
  abandoned: "text-[var(--color-text-soft)]",
  paused: "text-[var(--color-warning)]",
  dropped: "text-[var(--color-text-soft)]",
}

/* Book Status (alias) */
export const bookStatusColors = bookColors

/* Book Format */
export const bookFormatColors = {
  physical: { light: soft("var(--color-text-soft)"), DEFAULT: solid("var(--color-text-soft)"), text: "text-[var(--color-text-soft)]" },
  electronic: statusColors.info,
  audio: accentColor,
}

/* Content Type */
export const contentTypeColors = {
  book: { light: soft("var(--color-text-soft)"), DEFAULT: solid("var(--color-text-soft)"), text: "text-[var(--color-text-soft)]" },
  recipe: accentColor,
  item: statusColors.info,
}

/* Finance */
export const financeColors = {
  income: statusColors.success,
  expense: statusColors.danger,
  transfer: statusColors.info,
}

export const financeTypeColors = {
  income: "text-[var(--color-success)]",
  expense: "text-[var(--color-danger)]",
  transfer: "text-[var(--color-info)]",
}

/* Food Source */
export const foodSourceColors = {
  home: statusColors.success,
  restaurant: statusColors.warning,
  delivery: statusColors.info,
  custom: statusColors.success,
  recipe: accentColor,
  product: statusColors.info,
}

/* Food Type */
export const foodTypeColors = {
  breakfast: statusColors.warning,
  lunch: statusColors.success,
  dinner: statusColors.info,
  snack: accentColor,
}

/* Habit Status */
export const habitStatusColors = {
  completed: statusColors.success,
  skipped: statusColors.warning,
  active: statusColors.info,
  weekend: statusColors.warning,
  negative: statusColors.danger,
}

/* Log Type */
export const logTypeColors = {
  food: statusColors.warning,
  workout: statusColors.info,
  finance: statusColors.success,
  finance_income: statusColors.success,
  finance_expense: statusColors.danger,
  finance_transfer: statusColors.info,
}

/* Log Type Tabs */
export const logTypeTabsColors = {
  all: "",
  food: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
  workout: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
  finance: "data-[state=active]:bg-[var(--color-success)] data-[state=active]:text-white",
}

/* Mood */
export const moodColors = {
  excellent: { ...statusColors.success, border: border("var(--color-success)") },
  good: { ...statusColors.success, border: border("var(--color-success)") },
  neutral: { ...statusColors.warning, border: border("var(--color-warning)") },
  bad: { ...statusColors.danger, border: border("var(--color-danger)") },
  terrible: { ...statusColors.danger, border: border("var(--color-danger)") },
  great: { ...statusColors.success, border: border("var(--color-success)") },
  okay: { ...statusColors.warning, border: border("var(--color-warning)") },
  energy: { ...statusColors.warning, border: border("var(--color-warning)") },
  stress: { ...statusColors.danger, border: border("var(--color-danger)") },
}

export const moodLevelColors = moodColors

/* Navigation */
export const navigationColors = {
  food: "text-[var(--color-accent)]",
  workout: "text-[var(--color-info)]",
  finance: "text-[var(--color-success)]",
  water: "text-[var(--color-info)]",
  sleep: "text-[var(--color-success)]",
  mood: "text-[var(--color-warning)]",
  books: "text-[var(--color-text-soft)]",
  book: "text-[var(--color-text-soft)]",
  recipes: "text-[var(--color-accent)]",
  recipe: "text-[var(--color-accent)]",
  habits: "text-[var(--color-success)]",
  habit: "text-[var(--color-success)]",
  goals: "text-[var(--color-accent)]",
  goal: "text-[var(--color-accent)]",
  logs: "text-[var(--color-info)]",
  settings: "text-[var(--color-text-soft)]",
  analytics: "text-[var(--color-info)]",
  catalog: "text-[var(--color-info)]",
}

/* Recipe Type Legacy */
export const recipeTypeColorsLegacy = {
  food: "text-[var(--color-accent)]",
  drink: "text-[var(--color-info)]",
  cocktail: "text-[var(--color-accent)]",
}

/* Reminder Priority */
export const reminderPriorityColors = {
  low: statusColors.info,
  medium: statusColors.warning,
  high: statusColors.danger,
  critical: statusColors.danger,
}

/* Reminder Stats */
export const reminderStatsColors = {
  completed: statusColors.success,
  pending: statusColors.warning,
  overdue: statusColors.danger,
  streak: "text-[var(--color-accent)]",
  longestStreak: "text-[var(--color-warning)]",
  totalCompleted: "text-[var(--color-success)]",
}

/* Reminder Type */
export const reminderTypeColors = {
  reminder: statusColors.info,
  scheduled: statusColors.warning,
  completed: statusColors.success,
  overdue: statusColors.danger,
  stats: accentColor,
}

/* Sleep */
export const sleepColors = {
  excellent: { ...statusColors.success, border: border("var(--color-success)") },
  good: { ...statusColors.success, border: border("var(--color-success)") },
  fair: { ...statusColors.warning, border: border("var(--color-warning)") },
  poor: { ...statusColors.danger, border: border("var(--color-danger)") },
  veryPoor: { ...statusColors.danger, border: border("var(--color-danger)") },
}

export const sleepQualityColors = sleepColors

/* Stat */
export const statColors = {
  light: "bg-[var(--color-text-soft)/0.15]",
  DEFAULT: "bg-[var(--color-text-soft)/0.25]",
  text: "text-[var(--color-text-soft)]",
  food: "text-[var(--color-warning)]",
  workout: "text-[var(--color-info)]",
  finance: "text-[var(--color-success)]",
}

/* Streak */
export const streakColors = {
  trophy: { bg: "bg-[var(--color-accent)/0.15]", icon: "text-[var(--color-accent)]" },
  flame: { icon: "text-[var(--color-warning)]" },
  first: { bg: "bg-[var(--color-accent)]" },
  second: { bg: "bg-[var(--color-text-soft)]" },
  third: { bg: "bg-[var(--color-accent)]" },
  gradient: "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)]",
}

/* Water Drink */
export const waterDrinkColors = {
  water: { light: soft("var(--color-info)"), DEFAULT: solid("var(--color-info)"), text: "text-[var(--color-info)]", border: border("var(--color-info)") },
  tea: { light: soft("var(--color-warning)"), DEFAULT: solid("var(--color-warning)"), text: "text-[var(--color-warning)]", border: border("var(--color-warning)") },
  coffee: { light: soft("var(--color-text)"), DEFAULT: solid("var(--color-text)"), text: "text-[var(--color-text)]", border: border("var(--color-text)") },
  other: { light: soft("var(--color-accent)"), DEFAULT: solid("var(--color-accent)"), text: "text-[var(--color-accent)]", border: border("var(--color-accent)") },
}

/* Workout */
export const workoutColors = {
  strength: { ...statusColors.danger, border: border("var(--color-danger)") },
  cardio: { ...statusColors.info, border: border("var(--color-info)") },
  yoga: { ...statusColors.success, border: border("var(--color-success)") },
  stretching: { ...statusColors.warning, border: border("var(--color-warning)") },
  calories: "text-[var(--color-warning)]",
}

export const workoutTypeColors = {
  strength: "text-[var(--color-danger)]",
  cardio: "text-[var(--color-info)]",
  yoga: "text-[var(--color-success)]",
  stretching: "text-[var(--color-warning)]",
}