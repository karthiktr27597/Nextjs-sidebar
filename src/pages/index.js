import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { getAllProductsApi } from "@/components/Api/Services";
import ProductTable from "@/components/Table/ProductTable";

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    try {
      const response = await getAllProductsApi()
      console.log(response.data.data)
      setProducts(response.data.data)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="products">
      <BaseLayout>
        <div>
          <h1>Products list</h1>
          <ProductTable data={products} />
        </div>
      </BaseLayout>
    </div>

  )
};

export default Products;
