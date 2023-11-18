import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";


export default function ListItemProfile({ valueListItem = 'Unknown', valueTypography = 'Any' }) {
    return (
        <ListItem >
            <ListItemButton>
                <ListItemText primary={valueListItem} />
            </ListItemButton>
            <Typography variant="subtitle" color={'white'}>
                {valueTypography}
            </Typography>
        </ListItem>
    )
}
