import globe from "../assets/globe.svg";
import wa from '../assets/webasset.svg'
import {siGithub} from "simple-icons/icons";

import mr from '../assets/proj/mapreduce.png'
import db from '../assets/proj/barrier.png'
import nn from '../assets/proj/nn.png'
import zm from '../assets/proj/zoom.png'
import tspm from '../assets/proj/tgstickers.png'
import gba from '../assets/proj/gba.png'
import dgd from '../assets/proj/goat.png'
import maze from '../assets/proj/maze.png'
import git from '../assets/proj/gitlet.png'
import lang from '../assets/proj/stats.png'

export default [
    {
        img: mr,
        name: 'MapReduce System',
        subt: 'C++, CMake, gRPC',
        sub2: 'Nov 2023 - Dec 2023',
        desc: 'Implemented a MapReduce system to do highly parallelized, distributed, high reliability data processing. Written using C++ and gRPC' +
               '  to ensure high performance and includes mechanisms to ensure reliability, even with dead nodes.',
        // links: [
        //     {
        //         name: 'GitHub Repo',
        //         icon: siGithub,
        //         link: 'https://github.com/Liusef/TelegramStickerManager'
        //     },
        // ]
    },
    {
        img: db,
        name: 'Distributed Barrier Algorithm',
        subt: 'C (language), OpenMP, MPI',
        sub2: 'Oct 2023',
        desc: 'Developed a barrier algorithm in C to synchronize threads running across different nodes in a ' +
            'datacenter. Uses the MCS Tree Barrier algorithm for improved performance on large distributed systems.',
        // links: [
        //     {
        //         name: 'GitHub Repo',
        //         icon: siGithub,
        //         link: 'https://github.com/Liusef/TelegramStickerManager'
        //     },
        // ]
    },
    {
        img: nn,
        name: 'Vectorized Neural Network',
        subt: 'Python, NumPy',
        sub2: 'Sept 2023',
        desc: 'Created a fully vectorized Multilayer Perceptron Neural Network with ReLU and Softmax layers and ' +
            ' the SGD optimizer for a simple implementation while preserving performance. ',
        // links: [
        //     {
        //         name: 'GitHub Repo',
        //         icon: siGithub,
        //         link: 'https://github.com/Liusef/TelegramStickerManager'
        //     },
        // ]
    },
    {
        img: tspm,
        name: 'Telegram Sticker Pack Manager',
        subt: 'WinUI, C#, XAML, .NET Core',
        sub2: 'Aug 2021 - Aug 2022',
        desc: 'Automates Sticker bot to make managing sticker packs less tedious. ' +
              'Communicates with MTProto and uses asynchronous programming, caching, and parallelization ' +
              'to increase performance.',
        links: [
            {
                name: 'GitHub Repo',
                icon: siGithub,
                link: 'https://github.com/Liusef/TelegramStickerManager'
            },
        ]
    },
    {
        img: gba,
        name: 'Game Boy Advance Platformer',
        subt: 'C (language), GCC, GNU Make',
        sub2: 'Apr 2022',
        desc: 'A simple platforming game for the Game Boy Advance. Uses Memory Mapped I/O to draw to the display ' +
              'and read user input.',
        links: [
            {
                name: 'GitHub Repo',
                icon: siGithub,
                link: 'https://github.com/Liusef/Gameboy-JumpingCat'
            },
        ]
    },
    {
        img: dgd,
        name: 'Dance Goat Dance',
        subt: 'JavaScript, HTML5, CSS3',
        sub2: 'Mar 2022',
        desc: 'An interactive website all about goats writted in under 24 hours! ' +
              'Submission for Hexlabs Horizons 2022. Won the Most Creative award.',
        links: [
            {
                name: 'Goat Website',
                img: globe,
                link: 'https://liusef.github.io/dance-goat-dance/'
            },
            {
                name: 'GitHub Repo',
                icon: siGithub,
                link: 'https://github.com/ZenithO-o/GOAT-WEBSITE'
            },
            {
                name: 'Devpost Submission',
                img: wa,
                link: 'https://devpost.com/software/goat-sauce-educational-website'
            },
        ]
    },
    {
        img: maze,
        name: 'Maze Pathfinder',
        subt: 'Java, JavaFX',
        sub2: 'May 2021',
        desc: 'A program that reads in a maze image, converts it to a graph data structure using Computer Vision ' +
              'and finds the shortest path from start to end using the A* Search Algorithm.',
        links: [
            {
                name: 'GitHub Repo',
                icon: siGithub,
                link: 'https://github.com/Liusef/MazeImgSolver-FinalProj'
            }
        ]
    },
    {
        img: git,
        name: 'Gitlet: Version Control System',
        subt: 'Java',
        sub2: 'Jul 2020',
        desc: 'A basic command line implementation of git from scratch. Supports commits, branching, resetting, ' +
              'merging, etc.',
    },
    {
        img: lang,
        name: 'Comparing Tongue Movement Between Languages',
        subt: 'Python, TKinter',
        sub2: 'May 2020',
        desc: 'Converts written text to the International Phonetic Alphabet and analzyes tongue movement between ' +
              'English and French.',
        links: [
            {
                name: "GitHub Repo",
                icon: siGithub,
                link: 'https://github.com/Liusef/APStats-Final'
            }
        ]
    }
]
