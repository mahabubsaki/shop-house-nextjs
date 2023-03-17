import Head from 'next/head';
import Notice from '@/components/Notice';
import TopNav from '@/components/TopNav';
import MiddleNav from '@/components/MiddleNav';
import BottomStickyNav from '@/components/BottomStickyNav';
import SliderHeader from '@/components/SliderHeader';
import SliderFeature from '@/components/SliderFeature';
import FeaturedProducts from '@/components/FeaturedProducts';
import SaleBanner from '@/components/SaleBanner';
import CategoriesSlider from '@/components/CategoriesSlider';
import Services from '@/components/Services';
import ParallexPromo from '@/components/ParallexPromo';
import LatestNews from '@/components/LatestNews';
import BrandsMarquee from '@/components/BrandsMarquee';
import MobileBottomNav from '@/components/MobileBottomNav';
import "rsuite/dist/rsuite.min.css";
import 'swiper/css';
import "swiper/css/free-mode";
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | SHOP HOUSE</title>
        <meta name="description" content="Welcome to our SHOP HOUSE! Discover our extensive selection of products and find the perfect one to meet your needs. Shop with confidence with our secure checkout and experience the convenience of online shopping. Explore our exclusive range of products and enjoy fast shipping on all orders. Our website is designed to make your shopping experience easy and enjoyable. We offer a wide variety of products from leading brands and strive to provide the best customer service possible. Our dedicated team is always ready to assist you with any questions or concerns you may have. We take pride in our high-quality products and are committed to providing you with a seamless shopping experience. Browse our website and find everything you need to enhance your lifestyle. From home decor to personal care items, we've got you covered. We are constantly updating our inventory with the latest trends and products to keep you up-to-date with the latest styles. Shop now and enjoy our competitive prices and unbeatable quality. Our products are guaranteed to meet your expectations and exceed your satisfaction. Don't miss out on our exclusive deals and promotions. Sign up for our newsletter to stay informed about our latest products and offers. Thank you for choosing our online store as your shopping destination. We look forward to serving you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <main className='App relative'>
        <Notice />
        <TopNav />
        <MiddleNav />
        <BottomStickyNav />
        <SliderHeader />
        <SliderFeature />
        <FeaturedProducts />
        <SaleBanner />
        <CategoriesSlider />
        <Services />
        <ParallexPromo />
        <LatestNews />
        <BrandsMarquee />
        <Footer />
        <MobileBottomNav />
      </main>
    </>
  );
}
