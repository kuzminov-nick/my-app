import PropTypes from 'prop-types'
import TicketItem from "../TicketItem"
import {Box, Paper, Typography} from "@mui/material"

TicketList.propTypes = {
  tickets: PropTypes.array
}
TicketList.defaultProps = {
  tickets: []
}

function TicketList({tickets}) {
  const hasTickets = tickets.length
  console.log(tickets)

  return (
    <Box height={'100%'}>
      {hasTickets ? tickets.sort((a, b) => a.price - b.price).map((item, index) => {
        return (
          <TicketItem
            key={`${index}${item.origin}${item.destination}${item.arrival_time}${item.carrier}`}
            ticket={item}
          />
        )
      }) : <Paper sx={{height: '100%'}}><Box p={2}><Typography>Не найдено</Typography></Box></Paper>}
    </Box>
  )
}

export default TicketList