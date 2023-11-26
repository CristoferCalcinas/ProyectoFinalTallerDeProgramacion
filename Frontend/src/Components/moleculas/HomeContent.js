import { Box, Typography } from '@mui/material'

export default function HomeContent({ imgNew, title, description }) {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    justifyContent: "start",
                    alignItems: "center",
                    paddingY: '20px',
                }
            }
        >
            <img
                src={imgNew}
                alt="Noticia"
                style={{
                    width: '20%',
                }}
            />
            <Box
                sx={
                    {
                        paddingX: '20px',
                        width: '80%',
                    }
                }
            >
                <Typography variant="h5"
                    sx={
                        {
                            fontFamily: 'Georgia',
                        }
                    }
                >
                    {title}
                </Typography>
                <p>
                    {description}
                </p>
            </Box>
        </Box>
    )
}
