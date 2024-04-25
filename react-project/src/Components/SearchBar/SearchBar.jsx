import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faSearch, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns'

const SearchBar = () => {
  const [locationn, setLocation] = useState([]);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openPersonOptions, setOpenPersonOptions] = useState(false); // New state variable for person options

  const searchBarRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setOpenDate(false);
      setOpenPersonOptions(false); // Close person options when clicking outside
    }
  };

  const fetchLocation = (location) => {
    fetch(`http://localhost:8000/hotels/${location}`, {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch hotel locations');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching hotel locations:', error);
      });
  };

  const handleChange = (value) => {
    setLocation(value);
    fetchLocation(value);
  };

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="Search" ref={searchBarRef}>
      <div className="SearchItem">
        <FontAwesomeIcon icon={faSearch} className='Icon' />
        <input type="text"
          placeholder='Choose your destination'
          className='SearchInput'
          value={locationn}
          onChange={(e) => handleChange(e.target.value)}
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
        <span onClick={() => setOpenPersonOptions(!openPersonOptions)} className='SearchText'>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
        {openPersonOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
              <button
                disabled={options.adult <= 1}
                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
              <button
                disabled={options.children <= 1}
                className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
              <button
                disabled={options.room <= 1}
                className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
            </div>
          </div>
        </div>}
      </div>
      <div className="SearchItem"></div>
      <button className='SearchBtn'>Search</button>
    </div>
  );
};

export default SearchBar;
