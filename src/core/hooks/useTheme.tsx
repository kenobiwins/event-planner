import { ThemeContext } from '@core/theme/ThemeManager'
import { useContext } from 'react'

const useTheme = () => useContext(ThemeContext)

export { useTheme }
