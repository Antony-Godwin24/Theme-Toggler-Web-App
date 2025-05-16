import React from 'react'

const Nav = ({toggleTheme,theme,setTheme}) => {
  return (
    <div class='nav' id={theme}>
        <h1>ThemeToggler</h1>
        <div class="btn">
            <button onClick={toggleTheme} class="btn btn-outline-light" id="btn" >Toggle</button>
        </div>
    </div>
  )
}

export default Nav