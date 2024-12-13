import { useState, useEffect } from 'react';

import Header from '../components/Header';

import { redirectToLink }  from '../utils/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card"

import { Badge } from '../@/components/ui/badge';


import { ProjectCardModel } from '../global-interface';

import { 
  guavAi,
  noImage,
  unisiPt
} from '../assets/assets';


const projects: ProjectCardModel[] = [
  {
    title: 'LabSyms',
    img: noImage,
    alt: 'labsyms',
    desc: 'Web based laboratorium monitoring system to check whether a person wearing a complete set of laboratorium safety apparel.',
    url: 'https://github.com/ilham-2001/labsyms',
    technologyUsed: ['React', 'TailwindCSS', 'Python', 'Tensorflow', 'MQTT'],

  },
  {
    title: 'Bizz-it - Logo Matcher',
    img: noImage,
    alt: 'bizz-it',
    desc: 'Deep learning model used to find available franchise in bizz-it mobile app by taking picture of some logo and find similar logo in the app.',
    url: 'https://github.com/bizz-it/bizz-it_machine-learning',
    technologyUsed: ['Python', 'Tensorflow', 'FastAPI', 'Docker'],
  },
  {
    title: 'UnisiPT',
    img: unisiPt,
    alt: 'unisi-pt',
    desc: 'Web based application used to find various job vacany around Universitas Islam Indonesia.',
    url: 'https://github.com/ilham-2001/unisi_pt',
    technologyUsed: ['Javascript', 'NodeJS', 'SQL', 'PHP'],

  },
  {
    title: 'GuavAI',
    img: guavAi,
    alt: 'guavAI',
    desc: 'An intelligent chatbot designed for focused conversations on specific topics to boost productivity and save time.',
    url: 'https://github.com/ilham-2001/chatbot',
    technologyUsed: ['Javascript', 'React', 'Gemini', 'TailwindCSS'],
  },
]; 

const Projects = () => {
  return (
    <main className='flex flex-col gap-8'>
        <Header />
        <section className='container flex flex-wrap gap-8 h-[80vh]'>
          {projects.map((it: ProjectCardModel, index: number) => {
            return <ProjectCard 
              key={index}
              title={it.title}
              img={it.img}
              alt={it.alt}
              desc={it.desc}  
              url={it.url}
              technologyUsed={it.technologyUsed}
              />
          })}
        </section>
    </main>
  )
}

const ProjectCard = ({ title, img, alt, desc, url, technologyUsed }: ProjectCardModel) => {
  const [enterState, setEnterState] = useState<string>('');
  const [techUsed, setTechUsed]  =  useState<string[]>([]);

  useEffect(() => {
    if (technologyUsed.length > 3) {
      const numOfOtherTechUsed = technologyUsed.length - 3;
      setTechUsed([...technologyUsed.slice(0, 3), `+${numOfOtherTechUsed}`]);
    } else {
      setTechUsed(technologyUsed);
    }
  }, []);

  const startHoverAnimation = () => {    
    setEnterState('translate-x-3 duration-500');
  }

  const stopHoverAnimation = () => {    
    setEnterState('translate-x-0 duration-500');
  }
    
  const onClickExpandBadge = () => {  
    if (techUsed.some((it: string) => /\+\d+/.test(it))) {
      setTechUsed(technologyUsed);
    }  
  }
  
  return (
    <Card className='w-[30%] max-sm:w-[100%] max-h-[700px]'>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="flex flex-col gap-4">
        <img src={img} alt={alt}/>
        <CardDescription className='text-[16px]'>{desc}</CardDescription>
        <div className='flex flex-wrap gap-1'>
          {techUsed.map((it: string, index: number) => {
            return (
              <Badge 
                key={index} 
                className='border-black last:hover:cursor-pointer last:hover:opacity-70' 
                onClick={index === techUsed.length - 1? onClickExpandBadge: undefined}
                >
                {it}
              </Badge>
            )
          })}
        </div>
      </div>
    </CardHeader>
    <CardFooter 
      className='flex gap-2 hover:cursor-pointer hover:opacity-70'
      onClick={() => redirectToLink(url)}
      >
      <p 
        onMouseEnter={startHoverAnimation}
        onMouseLeave={stopHoverAnimation}
        >
        More information
      </p>
      <FontAwesomeIcon icon={faArrowRight} className={`${enterState}`}/>
    </CardFooter>
  </Card>
  )
}

export default Projects;