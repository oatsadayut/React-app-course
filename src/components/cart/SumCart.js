import React from "react";
import { Card } from "react-bootstrap";

import { useSelector,useDispatch } from "react-redux";

const SumCart = () => {
  const piceTotal = useSelector((state) => state.cartReducer.piceTotal);
  const cartTotal = useSelector((state) => state.cartReducer.total);

  const action = useDispatch();

  return (
    <div>
      <h4>ชำระ</h4>
      <Card>
        <Card.Body>
          <h5>สินค้าทั้งหมด {cartTotal} รายการ</h5>
          <h5>ราคารวม {piceTotal} บาท</h5>
        </Card.Body>
      </Card>
      <button className="btn btn-danger btn-lg btn-block mt-2">ลบข้อมูลทั้งหมด</button>
    </div>
  );
};

export default SumCart;
