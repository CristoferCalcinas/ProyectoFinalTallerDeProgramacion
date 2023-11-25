import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";


export default function ListItemProfile({ valueListItem = 'Unknown', valueTypography = 'Any', size }) {
    return (
        <ListItem >
            <ListItemButton>
                <ListItemText primary={valueListItem} />
            </ListItemButton>
            <Typography variant="subtitle" color={'white'} style={{fontSize:size}}>
                {valueTypography}
            </Typography>
        </ListItem>
    )
}
