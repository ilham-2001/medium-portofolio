// react/react-router
import { useState } from 'react';

// stylesheet
import '../assets/css/Timeline.css'

// data & handler
import { TimelineModel } from '../global-interface';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// pdfjs
import { Document, Page } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// shadcn
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../@/components/ui/dialog"



const Timeline = ({ title, experiences}:  {title: string, experiences: TimelineModel[]}) => {
  const [numPages, setNumPages] = useState<number>();

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy) => {
    setNumPages(nextNumPages);
  }


  return (
    <div className='flex flex-col gap-[10px]'>
      <div className="flex gap-[10px] items-center">
        <h4 className="text-[14px] my-0">{title}</h4>
        <hr className="grow border border-[#E0E5ED] my-0"/>
      </div>
      <div className="pl-2_5">
        <div className="flex flex-col gap-5">
          {experiences.map((it: TimelineModel, index: number) => {
            const credential = it.credential ? 
              <Dialog>
                <DialogTrigger className='flex gap-1 items-center underline hover:opacity-70 cursor-pointer'>
                  See credential 
                  <FontAwesomeIcon className='text-[12px]' icon={faArrowUpRightFromSquare}/>
                </DialogTrigger>
                <DialogContent className='flex justify-center bg-white'>
                  <DialogHeader>
                    <DialogTitle className='text-[14px]'>{it.name}</DialogTitle>
                    <Document file={it.credential} onLoadSuccess={onDocumentLoadSuccess}>
                      {Array.from(new Array(numPages), (_, index: number) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          width={350}
                        />
                      ))}
                    </Document>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            : '';

            const majorGPA = it.gpa && <p className='text-[14px]'>{it.gpa}</p>;

            return (
              <div key={index} className="relative flex gap-[10px] timeline">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <circle className='fill-black' cx="5" cy="5" r="5"/>
                </svg> */}
                <div className="min-w-3 h-3 bg-black rounded-full"></div>
                <div className="flex flex-col">
                  <p className="font-semibold">{it.name}</p>
                  {credential}
                  {majorGPA}
                  <p className="text-[14px]">{it.date}</p>
                </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline;