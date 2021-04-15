import React from "react";
import { Table } from "react-bootstrap";

import { useSelector } from "react-redux";
const ListCart = () => {
  const product = useSelector((state) => state.cartReducer.cart);

  return (
    <div>
      <h4>รายการสินค้าที่สั่ง</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>รายการสินค้า</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>ราคารวม</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p,index) => {
            return (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.qty}</td>
                <td>{p.pice}</td>
                <td>{p.piceAll}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListCart;
