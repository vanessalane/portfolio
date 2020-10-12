import React from 'react';

function ContactIcons() {
  const contactLinks = [
    {
      "url": "mailto:vlane0593@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "url": "https://www.linkedin.com/in/vanessa-lane/",
      "classes": "fab fa-linkedin"
    },
    {
      "url": "https://github.com/vanessalane",
      "classes": "fab fa-github"
    },
    {
      "url": "https://www.instagram.com/vl.pottery/",
      "classes": "fab fa-instagram"
    },
  ]

  return (
    contactLinks.map((contactLink) => {
      return (
        <a href={contactLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 color-grey-700">
          <span><i className={contactLink.classes}></i></span>
        </a>
      )
    })
  )
}

export default ContactIcons;