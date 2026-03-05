# Unified Color System

## Overview

Life OS uses a centralized color system based on **CSS custom properties** (CSS variables) for consistent theming across the application. All colors are defined in `src/lib/theme-colors.ts`.

---

## Architecture

### CSS Variables

All colors use CSS variables that support light/dark themes and accent color customization:

```css
:root {
  --accent-hue: 220;

  /* Base colors */
  --color-bg: oklch(0.98 0.01 240);
  --color-surface: oklch(0.95 0.02 240);
  --color-border: oklch(0.88 0.02 240);

  /* Text colors */
  --color-text: oklch(0.30 0.03 240);
  --color-text-soft: oklch(0.55 0.03 240);

  /* Accent colors */
  --color-accent: oklch(0.70 0.22 var(--accent-hue));
  --color-accent-soft: oklch(0.82 0.14 var(--accent-hue));

  /* Status colors */
  --color-success: oklch(0.74 0.30 140);
  --color-warning: oklch(0.78 0.22 85);
  --color-danger: oklch(0.66 0.34 20);
  --color-info: oklch(0.70 0.26 220);
}

.dark {
  --color-bg: oklch(0.18 0.02 240);
  --color-surface: oklch(0.24 0.02 240);
  --color-border: oklch(0.32 0.02 240);
  --color-text: oklch(0.94 0.02 240);
  --color-text-soft: oklch(0.75 0.02 240);
}
```

### Helper Functions

```typescript
const soft = (color: string) => `bg-[${color}/0.12] text-[${color}]`
const solid = (color: string) => `bg-[${color}] text-white`
const border = (color: string) => `border-[${color}/0.35]`
```

---

## Color Exports

### Core UI Colors

| Export | Properties | Usage |
|--------|------------|-------|
| `uiBase` | `bg`, `surface`, `border`, `text`, `textSoft` | Base UI elements |
| `accentColor` | `light`, `DEFAULT`, `text`, `border`, `shadow` | Primary accent |
| `fabColor` | `light`, `DEFAULT`, `text`, `shadow` | Floating action button |

### Status Colors

| Export | Variants | Properties |
|--------|----------|------------|
| `statusColors` | `success`, `warning`, `danger`, `error`, `info`, `syncing` | `light`, `DEFAULT`, `text`, `icon`, `bg` |

### Module Colors

| Export | Modules | Properties |
|--------|---------|------------|
| `moduleColors` | `food`, `workout`, `finance`, `water`, `sleep`, `mood`, `books`, `recipes`, `habits`, `goals`, `logs`, `settings` | `light`, `DEFAULT`, `text`, `border` |

### Feature Colors

| Export | Variants | Properties |
|--------|----------|------------|
| `itemColors` | `vitamin`, `medicine`, `herb`, `cosmetic`, `product` | `light`, `DEFAULT`, `text`, `border` |
| `priorityColors` | `low`, `medium`, `high`, `critical` | Uses statusColors |
| `progressColors` | `complete`, `almost`, `halfway`, `low` | Uses statusColors |
| `habitColors` | `fire`, `check`, `missed` | Uses statusColors |
| `habitStatusColors` | `completed`, `skipped`, `active`, `weekend`, `negative` | Uses statusColors |
| `bookColors` | `reading`, `completed`, `planned`, `paused`, `dropped` | `light`, `DEFAULT`, `text`, `border` |
| `bookFormatColors` | `physical`, `electronic`, `audio` | `light`, `DEFAULT`, `text` |
| `recipeColors` | `food`, `breakfast`, `lunch`, `dinner`, `snack`, `drink`, `cocktail` + metadata | Varies |
| `sleepColors` | `excellent`, `good`, `fair`, `poor`, `veryPoor` | `light`, `DEFAULT`, `text`, `border` |
| `moodColors` | `excellent`, `good`, `neutral`, `bad`, `terrible`, `great`, `okay`, `energy`, `stress` | `light`, `DEFAULT`, `text`, `border` |
| `workoutColors` | `strength`, `cardio`, `yoga`, `stretching`, `calories` | `light`, `DEFAULT`, `text`, `border`, `icon` |
| `financeColors` | `income`, `expense`, `transfer` | Uses statusColors |
| `waterDrinkColors` | `water`, `tea`, `coffee`, `other` | `light`, `DEFAULT`, `text`, `border` |
| `logTypeColors` | `food`, `workout`, `finance`, `finance_income`, `finance_expense`, `finance_transfer` | `light`, `DEFAULT`, `text` |
| `foodTypeColors` | `breakfast`, `lunch`, `dinner`, `snack` | `light`, `DEFAULT`, `text` |
| `foodSourceColors` | `home`, `restaurant`, `delivery`, `custom`, `recipe`, `product` | Uses statusColors |
| `contentTypeColors` | `book`, `recipe`, `item` | `light`, `DEFAULT`, `text` |
| `bodyColors` | `weight`, `height`, `bmi`, `trend`, `stats` | Varies |
| `bmiColors` | `underweight`, `normal`, `overweight`, `obese` | `text`, `bg`, `DEFAULT` |
| `streakColors` | `trophy`, `flame`, `first`, `second`, `third`, `gradient` | `bg`, `icon` |
| `uiColors` | `favorite`, `delete`, `success` | `light`, `DEFAULT`, `text`, `fill`, `hover` |
| `navigationColors` | All nav items | `text` (color string) |
| `analyticsColors` | `calories`, `protein`, `fat`, `carbs`, `income`, `expense`, `workout`, `pie` | CSS variable strings |
| `statColors` | `light`, `DEFAULT`, `text`, `food`, `workout`, `finance` | Varies |
| `reminderTypeColors` | `reminder`, `scheduled`, `completed`, `overdue`, `stats` | `icon`, `bg`, `border` |
| `reminderPriorityColors` | `low`, `medium`, `high`, `critical` | Uses statusColors |
| `reminderStatsColors` | `completed`, `pending`, `overdue`, `streak`, `longestStreak`, `totalCompleted` | `text` or full scheme |

