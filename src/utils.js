import {browser} from "$app/environment";

const scrollToTop = () => {
    if (browser) window.scrollTo({top: 0, behavior: 'smooth'})
}

const scrollToAnchor = (anchor) => {
    document.querySelector(`#${anchor}`).scrollIntoView({behavior: 'smooth'})
}

export {scrollToTop, scrollToAnchor}