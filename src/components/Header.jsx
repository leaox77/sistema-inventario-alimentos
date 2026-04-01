import './Header.css'

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          🍎 Sistema de Inventario de Alimentos
        </h1>
        <p>Gestiona tus alimentos de manera eficiente</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Buscar por nombre o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  )
}

export default Header