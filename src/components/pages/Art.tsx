import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../models/IProduct";

export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<any>(null);
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
              <img
                className="artImage"
                src={urlFor(singleProduct.image[0].asset).url()}
                alt={singleProduct.name}
              />

              <div className="products-info">
                <h2>{singleProduct.name}</h2>
                <p>{singleProduct.details} </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
