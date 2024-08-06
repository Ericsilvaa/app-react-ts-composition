import { createContext, useState } from 'react'
import {
  DataForm,
  UserContextType,
  UserProviderProps
} from '../components/types/TForm'

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentStep, setStepForm] = useState<number>(1)
  const [data, setData] = useState<DataForm>({} as DataForm)

  const nextStep = () => setStepForm((prev) => prev + 1)
  const prevStep = () => setStepForm((prev) => prev - 1)

  const setFieldValue = (
    section: keyof DataForm,
    field: string,
    value: string
  ) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }))
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
