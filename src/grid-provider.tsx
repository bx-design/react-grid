import { FC, createContext } from 'react'
import 'bx-grid.min.css'

const BxGridContext = createContext(null)
BxGridContext.displayName = 'BxGridContext'

const BxGridProvider: FC = ({ children }) => {
  return (
    <BxGridContext.Provider value={null}>{children}</BxGridContext.Provider>
  )
}

BxGridProvider.displayName = 'BxGridProvider'

export default BxGridProvider