### Legacy Aliases

| Export | Maps To | Purpose |
|--------|---------|---------|
| `moodLevelColors` | `moodColors` | Backward compatibility |
| `sleepQualityColors` | `sleepColors` | Backward compatibility |
| `bookStatusColors` | `bookColors` | Backward compatibility |
| `bookStatusColorsLegacy` | Text-only colors | Legacy text colors |
| `recipeTypeColorsLegacy` | Text-only colors | Legacy text colors |
| `financeTypeColors` | Text-only colors | Legacy text colors |
| `workoutTypeColors` | Text-only colors | Legacy text colors |

---

## Usage Examples

### Basic Usage

```tsx
import { statusColors, moduleColors } from "@/lib/theme-colors"

// Status badge
<div className={statusColors.success.DEFAULT}>Success</div>

// Module card
<div className={moduleColors.food.light}>Food module</div>

// Icon color
<Icon className={statusColors.warning.icon} />
```

### Helper Functions

```tsx
import { getModuleColor, mergeColors } from "@/lib/theme-colors"

// Get module color by variant
<div className={getModuleColor('food', 'DEFAULT')}>...</div>

// Merge color classes
<div className={mergeColors(color1, color2)}>...</div>
```

### Conditional Styling

```tsx
<div className={
  priority === 'high' 
    ? priorityColors.high.DEFAULT 
    : priorityColors.low.text
}>
  {priority}
</div>
```

---

## Color Scheme Interface

```typescript
interface ColorScheme {
  light: string      // Soft background with text
  DEFAULT: string    // Solid background with white text
  text: string       // Text color only
  border?: string    // Border color
  shadow?: string    // Shadow color
  icon?: string      // Icon color
  bg?: string        // Background only
  fill?: string      // SVG fill
  hover?: string     // Hover state
}
```

---

## Module Color Mapping

| Module | Color Source |
|--------|--------------|
| food | `accentColor` |
| workout | `statusColors.info` |
| finance | `statusColors.success` |
| water | `statusColors.info` |
| sleep | `statusColors.success` |
| mood | `statusColors.warning` |
| books | `accentColor` |
| recipes | `accentColor` |
| habits | `statusColors.success` |
| goals | `accentColor` |
| logs | `statusColors.info` |
| settings | Custom (text-soft) |

---

## Item Color Mapping

| Item Type | Color Source |
|-----------|--------------|
| vitamin | `statusColors.warning` |
| medicine | `statusColors.danger` |
| herb | `statusColors.success` |
| cosmetic | `accentColor` |
| product | `statusColors.info` |

---

## Best Practices

### ✅ DO

- Use semantic color names (`statusColors.success`, not hardcoded values)
- Use the appropriate variant (`light` for backgrounds, `text` for text)
- Use helper functions for dynamic colors
- Import only needed colors to reduce bundle size

### ❌ DON'T

- Hardcode color values (hex, rgb, oklch)
- Create custom color schemes outside `theme-colors.ts`
- Use deprecated color exports
- Mix old OKLCH values with new CSS variables

---

## Migration Notes

### From Old System (OKLCH hardcoded)

**Before:**
```tsx
const color = "bg-[oklch(0.74_0.30_138)] text-white"
```

**After:**
```tsx
const color = statusColors.success.DEFAULT
```

### From Old System (Separate files)

**Before:**
```tsx
import { moduleColors } from "@/theme/modules"
import { statusColors } from "@/theme/semantic"
```

**After:**
```tsx
import { moduleColors, statusColors } from "@/lib/theme-colors"
```

---

## File Location

- **Main file**: `src/lib/theme-colors.ts`
- **CSS variables**: Defined in global CSS (referenced in theme-colors.ts comments)
- **Theme toggle**: Handled by Next.js theme provider

---

## Extending the Color System

To add new colors:

1. Add CSS variable to global CSS (if new base color needed)
2. Add export to `theme-colors.ts` using helper functions
3. Use existing status colors when possible (don't create duplicates)
4. Update this documentation

Example:
```typescript
export const newFeatureColors = {
  active: { ...statusColors.success, border: border("var(--color-success)") },
  inactive: { ...statusColors.info, border: border("var(--color-info)") },
}
```
