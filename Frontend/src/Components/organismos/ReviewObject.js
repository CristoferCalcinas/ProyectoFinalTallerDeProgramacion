import { Box, Typography } from '@mui/material'
import ReviewContent from '../moleculas/ReviewContent'
import ReviewInput from '../moleculas/ReviewInput'

const description = [
    { userName: "MancoGamer69", userDescription: "Un coche excelente, con una habitabilidad muy buena para su tamaño. El maletero es justo, pero si pones la opción de asientos traseros desplazables se soluciona el problema." },
    { userName: "NoobMaster69", userDescription: "El coche es casi excelente. Hay aspectos que no se pueden dejar al albedrío de elegir uno u otro pack. Mercedes debe llegar a la excelencia desde la serie." }
]
export default function ReviewObject() {
    return (
        <Box>
            <Box sx={
                {
                    background: '#444',
                    color: 'white',
                    fontFamily: 'Georgia',
                    paddingY: '20px',
                    paddingX: '20px',
                    minHeight: '100vh',
                }
            }>
                <Typography variant="h5" sx={
                    {
                        paddingX: '15px',
                        fontFamily: 'Georgia',
                    }
                }>Reviews</Typography>
                <ReviewContent
                    userName={description[0].userName}
                    description={description[0].userDescription}
                />
                <ReviewContent
                    userName={description[1].userName}
                    description={description[1].userDescription}
                />
                <ReviewInput />
            </Box>
        </Box>
    )
}
