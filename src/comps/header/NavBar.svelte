<script>
    import * as sst from 'svelte-scrollto'
    import links from '../../vars/Nav.js'
</script>


<div class="flex-out">

    {#each links as key}
        <a on:click={() => sst.scrollTo({element: `#${key}`})} class="white-link clickable allcaps">
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
