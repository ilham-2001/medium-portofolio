// assets
import { codeHero } from '../assets/assets';  

// component
import Button from './Button';

// data & handler
import { ContactModel } from '../global-interface';
import { redirectToLink } from '../utils/utils';

// shadcn
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
 } from '../@/components/ui/popover';

 import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../@/components/ui/drawer"

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const contacts: ContactModel[] = [
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
  const directToCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1FaxeO2VcgimHwDux-6wMQ16ANlG9YQ4I/view?usp=sharing';
    window.open(cvUrl, '_blank')
  }

  return (
    <section className='container mx-auto flex justify-between items-center'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='max-sm:text-5xl md:text-5xl xl:text-6xl font-semibold'>Hi, I'm Ilham Rizqyakbar</h1>  
            <p className='font-medium md:text-[18px] xl:text-[20px]'>Software Developer</p>
          </div>
          <p 
            className='xl:w-[690px] xl:text-xl leading-8 border-l-[3px] border-black px-4'
            >
            An undergradute informatics student from Universitas Islam Indonesia, Who's trying to be good something &#128075;
          </p>
        </div>
        <img className='max-sm:h-[320px] sm:hidden xl:w-[540px]' src={codeHero} alt="a guy is programming" />
        <div className='flex  gap-4 max-sm:flex-col max-sm:justify-center'>
          <Button text='Curriculum Vitae' callback={directToCV}/>
          <div className='max-sm:block hidden'>
            <Drawer>
                <DrawerTrigger 
                  className='flex max-sm:w-[100%] max-sm:justify-center gap-2 border border-[#050505] px-4 py-3 font-medium  rounded-xl hover:bg-black hover:text-white'
                  >
                    Contacts
                </DrawerTrigger>
                <DrawerContent className='bg-white'>
                  <DrawerHeader>
                    <DrawerTitle>Contacts</DrawerTitle>
                    <DrawerDescription>List of contacts and social media I have.</DrawerDescription>
                  </DrawerHeader>
                  <div className='p-4 pb-0'>
                    <ul className='flex flex-col gap-2'>
                      {contacts.map((it: ContactModel, index: number) => {
                        return (
                          <li 
                            key={index} 
                            className='flex flex-col'
                            onClick={() => redirectToLink(it.url!)}
                            >
                            <div className='flex gap-2 items-center'>
                              <FontAwesomeIcon icon={it.icon} className='text-[20px]'/>
                              {it.label}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <DrawerFooter>
                    <DrawerClose>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
          </div>
          <div className='hidden sm:block'>
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
                          onClick={() => redirectToLink(it.url!)}
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
        </div>
      </div>
      <img className='max-sm:hidden lg:w-[420px] xl:w-[540px]' src={codeHero} alt="a guy is programming" />
    </section>
  )
}

export default Hero;