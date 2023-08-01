import 'styled-components'

import { colorsMap, fontsMap, pxsMap, breakpointsMap, mediaRulesMap, opacityMap } from './types'

declare module 'styled-components' {
  export interface DefaultTheme {
    px: pxsMap
    font: fontsMap
    color: colorsMap
    breakpoint: breakpointsMap
    mediaRule: mediaRulesMap
    opacityColor: opacityMap
  }
}
