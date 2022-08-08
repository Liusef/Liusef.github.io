<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import SwiperCore, {Navigation, Pagination, Mousewheel} from 'swiper'
</script>

<div style="--swiper-theme-color: white">
    <Swiper modules={[Pagination, Navigation, Mousewheel]}
            mousewheel={{forceToAxis: true}}
            slidesPerView="auto"
            spaceBetween={30}
            navigation={true}
            pagination={{clickable: true}}>
        <slot/>
    </Swiper>
</div>
