import { colorsMap, opacityMap } from './types'

const colors: colorsMap = {
  mainColor: '#EBD8FF',
  mainText: '#1C1B1F',
  secondaryText: '#49454F',
  text: '#3F3F3F',
  divider: '#ACA7C3',
  accent: '#7B61FF',
  placeholder: '#888888',
  white: '#FFFFFF',
  black:'#000000',
  chips: {
    low: '#6BD475',
    medium: '#E2A300',
    hight: '#FF2B77',
  },
}

const opacityColors: opacityMap = {
  white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
}

export { colors, opacityColors }
