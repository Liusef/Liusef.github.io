<script>
    import { page } from '$app/stores'
    export let anchor
    export let open
    import {browser} from "$app/environment";
    import {scrollToAnchor} from "../../utils.js";

</script>

<a href={anchor} on:click={() => open = false} class="hover">
    <div class="hover bar" style:opacity="0"></div>
    <slot/>
    <div class="hover bar"></div>
</a>

<style>

    a {
        font-size: var(--header-font-size);
        color: white;
        text-decoration: none;
        -webkit-transform: translate3d(0, 0, 0);
        white-space: nowrap;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 825px) {
        a {
            align-items: flex-end;
        }
    }

    .bar {
        text-align: center;
        height: 2px;
        width: 0;
        background: white;
        border-radius: 1px;
        transition: 0.2s;
    }

    .hover:hover .bar {
        width: 100%;
    }

    .open {
        width: 100%;
    }

    .active {
        font-weight: 650;
    }

    @media (max-width: 825px) {
        a {
            font-size: calc(var(--header-font-size) * 2);
        }
    }

</style>
