<script>
    import bg from '../assets/bg1.jpg'
</script>

<div class="home-out" style:background-image={`url(${bg})`}>
    <div class="row-center max-height center-text">
        <div>
            <p class="h1 half-ls">
                I'm Joseph
            <p class="text half-ls">
                I'm a second year undergraduate studying Computer Science at the Georgia Institute of Technology.
            </p>
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
        margin: 0 4rem;
    }

    @media only screen and (max-device-width: 700px) {
        .home-out {
            background-attachment: scroll;
        }
    }

</style>
