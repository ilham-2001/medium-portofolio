import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProjectModel } from '../model.constant';
import { unisipt, bizzit, labsyms } from '../assets/assets';

const projects: Array<ProjectModel> = [
  {
    name: 'LabSyms',
    description: 'Web based laboratorium monitoring system to check whether a person wearing a complete set of laboratorium safety apparel.',
    technologyUsed: ['React', 'TailwindCSS', 'Python', 'Tensorflow', 'MQTT'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/ilham-2001/labsyms'}],
    thumbnail: labsyms
  },
  {
    name: 'Bizz-it - Logo Matcher',
    description: 'Deep learning model used to find available franchise in bizz-it mobile app by taking picture of some logo and find similar logo in the app.',
    technologyUsed: ['Python', 'Tensorflow', 'FastAPI', 'Docker'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/bizz-it/bizz-it_machine-learning'}],
    thumbnail: bizzit
  },
  {
    name: 'Unisi-PartTime',
    description: 'Web based application used to find various job vacany around Universitas Islam Indonesia.',
    technologyUsed: ['Javascript', 'NodeJS', 'SQL', 'PHP'],
    whereToLook: [{ label: '', icon: faGithub, url: 'https://github.com/ilham-2001/unisi_pt'}],
    thumbnail: unisipt
  }
];

export { projects };