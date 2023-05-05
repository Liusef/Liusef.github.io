<script>
    import links from '../../vars/Nav.js'
    import {scrollToAnchor} from "../../utils.js";
</script>


<div class="flex-out">

    {#each links as key}
        <a on:click={() => scrollToAnchor(key)} class="white-link clickable allcaps">
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
