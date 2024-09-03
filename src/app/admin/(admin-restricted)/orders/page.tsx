"use client";

import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { PopulatedOrder } from "@/models/OrderSchema";
import Link from "next/link";
import { adminPanel } from "@/lib/constants";

export default function OrdersPage() {
  const [orders, setOrders] = useState<PopulatedOrder[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/orders");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setOrders(result);

      } catch (error) {
        console.error(error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">{adminPanel.orders}</h1>
      </div>
      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>{adminPanel.orderDate}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{adminPanel.fullName}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {orders.length > 0 &&
            orders.map((order) => (
              <Table.Row key={order._id}>
                <Table.Cell>
                  {new Date(order.createdAt).toLocaleString("uk-ua")}
                </Table.Cell>
                <Table.Cell>{order.first_name}{" "}{order.last_name}</Table.Cell>
                <Table.Cell>
                  <Link className="btn-primary" href={`/admin/orders/${order._id}`}>
                    {adminPanel.orderDetails}
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
