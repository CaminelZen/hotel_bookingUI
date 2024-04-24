import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faSearch, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { format } from 'date-fns'

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,

      };
    });
  };


  return (
    <div className="Search">
      <div className="SearchItem">
        <FontAwesomeIcon icon={faSearch} className='Icon' />
        <input type="text"
          placeholder='Search for hotels by destinations'
          className='SearchInput'
        />
      </div>
      <div className="SearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className='Icon' />
        <span onClick={() => setOpenDate(!openDate)} className='SearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
        {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className='date'
        />}
      </div>
      <div className="SearchItem">
        <FontAwesomeIcon icon={faPerson} className='Icon' />
        <span onClick={() => setOpenOptions(!openOptions)} className='SearchText'>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
        {openOptions&&<div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
              <button
                disabled={options.adult <= 1}
                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
            </div>
