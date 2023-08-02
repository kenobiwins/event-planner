import { useIsOpen } from '@core/hooks'
import { FC } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { IconNames, IconPosition, SortBy, SortOrder } from 'types'
import { Caption, Title } from '.'
import { useTranslation } from 'react-i18next'

type SortOption = {
  sortBy: SortBy
  sortOrder: SortOrder
}
type Props = {
  iconName: IconNames
  iconPosition?: IconPosition
  options: SortOption[]
}

const Sort: FC<Props> = ({ options, iconName, iconPosition = IconPosition.LEFT }) => {
  const { close, isOpen, toggle } = useIsOpen()
  const { t } = useTranslation()

  const onOptionClicked = ({ sortBy, sortOrder }: SortOption) => {
    console.log(sortBy, sortOrder)
    close
  }

  const isIconLeft = iconPosition === IconPosition.LEFT
  const isIconRight = iconPosition === IconPosition.RIGHT

  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <DropDownHeader>
        {isIconLeft && <Icon color="inherit" name={iconName} />}
        <Title color="inherit">{t('sort')}</Title>
        {isIconRight && <Icon color="inherit" name={iconName} />}
      </DropDownHeader>
      {isOpen ? (
        <DropDownList>
          {options.map(({ sortBy, sortOrder }: SortOption) => {
            const isASC = sortOrder === SortOrder.ASC

            return (
              <ListItem
                onClick={() =>
                  onOptionClicked({
                    sortBy,
                    sortOrder,
                  })
                }
                key={sortBy + sortOrder}
              >
                <Caption color="inherit">{t('sort-by.' + sortBy)}</Caption>
                <Icon color="inherit" name={isASC ? IconNames.ARROW_DOWN : IconNames.ARROW_UP} />
              </ListItem>
            )
          })}
        </DropDownList>
      ) : null}
    </DropDownContainer>
  )
}

export { Sort }

const DropDownContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: 'inline-block',
  maxWidth: '158px',
  // width: '100%',
  height: '56px',

  borderRadius: theme.px.x2,
  border: '1px solid' + theme.color.divider,
  textTransform: 'capitalize',
  background: theme.color.white,
  padding: theme.px.x4,
  cursor: 'pointer',
  position: 'relative',
  borderBottomLeftRadius: isOpen ? 0 : undefined,
  borderBottomRightRadius: isOpen ? 0 : undefined,
}))
const DropDownHeader = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.color.text,
  transition: 'color 250ms linear',

  '&:hover': {
    color: theme.color.accent,
  },
}))

const DropDownList = styled.ul(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: theme.px.x0,
  width: '100%',
  background: theme.color.white,
  borderBottomLeftRadius: theme.px.x2,
  borderBottomRightRadius: theme.px.x2,
  overflow: 'hidden',
}))

const ListItem = styled.li(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid',
  borderTopColor: theme.color.divider,
  color: theme.color.divider,
  textTransform: 'capitalize',
  width: '100%',
  height: '30px',
  padding: '4px 24px',
  lineHeight: '30px',
  cursor: 'pointer',
}))
