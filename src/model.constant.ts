import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

export interface NavigationLinks {
  label: string
  url: string
}

export interface ContactModel {
  label: string
  icon: IconDefinition
  url?: string
}


export interface ProjectModel {
  name: string
  description: string
  technologyUsed: Array<string>
  whereToLook: Array<ContactModel>
}