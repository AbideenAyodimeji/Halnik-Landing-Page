import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons' // Existing icons
import {
  faYoutube,
  faTiktok,
  faWhatsapp,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons' // New brand icons

// Add icons to the library
library.add(
  faYoutube,
  faTiktok,
  faWhatsapp,
  faBars,
  faInstagram,
  faFacebook,
  faX
)
