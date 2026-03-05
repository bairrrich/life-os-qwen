import {
  foodTypeColors,
  workoutTypeColors,
  financeTypeColors as financeColors,
} from "@/lib/theme-colors"

// Exports removed: ComboboxSelect has been replaced with universal Combobox
export { FoodForm, type FoodFormData, getFoodSourceTypes, getFoodProducts } from "./food-form"
export {
  WorkoutForm,
  type WorkoutFormData,
  getSubcategoryLabel,
  getStrengthSubcategories,
  getCardioSubcategories,
  getYogaSubcategories,
  getStretchingSubcategories,
  getEquipmentOptions,
  getGoalOptions,
} from "./workout-form"
export { FinanceForm, type FinanceFormData, accountTypeLabels } from "./finance-form"
export {
  financeCategoriesStructure as financeCategories,
  financeSuppliers as suppliers,
} from "@/lib/finance-categories"

// Общие константы
export const categoryColors: Record<string, string> = {
  // Nutrition
  Breakfast: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
  Lunch: "data-[state=active]:bg-[var(--color-success)] data-[state=active]:text-white",
  Dinner: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
  Snack: "data-[state=active]:bg-[var(--color-accent)] data-[state=active]:text-white",
  // Workouts
  Strength: "data-[state=active]:bg-[var(--color-danger)] data-[state=active]:text-white",
  Cardio: "data-[state=active]:bg-[var(--color-info)] data-[state=active]:text-white",
  Yoga: "data-[state=active]:bg-[var(--color-success)] data-[state=active]:text-white",
  Stretching: "data-[state=active]:bg-[var(--color-warning)] data-[state=active]:text-white",
}

export const financeTypeColors: Record<string, string> = {
  income: financeColors.income,
  expense: financeColors.expense,
  transfer: financeColors.transfer,
}

export const typeLabels: Record<string, string> = {
  food: "Nutrition",
  workout: "Workout",
  finance: "Finance",
}

export const foodCategoryOrder = ["Breakfast", "Lunch", "Dinner", "Snack"]
export const workoutCategoryOrder = ["Strength", "Cardio", "Yoga", "Stretching"]
