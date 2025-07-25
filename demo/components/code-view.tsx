'use client'

import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-typescript'
import './code-view.css'

interface CodeViewProps {
  code: string
  language?: string
  filename?: string
  className?: string
  hasLineNumbers?: boolean
  hasCopyButton?: boolean
  theme?: 'light' | 'dark'
}

export function CodeView({
  code,
  language = 'typescript',
  filename,
  className,
  hasLineNumbers = true,
  hasCopyButton = true,
  theme = 'dark'
}: CodeViewProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const getLanguageLabel = (lang: string) => {
    const labels: Record<string, string> = {
      typescript: 'TypeScript',
      javascript: 'JavaScript',
      jsx: 'JSX',
      tsx: 'TSX',
      json: 'JSON',
      css: 'CSS',
      scss: 'SCSS',
      bash: 'Bash',
      yaml: 'YAML',
      markdown: 'Markdown'
    }
    return labels[lang] || lang
  }

  return (
    <div className={cn('relative rounded-lg border bg-background', className)}>
      {/* Header */}
      {(filename || hasCopyButton) && (
        <div className="flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm font-mono text-muted-foreground">
                {filename}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {getLanguageLabel(language)}
            </span>
          </div>
          {hasCopyButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-6 w-6 p-0">
              {copied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          )}
        </div>
      )}

      {/* Code */}
      <div className="relative overflow-auto">
        <pre
          className={cn(
            'm-0 p-4 text-xs',
            theme === 'dark' ? 'prism-twilight' : 'prism',
            hasLineNumbers && 'line-numbers',
            `language-${language || 'typescript'}`,
          )}>
          <code
            ref={codeRef}
            className={cn(
              `language-${language || 'typescript'}`,
              'block w-full'
            )}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Inline code component for smaller code snippets
export function InlineCode({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <code className={cn(
      'relative rounded',
      className
    )}>
      {children}
    </code>
  )
} 