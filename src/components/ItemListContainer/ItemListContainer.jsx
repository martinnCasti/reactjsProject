import "./itemListCotainer.css"

function ItemListContainer(prop) {

  return (
    <div className="mainContainer">
        <h1>{prop.greeting}</h1>

    </div>
  )
}

export default ItemListContainer