import React from 'react';

function ContactIcons() {
  const contactLinks = [
    {
      "name": "email",
      "url": "mailto:vlane0593@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/vanessa-lane/",
      "classes": "fab fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/vanessalane",
      "classes": "fab fa-github"
    },
    {
      "name": "instagram",
      "url": "https://www.instagram.com/vl.pottery/",
      "classes": "fab fa-instagram"
    },
  ]

  return (
    contactLinks.map((contactLink) => {
      return (
        <a href={contactLink.url}
          key={contactLink.name}
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