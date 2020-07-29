import React from 'react'
import PropTypes from 'prop-types'
type Props = {
  color?: string;
}

const Logo: React.FC<Props> = ({ color = '#00BFA6' }) => {
  return <div >
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H37.75C41.0637 0 43.75 2.68629 43.75 6V14H19.125C15.8113 14 13.125 16.6863 13.125 20V42H6C2.68629 42 0 39.3137 0 36V6ZM26.25 42H13.125V50C13.125 53.3137 15.8113 56 19.125 56H26.25V64C26.25 67.3137 28.9363 70 32.25 70H64C67.3137 70 70 67.3137 70 64V34C70 30.6863 67.3137 28 64 28H56.875V20C56.875 16.6863 54.1887 14 50.875 14H43.75V28H32.25C28.9363 28 26.25 30.6863 26.25 34V42ZM43.75 28V36C43.75 39.3137 41.0637 42 37.75 42H26.25V56H50.875C54.1887 56 56.875 53.3137 56.875 50V28H43.75Z" fill={color} />
    </svg>

  </div>
}

Logo.propTypes = {
  color: PropTypes.string
}

export default Logo
