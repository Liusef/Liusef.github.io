<script>
    import 'swiper/css';
    import 'swiper/css/bundle'
    import '../../app.css'
    import Icon from "./Icon.svelte";

    export let info
</script>

<div class="swiper-slide outer">
    <div class="outer grey-bg">
        <div style:background-image={`url(${info.img})`} class="img"></div>
        <div class="inner">
            <div class="h3" style="line-height: 1em; margin-bottom: 0.25rem">
                {info.name}
            </div>
            <p class="no-margin-top" class:no-margin-bottom={info.sub2}>
                {info.subt}

            {#if info.sub2}
                <p class="no-margin-top">
                    {info.sub2}
            {/if}

            <p class="half-ls">
                {info.desc}

            {#if info.adesc}
                <div style:margin="1rem 0"></div>
                {#each info.adesc as a}
                    <p class="no-margin-bottom no-margin-top">{a}
                {/each}
            {/if}

            </p>
            <div class="flex-links">
                {#if info.links}
                    {#each info.links as link}
                        <div class="row-center">
                            <a class="row-center link" style:gap="0.5rem" href={link.link}>
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

    .outer {
        width: 340px;
        height: 500px;
        max-width: 80vw;
        max-height: 100vh;
        border-radius: 8px;
    }

    .inner {
        margin: 1rem 1.5rem;
    }

    .img {
        height: 200px;
        width: 350px;
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
