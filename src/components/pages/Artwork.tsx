import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Artwork = () => {
  const [product, setProduct] = useState<any[]>([]);

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
  //console.log(product);

  return (
    <>
      <div className="artWorkMain">
        <h2>Lots of art here</h2>

        <div className="artContainer">
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
                  <h3>{""}</h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
