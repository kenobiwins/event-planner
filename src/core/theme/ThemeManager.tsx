import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

const ThemeContext = createContext(theme)

const ThemeManagerProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeManagerProvider, ThemeContext }