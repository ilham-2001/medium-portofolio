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


const Hero = () => {
  const icons = [
    angular,
    react,
    tailwind,
    mysql,
    nodejs,
    php
  ];

  return (
    <section className='container mx-auto flex justify-between items-center'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-6xl font-semibold'>Hi, I'm Ilham Rizqyakbar</h1>
          <p 
            className='w-[540px] text-xl leading-8'>
            An undergradute informatics student from Universitas Islam Indonesia, Who's trying to be good something &#128075;
          </p>
        </div>
        <div className='flex gap-4'>
          <Button text="Curriculum Vitae"/>
          <Button text="Contact"/>
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