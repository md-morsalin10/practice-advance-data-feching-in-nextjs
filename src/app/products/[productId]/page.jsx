
export const generateStaticParams =async ()=>{
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    return products.slice(0,2).map(product=> ({productId: product.id}));
}

const ProductDetails = async ({params}) => {
    const {productId} = await params;
    const res = await fetch(`http://localhost:5000/products/${productId}`)
    const {name, price} = await res.json();

    // console.log(data);
    
    return (
        <div>
            <p>Product:{productId}</p>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default ProductDetails;