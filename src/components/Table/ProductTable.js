// import styles from './ProductTable.module.css';

const ProductTable = ({ data }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.description}</td>
                        <td>
                            <img src={product.image} alt={product.productName} className="product-image" />
                        </td>
                        <td>${parseFloat(product.price).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
