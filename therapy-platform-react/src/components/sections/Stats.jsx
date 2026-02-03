import { TrendingUp, Calendar, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    number: "7",
    label: "Platforms Compared"
  },
  {
    icon: Calendar,
    number: "2026",
    label: "Updated for 2026"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Unbiased Reviews"
  }
]

export function Stats() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-background p-6 rounded-xl text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl mb-3 flex justify-center">
                  <Icon className="w-10 h-10 text-primary-indigo" />
                </div>
                <div className="text-4xl font-bold text-primary-indigo mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
