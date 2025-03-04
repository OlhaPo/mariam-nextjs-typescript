"use client";

import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { adminPanel } from "@/lib/constants";
import { GalleryImage } from "@/models/GalleryImagesSchema";

interface GalleryImageFormProps {
  data?: GalleryImage;
  onSave: (newData: GalleryImage) => void;
}

export default function EditGalleryImageForm({
  data,
  onSave,
}: GalleryImageFormProps) {
  const [title, setTitle] = useState("");  
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!data) return;    
    setTitle(data.title);
    setImageUrl(data.imageUrl);
  }, [data]);

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      _id: data?._id,      
      title: title,      
      imageUrl: imageUrl,
    });
  }  

  return (
    <div>
      <Form.Root className="w-[70%]" onSubmit={save}>
        <Form.Field className="grid mb-[10px]" name="title">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              {adminPanel.titleUk}
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              {adminPanel.requiredField}
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Control>
        </Form.Field>        
        <Form.Field className="mb-[10px]" name="galleryImage">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              {adminPanel.coverImage}<span className="icon-required">*</span>
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              {adminPanel.requiredField}
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
          </div>
        </Form.Field>
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          {adminPanel.save}
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
