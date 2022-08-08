<script>
    import Swiper from './common/SwiperOut.svelte'
    import InfoCard from "./common/InfoCard.svelte";
    import Experience from "../vars/Experience.js";
    import Projects from '../vars/Projects.js'
    import Education from "../vars/Education.js";

    const vars = {
        Experience: Experience,
        Projects: Projects,
        Education: Education,
    }

</script>

{#each Object.keys(vars) as key}
    <div class="body" id={key.toLowerCase()} style:padding-bottom="1rem">
        <p class="h2">
            {key}
        <p>
            <Swiper>
                {#each vars[key] as info}
                    <InfoCard {info}/>
                {/each}
            </Swiper>
        </p>
    </div>
{/each}

<div style:margin="6rem">

</div>
