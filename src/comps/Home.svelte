<script>
    import bg from '../assets/bg1.jpg'
    import Socials from "./common/Socials.svelte";
</script>

<div class="home-out" style:background-image={`url(${bg})`} id="home">
    <div class="row-center max-height center-text relative">
        <div>
            <p class="h1 half-ls">
                I'm Joseph
            <p class="text half-ls">
                I'm an undergraduate studying Computer Science at the Georgia Institute of Technology.
            </p>
        </div>
        <div class="social-spot">
            <Socials/>
        </div>
    </div>
</div>

<style>

    .home-out {
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }

    .center-text {
        width: 80vw;
        margin-left: 8vw;
        margin-right: 2rem;
    }

    @media only screen and (max-device-width: 700px) {
        .home-out {
            background-attachment: scroll;
        }
    }

    .social-spot {
        position: absolute;
        bottom: 10vh;
    }

</style>
