import React from 'react'
import { Shell } from 'lucide-react'
import { Link } from 'react-router-dom'

const themes = [
    'nord', 'coffee', 'cupcake', 'aqua', 'light', 'dark', 'bumblebee', 'emerald',
    'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
    'garden', 'forest', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'winter', 'dim', 'sunset', 'caramellatte', 'abyss', 'silk'
]

const ThemeController = () => {
    return (
        <div className="dropdown dropdown-end z-40 mb-72" style={{ padding: '10px' }}>
            <div tabIndex={0} role="button" className="btn m-1 border-2 gap-2" style={{ padding: '10px' }}>
                <Shell className="w-4 h-4" />
                Menu
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-200 rounded-box w-64 shadow-xl"
                style={{ padding: '10px' }}
            >
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>

                <li>
                    <details>
                        <summary>Themes</summary>
                        <ul className="max-h-60 overflow-y-auto px-2 py-2" style={{ padding: '10px' }}>
                            {themes.map((theme) => (
                                <li key={theme}>
                                    <button
                                        onClick={() => {
                                            document.documentElement.setAttribute('data-theme', theme)
                                            localStorage.setItem('theme', theme)
                                        }}
                                        className="w-full text-left px-2 py-1 rounded hover:bg-base-300 transition"
                                    >
                                        {theme}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export default ThemeController
