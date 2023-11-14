<script>
    import NavLink from "./NavLink.svelte"
</script>


<div class="flex-out">

    <NavLink anchor="#home">
        HOME
    </NavLink>
    <NavLink anchor="#about">
        ABOUT
    </NavLink>
    <NavLink anchor="#experience">
        EXPERIENCE
    </NavLink>
    <NavLink anchor="#projects">
        PROJECTS
    </NavLink>
    <NavLink anchor="#education">
        EDUCATION
    </NavLink>
    <NavLink anchor="#skills">
        SKILLS
    </NavLink>

</div>


<style>
    .flex-out {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
</style>
