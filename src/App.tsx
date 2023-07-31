import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <h2>{t('title')}</h2>
    </>
  )
}

export default App
