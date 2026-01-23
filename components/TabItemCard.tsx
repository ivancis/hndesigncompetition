import type { ReactNode } from 'react'

type TabItemCardProps = {
  title: string
  body: string
  footer: string
  slot?: ReactNode
}

export default function TabItemCard({ title, body, footer, slot }: TabItemCardProps) {
  return (
    <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-left dark:border-gray-700 dark:bg-gray-800">
      <div className="header border-b border-gray-200 pb-2 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100">
        <h4>{title}</h4>
      </div>
      <div className="body py-3 text-sm text-gray-600 dark:text-gray-300">
        <p>{body}</p>
        {slot ? <div className="mt-3">{slot}</div> : null}
      </div>
      <div className="footer border-t border-gray-200 pt-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p>{footer}</p>
      </div>
    </div>
  )
}
