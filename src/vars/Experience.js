import mn from '../assets/exp/mn.png'
import eb from '../assets/exp/eb.png'
import gt from '../assets/exp/geico.jpg'
import lrt from '../assets/exp/lrt.jpg'
import hp from '../assets/exp/hpe.mp4'
import fl from '../assets/exp/thing.jpg'
import wa from '../assets/webasset.svg'
import globe from '../assets/globe.svg'

export default [
    {
        src: hp,
        type: 'video/mp4',
        name: 'Hewlett Packard Enterprise',
        subt: 'Software Engineer Intern (Systems)',
        sub2: 'Jun 2024 - Aug 2024',
        desc: 'I worked with a team to develop both static and dynamic analysis tools to enforce logging standards across HPE\'s GreenLake organization.',
        links: [
            {
                name: 'HPE Website',
                img: globe,
                link: 'https://hpe.com'
            },
            {
                name: 'GreenLake Website',
                img: globe,
                link: 'https://greenlake.hpe.com'
            }
        ]
    },
    {
        img: gt,
        name: 'GEICO Tech',
        subt: 'Software Developer Intern',
        sub2: 'Jun 2023 - Aug 2023',
        desc: 'I worked with the Service Enablement team to audit the company\'s service info and to build a new ' +
                'service portfolio to help keep service metadata accurate and up-to-date.',
        links: [
            {
                name: 'GEICO Website',
                img: globe,
                link: 'https://geico.com'
            }
        ]
    },
    {
        img: eb,
        name: 'Empathy Bytes',
        subt: 'Student Researcher and Developer',
        sub2: 'Aug 2021 - Dec 2022',
        desc: 'Empathy Bytes is a Georgia Tech VIP. We work with cutting edge ' +
            'technologies like XR to help spread awareness of the communities at Georgia Tech.',
        links: [
            {
                name: 'Empathy Bytes Website',
                img: globe,
                link: 'https://educast.library.gatech.edu/'
            },
            {
                name: 'VIP Info Page',
                img: wa,
                link: 'https://www.vip.gatech.edu/teams/vwc'
            }
        ]
    },
    {
        img: mn,
        name: 'Mathnasium',
        subt: 'Mathematics Instructor',
        sub2: 'May 2022 - Aug 2022',
        desc: 'Worked at Mathnasium of Mountain View-Los Altos. Taught students various fields of mathematics, from addition and subtraction up to university ' +
              'level calculus.',
        links: [
            {
                name: 'Mathnasium Website',
                img: globe,
                link: 'https://mathnasium.com'
            },
            {
                name: 'Mathnasium of MV-LA website',
                img: globe,
                link: 'https://www.mathnasium.com/mountainviewlosaltos'
            }
        ]
    },
    {
        img: lrt,
        name: 'Lynbrook Robotics',
        subt: 'VP of Media',
        sub2: 'Aug 2017 - Jun 2021',
        desc: 'Oversaw all media related work on the team. Lead all team efforts in photography, videography, ' +
              'merchandise, and graphic design.',
        links: [
            {
                name: 'Lynbrook Robotics Website',
                img: globe,
                link: 'https://lynbrookrobotics.com/'
            }
        ]
    },
]
