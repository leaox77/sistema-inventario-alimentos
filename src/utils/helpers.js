// Función para formatear fechas
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES')
}

// Función para calcular valor total del inventario
export const calculateTotalValue = (inventory) => {
  return inventory.reduce((total, item) => {
    return total + (item.precio * item.cantidad)
  }, 0).toFixed(2)
}

// Función para obtener productos por categoría
export const groupByCategory = (inventory) => {
  return inventory.reduce((groups, item) => {
    const category = item.categoria
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {})
}