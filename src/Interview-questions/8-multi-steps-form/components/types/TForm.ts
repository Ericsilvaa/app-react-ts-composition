/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react'

export type PersonalInformation = {
  fullName: string
  birthDate: string
  gender: 'male' | 'female' | 'other'
  email: string
}

export type AddresType = {
  street: string
  city: string
  state: string
  postalCode: string
  number: string
}

export type ContactDetailsType = {
  phoneNumber: string
  alternatePhoneNumber?: string
  contactPreferences: 'phone' | 'email' | 'sms'
}

export type ProfessionType = {
  occupation: string
  companyName: string
  yearsOfExperience: number
  skills: string[]
}

export type DataForm = {
  personal_information: PersonalInformation
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
  setFieldValue: (section: keyof DataForm, field: string, value: any) => void
  nextStep: () => void
  prevStep: () => void
}

// enums
export enum Steps {
  PERSONAL_INFORMATION = 1,
  ADDRESS = 2,
  CONTACT_DETAILS = 3,
  PROFESSION_INFORMATION = 4,
  REVIEW = 5
}

export type CurrentStepsType = keyof typeof Steps
