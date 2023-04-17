import React from 'react'
import GitHubButton from 'react-github-btn'

function Header() {
    return (
        <div className='Header'>
            <div>SHADOWGEN</div>
            <GitHubButton href="https://github.com/daviduzondu/shadowgen" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star daviduzondu/shadowgen on GitHub">Star</GitHubButton>
        </div>
    )
}

export default Header