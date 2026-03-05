/**
 * Семантические цвета для различных состояний и типов данных
 * Использует OKLCH цвета для гармоничного восприятия
 */

/** Цвета для состояний */
export const stateColors = {
  success: {
    light: {
      bg: 'bg-[oklch(0.86_0.24_138)]',
      text: 'text-[oklch(0.74_0.30_138)]',
      border: 'border-[oklch(0.74_0.30_138)/0.45]',
    },
    dark: {
      bg: 'bg-[oklch(0.64_0.20_138)]',
      text: 'text-[oklch(0.80_0.26_138)]',
      border: 'border-[oklch(0.80_0.26_138)/0.45]',
    }
  },
  error: {
    light: {
      bg: 'bg-[oklch(0.80_0.28_18)]',
      text: 'text-[oklch(0.68_0.34_18)]',
      border: 'border-[oklch(0.68_0.34_18)/0.45]',
    },
    dark: {
      bg: 'bg-[oklch(0.60_0.24_18)]',
      text: 'text-[oklch(0.82_0.30_18)]',
      border: 'border-[oklch(0.82_0.30_18)/0.45]',
    }
  },
  warning: {
    light: {
      bg: 'bg-[oklch(0.88_0.2_85)]',
      text: 'text-[oklch(0.75_0.15_85)]',
      border: 'border-[oklch(0.75_0.15_85)/0.45]',
    },
    dark: {
      bg: 'bg-[oklch(0.68_0.18_85)]',
      text: 'text-[oklch(0.85_0.20_85)]',
      border: 'border-[oklch(0.85_0.20_85)/0.45]',
    }
  },
  info: {
    light: {
      bg: 'bg-[oklch(0.82_0.24_218)]',
      text: 'text-[oklch(0.70_0.30_218)]',
      border: 'border-[oklch(0.70_0.30_218)/0.45]',
    },
    dark: {
      bg: 'bg-[oklch(0.62_0.20_218)]',
      text: 'text-[oklch(0.80_0.26_218)]',
      border: 'border-[oklch(0.80_0.26_218)/0.45]',
    }
  }
} as const;

/** Цвета для типов данных */
export const dataTypeColors = {
  positive: {
    light: 'text-[oklch(0.74_0.30_138)]', // green
    dark: 'text-[oklch(0.80_0.26_138)]',
  },
  negative: {
    light: 'text-[oklch(0.68_0.34_18)]', // red
    dark: 'text-[oklch(0.82_0.30_18)]',
  },
  neutral: {
    light: 'text-[oklch(0.70_0.23_242)]', // blue-gray
    dark: 'text-[oklch(0.80_0.18_242)]',
  },
  primary: {
    light: 'text-[oklch(0.70_0.34_38)]', // orange
    dark: 'text-[oklch(0.78_0.28_38)]',
  }
} as const;

/** Цвета для прогресса */
export const progressColors = {
  complete: {
    light: 'bg-[oklch(0.74_0.30_138)]', // green
    dark: 'bg-[oklch(0.80_0.26_138)]',
  },
  almost: {
    light: 'bg-[oklch(0.80_0.28_78)]', // yellow
    dark: 'bg-[oklch(0.86_0.24_78)]',
  },
  halfway: {
    light: 'bg-[oklch(0.70_0.30_208)]', // blue
    dark: 'bg-[oklch(0.78_0.26_208)]',
  },
  low: {
    light: 'bg-[oklch(0.70_0.23_242)]', // gray-blue
    dark: 'bg-[oklch(0.78_0.18_242)]',
  }
} as const;

/** Цвета для рейтингов */
export const ratingColors = {
  five: {
    light: 'text-[oklch(0.74_0.30_138)]', // gold/green
    dark: 'text-[oklch(0.80_0.26_138)]',
  },
  four: {
    light: 'text-[oklch(0.80_0.28_78)]', // yellow
    dark: 'text-[oklch(0.86_0.24_78)]',
  },
  three: {
    light: 'text-[oklch(0.75_0.25_45)]', // orange
    dark: 'text-[oklch(0.82_0.22_45)]',
  },
  two: {
    light: 'text-[oklch(0.70_0.30_218)]', // blue
    dark: 'text-[oklch(0.78_0.26_218)]',
  },
  one: {
    light: 'text-[oklch(0.68_0.34_18)]', // red
    dark: 'text-[oklch(0.82_0.30_18)]',
  }
} as const;

