import { useState, useEffect } from "react";

export default function App() {
  const [produit, setProduit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fake-store-api.mock.beeceptor.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProduit(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Erreur");
        console.error(error);
        setLoading(false);
      });
  }, []);

  function LoadItems() {
    return produit.map((prod) => (
      <div className="row" key={prod.id}>
        <div className="card">
          <div className="card-header">
            <img src={prod.image} alt={prod.title} />
          </div>
          <div className="card-body">
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Voir</button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      {loading ? (
        <p className="text-center h-14 w-14">Chargement...</p>
      ) : (
        <LoadItems />
      )}
    </>
  );
}
