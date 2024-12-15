import React, { useState } from 'react'
import {Tooltip, Grow } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { watchlist } from '../data/data'
const WatchList = () => {
  return (
    <div className='watchlist-container'>
        <div className="search-container">
            <input type="text" name='search' className='search' id='search' placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx'/>
            <span className="counts">{watchlist.length} / 50</span>
        </div>
        <ul className='list'>
          {watchlist.map((stock, index) => {
            return(
              <WatchListItem stock={stock} index={index}/>
            )
            
          })
          }
        </ul>
    </div>
  )
}

export default WatchList



const WatchListItem= ({stock, index}) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) =>{
    setShowWatchListAction(true);
  }
  const handleMouseLeave = () => {
    setShowWatchListAction(false);
  }
  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='item'>
        <p className= {stock.isDown? "down" : "up"}>{stock.name}</p>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <ArrowDropDownIcon className='down'/>
          ):(<ArrowDropUpIcon className='down'/>)}
          <span className='price'>{stock.price}</span>
        </div>
      </div>
      { showWatchListAction && <WatchListActions uid={stock.name}/> }
    </li>
  )

}

const WatchListActions = ({uid}) => {
  return(
    <span className='actions'>
      <span>
        <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}>
          <button className='buy'>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}>
          <button className='sell'>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
          <button className='action'><BarChartIcon className='icon'/></button>
        </Tooltip>
        <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}>
        <button className='action'><MoreHorizIcon className='icon'/></button>
        </Tooltip>
      </span>
    </span>
  )
}