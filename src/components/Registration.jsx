import { useState } from 'react'

function Registration() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

	const toggleLoginMenu = () => {
		setIsLoginOpen(prev => !prev)
		setIsRegistrationOpen(false) // Закрываем меню регистрации, если оно открыто
	}

	const toggleRegistrationMenu = () => {
		setIsRegistrationOpen(prev => !prev)
		setIsLoginOpen(false) // Закрываем меню входа, если оно открыто
	}

	return (
		<div className='registration-container'>
			<button className='menu-button' onClick={toggleLoginMenu}>
				Вход |
			</button>
			<button className='menu-button' onClick={toggleRegistrationMenu}>
				Регистрация
			</button>

			{/* Выпадающее окно для входа */}
			<div
				className='dropdown'
				id='loginDropdownMenu'
				style={{ display: isLoginOpen ? 'block' : 'none' }}
			>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Пароль' />
				<button>Войти</button>
			</div>

			{/* Выпадающее окно для регистрации */}
			<div
				className='dropdown'
				id='registrationDropdownMenu'
				style={{ display: isRegistrationOpen ? 'block' : 'none' }}
			>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Пароль' />
				<button>Зарегистрироваться</button>
			</div>
		</div>
	)
}

export default Registration
