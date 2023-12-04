"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

export default function ProductForm() {
  return (
    <div>
      <Form.Root className="w-[50%]">
        <Form.Field className="grid mb-[10px]" name="title_uk">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Назва
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Поле не може бути порожнє.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
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
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="price_uk">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Ціна UAH
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Поле не може бути порожнє.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="number"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="price_en">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Price USD
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
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="description_uk">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Опис
            </Form.Label>
          </div>
          <Form.Control asChild>
            <textarea className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] resize-none" />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="description_en">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Description
            </Form.Label>
          </div>
          <Form.Control asChild>
            <textarea className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] resize-none" />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="category_uk">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Категорія
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Поле не може бути порожнє.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="category_en">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Category
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
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="text">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Availability in store
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Value is mising.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="text">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Pre-order
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Value is mising.
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Save product
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
