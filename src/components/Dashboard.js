import React from 'react'
import WatchList from './WatchList'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Position from './Position'
import Fund from './Fund'
import App from './App'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <WatchList/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Summary/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/holdings' element={<Holdings/>}></Route>
          <Route path='/positions' element={<Position/>}></Route>
          <Route path='/funds' element={<Fund/>}></Route>
          <Route path='/apps' element={<App/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard