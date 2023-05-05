<script>
    import Socials from "./common/Socials.svelte";
    import {browser} from "$app/environment";
    import {scrollToTop} from "../utils.js";
</script>

<div class="body footer-flex">
    <div class="h3">
        You've reached the end.
    </div>
    <div class="row-center" style:margin-top="-0.75rem">
        <div class="clickable" on:click={scrollToTop} style:opacity="50%">
            Go back to top
        </div>
    </div>
    <Socials/>
    <div style:opacity="50%">
        © Joseph Liu {new Date().getFullYear()}. All Rights Reserved.
    </div>
</div>

<style>
    .footer-flex {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
