import Header from '../components/Header';
import Timeline from '../components/Timeline';

import '../assets/css/About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ContactModel } from '../model.constant';
import { ProjectModel } from '../model.constant';

import { Badge } from '../@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const reachOutContacts: Array<ContactModel> = [
  {
    label: 'Linkedin',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/irizqyakbr'
  },
  {
    label: 'Github',
    icon: faGithub,
    url: 'https://github.com/ilham-2001'
  },
  {
    label: 'Email',
    icon: faEnvelope,
    url: 'mailto:arizqyakbar@gmail.com'
  },
];

const workingExperiences: Array<any> = [
  {
    name: 'Bangkit Academy - Mentor',
    date: '2023 - present',
  },
  {
    name: 'Badan Sistem Informasi - Frontend Developer',
    date: '2023 - present'
  },
  {
    name: 'Unisi Robotics - Programmer',
    date: '2021 - 2023'
  },
  {
    name: 'Laboratorium Terpadu Informatika UII - Assistant Lecturer',
    date: '2021 - 2023'
  }
];

const competitionExperience: Array<any> = [
  {
    name: 'Pekan Ilmiah Mahasiswa - Karya Inovasi (PKM-KI)',
    date: '2022',
    credential: 'https://drive.google.com/file/d/1OkYo0jP8jcbt1oM82CJ31emXEz_bOArh/view'
  },
  {
    name: 'Kontes Robot Indonesia (KRI)',
    date: '2022',
    credential: 'https://drive.google.com/file/d/1cnH7oeb2tpsfMQOZcC_-Br4DzNu5d_zN/view'
  },
  {
    name: 'Kontes Robot Indonesia (KRI)',
    date: '2021',
    credential: 'https://drive.google.com/file/d/1XZb9I6omHIlGkxh7-mFicEViassZq1Jb/view'
  }
];

const educationBackground: Array<any> = [
  {
    name: 'Universitas Islam Indonesia',
    date: '2019 - present',
    gpa: 'Informatics, GPA: 3.76'
  },
  {
    name: 'SMAN 2 Ngaglik',
    date: '2016 - 2019',
    gpa: 'Science Major'
  }
];

const projects: Array<ProjectModel> = [
  {
    name: 'LabSyms',
    description: 'Web based laboratorium monitoring system to check whether a person wearing a complete set of laboratorium safety apparel.',
    technologyUsed: ['React', 'TailwindCSS', 'Python', 'Tensorflow', 'MQTT'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/ilham-2001/labsyms'}],
  },
  {
    name: 'Bizz-it - Logo Matcher',
    description: 'Deep learning model used to find available franchise in bizz-it mobile app by taking picture of some logo and find similar logo in the app.',
    technologyUsed: ['Python', 'Tensorflow', 'FastAPI', 'Docker'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/bizz-it/bizz-it_machine-learning'}],
  },
  {
    name: 'Unisi-PartTime',
    description: 'Web based application used to find various job vacany around Universitas Islam Indonesia.',
    technologyUsed: ['Javascript', 'NodeJS', 'SQL', 'PHP'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/ilham-2001/unisi_pt'}],
  }
];

const About = () => {  
  const navigate = useNavigate();

  const redirectToLink = (link: string) => {
    window.open(link, '_blank');
  }

  const toProjectSection = () => {
    navigate('/projects')
  }

  return (
    <main>
      <div className='flex flex-col gap-8'>
        <Header />
        <section className='container flex flex-col gap-6 lg:flex-row lg:h-[80vh] lg:overflow-hidden'>
          <div className='lg:flex-1'>
            <h1 className='text-5xl font-semibold mb-4'>Ilham Rizqyakbar</h1>
            <p>An enthusiastic software artisan, reveling in creation, predominantly crafts captivating web applications.</p>
            <ul className='flex gap-3 mt-4'>
              {reachOutContacts.map((it: any, index: number) => {
                return (
                  <li key={index} className='text-[20px] cursor-pointer hover:opacity-70' onClick={() => { redirectToLink(it.url) }}>
                    <FontAwesomeIcon icon={it.icon}/>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Temporary solution for content to not on the edge of the screen */}
          <div className='flex flex-col gap-6 lg:flex-1 lg:overflow-hidden lg:overflow-y-scroll scrollbar-hide max-sm:pb-6'>
            <p>
              Have several experience in programming and software development while being a member of Unisi Robotics as a 
              programmer and various national level competition like Pekan Ilmiah Mahasiswa Nasional (PIMNAS) 
              and Kontes Robot Indonesia (KRI). Proficient with Python and Javascript, and its framework like Angular and React, 
              regardless of it, I'm open to new things and eager to learn brand new technology.
            </p>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Skills</h2>
              <ul className='flex flex-col gap-2'>
                <li>
                  <h3 className='font-semibold'>Programming and Developing Software</h3>
                  <p>Python, Javascript, TypeScript, SQL</p>
                </li>
                <li>
                  <h3 className='font-semibold'>Framework and Libraries</h3>
                  <p>Angular, React, Numpy, Tensorflow, Pandas, ROS, FastAPI, TailwindCSS, OpenCV, Keras</p>
                </li>
                <li>
                  <h3 className='font-semibold'>Other Tools</h3>
                  <p>Git, Docker, Linux</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Experience</h2>
              <div className='flex flex-col gap-2'>
                <Timeline title='Working Experience' experiences={workingExperiences}/>
                <Timeline title='Competition Experience' experiences={competitionExperience} callback={redirectToLink}/>
              </div>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Education Background</h2>
              <Timeline title='Education' experiences={educationBackground}/>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Projects</h2>
              <ul className='flex flex-col gap-2'>
                {projects.map((it: any, index: number) => {
                  if (it.technologyUsed.length > 3) {
                    const numOfOtherTechUsed = it.technologyUsed.length - 3;
                    it.technologyUsed.splice(3, numOfOtherTechUsed)
                    it.technologyUsed.push(`+${numOfOtherTechUsed}`)
                  }
                  return (
                    <li className='flex flex-col gap-2' key={index}>
                      <h3 className='font-semibold'>{it.name}</h3>
                      <p>{it.description}</p>
                      <div className='flex gap-1'>
                        {it.technologyUsed.map((it: string, index: number) => {
                          return (
                            <Badge key={index} className='border-black'>{it}</Badge>
                          )
                        })}
                      </div>
                      <div className='flex gap-1'>
                        {it.whereToLook.map((it: ContactModel, index: number) => {                          
                          return (
                            <div key={index} className='flex gap-1 cursor-pointer hover:opacity-70' onClick={() => redirectToLink(it.url!)}>
                              <FontAwesomeIcon className='text-[16px]' icon={it.icon}/>
                              <span className='text-[14px]'>Repository</span>
                            </div>
                          )
                        })}
                      </div>
                    </li>
                  )
                })}
                <li>
                  <p 
                    className='flex gap-2 items-center cursor-pointer hover:opacity-70'
                    onClick={toProjectSection}
                    >
                    <span>See other projects</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About;