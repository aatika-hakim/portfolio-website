//  icons
import {
  FiGithub,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiDatabase,
  FiServer,
  FiStar,
  FiPackage,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/mongodb.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/expjs.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/aatika-hakim/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/aatika-hakim',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },

];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: '',
    href: '',
    category: 'web design',
  },
  {
    id: '2',
    image: Project2,
    name: '',
    href: '',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: '',
    category: 'web design',
  },
  {
    id: '4',
    image: Project4,
    name: '',
    href: '',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: '',
    href: 'https://github.com/aatika-hakim/portfolio-website.git',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: '',
    href: '',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiStar />,
    name: 'Web Design',
    description:
      '',
  },
  {
    icon: <FiServer />,
    name: 'Web Development',
    description:
      '',
  },
  {
    icon: <FiPackage />,
    name: 'API Integration',
    description:
      '',
  },
  {
    icon: <FiDatabase />,
    name: 'Database',
    description:
      '',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Jane',
    authorPosition: 'Head of Design',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Victoria',
    authorPosition: 'Head of Design',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    
  },
];

// location
export const location = [
  
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Lahore, Pakistan',
      description: 'Serving clients worldwide',
    },
  
];
