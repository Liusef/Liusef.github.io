import java from '../assets/lang/java.png'
import py from '../assets/lang/py.png'
import cs from '../assets/lang/cs.png'
import js from '../assets/lang/js.png'
import svelte from '../assets/lang/svelte.svg'
import jb from '../assets/lang/jetbrains.png'
import vsc from '../assets/lang/vsc.png'
import csp from '../assets/creative/csp.png'
import pro from '../assets/creative/procreate.png'
import cc from '../assets/creative/cc.png'

import {
    siGit,
    siGithub,
    siReact,
    siC,
    siAdobephotoshop,
    siAdobelightroomclassic,
    siAdobepremierepro,
    siAdobeaftereffects
} from "simple-icons/icons";


export default {
    Programming: [
        {name: 'Java', img: java, href: 'https://java.com'},
        {name: 'Python', img: py, href: 'https://python.org/'},
        {name: 'C#', img: cs, href: 'https://dotnet.microsoft.com/'},
        {name: 'C', icon: siC, href: 'https://www.iso.org/standard/74528.html'},
        {name: 'JavaScript', img: js, href: 'https://developer.mozilla.org/en-US/docs/Web/javascript'},
        {name: 'React', icon: siReact, href: 'https://reactjs.org/'},
        {name: 'Svelte', img: svelte, href: 'https://svelte.dev/'},
        {name: 'Git', icon: siGit, href: 'https://git-scm.com'},
        {name: 'JetBrains IDEs', img: jb, href: 'https://jetbrains.com/'},
        {name: 'VSCode', img: vsc, href: 'https://code.visualstudio.com/'},
        {name: 'GitHub', icon: siGithub, href: 'https://github.com/'}
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
    Languages: [
        {name: 'English - Fluent'},
        {name: 'Chinese - Conversational'},
    ],
    Relevant_Coursework: [
        {name: 'Object Oriented Design & Analysis'},
        {name: 'Object Oritented Programming'},
        {name: 'Data Structures and Algorithms'},
        {name: 'Computer Organization'},
        {name: 'Differential Calculus'},
        {name: 'Integral Calculus'},
        {name: 'Multivariable Calculus'},
        {name: 'Linear Algebra'},
        {name: 'Discrete Mathematics'},
        {name: 'Physics: Electricity and Magnetism'}

    ]
}
