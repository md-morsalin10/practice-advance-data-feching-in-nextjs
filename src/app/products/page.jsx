import ProductCard from "@/components/ProductCard";

const getProducts =async()=>{
    const res = await fetch('http://localhost:5000/products',{next:{revalidate: 10}});
    return res.json();
}

const ProductsPage =async () => {
    const products =await getProducts()
    // console.log(products);
    
    return (
        <div className="container mx-auto">
            <p>products: {products.length}</p>
            <div className="grid grid-cols-3 gap-5">
                {products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default ProductsPage;