import '../assets/styles/components/dress-card.css';

export default function DressCard({image, name , category , color , taglia , id}) {
    return(
        <div className='dress-card'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className='info'>
                <span>{category}</span>
                <span>{taglia}</span>
            </div>
            <div style={{backgroundColor: color}} className='color-block'/>
        </div>
    );
}