import { Box, Typography } from "@mui/material";

export default function NewsContent({
  titleParam,
  bodyParam,
  imageParam,
  userImageParam,
  userNameParam,
}) {
  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={
          {
            fontFamily: 'Georgia',
            paddingY: '20px',
          }
        }
        >
          {titleParam}
        </Typography>
        <hr />
        <Box
          sx={
            {
              display: 'flex',
              justifyContent: 'space-around',
              paddingY: '20px',
            }
          }
        >
          <Box

          >
            <img
              src={imageParam}
              style={
                {
                  // width: '35%',
                }
              }
            />
            <Box
              sx={
                {
                  display: 'flex',
                  justifyContent: "start",
                  alignItems: "center",
                  paddingX: '20px',
                  paddingY: '10px',
                }
              }
            >
              <img
                src={userImageParam}
              />
              <Typography
                variant="h5"
                sx={
                  {
                    fontFamily: 'Georgia',
                    paddingX: '20px',
                  }
                }
              >
                {userNameParam}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={
              {
                fontFamily: 'Georgia',
                paddingX: '20px',
                // width: '55%'
                fontSize: "22px",
                fontWeight: 400,         
              }
            }
          >
            {bodyParam}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
