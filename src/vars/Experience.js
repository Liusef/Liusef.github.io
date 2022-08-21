import mn from '../assets/exp/mn.png'
import eb from '../assets/exp/eb.jpg'
import lrt from '../assets/exp/lrt.png'
import fl from '../assets/exp/thing.jpg'
import wa from '../assets/webasset.svg'
import globe from '../assets/globe.svg'

export default [
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
        img: eb,
        name: 'Empathy Bytes',
        subt: 'Student Researcher and Developer',
        sub2: 'Aug 2021 - Present',
        desc: 'Empathy Bytes is a Georgia Tech VIP (Vertically Integrated project). We work with cutting edge' +
              'technologies like AR/VR to help share experiences and spread empathy.',
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