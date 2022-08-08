import globe from "../assets/globe.svg";
import wa from '../assets/webasset.svg'
import {siGithub} from "simple-icons/icons";
import tspm from '../assets/proj/tgstickers.png'
import gba from '../assets/proj/gba.png'
import dgd from '../assets/proj/goat.png'
import maze from '../assets/proj/maze.png'
import git from '../assets/proj/gitlet.png'
import lang from '../assets/proj/stats.png'

export default [
    {
        img: tspm,
        name: 'Telegram Sticker Pack Manager',
        subt: 'Aug 2021 - Aug 2022',
        desc: 'A program to automate Sticker bot and make managing sticker packs less tedious. Written in C#/XAML ' +
              'and uses asynchronous programming, smart caching, and multithreading.',
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
        subt: 'Apr 2022',
        desc: 'A simple platforming game for the Game Boy Advance. Written in C and use MMIO to draw to the display ' +
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
        subt: 'Mar 2022',
        desc: 'An interactive, educational, and fun website all about Goats! Submission for Hexlabs Horizons 2022. ' +
              'Won the Most Creative award.',
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
        name: 'Maze Image Solver',
        subt: 'May 2021',
        desc: 'A program that reads in a maze image, converts it to a graph data structure and finds the shortest ' +
              'path from start to end using the A* Search Algorithm. Uses Java and JavaFX.',
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
        subt: 'Jul 2020',
        desc: 'A basic command line implementation of git from scratch. Supports commits, branching, resetting, ' +
              'merging, etc. Written in Java.',
    },
    {
        img: lang,
        name: 'Comparing Tongue Movement Between Languages',
        subt: 'May 2020',
        desc: 'Converts written text to the International Phonetic Alphabet and analzyes tongue movement between ' +
              'English and French. Written in Python.',
        links: [
            {
                name: "GitHub Repo",
                icon: siGithub,
                link: 'https://github.com/Liusef/APStats-Final'
            }
        ]
    }
]
