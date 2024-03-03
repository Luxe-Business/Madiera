"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Home/Banner";
import Feature from "../../components/Home/Features";
import Services from "@/components/Home/Services";
import Timeline from "@/components/Home/Timeline";
import Team from "@/components/Home/Team";
import Faq from "@/components/Home/faq";
import CallToAction from "@/components/Home/CallToAction";
import Blog from "@/components/Home/Blog";
import Footer1 from "../../components/Footer/Footer1";

import Script from "next/script";
import dynamic from "next/dynamic";

const ChooseUs = dynamic(() => import("../../components/Home/ChooseUs"), {
  ssr: false,
});

import {
  getGlobalSettings,
  getHomePageData,
  getBlogPageData,
  getCategoryOfProducts,
} from "@/app/libs/getData";
import Gallery from "@/components/Home/Gallery";

// export async function generateMetadata({ params: { locale } }) {
//   // const homePageDataPromise = await getHomePageData(locale);
//   // const seo = homePageDataPromise?.attributes?.seo[0];

//   // return {
//   //   title: `${seo?.metaTitle || ""}| Madeira`,
//   //   description: seo?.metaDescription || "",
//   //   keywords: seo?.keywords || "",
//   //   openGraph: {
//   //     images: seo?.metaImage?.data?.attributes?.url || "",
//   //   },
//   // };
//   return {
//     title: `Madeira`,
//     description: "",
//     keywords: "",
//   };
// }

function HomePage({ params: { locale } }) {
  return (
    <div>
      <Header lang={locale} />

      {/* <!-- Start Banner Area 
    ============================================= --> */}
      <Banner />
      {/* <!-- End Banner --> */}
      <Feature />

      {/* <!-- Start Choose Us 
    ============================================= --> */}
      <ChooseUs />
      {/* <!-- End Choose Us --> */}

      {/* <!-- Start Service 
    ============================================= --> */}
      <Services />
      {/* <!-- End Service --> */}

      {/* <!-- Start Timeline 
    ============================================= --> */}
      <Timeline />
      {/* <!-- End Timeline --> */}

      {/* <!-- Start Team 
    ============================================= --> */}
      <Team />
      {/* <!-- End Team --> */}

      {/* <!-- Start Faq 
    ============================================= --> */}
      <Faq />
      {/* <!-- End Faq --> */}

      {/* <!-- Start Gallery 
    ============================================= --> */}
      {/* <Gallery /> */}
      {/* <!-- End Gallery --> */}

      {/* <!-- Start Call To Action 
    ============================================= --> */}
      <CallToAction />
      {/* <!-- End Call To Action --> */}

      {/* <!-- Start Blog 
    ============================================= --> */}
      <Blog />
      {/* <!-- End Blog --> */}
      <Footer1
        lang={locale}
        // categories={productsCategories}
        // footerLogo={footerLogo}
        // SocialLinks={SocialLinks}
        // FooterSlogan={FooterSlogan}
        // MapLink={MapLink}
      />
    </div>
  );
}

export default HomePage;
