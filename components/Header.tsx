export function Header() {
    return (
        <header>
            <div id="head" class="justify-center">
                <div id="head-wrapper" class="flex-none h-full w-full flex-nowrap text-white">
                <div id="nav-bar" class="flex items-center bg-gradient-to-r from-indigo-500 gap-4 h-14 px-1">
                    <div id="search-wrapper" class="flex">
                    <form id="search-bar" class="flex">
                        <div class="flex flex-row flex-nowrap">
                        <span class="flex flex-row flex-nowrap gap-2">
                            <svg viewBox="0 0 24 24" class="h-5 w-5">
                            <path fill="white" d="M23.785 21.937L18.12 16.27a.554.554 0 0 0-.397-.163h-.616a9.683 9.683 0 0 0 2.362-6.348c0-5.363-4.346-9.709-9.71-9.709S.05 4.396.05 9.759s4.346 9.709 9.709 9.709a9.683 9.683 0 0 0 6.348-2.362v.616c0 .15.06.29.163.397l5.667 5.666c.22.22.574.22.794 0l1.054-1.054a.56.56 0 0 0 0-.794zM9.76 17.227c-4.126 0-7.468-3.342-7.468-7.468S5.633 2.29 9.759 2.29s7.468 3.342 7.468 7.468-3.342 7.468-7.468 7.468z"></path>
                            </svg>
                            <input type="text" id="search" required placeholder="Search..." class="rounded text-black px-2"></input>
                            <button type="submit">Search</button>
                        </span>
                        </div>
                    </form>
                    </div>
                    <div id="nav-bar-inner" class="flex gap-4">
                    <a href="/" title="Home">Home</a>
                    <a href="/about" title="About">About</a>
                    <a href="/stats" title="Tournament Statistics">Stats</a>
                    </div>
                    <div id="login-bar" class="flex">
                    <a href="/login" title="Log in">Login</a>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}