import { Box } from "@mui/material";
import ProfileItem from "../moleculas/ProfileItem";

export default function ProfileData() {
    return (
        <Box
            sx={{
                color: 'white',
                height: '100vh',
                background: '#404040',
            }}
            display={"flex"}
            justifyContent={"   "}
            alignItems={"center"}
        >
            <ProfileItem />
        </Box>
    )
}
