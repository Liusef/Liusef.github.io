<script>
    import Icon from "./Icon.svelte";
    import '@splidejs/splide/css'
    export let info
</script>

<div class='splide__slide'>
    <div class="outer grey-bg">
        <div style:background-image={`url(${info.img})`} class="img"></div>
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
