import CardStyle from "./Card.Style"

const Card:React.FC =({children})=>{
    return(
        <CardStyle>
            {children}
        </CardStyle>
    )
}

export default Card