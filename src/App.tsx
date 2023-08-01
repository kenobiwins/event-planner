import { TitleH2 } from '@core/kit/text'

import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <TitleH2>{t('title')}</TitleH2>
    </>
  )
}

export default App
