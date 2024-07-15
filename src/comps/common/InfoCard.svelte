<script>
    import Icon from "./Icon.svelte";
    import '@splidejs/splide/css'
    export let info
</script>

<div class='splide__slide'>
    <div class="outer grey-bg">
        {#if info.img}
            <div style:background-image={`url(${info.img})`} class="img"></div>
        {:else}
            <div class="video-wrapper img">
                <video autoplay loop muted>
                    <source src={info.src} type={info.type}/>
                    <track kind="captions"/>
                </video>
            </div>
        {/if}

        <div class="inner">
            <div class="h3" style="line-height: 1em; margin-bottom: 0.25rem">
                {info.name}
            </div>
            <p class="no-margin-top text fw-3" class:no-margin-bottom={info.sub2}>
                {info.subt}

            {#if info.sub2}
                <p class="no-margin-top text fw-3">
                    {info.sub2}
            {/if}

            <p class="half-ls text fw-4">
                {info.desc}

            {#if info.adesc}
                <div style:margin="1rem 0"></div>
                {#each info.adesc as a}
                    <p class="no-margin-bottom no-margin-top fw-4 text">{a}
                {/each}
            {/if}

            </p>
            <div class="flex-links">
                {#if info.links}
                    {#each info.links as link}
                        <div class="row-center">
                            <a class="row-center link fw-4 text" style:gap="0.5rem" href={link.link}>
                                <Icon icon={link.icon} img={link.img} svg={true} height="1.1rem" color="cyan"/>
                                <div>
                                    {link.name}
                                </div>
                            </a>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

    :root {
        --infocard-width: 400px;
        --infocard-max-width: 80vw;
    }

    @media (max-width: 600px) {
        :root {
            --infocard-width: 100%;
            --infocard-max-width: calc(100vw - 2rem * 2)
        }
    }

    .outer {
        width: var(--infocard-width);
        max-width: var(--infocard-max-width);
        height: 520px;
        border-radius: 8px;
    }

    .inner {
        margin: 1.5rem 1.25rem;
    }

    .video-wrapper {
        /* Telling our absolute positioned video to 
        be relative to this element */
        position: relative;

        width: 400px;
        height: 200px;

        /* Will not allow the video to overflow the 
        container */
        overflow: hidden;

        /* Centering the container's content vertically 
        and horizontally */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    video {
        object-fit: cover;
        height: 100%;
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }

    .img {
        height: 200px;
        width: 100%;
        max-width: var(--infocard-max-width);
        background-size: cover;
        background-position: center;
        border-radius: 8px 8px 0 0;
    }

    .flex-links {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .no-margin-top {
        margin-top: 0;
    }

    .no-margin-bottom {
        margin-bottom: 0;
    }

</style>
