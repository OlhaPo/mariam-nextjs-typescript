"use client";

import { LinkButton } from "@/components/uikit/button";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { productsInStock } from "@/app/domains/product/productsInStock";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function ProductItem() {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={2}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
          >
            <SwiperSlide>
              {productsInStock.map((pic, index) => (
                <Image
                  key={index}
                  src={pic.imageUrls[index]}
                  height={500}
                  width={500}
                  alt={pic.title}
                />
              ))}
            </SwiperSlide>
          </Swiper>
          <div className="image-swiper-button-prev">
            {" "}
            {/* Previous button */}
            <IoIosArrowBack size={20} className="swiper-button text-primary" />
          </div>
          <div className="image-swiper-button-next">
            {" "}
            {/* Next button */}
            <IoIosArrowForward
              size={20}
              className="swiper-button text-primary"
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="text-left">Dress title</h2>
          <span>10 UAH</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            minima id non totam eos magnam iusto dolor praesentium temporibus
            facere asperiores tenetur.
          </p>
          <div>
            <LinkButton pathName="/cart" title="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
