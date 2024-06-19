import getData from "@/app/helpers/getData";
import ProductoCarrito from "./ProductoCarrito";


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export default async function ContainerCarrito() {
    const products: Product[] = await getData('https://fakestoreapi.com/products?limit=5');

    return (
        <div className="border-r border-t border-l rounded">
            {
                products.map(product => (
                    <ProductoCarrito 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        description={product.description} 
                        imgUrl={product.image} 
                    />
                ))
            }
        
        </div>
    );
}
