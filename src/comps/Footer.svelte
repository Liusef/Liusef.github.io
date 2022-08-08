<script>
    import * as sst from "svelte-scrollto"
    import Socials from "./common/Socials.svelte";
</script>

<div class="body footer-flex">
    <div class="h3">
        You've reached the end.
    </div>
    <div class="row-center" style:margin-top="-0.75rem">
        <div class="clickable" on:click={() => sst.scrollToTop()} style:opacity="50%">
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
