import { Grid } from "@mui/material";
import OptionsList from "../atomos/OptionsList";
import DataItemsProfile from "./DataItemsProfile";

export default function ProfileItem() {
    return (
        <Grid container spacing={5} justifyContent={"center"}>
            <Grid item xs={4}>
                <OptionsList />
            </Grid>

            <Grid item xs={8} >
                <DataItemsProfile />
            </Grid>
        </Grid>
    )
}
