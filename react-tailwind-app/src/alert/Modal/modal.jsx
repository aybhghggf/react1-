export default function Modal({favories}) {
  console.log(favories); // for debugging

  return (
    <div
      className="modal fade"
      id="favorieModal"
      tabIndex="-1"
      aria-labelledby="favorieModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="favorieModalLabel">
              Vos Produits Favoris
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Nom Du produit</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {(favories ?? []).map((fav) => (
                  <tr key={fav.id}>
                    <td>{fav.title}</td>
                    <td>${fav.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
