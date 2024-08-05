import { createContext, useState } from 'react'
import { DataForm, UserContextType, UserProviderProps } from '../types/TForm'

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentStep, setStepForm] = useState<number>(1)
  const [data, setData] = useState<DataForm>({} as DataForm)

  const nextStep = () => setStepForm((prev) => prev + 1)
  const prevStep = () => setStepForm((prev) => prev - 1)

  const setFieldValue = (field: string, value: string) => {
    setData({
      ...data,
      [field]: value
    })
  }

  const contextValue = {
    data,
    setFieldValue,
    nextStep,
    prevStep,
    currentStep
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
