import {
	FaGithub,
	FaLinkedin,
	FaRegBookmark,
	FaRegUser,
	FaWhatsapp
	
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoGridOutline } from 'react-icons/io5';



export const personalInfo = {
	name: 'YENIRE RODRIGUEZ',
	age: 28,
	location: 'Saravena, Arauca, Colombia',
	occupation: 'Full Stack Developer & Software Engineer',
	overview:
		'Desarrolladora Full Stack con enfoque en la construcción de soluciones web eficientes, escalables y orientadas al usuario. Me especializo en transformar requerimientos técnicos en productos funcionales y de calidad. Comprometida con el aprendizaje continuo, la mejora constante y la colaboración en equipos multidisciplinarios para generar impacto real',
	socialLinks: [
		{
			id: 1,
			name: 'GitHub',
			url: 'https://github.com/YenireRiera',
			icon: <FaGithub size={26} />,
		},
		{
			id: 2,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/yenire-rodriguez-riera-b63a751bb/',
			icon: <FaLinkedin size={26} />,
		},
		{
			id: 3,
			name: 'Twitter',
			url: 'https://x.com/YenireR21',
			icon: <FaXTwitter size={26} />,

		},
		{
			id: 4,
			name: 'Whatsapp',
			url: 'https://wa.me/573232516322',
			icon: <FaWhatsapp size={26} />,
			
		},
			
		
	],
	
};

export const tabs = [
	{
		id: 1,
		name: 'Proyectos',
		icon: IoGridOutline,
	},
	{
		id: 2,
		name: 'Experiencia',
		icon: FaRegBookmark,
	},
	{
		id: 3,
		name: 'Habilidades',
		icon: FaRegUser,
	},
];

export const experience = [
{
  id: 1,
  position: 'Full Stack Developer – SICOT Project',
  timeRange: '2024 – Present',
  companyName: 'Personal Project',
  companyLocation: 'Saravena, Arauca, Colombia',
  description:
    'Development of SICOT, a platform for workplace inspections with geolocation, QR integration, automated reports, and customizable checklists.',
  technologiesUsed: [
    'JavaScript',
    'HTML5',
    'CSS3',
    'MySQL',
    'Express.js',
    'Node.js',
    'QR Integration',
    'Geolocation API',
    'GitHub',
  ],
},
{
  id: 2,
  position: 'Portfolio Developer – Freelance',
  timeRange: '2023 – Present',
  companyName: 'Self-Employed',
  companyLocation: 'Remote',
  description:
    'Creation of personal portfolio and web projects with responsive design, API integration, and UI/UX optimization.',
  technologiesUsed: [
    'React',
    'Tailwind CSS',
    'JavaScript',
    'Git',
    'GitHub',
    'Figma',
  ],
},
{
    id: 3,
    position: 'Administrative Assistant – Internship',
    timeRange: '2023',
    companyName: 'Alcaldía Municipal de Saravena',
    companyLocation: 'Saravena, Arauca, Colombia',
    description:
      'Supported digital process automation and data management using office and administrative software.',
    technologiesUsed: [
      'Microsoft Office',
      'Database Management',
      'Digital Filing Systems',
      'Process Automation',
    ],
  },
];


export const education = [
  {
    id: 1,
    degree: 'Bachelor’s in Occupational Safety and Health',
    timeRange: '2022 – Present',
    institution: 'Universidad Nacional Abierta y a Distancia (UNAD)',
    location: 'Cubará, Boyacá, Colombia',
    description:
      'Specialization in workplace safety regulations, public health, and risk management.',
    technologiesUsed: ['Risk Management', 'Public Health', 'OSH Standards'],
  },
  {
    id: 2,
    degree: 'Technologist in Software Analysis and Development',
    timeRange: '2021 – Present',
    institution: 'Servicio Nacional de Aprendizaje (SENA)',
    location: 'Colombia (Online)',
    description:
      'Web and backend development, databases, and agile methodologies.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
  },
  {
    id: 3,
    degree: 'Specialized Courses',
    timeRange: 'Ongoing',
    institution: 'Online Platforms (Udemy, FreeCodeCamp)',
    location: 'Remote',
    description:
      'Courses in React, Node.js, Tailwind CSS, Python, DevOps, and process automation.',
    technologiesUsed: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'Python',
      'DevOps',
    ],
  },
];





export const skills = [
{
		id: 1,
		imageSrc: '../../public/img/react.png',
		technologyName: 'React',
		context: 'Frontend',
		bgColor: '#E1F5FE',
		borderColor: '#81D4FA',
	},
	

	{
		id: 3,
		imageSrc: '../../public/img/nodejs.png',
		technologyName: 'Node.js',
		context: 'Backend',
		bgColor: '#E8F5E8',
		borderColor: '#81C784',
	},
	
	{
		id: 6,
		imageSrc: '../../public/img/tailwindcss.png',
		technologyName: 'Tailwind CSS',
		context: 'UI/UX',
		bgColor: '#E0F7FA',
		borderColor: '#80DEEA',
	},
	{
		id: 7,
		imageSrc: '../../public/img/typescript.png',
		technologyName: 'TypeScript',
		context: 'Language',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 8,
		imageSrc: '../../public/img/javascript.png',
		technologyName: 'JavaScript',
		context: 'Language',
		bgColor: '#FFFDE7',
		borderColor: '#FFF176',
	},
	{
		id: 9,
		imageSrc: '../../public/img/python.png',
		technologyName: 'Python',
		context: 'Backend',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},

	{
		id: 13,
		imageSrc: '../../public/img/graphql.png',
		technologyName: 'GraphQL',
		context: 'API',
		bgColor: '#FCE4EC',
		borderColor: '#F8BBD9',
	},
	{
		id: 14,
		imageSrc: '../../public/img/docker.png',
		technologyName: 'Docker',
		context: 'DevOps',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 17,
		imageSrc: '../../public/img/mongodb.png',
		technologyName: 'MongoDB',
		context: 'Database',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	{
		id: 18,
		imageSrc: '../../public/img/postgresql.png',
		technologyName: 'PostgreSQL',
		context: 'Database',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
];

export const softSkills = [
"Effective Communication",
"Teamwork",
"Critical Thinking",
"Time Management",
"Adaptability",
"Problem Solving",
"Empathy",
"Continuous Learning",
];


	
