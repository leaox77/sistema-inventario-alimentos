import InventoryItem from './InventoryItem'
import './InventoryList.css'

function InventoryList({ inventory, deleteItem, updateQuantity }) {
  if (inventory.length === 0) {
    return (
      <div className="inventory-list">
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No hay productos en el inventario</h3>
          <p>Agrega tu primer producto usando el formulario</p>
        </div>
      </div>
    )
  }

  return (
    <div className="inventory-list">
      <h2>Inventario Actual</h2>
      <div className="inventory-items">
        {inventory.map(item => (
          <InventoryItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
    </div>
  )
}

export default InventoryList