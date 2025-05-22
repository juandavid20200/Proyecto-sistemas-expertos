import { useNavigate } from 'react-router-dom';
import '../../../../Assets/Styles/Components/Buttons/CommonButton/commonButton.css';
import { CommonText } from '../../Texts';

type Props = {
    title: string;
    url?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const CommonButton = ({ title, url, onClick, disabled = false }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (disabled) return; // No hacer nada si está deshabilitado

        if (url) {
            navigate(url);
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            type="button"
            aria-label={title}
            className={`buttons ${disabled ? 'disabled' : ''}`} // puedes poner estilo para disabled
            onClick={handleClick}
            disabled={disabled} // aquí es clave para que el botón sea realmente disabled
        >
            <CommonText text={title} styles={true} />
        </button>
    );
}

export default CommonButton;
