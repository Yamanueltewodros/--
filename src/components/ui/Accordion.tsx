import { useState } from 'react'

type Item = { id: string; question: string; answer: string }
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="divide-y rounded-2xl border border-slate-200 bg-white">
      {items.map(it => {
        const isOpen = open === it.id
        return (
          <div key={it.id} className="p-4">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => setOpen(isOpen ? null : it.id)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{it.question}</span>
              <span className="ml-4">{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && <p className="text-slate-600 mt-3">{it.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