/** Цвета для статусов */
export const statusColors = {
  active: {
    light: 'text-[oklch(0.74_0.30_138)]',
    dark: 'text-[oklch(0.80_0.26_138)]',
  },
  inactive: {
    light: 'text-[oklch(0.60_0.15_240)]',
    dark: 'text-[oklch(0.70_0.10_240)]',
  },
  pending: {
    light: 'text-[oklch(0.75_0.15_85)]',
    dark: 'text-[oklch(0.85_0.12_85)]',
  },
  archived: {
    light: 'text-[oklch(0.50_0.08_240)]',
    dark: 'text-[oklch(0.60_0.05_240)]',
  },
  warning: {
    icon: 'text-[oklch(0.75_0.15_85)]',
    bg: 'bg-[oklch(0.88_0.20_85)]/15',
  },
  error: {
    icon: 'text-[oklch(0.68_0.34_18)]',
    bg: 'bg-[oklch(0.80_0.28_18)]/15',
  },
  success: {
    icon: 'text-[oklch(0.74_0.30_138)]',
    bg: 'bg-[oklch(0.86_0.24_138)]/15',
  },
  syncing: {
    icon: 'text-[oklch(0.70_0.30_218)]',
    bg: 'bg-[oklch(0.82_0.24_218)]/15',
  },
  info: {
    icon: 'text-[oklch(0.70_0.30_218)]',
    bg: 'bg-[oklch(0.82_0.24_218)]/15',
  },
} as const;

/** Цвета для важности/приоритета */
export const priorityColors = {
  high: {
    light: 'text-[oklch(0.68_0.34_18)]', // red
    dark: 'text-[oklch(0.82_0.30_18)]',
  },
  medium: {
    light: 'text-[oklch(0.75_0.15_85)]', // yellow
    dark: 'text-[oklch(0.85_0.12_85)]',
  },
  low: {
    light: 'text-[oklch(0.70_0.30_218)]', // blue
    dark: 'text-[oklch(0.78_0.26_218)]',
  }
} as const;

/** Цвета для категорий */
export const categoryColors = {
  health: {
    light: 'bg-[oklch(0.74_0.30_138)]',
    dark: 'bg-[oklch(0.80_0.26_138)]',
    text: {
      light: 'text-[oklch(0.74_0.30_138)]',
      dark: 'text-[oklch(0.80_0.26_138)]',
    }
  },
  fitness: {
    light: 'bg-[oklch(0.70_0.30_218)]',
    dark: 'bg-[oklch(0.78_0.26_218)]',
    text: {
      light: 'text-[oklch(0.70_0.30_218)]',
      dark: 'text-[oklch(0.78_0.26_218)]',
    }
  },
  finance: {
    light: 'bg-[oklch(0.73_0.28_145)]',
    dark: 'bg-[oklch(0.79_0.24_145)]',
    text: {
      light: 'text-[oklch(0.73_0.28_145)]',
      dark: 'text-[oklch(0.79_0.24_145)]',
    }
  },
  productivity: {
    light: 'bg-[oklch(0.68_0.34_38)]',
    dark: 'bg-[oklch(0.76_0.30_38)]',
    text: {
      light: 'text-[oklch(0.68_0.34_38)]',
      dark: 'text-[oklch(0.76_0.30_38)]',
    }
  },
  learning: {
    light: 'bg-[oklch(0.70_0.24_48)]',
    dark: 'bg-[oklch(0.78_0.20_48)]',
    text: {
      light: 'text-[oklch(0.70_0.24_48)]',
      dark: 'text-[oklch(0.78_0.20_48)]',
    }
  }
} as const;

/** Цвета для временных интервалов */
export const timeColors = {
  past: {
    light: 'text-[oklch(0.60_0.15_240)]',
    dark: 'text-[oklch(0.70_0.10_240)]',
  },
  present: {
    light: 'text-[oklch(0.70_0.30_218)]',
    dark: 'text-[oklch(0.78_0.26_218)]',
  },
  future: {
    light: 'text-[oklch(0.74_0.30_138)]',
    dark: 'text-[oklch(0.80_0.26_138)]',
  },
  today: {
    light: 'text-[oklch(0.75_0.15_85)]',
    dark: 'text-[oklch(0.85_0.12_85)]',
  }
} as const;

/** Цвета для доступности */
export const accessibilityColors = {
  highContrast: {
    light: 'text-[oklch(0.15_0.05_0)]',
    dark: 'text-[oklch(0.95_0.02_0)]',
  },
  mediumContrast: {
    light: 'text-[oklch(0.30_0.04_0)]',
    dark: 'text-[oklch(0.80_0.03_0)]',
  },
  lowContrast: {
    light: 'text-[oklch(0.50_0.03_0)]',
    dark: 'text-[oklch(0.65_0.02_0)]',
  }
} as const;