import { FC, createElement } from 'react'

import symbolDefs from 'assets/symbol-defs.svg'
import { IconNames } from 'types'

type Props = {
  name: `${IconNames}`
  color?: string
  size?: string
}

const Icon: FC<Props> = ({ name, size = '24px', color = 'black' }) => {
  return (
    <svg height={size} width={size} color={color}>
      {createElement('use', {
        href: `${symbolDefs}#${name}`,
        xlinkHref: `${symbolDefs}#${name}`,
      })}
    </svg>
  )
}

export default Icon
