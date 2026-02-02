import type { ReactNode } from 'react'

type TabItemCardProps = {
  title: string
  body: string
  footer: string
  slot?: ReactNode
}

type StatusTheme = {
  badge: string
  dot: string
}

const statusThemes: Record<string, StatusTheme> = {
  ideal: { badge: 'text-emerald-700 bg-emerald-100 border-emerald-300', dot: 'bg-emerald-700' },
  good: { badge: 'text-indigo-700 bg-indigo-100 border-indigo-300', dot: 'bg-indigo-700' },
  neutral: { badge: 'text-slate-700 bg-slate-100 border-slate-300', dot: 'bg-slate-700' },
  warning: { badge: 'text-amber-700 bg-amber-100 border-amber-300', dot: 'bg-amber-700' },
  critical: { badge: 'text-red-700 bg-red-100 border-red-300', dot: 'bg-red-700' },
}

const defaultStatusTheme: StatusTheme = {
  badge: 'text-gray-600 bg-gray-50 border-gray-200',
  dot: 'bg-gray-400',
}

const getStatusTheme = (value: string): StatusTheme => {
  const match = value.match(/Status:\s*([A-Za-z]+)/i)
  if (!match) {
    return defaultStatusTheme
  }

  const key = match[1].toLowerCase()
  return statusThemes[key] ?? defaultStatusTheme
}

export default function TabItemCard({ title, body, footer, slot }: TabItemCardProps) {
  const { badge, dot } = getStatusTheme(footer)

  return (
    <div className="w-full">
      {/* <div className="header border-b border-gray-200 pb-2 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100">
        <h4>{title}</h4>
      </div> */}
      <div className="body py-3 text-sm text-gray-600">
        <p>{body}</p>
        {slot ? <div className="mt-3">{slot}</div> : null}
      </div>
      {/* <div className="footer border-t border-gray-200 pt-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p
          className={`inline-flex items-center gap-2 rounded-sm border p-2 text-sm font-semibold ${badge}`}
        >
          <span className={`inline-flex rounded-full p-1 ${dot}`} aria-hidden="true" />
          {footer}
        </p>
      </div> */}
    </div>
  )
}
