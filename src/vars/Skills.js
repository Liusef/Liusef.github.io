import java from '../assets/lang/java.png'
import py from '../assets/lang/py.png'
import cs from '../assets/lang/cs.png'
import js from '../assets/lang/js.png'
import svelte from '../assets/lang/svelte.svg'
import jb from '../assets/lang/jetbrains.png'
import vs from '../assets/lang/vs.svg'
import vsc from '../assets/lang/vsc.png'
import csp from '../assets/creative/csp.png'
import pro from '../assets/creative/procreate.png'
import cc from '../assets/creative/cc.png'
import globe from '../assets/globe.svg'
import dotnet from '../assets/lang/dotnet.png'
import omp from '../assets/lang/openmp.png'
import mpi from '../assets/lang/mpi.png'
import grpc from '../assets/lang/grpc.png'

import {
    siGit,
    siGithub,
    siReact,
    siC,
    siAdobephotoshop,
    siAdobelightroomclassic,
    siAdobepremierepro,
    siAdobeaftereffects, siUnity, siHtml5, siWebauthn, siDotnet, siXaml, siNodedotjs, siGnu, siLinux, siJupyter,
    siNumpy, siCloudflare, siPytorch, siGoogle, siAzureartifacts, siAzuredevops, siMicrosoftazure
} from "simple-icons/icons";


export default {
    Computing_Languages: [
        {name: 'Java', img: java, href: 'https://java.com'},
        {name: 'Python', img: py, href: 'https://python.org/'},
        {name: 'C#', img: cs, href: 'https://dotnet.microsoft.com/'},
        {name: 'C', icon: siC, href: 'https://www.iso.org/standard/74528.html'},
        {name: 'JavaScript', img: js, href: 'https://developer.mozilla.org/en-US/docs/Web/javascript'},
    ],
    Technologies: [
        {name: '.NET Core', img: dotnet, href: 'https://dotnet.microsoft.com/'},
        {name: 'Cloud Computing', icon: siCloudflare},
        {name: 'HTML/CSS', icon: siHtml5, href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {name: 'REST APIs', img: globe, href: 'https://standards.rest/'},
        {name: 'React.js', icon: siReact, href: 'https://reactjs.org/'},
        {name: 'React Native', icon: siReact, href: 'https://reactnative.dev/'},
        {name: 'Svelte', img: svelte, href: 'https://svelte.dev/'},
        {name: 'Numpy', icon: siNumpy, href: 'https://numpy.org'},
        {name: 'Jupyter Notebook', icon: siJupyter, href: 'https://jupyter.org/'},
        {name: 'PyTorch', icon: siPytorch, href: 'https://pytorch.org'},
        {name: 'OpenMP', img: omp, href: 'https://www.openmp.org/'},
        {name: 'MPI', img: mpi, href: 'https://www.open-mpi.org/'},
        {name: 'gRPC', img: grpc, href: 'https://grpc.io'},
    ],
    Dev_Tools: [
        {name: 'Node.js', icon: siNodedotjs, href: 'https://nodejs.org/'},
        {name: 'GCC', icon: siGnu, href: 'https://gcc.gnu.org/'},
        {name: 'GNU Make', icon: siGnu, href: 'https://www.gnu.org/software/make/'},
        {name: 'Git', icon: siGit, href: 'https://git-scm.com'},
        {name: 'GitHub', icon: siGithub, href: 'https://github.com/'},
        {name: 'Linux/Unix', icon: siLinux, href: 'https://linux.org/'},
        {name: 'Microsoft Azure', icon: siMicrosoftazure, href: 'https://azure.com/'},
        {name: 'Azure DevOps (Agile/Scrum)', icon: siAzuredevops, href: 'https://azure.com/'},
        {name: 'Visual Studio', img: vs, href: 'https://visualstudio.com/'},
        {name: 'VSCode', img: vsc, href: 'https://code.visualstudio.com/'},
        {name: 'JetBrains IDEs', img: jb, href: 'https://jetbrains.com/'},
        {name: 'Unity', icon: siUnity, href: 'https://unity.com/'}
    ],
    Creative: [
        {name: 'Adobe Creative Cloud', img: cc, href: 'https://www.adobe.com/creativecloud.html'},
        {name: 'Adobe Photoshop', icon: siAdobephotoshop, href: 'https://photoshop.com/'},
        {name: 'Adobe Lightroom Classic', icon: siAdobelightroomclassic, href: 'https://www.adobe.com/products/photoshop-lightroom-classic.html'},
        {name: 'Adobe Premiere Pro', icon: siAdobepremierepro, href: 'https://www.adobe.com/products/premiere.html'},
        {name: 'Adobe After Effects', icon: siAdobeaftereffects, href: 'https://www.adobe.com/products/aftereffects.html'},
        {name: 'CLIP Studio Paint', img: csp, href: 'https://clipstudio.net/'},
        {name: 'Procreate', img: pro, href: 'https://procreate.art/'},
    ],
}

let rc = [
    {
        name: 'Computer Systems and Architecture',
        contents: [
            {name: 'CS 6211: System Design for Cloud Computing'},
            {name: 'CS 4240: Compilers, Interpreters, and Program Analyzers'},
            {name: 'CS 4210: Advanced and Distributed Systems'},
            {name: 'CS 3220: Processor Design'},
            {name: 'CS 3210: Design of Operating Systems'},
            {name: 'CS 2200: Computer Systems and Networks'},
            {name: 'CS 2110: Computer Organization'},
            {name: 'ECE 2031: Digital Circuits and Design'},
        ]
    },
    {
        name: 'Artificial Intelligence',
        contents: [
            {name: 'CS 4641: Machine Learning'},
            {name: 'CS 4476: Computer Vision'},
            {name: 'CS 3630: Perception and Robotics'},
            {name: 'CS 3600: Intro to Artificial Intelligence'},
        ]
    },
    {
        name: 'Computing Theory and Foundations',
        contents: [
            {name: 'CS 4510: Automata and Complexity Theory'},
            {name: 'CS 3510: Design and Analysis of Algorithms'},
            {name: 'CS 2340: Object Oriented Design & Analysis'},
            {name: 'COMPSCI 61BL: Data Structures and Algorithms'},
        ]
    },
    {
        name: 'Additional Relevant Coursework',
        contents: [
            {name: 'MATH 04A: Multivariable Calculus'},
            {name: 'MATH 1554: Linear Algebra'},
        ]
    }
]

export {rc}
