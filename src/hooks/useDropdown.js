// src/hooks/useDropdown.js
import { useState, useRef, useCallback } from 'react'

export default function useDropdown(delay = 50) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutRef.current) // если пользователь быстро вернулся — отменяем закрытие
    setOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, delay)
  }, [delay])

  return {
    open,
    handleMouseEnter,
    handleMouseLeave,
  }
}
