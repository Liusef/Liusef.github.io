<script>
    import Links from "../../vars/Links.js";
    import Icon from "./Icon.svelte";
    import globe from '../../assets/globe.svg'

    const height = '2rem'
</script>

<div class="flex-out">
    <a class="resume white-link text" href={Links.resume}>
        Resume
    </a>
    {#each Object.keys(Links.social) as social}
        {#if Links.social[social].icon}
            <a class="white-link" href={Links.social[social].link}><Icon icon={Links.social[social].icon} {height}/></a>
        {:else if social.img}
            <a class="white-link" href={Links.social[social].link}><Icon img={Links.social[social].img} {height}/></a>
        {:else}
            <a class="white-link" href={Links.social[social].link}><Icon img={globe} {height}/></a>
        {/if}
    {/each}
</div>

<style>

    .flex-out {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
    }

    .resume {
        background: #222222aa;
        padding: 0.25rem 0.5rem 0.4rem 0.5rem;
        border-radius: 8px;
        margin-right: -0.5rem;
    }

</style>
