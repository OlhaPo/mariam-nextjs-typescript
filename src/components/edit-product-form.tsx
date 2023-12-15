"use client";

import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { ProductItem } from "@/models/ProductSchema";
import ImportImageUrl from "./import-image-url";
import { IoMdAdd } from "react-icons/io";

interface ProductFormProps {
  data?: ProductItem;
  onSave: (newData: ProductItem) => void;
}

export default function EditProductForm({ data, onSave }: ProductFormProps) {
  const [titleUk, setTitleUk] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrls, setImageUrls] = useState([""]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!data) return;
    setTitleEn(data.titleEn);
    setTitleUk(data.titleUk);
    setPrice(data.price);
    setImageUrls(data.imageUrls);
  }, [data]);

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      _id: data?._id,
      titleEn: titleEn,
      titleUk: titleUk,
      price: price,
      imageUrls: imageUrls,
    });
  }

  function handleImageUrlChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const value = e.target.value;
    const urls = [...imageUrls];
    urls[index] = value;
    setImageUrls(urls);
  }

  function addGoogleDriveImageUrl(newUrl: string, index: number) {
    // Update the corresponding URL in the array
    setImageUrls((prevUrls) =>
      prevUrls.map((prevUrl, i) => (i === index ? newUrl : prevUrl))
    );
  }

  function handleAddingImageUrl() {
    setImageUrls([...imageUrls, imageUrl]);
  }

  function handleDeletingImageUrl(index: number) {
    const urls = [...imageUrls];
    urls.splice(index, 1);
    setImageUrls(urls);
  }

  return (
    <div>
      <Form.Root className="w-[70%]" onSubmit={save}>
        <Form.Field className="grid mb-[10px]" name="titleUk">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Title UK
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              The field can not be blank.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
              value={titleUk}
              onChange={(e) => setTitleUk(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="titleEn">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Title EN
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              The field can not be blank.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="price">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Price in UAH
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              The field can not be blank.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="number"
              required
              value={price}
              onChange={(ev) => setPrice(Number(ev.target.value))}
            />
          </Form.Control>
        </Form.Field>
        {imageUrls.map((singleImage, index) => (
          <div key={index}>
            {" "}
            <Form.Field className="mb-[10px]" name={`productImage-${index}`}>
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px]">
                  Images<span className="icon-required">*</span>
                </Form.Label>
                <Form.Message
                  className="text-[13px] opacity-[0.8]"
                  match="valueMissing"
                >
                  The field can not be blank.
                </Form.Message>
              </div>
              <div className="flex flex-wrap gap-4">
                <Form.Control asChild>
                  <input
                    className="box-border w-[80%] h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                    type="text"
                    required
                    value={singleImage}
                    onChange={(e) => handleImageUrlChange(e, index)}
                  />
                </Form.Control>
                {imageUrls.length !== 1 && (
                  <button
                    onClick={() => handleDeletingImageUrl(index)}
                    className="inline-flex gap-3 delete-btn"
                  >
                    Delete IMG url
                  </button>
                )}
              </div>
              <ImportImageUrl
                onAdd={(newUrl) => addGoogleDriveImageUrl(newUrl, index)}
              />
            </Form.Field>{" "}
          </div>
        ))}{" "}
        <button
          onClick={() => handleAddingImageUrl()}
          className="inline-flex gap-3"
        >
          <IoMdAdd /> Add more images
        </button>
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
