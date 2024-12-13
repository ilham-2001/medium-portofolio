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

export interface TimelineModel {
  name: string
  date: string
  credential?: string
  gpa?: string
}


export interface ProjectModel {
  name: string
  description: string
  technologyUsed: string[]
  whereToLook: ContactModel[]
}

export interface ProjectModel {
  name: string
  description: string
  technologyUsed: string[]
  whereToLook: ContactModel[]
}

export interface ProjectCardModel {
  title: string
  img: string
  alt: string
  desc: string
  url: string
  technologyUsed: string[]
}