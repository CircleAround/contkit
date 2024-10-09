import { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  variant?: 'plain' | 'underline' | 'background'
  className?: string
}

const SectionTitle = ({ children, variant = 'plain', className }: SectionTitleProps) => {
  const baseCn = 'text-zinc-900 text-2xl font-bold tracking-tight lg:text-3xl'
  const underlineCn = 'pb-2 border-b-2 border-blue-900'
  const backgroundColorCn = 'p-2 bg-blue-200 text-white'

  const selectCn = cn(
    baseCn,
    variant === 'plain' && '',
    variant === 'underline' && underlineCn,
    variant === 'background' && backgroundColorCn,
    className
  )

  return <h2 className={selectCn}>{children}</h2>
}

SectionTitle.displayName = 'SectionTitle'

export { SectionTitle }


//エラー回避のための暫定措置
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
