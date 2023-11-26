import { Box, Typography } from '@mui/material'
import estrellas from '../../Images/estrellasReview.png'
import userImage from '../../Images/userReview.png'

export default function ReviewContent({ userName, description }) {
    return (
        <div>
            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                }
            }>
                <img
                    src={userImage}
                    alt="Imagen de usuario"
                />
                <Box>

                    <Box sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                            paddingY: '10px',
                        }
                    }>
                        <Typography variant="h4" sx={
                            {
                                paddingX: '25px',
                                fontFamily: 'Georgia',
                            }
                        }>{userName}</Typography>
                        <img
                            src={estrellas}
                            alt="Estrellas"
                        />
                    </Box>
                    <Box sx={
                        {
                            paddingX: '25px',
                            paddingY: '10px',
                        }
                    }>
                        <p>
                            {description}
                        </p>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
