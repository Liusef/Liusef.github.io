<script>

    import links from '../../vars/Links.js'
</script>


<div class="flex-out">

    {#each Object.keys(links) as key}
        <a href={`#${key}`} class="text white-link allcaps">
            {key}
        </a>
    {/each}

</div>


<style>
    .flex-out {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
</style>
