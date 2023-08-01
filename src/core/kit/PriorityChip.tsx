import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Priority } from 'types'
import { Body } from '@core/kit'

type Props = {
  priority: Priority
}

const PriorityChip: FC<Props> = ({ priority }) => {
  const normalizePriority = priority.toLowerCase()
  const { t } = useTranslation()

  return (
    <Wrapper priority={normalizePriority}>
      <Body color="inherit">{t('priority-chips.' + normalizePriority)}</Body>
    </Wrapper>
  )
}

export { PriorityChip }

const Wrapper = styled.div<{ priority: string }>(({ theme, priority }) => ({
  display: 'inline-flex',
  padding: `6px ${theme.px.x3}px`,
  backgroundColor: theme.color.white,
  borderRadius: theme.px.x2,
  color: theme.color.chips[priority],
  textTransform: 'capitalize',
}))
