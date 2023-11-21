import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Grid } from '@mui/material';
import ListItemProfile from '../atomos/ListItemProfile';
import CardItemProfile from '../atomos/CardItemProfile';

export default function DataItemsProfile({
    emailParam = 'Jauncha@gamil.com',
    countryParam = 'Dubai',
    ageParam = '35',
    nameParam = 'Jauncha Ascui',
    roleParam = 'Seller/Buyer'
}) {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <List>
                        <ListItemProfile
                            valueListItem={'Email'}
                            valueTypography={emailParam}
                        />
                        <ListItemProfile
                            valueListItem={'Country'}
                            valueTypography={countryParam}
                        />
                        <ListItemProfile
                            valueListItem={'Age'}
                            valueTypography={ageParam}
                        />
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <CardItemProfile
                        typographyParam={nameParam}
                        roleParam={roleParam}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
