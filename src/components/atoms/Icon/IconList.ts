import { ReactComponent as ArrowDown } from '../../../resources/images/icons/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../../resources/images/icons/arrow-up.svg'
import { ReactComponent as Burger } from '../../../resources/images/icons/burger.svg'
import { ReactComponent as Close } from '../../../resources/images/icons/close.svg'
import { ReactComponent as Departments } from '../../../resources/images/icons/departments.svg'
import { ReactComponent as Delete } from '../../../resources/images/icons/delete.svg'
import { ReactComponent as ErrorIcon } from '../../../resources/images/icons/error.svg'
import { ReactComponent as Info } from '../../../resources/images/icons/info.svg'
import { ReactComponent as Loader } from '../../../resources/images/icons/loader.svg'
import { ReactComponent as Logout } from '../../../resources/images/icons/logout.svg'
import { ReactComponent as Onboarding } from '../../../resources/images/icons/onboarding.svg'
import { ReactComponent as Save } from '../../../resources/images/icons/save.svg'
import { ReactComponent as Success } from '../../../resources/images/icons/success.svg'
import { ReactComponent as User } from '../../../resources/images/icons/user.svg'
import { ReactComponent as Users } from '../../../resources/images/icons/users.svg'

interface StringTMap<T> {
  [key: string]: T
}

interface iconList extends StringTMap<React.FC> {}

export const iconList: iconList = {
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  burger: Burger,
  close: Close,
  department: Departments,
  delete: Delete,
  error: ErrorIcon,
  info: Info,
  loader: Loader,
  logout: Logout,
  onboarding: Onboarding,
  save: Save,
  success: Success,
  user: User,
  users: Users,
}
