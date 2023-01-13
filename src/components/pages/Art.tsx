import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../models/IProduct";

export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<IProduct>({
    name: "",
    title: "",
    image: "",
    slug: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
    slug,
    image,
    name,
    price,
    details,

  }`
      )
      .then((response: any) => setSingleProduct(response))
      .catch(console.error);
    setIsLoading(false);
  }, [slug]);

  console.log(singleProduct);
  console.log(singleProduct.image);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mainSingleArt">
          {singleProduct.image && singleProduct.image && (
            <div>
              <h2>{singleProduct.name}</h2>
              <div className="imageDiv">
                <img
                  src={urlFor(singleProduct.image).url()}
                  alt={singleProduct.name}
                />
                <p> </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
