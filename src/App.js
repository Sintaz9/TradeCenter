import nav_logo from './img/logo/tradecenter-logo2.png'
import insta from './img/instagram-icon.png'
import vk from './img/vk-icon3.png'
import campfire from './img/Campfire2.png'
import search_icon from './img/search-el2.png'

import { Routes, Route, Link } from 'react-router-dom'
import { Mainpage } from './components/Mainpage'
import { SellCar } from './components/SellCar'
import Registration from './components/Registration'

import { Supra, Impala, Charger, Bugatti, AstonMartin, Delorean, BMWNFT, BMWNFS, NissanGTR } from './components/AllCars'

import CarsData from './components/CarsData'

import './style/style.css'
import React, {Suspense, useState} from 'react';




function App() {

  // хуки для поиска
  const [searchInput, setSearchInput] = useState("");
  const [searchShow, setsearchShow] = useState(true);


  // скрывает блок поиска (setTimeout нужен для того, чтобы дать небольшую задержку для закрытия, которая нужна)
  // если пользователь захочет кликнуть на ссылку в поиске
  const searchBLockShow = (par) => {
    setTimeout(() => setsearchShow(par => !par), 210);
  };

  // показывает блок поиска 
  const searchBLockHide = (par) => {
    setsearchShow(par => !par);
  };

  
  return (
		<div className='html-block'>
			
			<nav className='main-nav'>
				<Link to='/'>
				<img className='nav-logo' src={nav_logo} />
				</Link>
				<div className='search-container2'>
					<img className='search_icon' src={search_icon} />
					
					<input
						className='search-input'
						type='text'
						placeholder='Поиск авто'
						onChange={event => setSearchInput(event.target.value)}
						onClick={searchBLockHide}
						onBlur={searchBLockShow}
					/>
				</div>

				<div className='nav-content-container'>
					<Link to='/'>
						<h2 className='nav-content'>Главная</h2>
					</Link>
					<Link to='/sellcar'>
						<h2 className='nav-content'>Продать</h2>
					</Link>
					<Registration />
				</div>
			</nav>
			
			<div
				id='search-block'
				style={{ display: searchShow ? 'none' : 'block' }}
				className='search-resault-container'
			>
				<h1 className='search-res-h1'>Результат поиска: </h1>
				<div className='search-resault-container2'>
					{CarsData.filter(val => {
						if (searchInput == '') {
							return 0
						} else if (
							val.name.toLowerCase().includes(searchInput.toLowerCase())
						) {
							return val
						}
					}).map(val => {
						return (
							<>
								<div key={val.id} className='single-car22'>
									<Link to={val.linkto}>
										<img className='search-car-img' src={val.img_src} />
									</Link>
									<h3 className='search-car-h3'>{val.name}</h3>
								</div>
							</>
						)
					})}
				</div>
			</div>
			
			<Routes>
				<Route path='/' element={<Mainpage />}></Route>
				<Route path='/sellcar' element={<SellCar />}></Route>
				<Route path='/supra' element={<Supra />}></Route>
				<Route path='/impala' element={<Impala />}></Route>
				<Route path='/charger' element={<Charger />}></Route>
				<Route path='/bugatti' element={<Bugatti />}></Route>
				<Route path='/astonmartin' element={<AstonMartin />}></Route>
				<Route path='/delorean' element={<Delorean />}></Route>
				<Route path='/bmwnft' element={<BMWNFT />}></Route>
				<Route path='/nfsbmw' element={<BMWNFS />}></Route>
				<Route path='/nissangtr' element={<NissanGTR />}></Route>
			</Routes>

			<footer id='contacts' className='main-footer'>
				<p className='footer-p'>
					<strong>TradeCenter</strong>
				</p>
				<div className='author'>
					<div className='design'>Дизайн и реализация:</div>
					<div className='me'>Студенты ИСиТа</div>
					<div className='socials'>
						<a href='https://www.instagram.com/mega.vlad0n/'>
							<img src={insta} />
						</a>
						<a href='https://vk.com/itsvladiatorbeach'>
							<img src={vk} />
						</a>
						<a href='https://ladya2003.github.io/campfire/'>
							<img src={campfire} />
						</a>
					</div>
				</div>
				<hr className='hr-footer' />
				<p className='footer-copyright'>
					Copyright © BSTU
				</p>
			</footer>
		</div>
	)
}

export default App;
