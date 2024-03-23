

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const Kd = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Kidney Dialysis"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/kd1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          COMPREHENSIVE DIALYSIS SERVICES
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Our dedicated team, consisting of experienced nephrologists, certified hemodialysis technicians, seasoned nurses, and registered dieticians, collaboratively delivers top-tier kidney care for patients of all ages. We offer a diverse range of dialysis options, including nocturnal, peritoneal, small daily dialysis, and hemodialysis. Our unwavering commitment is to provide you with the highest quality kidney care available, ensuring your health and well-being remain our top priority. We are here to support you on your journey to better kidney health, offering a comprehensive array of services tailored to your specific needs. Your well-being is our priority, and we are dedicated to providing you with exceptional care throughout your dialysis journey.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          HEMODIALYSIS
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        We provide hemodialysis services, a crucial component of our comprehensive kidney care. Hemodialysis employs a sophisticated device, the dialyser, to mimic the nephron’s role, effectively removing waste products and excess fluids from the blood. We initiate hemodialysis through a minor surgical procedure, establishing a vascular access point with specialized needles and tubing. Even if you’re not a candidate for an arteriovenous (AV) fistula, we offer alternative pathways, such as catheterization of the jugular, subclavian, or femoral vein. You can also opt for a dialysis catheter or dialysis AV fistula surgery. Once established, this method frees you from relying on a catheter for each session, with most patients undergoing 1-4 weekly sessions, each lasting around four hours.
        </div>

        <img className="w-[100%]" src="images/kd2.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          PERITONEAL DIALYSIS
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        
We offer a special way to help your kidneys through peritoneal dialysis. This method is excellent at getting rid of waste when your kidneys aren’t working well. Here’s how it works: your blood goes through your peritoneum (a part inside your belly) and meets clear liquid there. The waste and extra fluids go from your blood into this clear liquid. Then, we remove this clear liquid, leaving your blood clean.This is a good choice if other dialysis methods aren’t right for you. Our team is here to help you through this and make your life better. Try the future of kidney care with us. Our dedicated staff is committed to providing you with personalized, compassionate care. Experience increased flexibility and convenience with peritoneal dialysis, allowing you to maintain a higher quality of life while managing kidney issues.

        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        </div>
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default Kd;
