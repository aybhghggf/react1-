import { useState, useEffect } from "react"





export default function App() {
  const [Produits, setProduit] = useState([]);
  const [filterValue,setFilterValue]= useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduit(data))
      .catch(() => {
        console.log("Erreur")
      })
  }, [])
  function submitForm(e) {
    if(filterValue == ""){
      setProduit(Produits)
    }else{
    e.preventDefault();
    const ProduitFiltrer = Produits.filter((produit) =>
      produit.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setProduit(ProduitFiltrer);
  }
  }



return (
    <div className="container mt-4">
      <form onSubmit={submitForm} >
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={filterValue}
        onChange={(e)=>{setFilterValue(e.target.value)}}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
