import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../models/IProduct";
import products from "../../../sanity_ecommerce/schemas/products";
import { type } from "os";
import { NumericLiteral } from "typescript";

type productProps = {
  _id: number;
  image: string;
  name: string;
  price: number;
  details: string;
};
// ska vara inne i Art=() <= { _id, image, name, price, details }: productProps
export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<any>(null);
  const [product, setProduct] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        ` *[slug.current == "${slug}"]{
    image,
    name,
    slug,
    price,
    details,


  }`
      )
      .then((response: any) => setSingleProduct(response[0]))
      .catch(console.error);
    setIsLoading(false);
  }, [slug]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
    slug,
    image,
    name
  }`
      )
      .then((data: any) => setProduct(data))
      .catch(console.error);
  }, []);

  if (!singleProduct) return <div>Loading...</div>;

  console.log(singleProduct);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mainSingleArt">
          {singleProduct.image && singleProduct.image && (
            <div className="contentDiv">
              <div className="space-div"></div>
              <img
                className="artImage"
                src={urlFor(singleProduct.image[0].asset).url()}
                alt={singleProduct.name}
              />

              <div className="products-info">
                <h2 className="singleProduct-name">{singleProduct.name}</h2>
                <div className="buy-art-div">
                  <p className="product-price"> {singleProduct.price} kr</p>
                  <div className="button-div">
                    <Link className="cart-icon" to={"/shoppingCart"}>
                      <button type="button" className="buy-button">
                        köp nu
                      </button>
                    </Link>
                    <Link className="cart-icon" to={"/shoppingCart"}>
                      <button type="button" className="add-to-cart-button">
                        Lägg i varukorgen{" "}
                      </button>
                    </Link>
                  </div>{" "}
                </div>
                <p className="singleProduct-shipping">
                  Delivered within 2-4 working days Free shipping on orders over
                  SEK 599
                </p>
                <p className="singleProduct-details">
                  {singleProduct.details}{" "}
                </p>
              </div>
            </div>
          )}
          <div className="maylike-products-wrapper">
            <h2 className="maylike-title">You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {product &&
                  product.map((product: any, index: any) => (
                    <Link
                      to={"/art/" + product.slug.current}
                      key={product.slug.current}
                    >
                      <div className="imgDiv">
                        <img
                          src={urlFor(product.image[0].asset).url()}
                          alt={product.image}
                          className="artWorkImage"
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
