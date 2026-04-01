import './Summary.css'

function Summary({ inventory }) {
  const totalItems = inventory.length
  const totalQuantity = inventory.reduce((sum, item) => sum + item.cantidad, 0)
  const lowStockItems = inventory.filter(item => item.cantidad <= 5 && item.cantidad > 0)
  const outOfStock = inventory.filter(item => item.cantidad === 0)

  return (
    <div className="summary">
      <div className="summary-card">
        <div className="summary-icon">📦</div>
        <div className="summary-info">
          <h3>Total Productos</h3>
          <p>{totalItems}</p>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">🔢</div>
        <div className="summary-info">
          <h3>Unidades Totales</h3>
          <p>{totalQuantity}</p>
        </div>
      </div>
      <div className="summary-card warning">
        <div className="summary-icon">⚠️</div>
        <div className="summary-info">
          <h3>Stock Bajo</h3>
          <p>{lowStockItems.length}</p>
        </div>
      </div>
      <div className="summary-card danger">
        <div className="summary-icon">❌</div>
        <div className="summary-info">
          <h3>Agotados</h3>
          <p>{outOfStock.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary