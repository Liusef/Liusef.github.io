import globe from "../assets/globe.svg";
import wa from '../assets/webasset.svg'
import gt from '../assets/edu/gt.jpg'
import gt2 from '../assets/edu/gt2.jpg'
import ucb from '../assets/edu/ucb.png'
import wvc from '../assets/edu/wvc.jpg'
import lhs from '../assets/edu/lhs.jpg'

export default [
    {
        img: gt2,
        name: 'Georgia Tech',
        subt: 'Atlanta, GA',
        desc: 'Currently a masters student studying Computer Science with a concentration in Systems.',
        adesc: [
            'Computer Science M.S.',
            'Expected Graduation: December 2025',
            'GPA: 4.0'
        ],
        links: [
            {
                name: 'Georgia Tech Website',
                img: wa,
                link: 'https://gatech.edu/'
            },
        ]
    },
    {
        img: gt,
        name: 'Georgia Tech',
        subt: 'Atlanta, GA',
        desc: 'Studied Computer Science with threads in Intelligence and Sys/Arch.',
        adesc: [
            'Computer Science B.S.',
            'Graduated: May 2024',
            'GPA: 4.0'
        ],
        links: [
            {
                name: 'Georgia Tech Website',
                img: wa,
                link: 'https://gatech.edu/'
            },
        ]
    },
    {
        img: ucb,
        name: 'UC Berkeley',
        subt: 'Berkeley, CA',
        desc: 'Attended for Berkeley\'s Pre-college scholars program. Took CS 61BL: Data Structures and Algorithms.',
        adesc: [
            'Letters & Sciences Undeclared',
            'GPA: 4.0'
        ],
        links: [
            {
                name: 'UC Berkeley Website',
                img: wa,
                link: 'https://berkeley.edu/'
            }
        ]
    },
    {
        img: wvc,
        name: 'West Valley College',
        subt: 'Saratoga, CA',
        desc: 'Attended West Valley College for the Fall 2020 term for concurrent enrollment. Took MATH 04A: Intermediate (Multivariable) ' +
              'Calculus.',
        adesc: [
            'Computer Science and Engineering',
            'GPA: 4.0'
        ],
        links: [
            {
                name: 'West Valley College Website',
                img: wa,
                link: 'https://westvalley.edu/'
            }
        ]
    },
    {
        img: lhs,
        name: 'Lynbrook High School',
        subt: 'San Jose, CA',
        desc: 'Attend Lynbrook High School for general studies.',
        adesc: [
            'Graduated: June 2021',
            'Unweighted GPA: 3.969'
        ],
        links: [
            {
                name: 'Lynbrook High School Website',
                img: wa,
                link: 'https://lhs.fuhsd.org/'
            }
        ]
    }
]
