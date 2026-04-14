import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@/hooks/use-theme'
import { EngineeringModeProvider } from '@/hooks/use-engineering-mode'
import { Toaster } from '@/components/ui/sonner'
import { ErrorBoundaryProvider } from './providers/ErrorBoundaryProvider'
import { queryClient } from './providers/QueryProvider'
import { AppRouter } from './router/AppRouter'
import './App.css'

function App() {
  return (
    <ErrorBoundaryProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <EngineeringModeProvider>
            <AppRouter />
            <Toaster />
          </EngineeringModeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundaryProvider>
  )
}

export default App
