"use client";

import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { ProductItem, ProductStatus } from "@/models/ProductSchema";
import { CollectionItem } from "@/models/CollectionSchema";
import ImportImageUrl from "./import-image-url";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";

interface ProductFormProps {
  data?: ProductItem;
  onSave: (newData: ProductItem) => void;
}

export const availabilityStatus = {
  [ProductStatus.InStock]: "In stock",
  [ProductStatus.PreOrder]: "Pre-order",
  [ProductStatus.SoldOut]: "Sold out",
};

export default function EditProductForm({ data, onSave }: ProductFormProps) {
  const [title_uk, setTitleUk] = useState("");
  const [title_en, setTitleEn] = useState("");
  const [description_uk, setDescriptionUk] = useState("");
  const [description_en, setDescriptionEn] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState<ProductStatus | undefined>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [collection_id, setCollectionId] = useState<string | undefined>();
  const [collections, setCollections] = useState<CollectionItem[]>([]);

  useEffect(() => {
    axios.get("/api/collections").then((result) => {
      setCollections(result.data);
    });
  }, []);

  useEffect(() => {
    if (!data) return;

    setTitleEn(data.title_en);
    setTitleUk(data.title_uk);
    setDescriptionEn(data.description_en);
    setDescriptionUk(data.description_uk);
    setCollectionId(data.collection_id);
    setPrice(data.price);
    setImageUrls(data.imageUrls);
    setStatus(data.status);
  }, [data]);

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      _id: data?._id,
      title_en: title_en,
      title_uk: title_uk,
      description_en: description_en,
      description_uk: description_uk,
      price: price,
      collection_id: collection_id,
      imageUrls: imageUrls,
      status: status ?? ProductStatus.InStock,
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
    setImageUrls([...imageUrls, ""]);
  }

  function handleDeletingImageUrl(index: number) {
    const urls = [...imageUrls];
    urls.splice(index, 1);
    setImageUrls(urls);
  }

  return (
    <div>
      <Form.Root className="w-[70%]" onSubmit={save}>
        <Form.Field className="grid mb-[10px]" name="title_uk">
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
              value={title_uk}
              onChange={(e) => setTitleUk(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="title_en">
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
              value={title_en}
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
        <Form.Field className="grid mb-[10px]" name="description_uk">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Description UK
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              value={description_uk}
              onChange={(e) => setDescriptionUk(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="description_en">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Description EN
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              value={description_en}
              onChange={(e) => setDescriptionEn(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="collection">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Collection
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              The field can not be blank.
            </Form.Message>
          </div>
          <select
            value={collection_id}
            onChange={(ev) => setCollectionId(ev.target.value)}
          >
            <option value="">Without collection</option>
            {collections.length > 0 &&
              collections.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title_en}
                </option>
              ))}
          </select>
        </Form.Field>
        {imageUrls.map((singleImage, index) => (
          <div key={index}>
            <Form.Field className="mb-[10px]" name={`productImage-${index}`}>
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px]">
                  Image URL<span className="icon-required">*</span>
                </Form.Label>
                <Form.Message
                  className="text-[13px] opacity-[0.8]"
                  match="valueMissing"
                >
                  The field can not be blank.
                </Form.Message>
              </div>
              <div className="flex flex-wrap gap-5">
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
                <div>
                  <ImportImageUrl
                    onAdd={(newUrl) => addGoogleDriveImageUrl(newUrl, index)}
                  />
                </div>
              </div>
            </Form.Field>
          </div>
        ))}
        <button
          onClick={() => handleAddingImageUrl()}
          className="inline-flex gap-3"
        >
          <IoMdAdd /> Add new image
        </button>
        <Form.Field className="grid mb-[10px]" name="status">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Availability status
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              The field can not be blank.
            </Form.Message>
          </div>
          <select
            value={status}
            onChange={(ev) => setStatus(Number(ev.target.value))}
          >
            <option value="">Without status</option>
            {Object.entries(availabilityStatus).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}{" "}
          </select>
        </Form.Field>
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
