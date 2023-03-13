import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../Client";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";

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
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Artwork from famous <br />
            and unknown artists!
          </h1>
          <h2 className="hero-subtitle">
            We offer unique paintings, posters, posters and prints.
          </h2>
          <button className="hero-button">
            <Link to="/artwork">Buy art</Link>
          </button>
          <button className="hero-button-two">
            <Link to="/artwork">Sell art</Link>
          </button>
        </div>
      </section>

      <div className="main-home-wrapper">
        <h2 className="newTitle">New Featured Art</h2>

        <Link to="/artwork" className="link-exhibition">
          To The Exhibition{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>

        <div className="artSectionParent">
          {product &&
            product.map((product: any, index: any) => (
              <div className="artSectionChild">
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
                </div>
                <div className="product-info">
                  <p className="product-name">{product.name} </p>
                  <div className="buy-art-div">
                    <p className="product-price"> {product.price}:-</p>
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
