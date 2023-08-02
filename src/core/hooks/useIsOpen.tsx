import { useCallback, useState } from 'react'

const useIsOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [])

  return { isOpen, open, close, toggle }
}

export { useIsOpen }
