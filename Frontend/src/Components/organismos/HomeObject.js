import { Box, Typography } from '@mui/material'
import HomeContent from '../moleculas/HomeContent'
import imgNewF from '../../Images/HomeImage1.png'
import imgNewS from '../../Images/HomeImage2.png'


const news = [
    {
        titleNew: "POR FRAN ROMERO",
        descriptionNew: "Mahindra encuentra al proveedor de los motores de sus futuros coches eléctricos, hasta 230 CV y carga bidireccional para India y todo el mundo. Mahindra también está comprometida con los coches eléctricos. La marca india quiere dar el salto y no perder la estela de la competencia, un plan en el que...",
    },
    {
        titleNew: "POR FRAN ROMERO4 MIN. LECTURA",
        descriptionNew: "Dos Citroën AMI o estas llantas forjadas, la exclusividad de competición de BMW para los M2, M3 y M4 BMW quiere imprimir más caché a sus modelos más deportivos. Los bávaros saben que los clientes de los modelos firmados por la división de altas prestaciones buscan opciones...",
    },
]
export default function HomeObject() {
    return (
        <Box>
            <Box
                sx={
                    {
                        background: '#444',
                        color: 'white',
                        fontFamily: 'Georgia',
                        paddingY: '20px',
                        paddingX: '20px',
                    }
                }
            >
                <Typography variant="h5" sx={
                    {
                        paddingX: '15px',
                        fontFamily: 'Georgia',
                    }
                }
                >
                    News
                </Typography>
                <HomeContent
                    imgNew={imgNewF}
                    title={news[0].titleNew}
                    description={news[0].descriptionNew}
                />
                <HomeContent
                    imgNew={imgNewS}
                    title={news[1].titleNew}
                    description={news[1].descriptionNew}
                />
            </Box>
        </Box>
    )
}
