"use client";

import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { PopulatedOrder } from "@/models/OrderSchema";

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
        <h1 className="page-headers">Orders</h1>
      </div>
      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Order Details</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>First Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Messanger</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Comment</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {orders.length > 0 &&
            orders.map((order) => (
              <Table.Row key={order._id}>
                <Table.Cell>
                  {new Date(order.createdAt).toDateString()}
                </Table.Cell>
                <Table.Cell>
                  {order.items.map((item, index) => (
                    <div key={index}>
                      {item.count} x {item.product_id.title_en}
                    </div>
                  ))}
                </Table.Cell>
                <Table.Cell>{order.first_name}</Table.Cell>
                <Table.Cell>{order.last_name}</Table.Cell>
                <Table.Cell>{order.phone_number}</Table.Cell>
                <Table.Cell>{order.messenger}</Table.Cell>{" "}
                <Table.Cell>{order.comment}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
