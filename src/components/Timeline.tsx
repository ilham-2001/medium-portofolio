import '../assets/css/Timeline.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Timeline = ({ title, experiences, callback }: any) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className="flex gap-[10px] items-center">
        <h4 className="text-[14px] my-0">{title}</h4>
        <hr className="grow border border-[#E0E5ED] my-0"/>
      </div>
      <div className="pl-2_5">
        <div className="flex flex-col gap-5">
          {experiences.map((it: any, index: number) => {
            const credential = it.credential ? 
            <p 
              className='flex gap-1 items-center underline hover:opacity-70 cursor-pointer'
              onClick={() => callback(it.credential)} 
              >
              <span>See credential </span>
              <FontAwesomeIcon className='text-[12px]' icon={faArrowUpRightFromSquare}/>
            </p>
            : '';

            const majorGPA = it.gpa && <p className='text-[14px]'>{it.gpa}</p>;

            return (
              <div key={index} className="relative flex gap-[10px] timeline">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <circle className='fill-black' cx="5" cy="5" r="5"/>
                </svg>
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