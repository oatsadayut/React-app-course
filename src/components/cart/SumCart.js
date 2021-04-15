import React from "react";
import { Card } from "react-bootstrap";

import { useSelector } from "react-redux";

const SumCart = () => {
  const piceTotal = useSelector((state) => state.cartReducer.piceTotal);
  const cartTotal = useSelector((state) => state.cartReducer.total);


  return (
    <div>
      <h4>ชำระ</h4>
      <Card>
        <Card.Body>
          <h5>สินค้าทั้งหมด {cartTotal} รายการ</h5>
          <h5>ราคารวม {piceTotal} บาท</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SumCart;
