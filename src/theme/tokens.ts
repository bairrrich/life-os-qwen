// Design Tokens (основа всей системы)
// Центральная система цветов для модулей Life OS
// Использует OKLCH цвета для гармоничного восприятия
// Формат: hue (0-360) для автоматической генерации светлых/темных оттенков

export const moduleHue = {
 food: 68,      // Желто-зеленый - питание
  workout: 218,  // Синий - тренировки  
  finance: 145,  // Зеленый - финансы
  water: 208,    // Голубой - вода
  sleep: 278,    // Фиолетовый - сон
  mood: 312,     // Розовый - настроение
  books: 48,     // Желтый - книги
  recipes: 58,   // Оранжевый - рецепты
  habits: 118,   // Зеленовато-синий - привычки
  goals: 38,     // Оранжево-красный - цели
  logs: 242,     // Сине-фиолетовый - логи
  settings: 255, // Сине-фиолетовый - настройки
} as const

// Базовые параметры для генерации оттенков
export const colorParams = {
  light: {
    chroma: {
      primary: 0.28,
      secondary: 0.24,
      tertiary: 0.20,
    },
    lightness: {
      primary: 0.76,
      secondary: 0.82,
      tertiary: 0.88,
    }
  },
  dark: {
    chroma: {
      primary: 0.24,
      secondary: 0.20,
      tertiary: 0.16,
    },
    lightness: {
      primary: 0.60,
      secondary: 0.68,
      tertiary: 0.76,
    }
  }
} as const

export type ModuleType = keyof typeof moduleHue
