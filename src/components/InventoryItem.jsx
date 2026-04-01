import { useState } from 'react'
import './InventoryItem.css'

function InventoryItem({ item, deleteItem, updateQuantity }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newQuantity, setNewQuantity] = useState(item.cantidad)

  const handleUpdateQuantity = () => {
    updateQuantity(item.id, newQuantity)
    setIsEditing(false)
  }

  const getStockStatus = (cantidad) => {
    if (cantidad === 0) return 'out-of-stock'
    if (cantidad <= 5) return 'low-stock'
    return 'in-stock'
  }

  const getStockText = (cantidad) => {
    if (cantidad === 0) return 'Agotado'
    if (cantidad <= 5) return 'Stock Bajo'
    return 'En Stock'
  }

  return (
    <div className={`inventory-item ${getStockStatus(item.cantidad)}`}>
      <div className="item-info">
        <h3>{item.nombre}</h3>
        <p className="category">{item.categoria}</p>
        {item.precio > 0 && (
          <p className="price">${item.precio.toFixed(2)} / {item.unidad}</p>
        )}
      </div>

      <div className="item-quantity">
        {isEditing ? (
          <div className="quantity-edit">
            <input
              type="number"
              value={newQuantity}
              onChange={(e) => setNewQuantity(parseInt(e.target.value) || 0)}
              min="0"
              autoFocus
            />
            <button onClick={handleUpdateQuantity} className="save-btn">✓</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">✗</button>
          </div>
        ) : (
          <>
            <div className="quantity-display">
              <span className="quantity-number">{item.cantidad}</span>
              <span className="quantity-unit">{item.unidad}</span>
              <span className={`stock-badge ${getStockStatus(item.cantidad)}`}>
                {getStockText(item.cantidad)}
              </span>
            </div>
            <div className="item-actions">
              <button 
                onClick={() => setIsEditing(true)} 
                className="edit-btn"
                title="Editar cantidad"
              >
                ✏️
              </button>
              <button 
                onClick={() => deleteItem(item.id)} 
                className="delete-btn"
                title="Eliminar producto"
              >
                🗑️
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default InventoryItem