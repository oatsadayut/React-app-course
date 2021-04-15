// export CART เวลาเรียกที่ไฟล์ Reducer จะเป็นแบบนี้ import { CART } form '../action/cartAction'
export const CART = "CART";

//รับ product ที่ส่งเข้ามา updaeProfilr(<product>)
export const cartProduct = (product = {}, cart = []) => {
  let items = false;

  if (cart.length > 0) {
    for (const c of cart) {
      if (c.id === product.id) {
        c.qty++;
        c.piceAll = c.pice * c.qty
        items = true;
      }
    }
  }

  if (!items) {
    cart.push(product);
  }

  const total = cart.reduce((totalQty, product) => totalQty + product.qty, 0);
  const piceTotal = cart.reduce((totalPice, product) => totalPice + product.piceAll, 0);


  return {
    type: CART, //type ที่จะนำไปเรียกใน Reducer เพื่อกระจายให้ Component ที่ต้องการ
    payload: {
      cart: cart, //Add product ที่ส่งเข้ามาให้กับ ตัวแปร product ที่สร้างข้อมูลใหม่
      total: total,
      piceTotal: piceTotal,
    },
  };
};
