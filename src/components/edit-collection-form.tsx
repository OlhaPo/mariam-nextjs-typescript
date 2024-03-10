"use client";

import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { CollectionItem } from "@/models/CollectionSchema";
import ImportImageUrl from "./import-image-url";

interface CollectionsFormProps {
  data?: CollectionItem;
  onSave: (newData: CollectionItem) => void;
}

export default function EditCollectionForm({
  data,
  onSave,
}: CollectionsFormProps) {
  const [title_uk, setTitleUk] = useState("");
  const [title_en, setTitleEn] = useState("");
  const [collection_name, setCollectionName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!data) return;
    setCollectionName(data.collection_name);
    setTitleEn(data.title_en);
    setTitleUk(data.title_uk);
    setImageUrl(data.imageUrl);
  }, [data]);

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      _id: data?._id,
      collection_name: collection_name,
      title_en: title_en,
      title_uk: title_uk,
      imageUrl: imageUrl,
    });
  }

  function addGoogleDriveImageUrl(newUrl: string) {
    setImageUrl(newUrl);
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
        <Form.Field className="grid mb-[10px]" name="collectionName">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Collection name
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
              value={collection_name}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-[10px]" name="collectionImage">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Cover image<span className="icon-required">*</span>
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
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Control>
            <ImportImageUrl onAdd={addGoogleDriveImageUrl} />
          </div>
        </Form.Field>
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
