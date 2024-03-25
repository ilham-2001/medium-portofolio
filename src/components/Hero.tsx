import { useState } from 'react';

import { codeHero } from '../assets/assets';  
import Button from './Button';
import { ContactModel } from '../model.constant';

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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../@/components/ui/dialog"

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

import { Document, Page } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';


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
  const [numPages, setNumPages] = useState<number>();

  const redirectToContacts = (link: string) => {
    window.open(link, '_blank');
  }

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy) => {
    setNumPages(nextNumPages);
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
          <Dialog>
            <DialogTrigger className='border border-[#050505] px-4 py-3 font-medium  rounded-xl hover:bg-black hover:text-white'>
              Curriculum Vitae
            </DialogTrigger>
            <DialogContent className='flex justify-center bg-white'>
              <DialogHeader>
                <DialogTitle className='text-[14px]'></DialogTitle>
                <Document file='./files/SWE-CV_public.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={300}
                    />
                  ))}
                </Document>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
                      {/* <Button variant="outline">Cancel</Button> */}
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
      <img className='max-sm:hidden lg:w-[420px] xl:w-[540px]' src={codeHero} alt="a guy is programming" />
    </section>
  )
}

export default Hero;