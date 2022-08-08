<script>

    export let img
    export let svg
    export let icon
    export let color = 'white'
    export let height = 24
    export let width = height
</script>

{#if icon}
    <svg viewBox="0 0 24 24" {height} {width}>
        <path d={icon.path} fill={color}/>
    </svg>
{:else if svg}
    <div style:background-color={color} style:height style:width
         style:mask={`url(${img}) no-repeat center / contain`}
         style:-webkit-mask={`url(${img}) no-repeat center / contain`}>

    </div>
{:else}
    <img src={img} style:height/>
{/if}
