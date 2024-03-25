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
    <header className='relative mb-[101px]'>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-8 border-b border-[#f5f5f5]'>
        <div className='container mx-auto flex justify-between items-center'>
          <h3 className='text-[24px] font-semibold cursor-pointer hover:opacity-60' onClick={() => navigateToPages('/')}>Ilham R</h3>
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
        </div>
      </div>
    </header>
  )
};

export default Header;