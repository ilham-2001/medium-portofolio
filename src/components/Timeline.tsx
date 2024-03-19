import '../assets/css/Timeline.css'

const Timeline = ({ title, experiences }: any) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className="flex gap-[10px] items-center">
        <h4 className="text-[14px] my-0">{title}</h4>
        <hr className="grow border border-[#E0E5ED] my-0"/>
      </div>
      <div className="pl-2_5">
        <div className="flex flex-col gap-5">
          {experiences.map((it: any, index: number) => {
            return (
              <div key={index} className="relative flex gap-[10px] timeline">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <circle className='fill-black' cx="5" cy="6" r="5" />
                </svg>
                <div className="flex flex-col">
                  <p className="font-semibold">{it.name}</p>
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