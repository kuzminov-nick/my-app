import {useState} from "react"

import data from "./tickets.json"
import Filter from "../../components/Filter"
import TicketList from "../../components/TicketList"

import {Grid} from "@mui/material"

function Main() {
  const initialTickets = data.tickets

  const [stops, setStops] = useState([
    {
      name: 0,
      label: 'Без пересадок',
      value: false
    },
    {
      name: 1,
      label: '1 пересадка',
      value: false
    },
    {
      name: 2,
      label: '2 пересадки',
      value: false
    },
    {
      name: 3,
      label: '3 пересадки',
      value: false
    },
    {
      name: 4,
      label: '4 пересадки',
      value: false
    }
  ])
  // массив с количетсвами пересадок - [0,1,2]
  const stopsRes = stops.filter(item => item.value).map(item => item.name)

  const isFiltered = stopsRes.length

  // массив отфильтрованный по количеству пересадок
  const filteredTickets = initialTickets.filter((ticket) => stopsRes.includes(ticket.stops))

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Filter stops={stops} changeStops={(stops) => setStops(stops)} />
      </Grid>
      <Grid item xs={9}>
        <TicketList tickets={isFiltered? filteredTickets : initialTickets} />
      </Grid>
    </Grid>
  )
}

export default Main