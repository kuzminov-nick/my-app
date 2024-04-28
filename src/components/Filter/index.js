import PropTypes from 'prop-types'
import {useState} from "react"

import {
  Box,
  Paper,
  ButtonGroup,
  Button,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link
} from "@mui/material"

Filter.propTypes = {
  stops: PropTypes.array,
  changeStops: PropTypes.func
}
Filter.defaultProps = {
  stops: [],
  changeStops: () => {}
}

function Filter({stops, changeStops}) {
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const currencies = [
    {
      value: 'RUB'
    },
    {
      value: 'USD'
    },
    {
      value: 'EUR'
    }
  ]

  const handleChangeStops = (value, name) => {
    changeStops(stops.map(obj => obj.name === name ? { ...obj, value } : obj))
  }

  const handleChangeAllStops = (checked) => {
    changeStops(stops.map(obj => ({ ...obj, value: checked })))
  }

  const handleClickOnlyBtn = (name) => {
    changeStops(stops.map(obj => obj.name === name ? { ...obj, value: true } : { ...obj, value: false }))
  }

  return (
    <Paper>
      <Box p={2}>
        <Box mb={2}>

          {/*Валюта*/}
          <Box mb={1}>
            <Typography color={"gray"} variant={"subtitle1"} sx={{ textTransform: 'uppercase' }}>Валюта</Typography>
          </Box>
          <ButtonGroup variant="outlined">
            {currencies.map(item => {
              return (
                <Button
                  variant={item.value === currentCurrency ? 'contained' : 'outlined'}
                  onClick={() => setCurrentCurrency(item.value)}
                  key={item.value}
                >
                  {item.value}
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>

        {/*Количество пересадок*/}
        <Box mb={2}>
          <Box mb={1}>
            <Typography variant={"subtitle1"} color={"gray"} sx={{ textTransform: 'uppercase' }}>Количество пересадок</Typography>
          </Box>
          <FormControl fullWidth>
            <FormGroup>
              <Box sx={FormControlLabelBox}>
                <FormControlLabel
                  control={
                    <Checkbox checked={stops.every(item => item.value)} onChange={(e) => handleChangeAllStops(e.target.checked)} />
                  }
                  label={'Все'}
                  key={'all'}
                />
              </Box>

              {stops.map(({name, value, label}) => {
                return (
                  <Box key={name} sx={FormControlLabelBox}>
                    <FormControlLabel
                      control={
                        <Checkbox checked={value} onChange={() => handleChangeStops(!value, name)} name={`${name}`} />
                      }
                      label={label}
                    />
                    <Box className="only-btn">
                      <Link
                        component="button"
                        variant="body2"
                        underline={'hover'}
                        textTransform={"uppercase"}
                        onClick={() => handleClickOnlyBtn(name)}
                      >
                        Только
                      </Link>
                    </Box>
                  </Box>
                )
              })}
            </FormGroup>
          </FormControl>
        </Box>

      </Box>
    </Paper>
  )
}

const FormControlLabelBox = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    mx: -2,
    px: 2
  },
  '& label': {
    width: '100%'
  },
  '& .only-btn': {
    display: 'none',
    mb: '2px'
  },
  '&:hover .only-btn': {
    display: 'block'
  }
})

export default Filter