import PropTypes from 'prop-types'
import moment from "../../utils/moment.js"

import {Paper, Box, Divider, Button, Typography} from "@mui/material"
import FlightIcon from '@mui/icons-material/Flight'

TicketItem.propTypes = {
  tickets: PropTypes.object
}
TicketItem.defaultProps = {
  ticket: {}
}

function TicketItem({
  ticket: {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price
  }
}) {
  const stopsText = stops ? stops + (stops === 1 ? ' пересадка' : ' пересадки') : 'Без пересадок'

  return (
    <Paper>
      <Box mb={2} display={"flex"}>
        <Box p={2}>
          <Box p={2} textAlign={"center"}>{ carrier }</Box>
          <Button color={"warning"} variant={"contained"} onClick={() => console.log(price)}>Купить за { price } ₽</Button>
        </Box>
        <Divider orientation={"vertical"} flexItem></Divider>
        <Box p={2} flexGrow={1}>
          <Box display={"flex"}>
            <Box><Typography variant={"h3"}>{ departure_time }</Typography></Box>
            <Box flexGrow={1} px={4}>
              <Box textAlign={"center"} textTransform={"uppercase"}><Typography variant={"subtitle2"}>{ stopsText }</Typography></Box>
              <Box display={"flex"} alignItems={"center"}><Divider sx={{flexGrow: 1}}/><FlightIcon color={'disabled'} sx={{transform: 'rotate(90deg)'}}/></Box>
            </Box>
            <Box><Typography variant={"h3"}>{ arrival_time }</Typography></Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Box display={"flex"}>
                  <Typography variant={"subtitle1"}>{ origin }, { origin_name }</Typography>
                </Box>
                <Box><Typography color={'grey'} lineHeight={1}>{ moment(departure_date, 'D.M.YY').format('D MMM YYYY, ddd') }</Typography></Box>
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Typography variant={"subtitle1"}>{ destination_name }, { destination }</Typography>
                </Box>
                <Box><Typography color={'grey'} lineHeight={1}>{ moment(arrival_date, 'D.M.YY').format('D MMM YYYY, ddd') }</Typography></Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Paper>
  )
}

export default TicketItem