import { useEffect, useState } from "react";

export default function App() {
  const [Produits, SetProduits] = useState([]);
  const [Loading,SetLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => SetProduits(data), SetLoading(false))
      .catch(() => {
        console.log("Erreur");
      });
  }, []); 

function ReturnProducts(){
  return (
  <div className="container py-5">
    <div className="row g-4">
      {Produits.map((produit) => (
        <div key={produit.id} className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={produit.image}
              alt={produit.title}
              className="card-img-top p-4"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center fw-semibold">{produit.title}</h5>
              <p
                className="card-text text-muted text-center small mb-3"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  minHeight: "60px"
                }}
              >
                {produit.description}
              </p>
              <p className="text-primary fw-bold text-center fs-5 mt-auto">
                {produit.price} $
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


}

return(
    <div>
        {Loading ? <p>Chargement...</p> : < ReturnProducts/>}
    </div>
)

}