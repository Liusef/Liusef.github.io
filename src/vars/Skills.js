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
import winui from '../assets/lang/winui.png'

import {
    siGit,
    siGithub,
    siReact,
    siC,
    siAdobephotoshop,
    siAdobelightroomclassic,
    siAdobepremierepro,
    siAdobeaftereffects, siUnity, siHtml5, siWebauthn, siDotnet, siXaml, siNodedotjs, siGnu, siLinux
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
        {name: 'XAML', img: winui, href: 'https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language'},
        {name: 'HTML/CSS', icon: siHtml5, href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {name: 'REST APIs', img: globe, href: 'https://standards.rest/'},
        {name: 'React.js', icon: siReact, href: 'https://reactjs.org/'},
        {name: 'React Native', icon: siReact, href: 'https://reactnative.dev/'},
        {name: 'Svelte', img: svelte, href: 'https://svelte.dev/'},
    ],
    Dev_Tools: [
        {name: 'Node.js', icon: siNodedotjs, href: 'https://nodejs.org/'},
        {name: 'GCC', icon: siGnu, href: 'https://gcc.gnu.org/'},
        {name: 'GNU Make', icon: siGnu, href: 'https://www.gnu.org/software/make/'},
        {name: 'Git', icon: siGit, href: 'https://git-scm.com'},
        {name: 'GitHub', icon: siGithub, href: 'https://github.com/'},
        {name: 'Linux/Unix', icon: siLinux, href: 'https://linux.org/'},
        {name: 'Visual Studio', img: vs, href: 'https://visualstudio.com/'},
        {name: 'VSCode', img: vsc, href: 'https://code.visualstudio.com/'},
        {name: 'JetBrains IDEs', img: jb, href: 'https://jetbrains.com/'},
        {name: 'Unity', icon: siUnity, href: 'https://unity.com/'}
    ],
    Relevant_Coursework: [
        {name: 'Computer Organization'},
        {name: 'Computer Systems and Networks'},
        {name: 'Object Oriented Design & Analysis'},
        {name: 'Object Oritented Programming'},
        {name: 'Data Structures and Algorithms'},
        {name: 'Differential Calculus'},
        {name: 'Integral Calculus'},
        {name: 'Multivariable Calculus'},
        {name: 'Linear Algebra'},
        {name: 'Discrete Mathematics'},
        {name: 'Physics: Electricity and Magnetism'}

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
