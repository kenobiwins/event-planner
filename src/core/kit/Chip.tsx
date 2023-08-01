import { FC } from 'react'
import styled from 'styled-components'
import { Categories } from 'types'
import { Body } from '@core/kit'

type Props = {
  label: Categories
}

const Chip: FC<Props> = ({ label }) => {
  return (
    <Wrapper>
      <Body color="inherit">{label}</Body>
    </Wrapper>
  )
}

export { Chip }

const Wrapper = styled.div<{ disabled?: boolean }>(({ theme }) => ({
  display: 'inline-flex',
  padding: `6px ${theme.px.x3}px`,
  backgroundColor: theme.color.white,
  borderRadius: theme.px.x2,
  color: theme.color.accent,
  textTransform: 'capitalize',
}))
