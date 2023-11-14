<script>
    import Skills from "../vars/Skills.js";
    import {rc} from '../vars/Skills'
    import SkillCard from "./common/SkillCard.svelte";

</script>

<div class="body grey-bg" id="skills">
    <p class="h2">
        Skills
    </p>

    {#each Object.keys(Skills) as group}
        <p class="h3">
            {group.replace("_", " ")}
        </p>
        <div class="skills-flex">
            {#each Skills[group] as item}
                <SkillCard name={item.name} icon={item.icon} img={item.img} href={item.href}/>
            {/each}
        </div>
    {/each}

    <p class="h3" style:margin-top="5rem">
        Relevant Coursework
    </p>
    {#each rc as cat}
        <p class="h4">
            {cat.name}
        </p>
        <div class="skills-flex">
            {#each cat.contents as item}
                <SkillCard name={item.name}/>
            {/each}
        </div>
    {/each}
</div>

<style>
    .skills-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
    }
</style>
