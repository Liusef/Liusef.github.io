<script>
    import { browser } from "$app/environment";
    import InfoCard from "./common/InfoCard.svelte";
    import Experience from "../vars/Experience.js";
    import Projects from '../vars/Projects.js'
    import Education from "../vars/Education.js";
    import { onMount } from "svelte";
    import '@splidejs/splide/css'
    import Splide from '@splidejs/splide'
    // import '../app.css'
    

    const vars = {
        Experience: Experience,
        Projects: Projects,
        Education: Education,
    }

    const splide_opt = {
        drag: "free",
        snap: true,
        autoWidth: true,
        pagination: false,
        gap: '2rem',
        lazyLoad: true,
        keyboard: true,
        useScroll: true,
        trimSpace: false,
    }

    let bindings = {}

    const cooldown_ms = 250
    let prev = 0
    const handleWheel = (e, key) => {
        // let ctime = (new Date()).getTime()
        // if (prev + cooldown_ms > ctime) {return }
        // if (Math.abs(e.deltaX) < Math.abs(e.deltaY) || e.deltaX == 0) {
        //     return 
        // }
        // let dir
        // if (e.deltaX > 0) {dir = '>'} else {dir = '<'}
        // bindings[key].go(dir)
        // prev = ctime
    }

    onMount(() => {
        for (const key of Object.keys(vars)) {
            bindings[key] = new Splide(`.splide.splide-${key}`, splide_opt)
            bindings[key].mount()
        }

        document.addEventListener( 'DOMContentLoaded', function() {
            for (const key of Object.keys(vars)) {
                bindings[key].mount()
            }
        } )

        
    })

</script>


{#each Object.keys(vars) as key}
    <div class={`body splide splide-${key}`} id={key.toLowerCase()} style:padding-bottom="1rem" style:overflow="hidden" >
               
        <!-- <div class='title-flex'>
            <div class="title-left">
                <p class="h2">
                    {key}
            </div>
            <div class="title-right splide__arrows" >
                <button class="splide__arrow splide__arrow--prev arrow arrow-left" style:position="unset">
                    <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(90deg)" width="0.875rem" viewBox="0 0 14 8" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z" fill="white"></path></svg>
                </button>
                <button class="splide__arrow splide__arrow--next arrow arrow-right" style:position="unset">
                    <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)" width="0.875rem" viewBox="0 0 14 8" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z" fill="white"></path></svg>
                </button>
            </div>
        </div> -->
        
        <div id={key} on:wheel={(e) => handleWheel(e, key)}>
                <div class="splide__track" style:overflow="visible">
                    <div class="splide__list">
                        {#each vars[key] as info}
                            <InfoCard {info}/>
                        {/each}
                </div>
            </div>
        </div>
    </div>
{/each}

<div style:margin="6rem">
    
</div>

<style>
    .title-flex {
        display: grid;
        grid-template-columns: 1fr, 1fr;
        width: 100%;
    }

    .title-left {
        grid-column: 1;
    }

    .title-right {
        grid-column: 2;
        justify-self: end;
        align-self: center;
        display: flex;
        gap: 1rem;
    }

    .arrow {
        transform: translate(0,0) scale(150%);
        transition: 0.2s;
        background: none;
    }

    .arrow-left:hover {
        transform: scale(170%);
    }

    .arrow-right:hover {
        transform: scale(170%);
    }

</style>





