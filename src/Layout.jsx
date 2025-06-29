import logo from './assets/icon.png';
import { Nav } from './nav';
import { Userinfobox } from './Userinfobox';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <div className="container">
                <div className="app-wrapper">
                    <header className='flex justify-between align-items-center app-header'>
                        <div className="logo">
                            <span className="icon"> <img src={logo} alt="" /></span>
                            <span className="logo-text">TaskZen</span>
                        </div>

                        <form className="flex align-center search-bar">
                            <input type="text" />
                            <button>
                                <svg  viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4999 6.5509C32.8888 6.5509 40.4999 14.1621 40.4999 23.5509C40.4999 32.9397 32.8888 40.5509 23.4999 40.5509C14.1111 40.5509 6.49994 32.9397 6.49994 23.5509C6.49994 14.1621 14.1111 6.5509 23.4999 6.5509ZM42.3451 36.7399C44.9634 33.0057 46.4999 28.4578 46.4999 23.5509C46.4999 10.8484 36.2025 0.550903 23.4999 0.550903C10.7974 0.550903 0.499939 10.8484 0.499939 23.5509C0.499939 36.2535 10.7974 46.5509 23.4999 46.5509C28.4068 46.5509 32.9547 45.0143 36.6889 42.3961L50.6718 56.379L50.8212 56.5216C52.3915 57.9399 54.8149 57.8922 56.3281 56.379C57.8412 54.8659 57.8889 52.4424 56.4706 50.8722L56.3281 50.7228L42.3451 36.7399Z" fill="#fff" />
                                </svg>

                            </button>
                        </form>

                        <div className="date">
                            <span className="date-text">{new Date().toLocaleDateString()}</span>
                        </div>
                    </header>
                    <main>
                        <div className="flex">
                            <div className="left-section">
                                <Userinfobox />
                                <Nav />
                            </div>
                            <div className="right-section">
                                <Outlet />
                            </div>

                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}