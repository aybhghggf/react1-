import { useState, useEffect } from "react";
import Alersuccess from "./alert/Alersuccess";
import AlertError from "./AlertError";
import Modal from "./alert/Modal/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  const [Produits, setProduit] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [favories, setFavories] = useState([]);
  const [alert, setAlert] = useState(null); // 'success' or 'error'

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduit(data))
      .catch(() => {
        console.log("Erreur");
      });
  }, []);

  function submitForm(e) {
    e.preventDefault();
    if (filterValue.trim() === "") return;

    const ProduitFiltrer = Produits.filter((produit) =>
      produit.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setProduit(ProduitFiltrer);
  }

  function addToFavorie(product) {
    const alreadyExists = favories.find((favorie) => favorie.id === product.id);

    if (!alreadyExists) {
      setFavories([...favories, product]);
      setAlert("success");
    } else {
      setAlert("error");
    }

    setTimeout(() => setAlert(null), 2000);
  }

  return (
    <>
      {/* Alert components */}
      {alert === "success" && <Alersuccess />}
      {alert === "error" && <AlertError />}

      <div className="container mt-4">
        <form onSubmit={submitForm}>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search products..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Filter</button>
        </form>

        <div className="row">
          {Produits.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-header text-center bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">${product.price}</p>
                  <button
                    className="btn btn-outline-danger btn-sm mt-2"
                    onClick={() => addToFavorie(product)}
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#favorieModal"
      >
        <i className="bi bi-heart-fill me-2"></i>
        Votre Favorie
      </button>
          
         <Modal favories={favories}/> 
    </>
  );
}
