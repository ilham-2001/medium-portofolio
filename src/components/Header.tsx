import { NavigationLinks as NavModel } from '../model.constant';

const navItems: Array<NavModel> = [
  {
    label: "Home",
  },
  {
    label: "Projects",
  },
  {
    label: "About",
  },
];

const Header = () => {
  return (
    <header className='container mx-auto border-b border-[#f5f5f5] py-8 flex justify-between items-center'>
      <div className=''>
        <h3 className='text-[24px] font-semibold'>Ilham R</h3>
      </div>
      <nav>
        <ul className='flex gap-8'>
            {navItems.map((it, index) => {
              return (
              <li key={index} className='cursor-pointer hover:opacity-60'>
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