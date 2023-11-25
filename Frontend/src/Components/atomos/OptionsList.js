import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, Typography } from '@mui/material';


export default function OptionsList() {

    return (
        <List
            sx={{ bgcolor: 'black', color: 'white', marginLeft:'50px', height:'500px' }}
            component="nav"
        >
            <ListItemButton >

                <ListItem>
                    <Typography sx={{ fontSize: '2rem !important' }} variant="body2" color="white">
                        Your cars
                    </Typography>
                </ListItem>

            </ListItemButton>


            <ListItemButton>
                <ListItem>
                    <Typography sx={{ fontSize: '2rem !important' }} variant="body2" color="white">
                        Your orders
                    </Typography>
                </ListItem>
            </ListItemButton>

            <ListItemButton>
                <ListItem>
                    <Typography sx={{ fontSize: '2rem !important' }} variant="body2" color="white">
                        Your advertisement
                    </Typography>
                </ListItem>
            </ListItemButton>

            <ListItemButton >
                <ListItem>
                    <Typography sx={{ fontSize: '2rem !important' }} variant="body2" color="white">
                        Settings
                    </Typography>
                </ListItem>
            </ListItemButton>

            <ListItemButton >
                <ListItem>
                    <Typography sx={{ fontSize: '2rem !important' }} variant="body2" color="white">
                        Log out
                    </Typography>
                </ListItem>
            </ListItemButton>

        </List>
    );
}
