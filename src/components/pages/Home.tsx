import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../Client";
import colorDrop from "../../images/colorDrop.png";
import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";

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
          name,
          price
        }`
          )
          .then((data: any) => setProduct(data));
      } catch (err) {
        setLoading(true);
      }
    };
    fetchdata();
  }, []);

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
              <div>
                <Link
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
                  <p className="product-price"> {product.price}:-</p>
                  <Link className="cart-icon" to={"/shoppingCart"}>
                    <AiOutlineShopping className="shopping-bag"  />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
