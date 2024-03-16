import { NavigationLinks as NavModel } from '../model.constant';

import { useNavigate } from 'react-router-dom';

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
        <ul className='flex gap-8'>
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