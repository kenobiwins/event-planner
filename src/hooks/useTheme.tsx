import { ThemeContext } from '@theme/ThemeManager'
import { useContext } from 'react'

const useTheme = () => useContext(ThemeContext)

export { useTheme }
