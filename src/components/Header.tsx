import { NavigationLinks as NavModel } from '../model.constant';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/ui/popover"


const navItems: Array<NavModel> = [
  {
    label: "Home",
    url: '/'
  },
  {
    label: "Projects",
    url: '/projects'
  },
  {
    label: "About",
    url: '/about'
  },
];

const Header = () => {
  const navigate = useNavigate();

  const navigateToPages = (url: string) => {
    navigate(url)
  }


  return (
    <header className='container mx-auto border-b border-[#f5f5f5] py-8 flex justify-between items-center'>
      <div className=''>
        <h3 className='text-[24px] font-semibold'>Ilham R</h3>
      </div>
      <nav>
        <div className='md:hidden'>
        <Popover>
          <PopoverTrigger>
            <FontAwesomeIcon className='text-[24px]' icon={faBars}/>
          </PopoverTrigger>
          <PopoverContent className='bg-white'>
            <ul className='flex flex-col'>
              {navItems.map((it, index) => {
                return (
                <li 
                  key={index} 
                  className='p-1 gap-2'
                  onClick={() => navigateToPages(it.url!)}
                  >
                  {it.label}
                </li>
                )
              })}
            </ul>
          </PopoverContent>
        </Popover>
        </div>
        <ul className='hidden md:flex gap-8'>
            {navItems.map((it, index) => {
              return (
              <li 
                key={index} 
                className='cursor-pointer hover:opacity-60'
                onClick={() => navigateToPages(it.url!)}
                >
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