import { useState, useEffect } from 'react'
import Header from './components/Header'
import InventoryList from './components/InventoryList'
import AddItemForm from './components/AddItemForm'
import Summary from './components/Summary'
import { initialInventory } from './data/mockData'
import './App.css'

function App() {
  const [inventory, setInventory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Cargar datos iniciales
  useEffect(() => {
    setInventory(initialInventory)
  }, [])

  // Agregar nuevo item
  const addItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(),
      fechaIngreso: new Date().toISOString().split('T')[0]
    }
    setInventory([...inventory, item])
  }

  // Eliminar item
  const deleteItem = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este item?')) {
      setInventory(inventory.filter(item => item.id !== id))
    }
  }

  // Actualizar cantidad
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setInventory(inventory.map(item => 
        item.id === id ? { ...item, cantidad: newQuantity } : item
      ))
    }
  }

  // Filtrar items por búsqueda
  const filteredInventory = inventory.filter(item =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Summary inventory={inventory} />
      <div className="main-content">
        <AddItemForm addItem={addItem} />
        <InventoryList 
          inventory={filteredInventory}
          deleteItem={deleteItem}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  )
}

export default App