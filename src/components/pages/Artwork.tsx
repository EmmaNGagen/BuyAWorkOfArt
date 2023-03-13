import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";

export const Artwork = () => {
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
    slug,
    image,
    name,
    price
  }`
      )
      .then((data: any) => setProduct(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="artWorkMain">
        <div className="banner-artwork">
          <h2 className="banner-title">Posters, Art and Prints</h2>
        </div>

        <div className="artContainer">
          {product &&
            product.map((product: any, index: any) => (
              <div className="imgDiv">
                {" "}
                <Link
                  className="image-link"
                  to={"/art/" + product.slug.current}
                  key={product.slug.current}
                >
                  <img
                    src={urlFor(product.image[0].asset).url()}
                    alt={product.image}
                    className="artWorkImage"
                  />
                </Link>
                <div className="product-info">
                  <p className="product-name">{product.name} </p>
                  <div className="buy-art-div">
                    <p className="product-price"> {product.price} kr</p>
                    <Link className="cart-icon" to={"/shoppingCart"}>
                      <FiShoppingCart
                        color="#6b6a68"
                        className="shopping-cart"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
