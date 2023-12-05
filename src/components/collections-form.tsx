"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import axios from "axios";

export default function CollectionsForm() {
  const [titleUk, setTitleUk] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [collectionName, setCollectionName] = useState("");

  async function saveCollection(e: React.FormEvent) {
    e.preventDefault();
    const data = { titleUk, titleEn, collectionName };

    try {
      await axios.post("/api/collections", data);
      setTitleUk("");
      setTitleEn("");
      setCollectionName("");
      // @TODO: navigate to collections list
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div>
      <Form.Root className="w-[50%]" onSubmit={saveCollection}>
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
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Save collection
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
