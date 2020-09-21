export interface SideBarList {
  url: string
  icon: string
  text: string
  action: string
}

export const sideBarList: SideBarList[] = [
  {
    url: '/dashboard',
    icon: 'department',
    text: 'Overview',
    action: '',
  },
  {
    url: '/users',
    icon: 'user',
    text: 'Users',
    action: '',
  },
  {
    url: '/due-diligence',
    icon: 'users',
    text: 'Due Diligence',
    action: '',
  },
  {
    url: '/property-listings',
    icon: 'department',
    text: 'Property Listing',
    action: '',
  },
  {
    url: '/logout',
    icon: 'logout',
    text: 'Logout',
    action: 'logout',
  },
]
