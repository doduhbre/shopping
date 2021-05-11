import React, { useContext } from "react";
import { 재고context } from "../state/remain";

export default function Good({ title, content, price, img }) {
  let 재고 = useContext(재고context);

  return (
    <>
      <div className="col-md-4">
        <img src={img} width="100%" alt={"판매상품"} />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        {재고}
      </div>
    </>
  );
}
