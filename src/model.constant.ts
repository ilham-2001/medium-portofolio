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