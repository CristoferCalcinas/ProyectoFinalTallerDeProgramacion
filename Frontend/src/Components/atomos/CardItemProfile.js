import * as React from 'react';
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
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Icono de perfil"
                />
                <CardContent>
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
