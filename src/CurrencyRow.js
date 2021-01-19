import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props;

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        margin: {
          margin: theme.spacing(1),
        },
        withoutLabel: {
          marginTop: theme.spacing(3),
        },
        textField: {
          width: '25ch',
        },
      }));

    const classes = useStyles();

    return (
        <div>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor={selectedCurrency}>Valor em {selectedCurrency}</InputLabel>
                <OutlinedInput
                    id={selectedCurrency}
                    value={amount}
                    onChange={onChangeAmount}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
            />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id={selectedCurrency}>Moeda</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedCurrency}
                defaultValue={currencyOptions[0]}
                onChange={onChangeCurrency}
                label="Moeda"
                >
                {currencyOptions.map(option => (
                    <MenuItem key={Object.keys(option) + ''} value={option}>{option}</MenuItem>
                ))}
                
                </Select>
      </FormControl>
            {/*<input number="number" className="input" value={amount} onChange={onChangeAmount}/>*/}
            {/*<select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
                </select>*/}
        </div>
    )
}
