import { PriorityChip } from '@core/kit'
import { Chip } from '@core/kit/Chip'
import { TitleH2 } from '@core/kit/text'

import { useTranslation } from 'react-i18next'
import { Categories, Priority } from 'types'

function App() {
  const { t } = useTranslation()
  const chips = Object.values(Priority)
  const categories = Object.values(Categories)
  return (
    <>
      <TitleH2>{t('title')}</TitleH2>
      {chips.map((el: Priority) => {
        return <PriorityChip priority={el} />
      })}
      {categories.map((el: Categories) => {
        return <Chip label={el} />
      })}
    </>
  )
}

export default App
