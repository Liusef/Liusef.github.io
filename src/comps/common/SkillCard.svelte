<script>
    import Icon from "./Icon.svelte";

    export let img
    export let icon
    export let name
    export let href
</script>

<a class="flex-out white-link" class:flex-icon={img || icon} {href} class:flex-href={href}>
    {#if img || icon}
        <Icon {img} {icon} height="1.25rem"/>
    {/if}
    <div class="text">
        {name}
    </div>
</a>

<style>

    .flex-out {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.8rem;
        background: #ffffff11;
        border-radius: 8px;
        transition: 0.2s cubic-bezier(0, 0.5, 0.5, 1);
    }

    .flex-icon {
        padding: 0.5rem 0.8rem 0.6rem 0.6rem;
    }

    .flex-href:hover {
        transform: scale(1.1);
    }

</style>
