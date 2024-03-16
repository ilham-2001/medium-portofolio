import { codeHero } from '../assets/assets';
import { 
  angular,
  react,
  tailwind,
  mysql,
  nodejs,
  php
} from '../assets/assets';
import Button from './Button';
import { ContactModel } from '../model.constant';

// shadcn
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
 } from '../@/components/ui/popover';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const contacts: Array<ContactModel> = [
  {
    label: 'irizqy_',
    icon: faInstagram,
    url: 'https://www.instagram.com/irizqy_/'
  },
  {
    label: 'Ilham Rizqyakbar',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/irizqyakbr'
  },
  {
    label: 'irizqyakbr',
    icon: faTwitter,
    url: 'https://twitter.com/irizqyakbr'
  },
];

const Hero = () => {
  const icons = [
    angular,
    react,
    tailwind,
    mysql,
    nodejs,
    php
  ];

  const redirectToContacts = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <section className='container mx-auto flex justify-between items-center'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-6xl font-semibold'>Hi, I'm Ilham Rizqyakbar</h1>  
          <p className='font-medium text-[20px]'>Software Developer</p>
          <p 
            className='w-[690px] text-xl leading-8 border-l-[3px] border-black px-4'
            >
            An undergradute informatics student from Universitas Islam Indonesia, Who's trying to be good something &#128075;
          </p>
        </div>
        <div className='flex gap-4'>
          <Button text='Curriculum Vitae'/>
          <Popover>
            <PopoverTrigger 
              className='flex gap-2 border border-[#050505] px-4 py-3 font-medium  rounded-xl hover:bg-black hover:text-white'
              >
              Contact
              <FontAwesomeIcon icon={faCaretDown} className='text-[18px]'/>
            </PopoverTrigger>
            <PopoverContent>
              <ul className='flex flex-col gap-2'>
                  {contacts.map((it: ContactModel, index: number) => {
                    return (
                      <li 
                        key={index} 
                        className='flex flex-col cursor-pointer hover:opacity-70'
                        onClick={() => redirectToContacts(it.url!)}
                        >
                        <div className='flex gap-2 items-center'>
                          <FontAwesomeIcon icon={it.icon} className='text-[18px]'/>
                          {it.label}
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        {/* <div className='flex justify-between'>
          { icons.map((it, index) => {
            return <img className='w-[48px] h-[48px] cursor-pointer hover:scale-125' key={index} src={it} alt='icon'></img>
          }) }
        </div> */}
      </div>
      <img className='w-[540px]' src={codeHero} alt="a guy is coding" />
    </section>
  )
}

export default Hero;