import * as React from 'react';
import img from '../../Images/perfil.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardItemProfile({
    typographyParam = 'Any text',
    roleParam = 'Any text'
}) {
    return (
        <Card sx={{ background: 'black', color: 'white' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={300}

                    image={img}
                    alt="Icono de perfil"
                />
                <CardContent sx={{textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {typographyParam}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {roleParam}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
