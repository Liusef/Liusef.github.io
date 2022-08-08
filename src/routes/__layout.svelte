<script>
    import '../app.css'
    import Header from "../comps/header/Header.svelte";
    import Footer from "../comps/Footer.svelte";
</script>

<header>
    <Header/>
</header>

<slot/>

<footer>
    <Footer/>
</footer>
