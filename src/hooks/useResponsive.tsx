import { useEffect, useState } from 'react'

export function useResponsive (breakpoint = 1024) {
  const [responsive, setResponsive] = useState(false)
  useEffect(() => {

    function updateSize () {

      setResponsive(window.innerWidth <= breakpoint)
    }
    window.addEventListener('resize', updateSize)
    window.addEventListener('change', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [breakpoint])
  return responsive
}
