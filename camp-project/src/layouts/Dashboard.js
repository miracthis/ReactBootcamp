import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";

//**rfc Yazarsan otomatik oluşturur */
export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Categories/>
        <ProductList/>
    </div>
  );
}
