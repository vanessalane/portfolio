import React from 'react';

// import react-bootstrap components
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ContactIcons() {
  const contactLinks = [
    {
      "tooltip": "Email",
      "url": "mailto:vlane0593@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "tooltip": "LinkedIn",
      "url": "https://www.linkedin.com/in/vanessa-lane/",
      "classes": "fab fa-linkedin"
    },
    {
      "tooltip": "GitHub",
      "url": "https://github.com/vanessalane",
      "classes": "fab fa-github"
    },
    {
      "tooltip": "Instagram",
      "url": "https://www.instagram.com/vl.pottery/",
      "classes": "fab fa-instagram"
    },
  ]

  return (
    contactLinks.map((contactLink) => {
      return (
        <OverlayTrigger
          key={`${contactLink.tooltip}_header`}
          placement="top"
          overlay={
            <Tooltip>
              {contactLink.tooltip}
            </Tooltip>
          }
        >
        <a href={contactLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3">
          <span><i className={contactLink.classes}></i></span>
        </a>
      </OverlayTrigger>)
    })
  )
}

export default ContactIcons;