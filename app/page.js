'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faEnvelope,
  faLocationDot,
  faPhone,
  faStar,
  faX,
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      <div id='body'>
        <header id='header' className={styles.header}>
          <nav
            className={` ${styles.nav} ${styles.spaceBetween} ${styles.alignCenter}`}
          >
            <div className={styles.desktopHeaderMenu}>
              <Link href='#header'>
                <p className={styles.desktopHeaderMenuTexts}>Home</p>
              </Link>
              <Link href='#main'>
                <p className={styles.desktopHeaderMenuTexts}>About Us</p>
              </Link>
              <Link href='#section'>
                <p className={styles.desktopHeaderMenuTexts}>Services</p>
              </Link>
              <Link href='#footer'>
                <p className={styles.desktopHeaderMenuTexts}>Contact Us</p>
              </Link>
            </div>

            <Image
              src='/Images/image-7.webp'
              alt='Logo'
              width={50}
              height={50}
              className={styles.logoImage}
            />

            {/* Toggle Button */}
            <div onClick={toggleMenu} className={styles.toggleIconsBox}>
              <FontAwesomeIcon
                icon={menuOpen ? faX : faBars}
                className={styles.navBarIcon}
              />
            </div>

            <div
              className={`${styles.mobileMenu} ${
                menuOpen ? styles.showMenu : styles.hideMenu
              }`}
            >
              <ul
                className={`${styles.mobileMenuListsWrapper} ${styles.flexColumn}`}
              >
                <Link href='#header' onClick={() => setMenuOpen(false)}>
                  <li className={styles.mobileMenuListItems}>Home</li>
                </Link>
                <Link href='#main' onClick={() => setMenuOpen(false)}>
                  <li className={styles.mobileMenuListItems}>About Us</li>
                </Link>
                <Link href='#section' onClick={() => setMenuOpen(false)}>
                  <li className={styles.mobileMenuListItems}>Services</li>
                </Link>
                <Link href='#footer' onClick={() => setMenuOpen(false)}>
                  <li className={styles.mobileMenuListItems}>Contact Us</li>
                </Link>
              </ul>
            </div>
          </nav>
        </header>

        <main id='main' className={styles.main}>
          <div>
            <h1 className={`${styles.mainHeadingText} ${styles.whiteColor}`}>
              HALNIK FASHION EMPIRE
            </h1>

            <div className={`${styles.flexColumn} ${styles.oneRemGap}`}>
              <p className={`${styles.mainTexts} ${styles.whiteColor}`}>
                Welcome to HALNIK FASHION EMPIRE where elegance is crafted and
                styles are designd with precision
              </p>
              <p className={`${styles.mainTexts} ${styles.whiteColor}`}>
                HALNIK FASHION EMPIRE is your one-stop destination for custom
                fashion design, stylish uniforms, children's wear, home
                decorations, and more. Let your style speak volumes with our
                expertly tailored pieces and creative designs
              </p>
            </div>
          </div>

          <div className={styles.justifyCenter}>
            <Image
              src='/Images/image-1.webp'
              alt='About Halnik'
              width={100}
              height={100}
              className={styles.mainImg}
            />
          </div>
        </main>

        {/* section 1 start */}
        <section
          className={`${styles.sectionOne} ${styles.alignCenter} ${styles.flexColumn}`}
        >
          <Image
            src='/Images/image-2.webp'
            alt='Halnik work station'
            width={100}
            height={40}
            className={styles.sectionOneImg}
          />

          <div className={` ${styles.alignCenter} ${styles.flexColumn} `}>
            <h1 className={styles.sectionOneHeading}>OUR STORY</h1>
            <p className={styles.sectionOneText}>
              At HALNIK FASHION EMPIRE, fashion is more than clothing — it's
              expression. Founded by Sadiat Omowumi Oyegbenro. At Halnik Fashion
              Empire, we blend tradition with morden trends to create unique,
              stylish, and lasting impressions.
            </p>
          </div>
        </section>
        {/* section 1 end */}

        {/* section 2 start */}
        <section id='section' className={styles.sectionTwo}>
          <h1 className={styles.sectionTwoHeading}>CUSTOM CREATIONS</h1>
          <p className={styles.sectionTwoText}>Tailored to perfection</p>
        </section>
        {/* section 2 end */}

        {/* section 3 start */}
        <section className={styles.sectionThree}>
          <div className={styles.sectionThreeContents}>
            <div
              className={`${styles.flexColumn} ${styles.alignCenter} ${styles.threeVhGap}`}
            >
              <Image
                src='/Images/image-3.webp'
                alt='Bespoke Clothing Design'
                width={100}
                height={40}
                className={styles.sectionThreeImg}
              />
              <p className={`${styles.bespokeClothing} ${styles.blackColor}`}>
                BESPOKE CLOTHING
              </p>
            </div>

            <p className={styles.sectionThreeDesc}>
              We blend tradition with modern trends to create unique, stylish,
              and lasting impressions.
            </p>

            <p className={styles.offerings}>OUR OFFERINGS</p>

            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>
                Adult Male & Female Fashion
              </h3>
              <p className={styles.offeringsTexts}>
                From corporate to casual, we design elegant outfits that
                perfectly suit your personalty and fit. Be it native designs -
                Ankara, Lace or Westerns styles, we deliver the best of fashion.
              </p>
            </div>

            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>Children’s Wear</h3>
              <p className={styles.offeringsTexts}>
                We design fun, comfortable, and colorful outfits for boys and
                girls. Whether it’s for everyday wear or special events, our
                children’s collection guarantees both cuteness and quality.
              </p>
            </div>
            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>Officer’s Uniforms</h3>
              <p className={styles.offeringsTexts}>
                We produce professional, neat, and perfectly fitted uniforms for
                various sectors — from security to corporate staff.
                Functionality meets fashion in every piece we sew.
              </p>
            </div>
            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>Quilting Designs</h3>
              <p className={styles.offeringsTexts}>
                Add warmth and beauty to your space with our handcrafted
                quilting designs. Perfect for bedding, gifts, or personal
                collections, each quilt is designed with creativity and
                precision.
              </p>
            </div>
            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>DIY Fashion Services</h3>
              <p className={styles.offeringsTexts}>
                Learn the art of fashion with our hands-on DIY fashion sessions.
                From beginners to hobbyists, we guide you through designing and
                sewing your own clothes.
              </p>
            </div>
            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>Knitting</h3>
              <p className={styles.offeringsTexts}>
                Stay cozy in style with our custom-knit wear. We create scarves,
                cardigans, baby wear, and more — all handcrafted with love and
                care.
              </p>
            </div>
            <div className={styles.offeringsContainer}>
              <h3 className={styles.offeringsHeading}>Decorations</h3>
              <p className={styles.offeringsTexts}>
                Turn any space or event into a masterpiece with our interior and
                event decoration services. From fabric drapes to themed setups,
                we bring beauty to life.
              </p>
            </div>
          </div>
        </section>
        {/* section 3 end */}

        {/* section 4 start */}
        <section
          className={`${styles.sectionFour} ${styles.desktopSectionFour}`}
        >
          <div className={styles.sectionFourContents}>
            <Image
              src='/Images/image-4.webp'
              alt='Bespoke Clothing Design'
              width={100}
              height={40}
              className={styles.sectionFourImg}
            />

            <p className={styles.sectionFourText}>
              Breathe new life into your wardrobe. Our expert tailors offer
              bespoke alterations and restorations to update, repair, and
              perfect your clothing. From precise fittings to intricate repairs,
              we bring your vision to life. Give your clothes chance to shine.
            </p>
          </div>
        </section>
        {/* section 4 end */}

        {/* section 5 start */}
        <section
          className={`${styles.sectionFour} ${styles.desktopSectionFive}`}
        >
          <div
            className={`${styles.sectionFourContents} ${styles.desktopSectionFive}`}
          >
            <Image
              src='/Images/image-5.webp'
              alt='Bridal Couture'
              width={100}
              height={40}
              className={styles.sectionFourImg}
            />

            <div className={styles.flexColumn}>
              <p className={styles.bridalCouture}>Bridal Couture</p>

              <p className={styles.sectionFourText}>
                Walk down the aisle in a breathtaking gown tailored to your
                every desire. Our bridal couture service captures your vision
                and transforms it into a masterpiece of romance and
                sophistication.
              </p>
            </div>
          </div>
        </section>
        {/* section 5 end */}

        {/* section 6 start */}
        <section
          className={`${styles.sectionFour} ${styles.desktopSectionSix}`}
        >
          <div className={styles.sectionFourContents}>
            <Image
              src='/Images/image-6.webp'
              alt='Coperate Design'
              width={100}
              height={40}
              className={styles.sectionFourImg}
            />

            <div className={styles.flexColumn}>
              <p className={styles.bridalCouture}>Corporate Design</p>

              <p className={styles.sectionFourText}>
                Embrace your true style with our expert fashion consultations.
                Together, we'll explore fabrics, silhouettes, and designs to
                create outfits that perfectly reflect your personality and
                taste.
              </p>
            </div>
          </div>
        </section>
        {/* section 6 end */}

        <section
          className={`${styles.testimonialSection} ${styles.flexColumn}`}
        >
          <h2 className={styles.testimonialSectionHeading}>TESTIMONIAL</h2>

          <div className={`${styles.testimonialsWrapper} ${styles.flexColumn}`}>
            <div className={`${styles.testimonialBoxOne} ${styles.flexColumn}`}>
              <p className={styles.testimonialHeading}>Adebayo Tolu</p>
              <div className={`${styles.testimonialIcons} ${styles.flexRow}`}>
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                I ordered uniforms for my staffs and was blown away. Excellent
                fit and quality! HALNIK FASHION EMPIRE is truly a game changer.
              </p>
            </div>
            <div className={`${styles.testimonialBoxTwo} ${styles.flexColumn}`}>
              <p className={styles.testimonialHeading}>Funmi Olagoke</p>
              <div className={`${styles.testimonialIcons} ${styles.flexRow}`}>
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                My daughter’s birthday dress was everything we dreamed of and
                more. Beautiful work and great service.
              </p>
            </div>
            <div
              className={`${styles.testimonialBoxThree} ${styles.flexColumn}`}
            >
              <p className={styles.testimonialHeading}>A'ishah</p>
              <div className={`${styles.testimonialIcons} ${styles.flexRow}`}>
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                The DIY class I attended changed my life. I now make simple
                clothes for myself. Highly recommend them!
              </p>
            </div>
          </div>
        </section>

        {/* section 7 start */}
        <section className={styles.sectionSeven}>
          <h1 className={styles.sectionSevenHeading}>
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div
            className={`${styles.flexColumn} ${styles.twoVhGap} ${styles.desktopFaqs}`}
          >
            <div
              className={`${styles.faqBoxOne} ${styles.flexColumn} ${styles.twoVhGap}`}
            >
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q1: Do you accept custom designs?
                </p>
                <p className={styles.sectionSevenAns}>
                  A: Yes, we do! You can bring your style inspiration, and we’ll
                  bring it to life design.
                </p>
              </div>
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q2: How long does it take to complete an outfit?
                </p>
                <p className={styles.sectionSevenAns}>
                  A: Depending on the design, it typically takes 3–7 working
                  days.
                </p>
              </div>
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q3: Can I book a consultation before sewing?
                </p>
                <p className={styles.sectionSevenAns}>
                  A: Absolutely! Contact us via phone or.star to schedule a
                  consultation.
                </p>
              </div>
            </div>

            <div
              className={`${styles.faqBoxTwo} ${styles.flexColumn} ${styles.twoVhGap}`}
            >
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q4: Do you offer nationwide delivery?
                </p>
                <p className={styles.sectionSevenAns}>
                  A:Yes, we deliver across Nigeria and can make arrangements for
                  international shipping
                </p>
              </div>
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q5: Are your DIY sessions online or in-person?
                </p>
                <p className={styles.sectionSevenAns}>
                  A: We currently offer in-person sessions in Osogbo, with plans
                  to go online soon.
                </p>
              </div>
              <div
                className={`${styles.faqBox} ${styles.flexColumn} ${styles.twoVhGap}`}
              >
                <p className={styles.sectionSevenQue}>
                  Q6: Can I get uniforms for an entire team or organization?
                </p>
                <p className={styles.sectionSevenAns}>
                  A: Yes, we handle bulk orders and offer uniform branding for
                  companies and groups.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 7 end */}

        {/* footer start*/}
        <footer id='footer' className={styles.footer}>
          <div>
            <Image
              src='/Images/image-7.webp'
              alt='Logo'
              width={40}
              height={40}
              className={styles.footerLogo}
            />
          </div>

          <div
            className={`${styles.contactBox} ${styles.flexColumn} ${styles.twoRemGap}`}
          >
            <h1 className={styles.contactText}>Contact Us</h1>

            <div className={`${styles.alignCenter} ${styles.halfRemGap}`}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
              <p className={styles.contactBoxTexts}>
                oyegbenrohalimat01@gmail.com
              </p>
            </div>

            <div className={`${styles.alignCenter} ${styles.halfRemGap}`}>
              <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
              <p className={styles.contactBoxTexts}>+2347063920617</p>
            </div>

            <div className={`${styles.alignCenter} ${styles.halfRemGap}`}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.locationIcon}
              />
              <p className={styles.contactBoxTexts}>
                28, Olohuntobi community, oke bale osogbo, osun State Nigeria.
              </p>
            </div>
          </div>

          <div className={`${styles.footerIconsBox} ${styles.flexRow}`}>
            <a
              href='https://web.facebook.com/people/Halnik-fashion-Empire/61572504907095/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.faceBookIcon}
              />
            </a>
            <a
              href='https://www.instagram.com/oyegbenrohalimat/?igsh=ZWYwNG9mdG8wcXR#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.instagramIcon}
              />
            </a>
            <a
              href='https://www.youtube.com/@HalimatOyegbenro'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.youtubeIcon}
              />
            </a>
            <a
              href='https://www.tiktok.com/@halnike.fashion'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faTiktok} className={styles.ticktokIcon} />
            </a>
            <a
              href='https://wa.me/2347063920617'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={styles.whatsappIcon}
              />
            </a>
          </div>
        </footer>
        {/* footer end */}
      </div>
    </>
  )
}
