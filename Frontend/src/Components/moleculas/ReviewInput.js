import { Box, Button, Input } from '@mui/material'


export default function ReviewInput() {
    return (
        <Box
            sx={
                {
                    paddingX: '20px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }
            }
        >

            <Input placeholder=""
                sx={
                    {
                        background: 'white',
                        color: 'black',
                        borderRadius: '10px',
                        width: '85%',
                        paddingX: '10px',
                    }
                }
            />

            <Button sx={
                {
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '10px',
                    fontFamily: 'Georgia',
                }
            }>
                Comment
            </Button>

        </Box>
    )
}
