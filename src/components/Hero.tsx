import Button from './Button';
import { ContactModel } from '../model.constant';

import { codeHero } from '../assets/assets';  
import { unisipt, bizzit, labsyms } from '../assets/assets';

// shadcn
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
 } from '../@/components/ui/popover';

 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../@/components/ui/carousel"


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
import { useEffect, useRef, useState } from 'react';

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
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const redirectToContacts = (link: string) => {
    window.open(link, '_blank');
  }

  const directToCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1FaxeO2VcgimHwDux-6wMQ16ANlG9YQ4I/view?usp=sharing';
    window.open(cvUrl, '_blank')
  }

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);  };

  const handleTouchMove = (e: any) => {
    setEndX(e.touches[0].clientX);  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      const difference = endX - startX;
      if (Math.abs(difference) > 50) { // Adjust this threshold as needed
        // console.log(difference > 0 ? 'right' : 'left');
        if (difference > 0 && currentItemIndex !== 0) {
          setCurrentItemIndex(currentItemIndex-1);
        } else if (difference < 0 && currentItemIndex !== 2) {
          setCurrentItemIndex(currentItemIndex+1);
        }
      }
    }
    setStartX(null);
    setEndX(null);
  };

  return (
    <section className='container mx-auto flex gap-10 justify-between items-center'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='max-sm:text-5xl md:text-5xl xl:text-6xl font-semibold'>Hi, I'm Ilham Rizqyakbar</h1>  
            <p className='font-medium max-sm text-[20px]'>Software Developer</p>
          </div>
          <p 
            className='xl:w-[690px] xl:text-xl leading-6 border-l-[3px] border-black px-4'
            >
            An undergradute informatics student from Universitas Islam Indonesia, Who's trying to be good something &#128075;
          </p>
        </div>
        {/* <img className='max-sm:h-[320px] sm:hidden xl:w-[540px]' src={codeHero} alt="a guy is programming" /> */}
        <div className='hidden max-sm:flex flex-col gap-4 justify-center mt-6'>
          <h2 className='text-[20px] font-semibold  text-center'>Projects Showcase</h2>
          <Carousel className='flex flex-col gap-2'>
            <CarouselContent>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <div className='flex flex-col gap-2 text-center'>
                  <div>
                    <img src={labsyms} alt="labsysm" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-medium'>Labsysms</h4>
                    <p>
                      Web based laboratorium monitoring system to check whether a person wearing a complete set of laboratorium safety apparel.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <div className='flex flex-col gap-2 text-center'>
                  <div>
                    <img src={bizzit} alt="Bizz-it - Logo Matcher" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-medium'>Bizz-it - Logo Matcher</h4>
                    <p>
                      Deep learning model used to find available franchise in bizz-it mobile app by taking picture of some logo and find similar logo in the app.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <div className='flex flex-col gap-2 text-center'>
                  <div>
                    <img src={unisipt} alt="Unisi-Student Employment" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-medium'>Unisi-Student Employment</h4>
                    <p>
                      Web based application used to find various job vacany around Universitas Islam Indonesia.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className='flex gap-4 justify-center'>
                {[0, 1, 2].map((it: any, index) => {
                  let selectedClass = '';

                  if (it === currentItemIndex) {
                    selectedClass = 'bg-black';
                  }
                  return <span key={index } className={`w-[10px] h-[10px] ${selectedClass} border border-black inline-block rounded-full`}></span>
                })}
            </div>
          </Carousel>
        </div>
        <div className='flex  gap-4 max-sm:flex-col max-sm:justify-center'>
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
                            onClick={() => redirectToContacts(it.url!)}
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
        </div>
      </div>
      {/* <img className='max-sm:hidden lg:w-[420px] xl:w-[540px]' src={codeHero} alt="a guy is programming" /> */}
      <div className='max-sm:hidden flex flex-col gap-4 justify-center mt-6'>
          <h2 className='text-[20px] font-semibold  text-center'>Projects Showcase</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <img src={labsyms} alt="a guy is programming" />
              </CarouselItem>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <img src={bizzit} alt="a guy is programming" />
              </CarouselItem>
              <CarouselItem 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <img src={unisipt} alt="a guy is programming" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className='flex gap-4 justify-center'>
                {[0, 1, 2].map((it: any, index) => {
                  let selectedClass = '';

                  if (it === currentItemIndex) {
                    selectedClass = 'bg-black';
                  }
                  return <span key={index } className={`w-[10px] h-[10px] ${selectedClass} border border-black inline-block rounded-full`}></span>
                })}
            </div>
          </Carousel>
        </div>
    </section>
  )
}

export default Hero;