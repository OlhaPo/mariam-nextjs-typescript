"use client";

import { PopulatedOrder } from "@/models/OrderSchema";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { adminPanel } from "@/lib/constants";

export default function OrderDetails({ params }: { params: { id: string } }) {
    const [orderInfo, setOrderInfo] = useState<PopulatedOrder | null>(null);

    useEffect(() => {
        if (!params.id) {
            return;
        }
        axios.get("/api/orders?id=" + params.id).then((response) => {
            setOrderInfo(response.data as PopulatedOrder)
        })
    }, [params.id]);

    const formattedDate = orderInfo?.createdAt ? new Date(orderInfo.createdAt).toLocaleString() : 'Date not available';

    return (
        <div className="flex flex-col gap-3">
            <h1 className="page-headers mb-10">Order Details</h1>
            <p><span className="font-semibold">Order Date:</span> {formattedDate}</p>
            <p><span className="font-semibold">Order ID:</span> {orderInfo?._id}</p>
            <p><span className="font-semibold">{orderInfo?.first_name}{" "}{orderInfo?.last_name}</span></p>
            <ul>
                {orderInfo?.items.map((item, index) =>
                    <li key={index} className="mt-4 mb-4">
                        <Image src={item.product.imageUrls[0]}
                            alt="Picture of handcrafted item"
                            width={90}
                            height={90}
                            unoptimized={true} />
                        <p>{item.count} x {item.product.title_uk}
                        </p>
                        <p><span className="font-semibold mb-3">
                            {adminPanel.priceUAH}:</span> {item.product.price}
                        </p>
                    </li>)}
            </ul>
            <p><span className="font-semibold">{adminPanel.phoneNumber}:</span> {orderInfo?.phone_number}</p>
            <p><span className="font-semibold">{adminPanel.messanger}:</span> {orderInfo?.messenger}</p>
            <p><span className="font-semibold">{adminPanel.commentToOrder}:</span> {orderInfo?.comment}</p>
        </div>
    )
}