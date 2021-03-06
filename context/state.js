import { createContext, useContext } from 'react'
import React, { useState } from "react"

const AppContext = createContext({})

const AppWrapper = ({ children }) => {

  const [formOpen = false, setFormOpen] = useState()

  const onChange = () => {
    setFormOpen(!formOpen)
  }

  let sharedState = {
    formOpen: false,
    formStep: 1
  }

  return (
    <AppContext.Provider value={{ sharedState, onChange }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppWrapper, useAppContext }
