import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../Client";
import colorDrop from "../../images/colorDrop.png";

export const Home = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [showFour, setShowFour] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        await client
          .fetch(
            `*[_type == "product"]{
          slug,
          image,
          name
        }`
          )
          .then((data: any) => setProduct(data));
      } catch (err) {
        setLoading(true);
      }
    };
    fetchdata();
  }, []);

  console.log(product);

  useEffect(() => {});

  return (
    <>
      <section className="hero-section">
        <div className="hero-text-image-div">
          <img className="color-drop" src={colorDrop} alt="colorDrop" />
          <div className="btnDiv">
            <div className="btn-Exhibition">
              <Link to="/artwork">To The Exhibition</Link>
            </div>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      <div className="main-home-wrapper">
        <h2 className="newTitle">New Featured Art</h2>
        <div className="artSection">
          {product &&
            product.map((product: any, index: any) => (
              <img
                src={urlFor(product.image[0].asset).url()}
                alt={product.image}
                className="artWorkImage"
              />
            ))}
        </div>
      </div>
    </>
  );
};
