const FashionCard = ( { slideImg4, slideImg5 } ) => {
    const handleClick  = () => {
        if (slideImg4 !== slideImg5.fashion) {
            changeFashionImage(slideImg5.fashion)
        }
    }
  return (
    <div className={`${slideImg4 === slideImg5.fashion ? 
        'border-primary' : 'border-transparent'
        }selection-container`} onClick={{ handleClick }}>
            <div className="selection-card">
                <img src={slideImg5.thumbnail} alt="" />
            </div>
    </div>
  )
}

export default FashionCard