"use client"

import { useEffect, useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Utensils, Dumbbell, Wallet, Search } from "@/lib/icons"
import type { LucideIcon } from "@/lib/icons"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BudgetManager } from "@/components/finance"
import { db, initializeDatabase, getStaticEntityTranslation } from "@/lib/db"
import { LogType } from "@/types"
import type { Log } from "@/types"
import { useLocale } from "next-intl"
import { cn } from "@/lib/utils"
import { logTypeTabsColors, statColors } from "@/lib/theme-colors"

export default function LogsPage() {
  const t = useTranslations("logs")
  const tCommon = useTranslations("common")
  const locale = useLocale()
  const [isLoading, setIsLoading] = useState(true)
  const [logs, setLogs] = useState<Log[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeType, setActiveType] = useState<LogType | "all">("all")

  // Локализация заголовка финансовой операции
  const localizeFinanceTitle = (title: string): string => {
    const parts = title.split(" - ")
    const translatedParts = parts.map((part, index) => {
      if (part === "Transfer") return t("types.transfer")
      if (index === 0) {
        // Category
        return getStaticEntityTranslation("categories", part, locale, "finance")
      } else {
        // Subcategory or item
        return getStaticEntityTranslation("financeSubcategories", part, locale)
      }
    })
    return translatedParts.join(" - ")
  }

  const logTypes = [
    { type: LogType.FOOD, label: t("types.food"), icon: Utensils },
    { type: LogType.WORKOUT, label: t("types.workout"), icon: Dumbbell },
    { type: LogType.FINANCE, label: t("types.finance"), icon: Wallet },
  ]

  useEffect(() => {
    async function loadData() {
      try {
        await initializeDatabase()
        const allLogs = await db.logs.orderBy("date").reverse().toArray()
        setLogs(allLogs)
      } catch (error) {
        console.error("Failed to load logs:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = activeType === "all" || log.type === activeType
    return matchesSearch && matchesType
  })

  const typeLabels: Record<string, string> = {
    food: t("types.food"),
    workout: t("types.workout"),
    finance: t("types.finance"),
  }

  const getTabsListColor = (type: LogType | "all"): string => {
    return logTypeTabsColors[type as keyof typeof logTypeTabsColors] || ""
  }

  const getTypeIcon = (type: LogType): LucideIcon => {
    switch (type) {
      case "food":
        return Utensils
      case "workout":
        return Dumbbell
      case "finance":
        return Wallet
      default:
        return Utensils
    }
  }

  const getLogTypeColor = (type: LogType, financeType?: string, foodType?: string, workoutType?: string, subcategory?: string) => {
    // Для финансовых операций учитываем тип транзакции
    if (type === "finance") {
      if (financeType === "income") {
        return "bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)]/45"
      } else if (financeType === "expense") {
        return "bg-[var(--color-danger)]/15 text-[var(--color-danger)] border-[var(--color-danger)]/45"
      } else if (financeType === "transfer") {
        return "bg-[var(--color-info)]/15 text-[var(--color-info)] border-[var(--color-info)]/45"
      }
    }
    
    // Для тренировок учитываем подкатегорию
    if (type === "workout" && subcategory) {
      // Силовые упражнения
      const strengthSubcats = ["chest", "back", "legs", "shoulders", "arms", "core", "free_weights", "machines", "bodyweight", "functional"]
      // Кардио
      const cardioSubcats = ["running", "walking", "cycling", "rowing", "jumping", "liss", "hiit", "tabata"]
      // Йога
      const yogaSubcats = ["hatha", "vinyasa", "ashtanga", "kundalini", "iyengar", "stretching", "power", "relax", "breathing", "meditation", "beginner", "intermediate", "advanced"]
      
      if (strengthSubcats.includes(subcategory)) {
        return "bg-[var(--color-danger)]/15 text-[var(--color-danger)] border-[var(--color-danger)]/45"
      } else if (cardioSubcats.includes(subcategory)) {
        return "bg-[var(--color-info)]/15 text-[var(--color-info)] border-[var(--color-info)]/45"
      } else if (yogaSubcats.includes(subcategory)) {
        return "bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)]/45"
      }
    }
    
    // Для питания учитываем тип приёма пищи (food_type)
    if (type === "food" && foodType) {
      if (foodType === "breakfast") {
        return "bg-[var(--color-warning)]/15 text-[var(--color-warning)] border-[var(--color-warning)]/45"
      } else if (foodType === "lunch") {
        return "bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)]/45"
      } else if (foodType === "dinner") {
        return "bg-[var(--color-info)]/15 text-[var(--color-info)] border-[var(--color-info)]/45"
      } else if (foodType === "snack") {
        return "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/45"
      }
    }
    
    // Для остальных типов - цвета по умолчанию
    switch (type) {
      case "food":
        return "bg-[var(--color-warning)]/15 text-[var(--color-warning)] border-[var(--color-warning)]/45"
      case "workout":
        return "bg-[var(--color-info)]/15 text-[var(--color-info)] border-[var(--color-info)]/45"
      case "finance":
        return "bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)]/45"
      default:
        return "bg-[var(--color-info)]/15 text-[var(--color-info)] border-[var(--color-info)]/45"
    }
  }

  // Статистика с useMemo для оптимизации
  const stats = useMemo(
    () => ({
      total: logs.length,
      food: logs.filter((l) => l.type === LogType.FOOD).length,
      workout: logs.filter((l) => l.type === LogType.WORKOUT).length,
      finance: logs.filter((l) => l.type === LogType.FINANCE).length,
    }),
    [logs]
  )

  // Группировка по периодам (месяцам)
  const groupedLogs = useMemo(() => {
    return filteredLogs.reduce(
      (acc, log) => {
        const month = log.date.substring(0, 7) // "2024-03"
        if (!acc[month]) acc[month] = []
        acc[month].push(log)
        return acc
      },
      {} as Record<string, Log[]>
    )
  }, [filteredLogs])

  // Сортировка периодов (новые сначала)
  const sortedPeriods = Object.keys(groupedLogs).sort((a, b) => b.localeCompare(a))

  return (
    <AppLayout title={t("title")}>
      <div className="container mx-auto px-4 py-6 space-y-4">
        {/* Статистика */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Card className="p-2 sm:p-3 text-center">
            <div className="text-xl sm:text-2xl font-bold">{stats.total}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t("stats.total")}</div>
          </Card>
          <Card className="p-2 sm:p-3 text-center">
            <div className={cn("text-xl sm:text-2xl font-bold", statColors.food)}>{stats.food}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t("types.food")}</div>
          </Card>
          <Card className="p-2 sm:p-3 text-center">
            <div className={cn("text-xl sm:text-2xl font-bold", statColors.workout)}>
              {stats.workout}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t("types.workout")}</div>
          </Card>
          <Card className="p-2 sm:p-3 text-center">
            <div className={cn("text-xl sm:text-2xl font-bold", statColors.finance)}>
              {stats.finance}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t("types.finance")}</div>
          </Card>
        </div>

        {/* Type Filters */}
        <Tabs
          value={activeType}
          onValueChange={(value) => setActiveType(value as LogType | "all")}
          aria-label={t("filters.typeLabel")}
        >
          <TabsList
            className="grid grid-cols-4 w-full h-auto"
            role="tablist"
            aria-label={t("filters.typeLabel")}
          >
            <TabsTrigger
              value="all"
              className="text-xs sm:text-sm px-2 sm:px-4 py-2"
              role="tab"
              aria-selected={activeType === "all"}
              aria-controls="panel-all"
              id="tab-all"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:ml-1">{t("filters.all")}</span>
            </TabsTrigger>
            {logTypes.map((lt) => (
              <TabsTrigger
                key={lt.type}
                value={lt.type}
                className={cn("text-xs sm:text-sm px-2 sm:px-4 py-2", getTabsListColor(lt.type))}
                role="tab"
                aria-selected={activeType === lt.type}
                aria-controls={`panel-${lt.type}`}
                id={`tab-${lt.type}`}
              >
                <lt.icon className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:ml-1">{lt.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Budget Manager - показываем только на вкладке Финансы */}
        {activeType === LogType.FINANCE && <BudgetManager />}

        {/* Logs List with Period Grouping */}
        {isLoading ? (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              {tCommon("loading")}
            </CardContent>
          </Card>
        ) : sortedPeriods.length === 0 ? (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              {logs.length === 0 ? t("empty.noLogs") : tCommon("noResults")}
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-6">
            {sortedPeriods.map((period) => {
              const periodLogs = groupedLogs[period]
              const periodDate = new Date(period + "-01")
              const periodLabel = periodDate.toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
              })

              return (
                <div key={period} className="space-y-2">
                  <h3 className="text-lg font-semibold sticky top-0 bg-background/80 backdrop-blur-sm py-2 z-10">
                    {periodLabel}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {periodLogs.map((log) => {
                      const TypeIcon = getTypeIcon(log.type)
                      const financeType = log.type === "finance" ? log.metadata?.finance_type as string | undefined : undefined
                      const foodType = log.type === "food" ? log.metadata?.food_type as string | undefined : undefined
                      const workoutType = log.type === "workout" ? log.metadata?.workout_type as string | undefined : undefined
                      const subcategory = log.type === "workout" ? log.metadata?.subcategory as string | undefined : undefined
                      return (
                        <Link
                          key={log.id}
                          href={`/logs/${log.type}/${log.id}`}
                          aria-label={`Запись: ${log.title}`}
                        >
                          <Card className="hover:bg-accent transition-colors">
                            <CardContent className="p-3 flex items-center gap-3">
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-xl ${getLogTypeColor(log.type, financeType, foodType, workoutType, subcategory)}`}
                                aria-hidden="true"
                              >
                                <TypeIcon className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-sm truncate">
                                  {log.type === "finance"
                                    ? localizeFinanceTitle(log.title)
                                    : log.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {typeLabels[log.type] || log.type} •{" "}
                                  {new Date(log.date).toLocaleDateString(locale, {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                  {" | "}
                                  {new Date(log.date).toLocaleTimeString(locale, {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                              {log.value !== undefined && (
                                <div
                                  className={`text-sm font-medium ${
                                    log.type === "finance" && log.metadata
                                      ? (log.metadata as any).finance_type === "income"
                                        ? "text-[var(--color-success)]"
                                        : (log.metadata as any).finance_type === "expense"
                                          ? "text-[var(--color-danger)]"
                                          : "text-[var(--color-info)]"
                                      : ""
                                  }`}
                                >
                                  {log.type === "finance"
                                    ? `${log.value.toLocaleString()} ₽`
                                    : log.value}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
