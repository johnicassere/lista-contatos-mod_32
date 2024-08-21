import { useNavigate } from 'react-router-dom'
import * as S from './style'


type Props = {
    title: string
    rota: string
}



const Button = ({title, rota}: Props) => {
       const navigate = useNavigate()

    return (
            <S.Button onClick={() => navigate(rota)}>{title}</S.Button>
    )
}

export default Button