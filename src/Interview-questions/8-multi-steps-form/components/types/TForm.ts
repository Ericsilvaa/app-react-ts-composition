import { PropsWithChildren } from 'react'

export type UserType = {
  fullName: string
  birthDate: string
  gender: string
}

export type AddresType = {
  street: string
  number: string
  city: string
  state: string
  country: string
}

export type ContactDetailsType = {
  phone: string
  cellPhone: string
  email: string
}

export type ProfessionType = {
  profession: string
  company: string
}

export type DataForm = {
  personal_information: UserType
  profession_information: ProfessionType
  address: AddresType
  contact_details: ContactDetailsType
}

// types context
export interface UserProviderProps extends PropsWithChildren {}
export interface UserContextType {
  data: DataForm
  // currentStep: CurrentStepsType
  currentStep: number
  setFieldValue: (field: string, value: string) => void
  nextStep: () => void
  prevStep: () => void
}

// enums
export enum Steps {
  PERSONAL_INFORMATION = 1,
  ADDRESS = 2,
  CONTACT_DETAILS = 3,
  PROFESSION_INFORMATION = 4,
  RESUME = 5
}

export type CurrentStepsType = keyof typeof Steps
