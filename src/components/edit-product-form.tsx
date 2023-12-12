"use client";

import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { ProductItem } from "@/models/ProductSchema";
import ImportImageUrl from "./import-image-url";

interface ProductFormProps {
  data?: ProductItem;
  onSave: (newData: ProductItem) => void;
}

export default function EditProductForm({ data, onSave }: ProductFormProps) {
  const [titleUk, setTitleUk] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrls, setImageUrls] = useState([""]);

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

  // function addGoogleDriveImageUrl(newUrls: string) {
  //   setImageUrls(newUrls);
  // }

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
        <Form.Field className="grid mb-[10px]" name="collectionName">
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
        {/* <Form.Field className="mb-[10px]" name="collectionImage">
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
                value={imageUrls}
                onChange={(e) => setImageUrls(e.target.value)}
              />
            </Form.Control>
            <ImportImageUrl onAdd={addGoogleDriveImageUrl} />
          </div>
        </Form.Field> */}
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
