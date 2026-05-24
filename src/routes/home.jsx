import React from "react";
import Hero from "../components/Hero";
import About from "../components/about";
import Project from "../components/project";
import Donors from "../components/donors";
import Testimonials from "../components/Testimonials";
import Motivation from "../components/movtivation";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex flex-col items-center justify-center">
      <Hero />
      <AnimateOnScroll><About /></AnimateOnScroll>
      <AnimateOnScroll><Project /></AnimateOnScroll>
      <AnimateOnScroll><Testimonials /></AnimateOnScroll>
      <AnimateOnScroll><Donors /></AnimateOnScroll>
      <AnimateOnScroll><Motivation /></AnimateOnScroll>
    </div>
  );
}

export default Home;
