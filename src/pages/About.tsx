import Header from '../components/Header';
import Timeline from '../components/Timeline';

import '../assets/css/About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactModel } from '../model.constant';

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
    date: '2023 - present'
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
    date: '2022'
  },
  {
    name: 'Kontes Robot Indonesia (KRI)',
    date: '2022'
  },
  {
    name: 'Kontes Robot Indonesia (KRI)',
    date: '2021'
  }
];

const educationBackground: Array<any> = [
  {
    name: 'Universitas Islam Indonesia',
    date: '2019 - present'
  },
  {
    name: 'SMAN 2 Ngaglik',
    date: '2016 - 2019'
  }
];

const About = () => {  
  const redirectToContacts = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <main>
      <div className='flex flex-col gap-10'>
        <Header />
        <section className='container flex flex-col gap-6 lg:flex-row lg:h-[80vh] lg:overflow-hidden'>
          <div className='lg:flex-1'>
            <h1 className='text-5xl font-semibold mb-4'>Ilham Rizqyakbar</h1>
            <p>An enthusiastic software artisan, reveling in creation, predominantly crafts captivating web applications.</p>
            <ul className='flex gap-3 mt-4'>
              {reachOutContacts.map((it: any, index: number) => {
                return (
                  <li key={index} className='text-[20px]' onClick={() => { redirectToContacts(it.url) }}>
                    <FontAwesomeIcon icon={it.icon}/>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='flex flex-col gap-6 lg:flex-1 lg:overflow-hidden lg:overflow-y-scroll scrollbar-hide'>
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
                  <p>Angular, React, Numpy, Tensorflow, Pandas, ROS, FastAPI, TailwindCSS</p>
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
                <Timeline title='Competition Experience' experiences={competitionExperience}/>
              </div>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold'>Education Background</h2>
              <Timeline title='Education' experiences={educationBackground}/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About;