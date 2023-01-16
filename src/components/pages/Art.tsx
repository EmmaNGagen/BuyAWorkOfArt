import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../models/IProduct";

export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  //<IProduct>({
  //details: "",
  //image: "",
  //name: "",
  //price: 0,
  //slug: { current: "", _type: "" },
  //title: "",
  //});

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
    details,
    image,
    name,
    price,
    slug,
    title,

  }`
      )
      .then((response: any) => setSingleProduct(response))
      .catch(console.error);
    setIsLoading(false);
  }, [slug]);

  console.log(singleProduct.details);
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
