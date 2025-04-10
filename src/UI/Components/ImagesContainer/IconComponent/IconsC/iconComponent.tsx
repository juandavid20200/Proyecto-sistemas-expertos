import '../../../../../Assets/Styles/Components/ImageContainer/IconComponent/iconComponent.css'

type Props = {
    src: string
}

const IconContainerComponent = ({src}:Props) => {
    return(
        <>
                <img className="Img" src={src}/> 
        </>
    )
}

export default IconContainerComponent