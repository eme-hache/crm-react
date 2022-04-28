import { Link, useLocation } from 'react-router-dom'

const MenuItem = ({ to, icon, toggled, children }) => {
    const location = useLocation()
    const currentURL = location.pathname

    return (
        <Link
            to={to}
            className={`${to === currentURL && 'bg-blue-700 text-gray-50 shadow-lg'} 
                text-md mt-4 transition duration-200
                px-5 rounded-md text-gray-600
                hover:bg-blue-700 hover:text-white 
                hover:shadow-lg flex items-center overflow-hidden h-16`}
        >
            <i className={`${icon} mr-6 text-xl`} />

            <span className={`${toggled ? 'opacity-0' : 'opacity-100'} whitespace-nowrap transition-all`}>
                {children}
            </span>
        </Link>
    )
}

export default MenuItem