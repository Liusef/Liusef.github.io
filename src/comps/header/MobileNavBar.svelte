<script>
    import {Hamburger} from "svelte-hamburgers";
    import NavLink from "./NavLink.svelte";
    import {fly} from 'svelte/transition'

    export let open

</script>


{#if open}
    <div class="mobile-menu mobilemenu-out" transition:fly={{x: 150}}>
        <div transition:fly={{x: 15, delay: 80 * 1}} on:click={() => open = false}>
            <NavLink anchor="#home">
                HOME
            </NavLink>
        </div>
        <div transition:fly={{x: 15, delay: 80 * 2}} on:click={() => open = false}>
            <NavLink anchor="#about">
                ABOUT
            </NavLink>
        </div>
        <div transition:fly={{x: 15, delay: 80 * 3}} on:click={() => open = false}>
            <NavLink anchor="#experience">
                EXPERIENCE
            </NavLink>
        </div>
        <div transition:fly={{x: 15, delay: 80 * 4}} on:click={() => open = false}>
            <NavLink anchor="#projects">
                PROJECTS
            </NavLink>
        </div>
        <div transition:fly={{x: 15, delay: 80 * 5}} on:click={() => open = false}>
            <NavLink anchor="#education">
                EDUCATION
            </NavLink>
        </div>
        <div transition:fly={{x: 15, delay: 80 * 5}} on:click={() => open = false}>
            <NavLink anchor="#skills">
                SKILLS
            </NavLink>
        </div>
    </div>
{/if}

<div style:position="relative" style:z-index="12">
    <Hamburger bind:open type="spin-r" --color="white" --border-radius="2px" --layer-height="2px"/>
</div>

<style>
    .mobile-menu {
        z-index: 11;
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        white-space: nowrap;
        background: black;

        padding-top: var(--header-height);
        padding-right: 3rem;
        overflow: visible;
    }

    .mobilemenu-out {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3vh;
        overflow: visible;
        font-size: 2rem;
    }


</style>