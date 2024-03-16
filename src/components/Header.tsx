// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCode, faUser } from '@fortawesome/free-solid-svg-icons';

import { NavigationLinks as NavModel } from '../model.constant';

const navItems: Array<NavModel> = [
  {
    label: "Home",
    icon: faHouse
  },
  {
    label: "Projects",
    icon: faCode,
  },
  {
    label: "About",
    icon: faUser
  },
];

const Header = () => {
  return (
    <header className='container mx-auto border-b border-[#f5f5f5] py-8 flex justify-between items-center'>
      <div className=''>
        <h3 className='text-[24px] font-semibold'>Ilham R</h3>
      </div>
      <nav>
        <ul className='flex gap-4'>
            {navItems.map((it, index) => {
              return (
              <li key={index} className='flex gap-2 cursor-pointer hover:opacity-60'>
                <FontAwesomeIcon icon={it.icon} />
                {it.label}
              </li>
              )
            })}
        </ul>
      </nav>
    </header>
  )
};

export default Header;