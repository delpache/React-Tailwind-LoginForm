<div className='flex flex-col items-center text-5xl font-bold text-center'>
            Page d'accueil 
            {user ? 
                <button 
                    onClick={signOutHandler}
                    className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                    Se déconnecter
                </button> 
                : 
                <Link 
                    className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                    to='auth/login'
                >
                    Connexion
                </Link>
            }
        </div>

{/* Primary Navigation Menu */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
    <div className="flex">
        {/* Navigation Links */}
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <Link 
                className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                to="/"
            >
                Dashboard
            </Link>
        </div>
    </div>

    {/* Settings Dropdown */}
    <div className="hidden sm:flex sm:items-center sm:ml-6">
        <x-dropdown align="right" width="48">
            <x-slot name="trigger">
                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                    <div>
                        { user ? user.email : 
                            'User' 
                        }
                    </div>

                    <div className="ml-1">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </button>
            </x-slot>
        </x-dropdown>
    </div>

    {/* Hamburger */}
    <div class="-mr-2 flex items-center sm:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className="inline-flex" strokLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className="hidden" strokLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</div>
</div>

{/* Responsive Navigation Menu */}
<div className="hidden sm:hidden">
    <div className="pt-2 pb-3 space-y-1">
        <a className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'>
            Dashboard
        </a>
    </div>

    {/* Responsive Settings Options */}
    <div class="pt-4 pb-1 border-t border-gray-200">
        <div class="px-4">
            <div className="font-medium text-base text-gray-800">

            </div>
            <div className="font-medium text-sm text-gray-500">

            </div>
        </div>
    </div>
</div>