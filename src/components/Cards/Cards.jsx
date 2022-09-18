
import { CardsData } from '../../Data/Data'
import Card from '../Card/Card'
import './Cards.css'


const Cards = () => {
    
  return (
    <div className='Cards'>
        {CardsData.map((card, id)=>
        <div className="parentContainer">
            <Card 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            icon={card.icon}
            series={card.series}
            />
        </div>
        )}
    </div>
  )
}

export default Cards