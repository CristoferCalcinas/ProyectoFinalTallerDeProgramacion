import { Box, Typography } from '@mui/material'
import NewsContent from '../moleculas/NewsContent'

const news = [
    {
        header: "Mahindra encuentra al proveedor de los motores de sus futuros coches eléctricos, hasta 230 CV y carga bidireccional para India y todo el mundo",
        body: "Mahindra también está comprometida con los coches eléctricos. La marca india quiere dar el salto y no perder la estela de la competencia, un plan en el que viene trabajando desde hace más de dos años. Ahora, ya se conoce quién será el proveedor de los motores para estos futuros modelos que estarán en el mercado antes de 2027. Mahindra lleva más de dos años tocando el tema de los coches eléctricos. La firma india quiere dar el salto, pero no es nada fácil si tenemos en cuenta que sus modelos son muy baratos, y que este es el verdadero rompecabezas de las grandes marcas: entrar en los segmentos más competitivos pero con modelos asequibles en precios. Un juego en el que Mahindra también quiere hacerse con su porción del inmenso pastel, para lo que firmó un acuerdo de colaboración con Volkswagen para aprovecharse de la plataforma MEB."
    },
]
export default function NewsObject() {
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
                <NewsContent />
            </Box>
        </Box>
    )
}
