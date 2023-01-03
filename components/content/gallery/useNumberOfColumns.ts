import { useEffect, useState } from "react"

const useNumberOfColumns = () => {
  const [numberOfColumns, setNumberOfColumns] = useState(3)

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth
      if (width < 724) {
        setNumberOfColumns(1)
      } else if (width < 1024) {
        setNumberOfColumns(2)
      } else {
        setNumberOfColumns(3)
      }
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return numberOfColumns
}

export default useNumberOfColumns
