import React from 'react'

const Footer = ({theme,setTheme}) => {
  return (
    <div class="footer" id={theme}>
        <h1>ThemeToggler</h1>
        <p><a href="mailto:antonygodwin08@gmail.com">antonygodwin08@gmail.com</a></p>
    </div>
  )
}

export default Footer