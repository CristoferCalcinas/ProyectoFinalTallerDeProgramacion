import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Grid } from '@mui/material';
import ListItemProfile from '../atomos/ListItemProfile';
import CardItemProfile from '../atomos/CardItemProfile';
import { size } from 'lodash';
import { Style } from '@mui/icons-material';

export default function DataItemsProfile({
    emailParam = 'Jauncha@gamil.com',
    countryParam = 'Dubai',
    ageParam = '35',
    nameParam = 'Jauncha Ascui',
    roleParam = 'Seller/Buyer'
}) {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', height:'520px', marginTop:'15px', marginRight:'50px', fontSize:'30px' }}>
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
