"use client";
import React from "react";
import Link from "next/link";
import Testom from "./component/Testom";
import Trusted from "./component/Trusted";
import { motion, useScroll } from "framer-motion";
import WhyUs from "./component/WhyUs";
import Achievements from "./component/Achievements";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainContent from "./component/mainContent";
import { duration } from "@mui/material";

export default function Example() {
  return (
    <div className="pt-20 lg:pt-4">
      <div className=" bg-skin-inverted ">
        <img src="./images/bg.png" />
        <div className="mx-auto w-full max-w-2xl  py-24   ">
          <div className="hidden  sm:flex sm:justify-center">
            <div className="relative border-red-500 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.
              <Link href="#" className="font-semibold text-skin-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <MainContent />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className=" flex-col bg-skin-inverted ">
          <p className=" flex justify-center align-middle  text-5xl font-bold pb-10 ">
            Why Us?
          </p>
          <div>
            <WhyUs />
          </div>
        </div>
      </motion.div>
      <div className=" flex-col bg-skin-inverted pt-24 ">
        <p className=" flex justify-center align-middle  text-5xl font-bold pt-10 ">
          Our Partners
        </p>
        <div>
          <Trusted />
        </div>
      </div>
      <div>
        <Achievements />
      </div>
      <div className=" flex-col bg-skin-inverted ">
        <p className=" flex justify-center align-middle  text-5xl font-bold  ">
          Testomonials
        </p>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative overflow- py-14"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex  items-center justify-center p-6">
                <Testom />
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Positioned Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
