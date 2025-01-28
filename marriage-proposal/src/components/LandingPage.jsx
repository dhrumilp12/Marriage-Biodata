import { useState, useEffect } from 'react';
import './LandingPage.css';

// Import your images
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';

export default function LandingPage() {
  // Array of images
  const images = [Image1, Image2, Image3, Image4];

  // Current active index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for image modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // State for modals
  const [showHoroscope, setShowHoroscope] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showFamily, setShowFamily] = useState(false); // Existing Family modal state
  const [showExpectation, setShowExpectation] = useState(false); // New state for Expectation modal

  const horoscopeContent = {
    birthDetails: {
      date: '16 December 2001',
      time: '6:00 AM',
      place: 'Kalol, Gujarat'
    },
    astroDetails: {
      sunSign: 'Sagittarius (Dhanu)',
      moonSign: 'Scorpio (Vrishchik)',
    },
    planetaryPositions: [
      { planet: 'Mercury', position: '10th House', influence: 'Strong career focus' },
      { planet: 'Venus', position: '9th House', influence: 'Love for travel & philosophy' },
      { planet: 'Mars', position: '6th House', influence: 'Strong work ethic' }
    ],
    traits: {
      strengths: ['Optimistic', 'Adventurous', 'Philosophical'],
      challenges: ['Impatient', 'Blunt', 'Restless']
    },
    matches: ['Aries', 'Leo', 'Libra']
  };

  const detailsContent = {
    personalInfo: {
      name: 'Dhrumil Bhikhabhai Patel',
      age: '21',
      height: "5'5\"",
      education: 'B.Tech in Computer Engineering',
      occupation: 'Software Developer (Student).'
    },
    familyDetails: {
      father: 'Bhikhabhai Patel',
      mother: 'Chandrikaben Patel',
      siblings: '0',
      caste: 'Kadvapatidar 42 Samaj', // Added caste information
      religion: 'Hindu' // Added religion information
    },
    preferences: {
      ageRange: '19-23',
      heightRange: "4'9\" - 5'5\"",
      education: "Minimum Bachelor's degree",
    },
    interests: ['Traveling', 'Reading', 'Photography', 'Technology', 'Exercising'],
    contactInfo: {
      email: 'dhrumil1612@icloud.com',
      phone: '+1-478-235-2824'
    }
  };

  const expectationContent = {
    qualities: [
      'Kind-hearted and compassionate',
      'Ambitious and career-oriented',
      'Family-oriented and respectful',
      'Honest and trustworthy',
      'Supportive and understanding'
    ],
    lifestyle: [
      'Healthy and active lifestyle',
      'Love for traveling and exploring new places',
      'Enjoys both social gatherings and quiet evenings',
      'Values education and continuous learning'
    ],
    preferences: {
      ageRange: '19-23',
      heightRange: "4'9\" - 5'5\"",
      education: "Bachelor's degree or higher",
      occupation: 'Professional and stable career'
    },
    values: [
      'Strong family bonds',
      'Mutual respect and understanding',
      'Shared interests and hobbies',
      'Emotional support and companionship'
    ]
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Determine indices for previous and next images
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  // Handler to open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Handler to close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Handlers for image slider navigation buttons
  const goToPrevious = () => {
    setCurrentIndex(prevIndex);
  };

  const goToNext = () => {
    setCurrentIndex(nextIndex);
  };

  // Handlers for navigation links
  const handleHoroscopeClick = () => {
    setShowHoroscope(true);
    setShowDetails(false);
    setShowFamily(false);
    setShowExpectation(false);
  };

  const handleDetailsClick = () => {
    setShowDetails(true);
    setShowHoroscope(false);
    setShowFamily(false);
    setShowExpectation(false);
  };

  const handleFamilyClick = () => {
    setShowFamily(true);
    setShowHoroscope(false);
    setShowDetails(false);
    setShowExpectation(false);
  };

  const handleExpectationClick = () => {
    setShowExpectation(true);
    setShowHoroscope(false);
    setShowDetails(false);
    setShowFamily(false);
  };

  return (
    <div className="landing">
      {/* LEFT (Image + overlay + text) */}
      <div className="landing-left">
        <div className="landing-content">
          <h1 className="landing-name">
            Dhrumil<br />
            Bhikhabhai<br />
            Patel
          </h1>

          <div className="social-icons">
            <a href="https://www.instagram.com/patel.dhrumill" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.snapchat.com/add/dhrumilp_12" aria-label="Snapchat">
              <i className="fab fa-snapchat" />
            </a>
            <a href="https://x.com/DPatel161" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://wa.me/14782352824" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/dhrumil-patel2002" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>

          <p className="landing-text">
            I would describe myself as someone who is funny, smart, trendy and
            someone who always has a smile on the face. I love tech and
            computers. A big-time Nature, Travelling &amp; Animal lover.
            Looking for a girl who has good in nature &amp; will be able to
            manage my home. Enter my world.
          </p>

          {/* Image Slider */}
          <div className="image-slider">
            <button className="nav-button prev-button" onClick={goToPrevious}>
              &#60;
            </button>
            <div className="slider-container">
              {/* Previous Image */}
              <div className="slider-item" onClick={() => openModal(images[prevIndex])}>
                <img src={images[prevIndex]} alt={`Slide ${prevIndex + 1}`} className="slider-image" />
              </div>

              {/* Current (Active) Image */}
              <div className="slider-item active" onClick={() => openModal(images[currentIndex])}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
              </div>

              {/* Next Image */}
              <div className="slider-item" onClick={() => openModal(images[nextIndex])}>
                <img src={images[nextIndex]} alt={`Slide ${nextIndex + 1}`} className="slider-image" />
              </div>
            </div>
            <button className="nav-button next-button" onClick={goToNext}>
              &#62;
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT (Navigation) */}
      <div className="landing-right">
        <nav>
          <ul>
            <li>
              <a onClick={handleHoroscopeClick}>
                Horoscope
              </a>
            </li>
            <li>
              <a onClick={handleDetailsClick}>
                Details
              </a>
            </li>
            <li>
              <a onClick={handleFamilyClick}>
                Family
              </a>
            </li>
            <li>
              <a onClick={handleExpectationClick}>
                Expectation
              </a>
            </li>
            
            <li><a onClick={handleExpectationClick}>Expectations</a></li>
          </ul>
        </nav>
      </div>

      {/* Horoscope Modal */}
      {showHoroscope && (
        <div className="modal-overlay" onClick={() => setShowHoroscope(false)}>
          <div className="horoscope-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setShowHoroscope(false)} style={{ margin: "20px" }}>×</span>

            <h2>Birth Chart Details</h2>

            <div className="astro-grid">
              <div className="astro-card">
                <div className="astro-icon sun"></div>
                <h3>Sun Sign</h3>
                <p>{horoscopeContent.astroDetails.sunSign}</p>
              </div>
              <div className="astro-card">
                <div className="astro-icon moon"></div>
                <h3>Moon Sign</h3>
                <p>{horoscopeContent.astroDetails.moonSign}</p>
              </div>
              <div className="astro-card">
                <div className="astro-icon birth"></div>
                <h3>Birth Details</h3>
                <p>{horoscopeContent.birthDetails.date}<br/>
                  {horoscopeContent.birthDetails.time}<br/>
                  {horoscopeContent.birthDetails.place}</p>
              </div>
            </div>

            <div className="section-divider"></div>

            <h3>Planetary Positions</h3>
            <div className="planetary-grid">
              {horoscopeContent.planetaryPositions.map((planet, index) => (
                <div key={index} className="planet-card">
                  <div className={`planet-icon ${planet.planet.toLowerCase()}`}></div>
                  <h4>{planet.planet}</h4>
                  <p className="position">{planet.position}</p>
                  <p className="influence">{planet.influence}</p>
                </div>
              ))}
            </div>

            <div className="section-divider"></div>

            <div className="traits-grid">
              <div className="trait-col positive">
                <h3>🌟 Strengths</h3>
                {horoscopeContent.traits.strengths.map((trait, i) => (
                  <div key={i} className="trait-item">{trait}</div>
                ))}
              </div>
              <div className="trait-col challenge">
                <h3>⚠️ Challenges</h3>
                {horoscopeContent.traits.challenges.map((trait, i) => (
                  <div key={i} className="trait-item">{trait}</div>
                ))}
              </div>
            </div>

            <div className="section-divider"></div>

            <h3>Best Matches</h3>
            <div className="matches-grid">
              {horoscopeContent.matches.map((sign, i) => (
                <div key={i} className="zodiac-match">
                  <div className={`zodiac-icon ${sign.toLowerCase()}`}></div>
                  <p>{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetails && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setShowDetails(false)} style={{ margin: "20px" }}>×</span>

            <h2>Personal Details</h2>

            <div className="details-section">
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Name:</strong> {detailsContent.personalInfo.name}</li>
                <li><strong>Age:</strong> {detailsContent.personalInfo.age}</li>
                <li><strong>Height:</strong> {detailsContent.personalInfo.height}</li>
                <li><strong>Education:</strong> {detailsContent.personalInfo.education}</li>
                <li><strong>Occupation:</strong> {detailsContent.personalInfo.occupation}</li>
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="details-section">
              <h3>Family Details</h3>
              <ul>
                <li><strong>Father:</strong> {detailsContent.familyDetails.father}</li>
                <li><strong>Mother:</strong> {detailsContent.familyDetails.mother}</li>
                <li><strong>Siblings:</strong> {detailsContent.familyDetails.siblings}</li>
                <li><strong>Caste:</strong> {detailsContent.familyDetails.caste}</li>
                <li><strong>Religion:</strong> {detailsContent.familyDetails.religion}</li>
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="details-section">
              <h3>Preferences</h3>
              <ul>
                <li><strong>Age Range:</strong> {detailsContent.preferences.ageRange}</li>
                <li><strong>Height Range:</strong> {detailsContent.preferences.heightRange}</li>
                <li><strong>Education:</strong> {detailsContent.preferences.education}</li>
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="details-section">
              <h3>Interests &amp; Hobbies</h3>
              <ul>
                {detailsContent.interests.map((interest, i) => (
                  <li key={i}>{interest}</li>
                ))}
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="details-section">
              <h3>Contact Information</h3>
              <ul>
                <li><strong>Email:</strong> {detailsContent.contactInfo.email}</li>
                <li><strong>Phone:</strong> {detailsContent.contactInfo.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Family Modal */}
      {showFamily && (
        <div className="modal-overlay" onClick={() => setShowFamily(false)}>
          <div className="family-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setShowFamily(false)} style={{ margin: "20px" }}>×</span>

            <h2>Family Details</h2>

            <div className="family-section">
              <h3>Father</h3>
              <p>{detailsContent.familyDetails.father}</p>
            </div>

            <div className="family-section">
              <h3>Mother</h3>
              <p>{detailsContent.familyDetails.mother}</p>
            </div>

            <div className="family-section">
              <h3>Siblings</h3>
              <p>{detailsContent.familyDetails.siblings}</p>
            </div>

            <div className="family-section">
              <h3>Caste</h3>
              <p>{detailsContent.familyDetails.caste}</p>
            </div>

            <div className="family-section">
              <h3>Religion</h3>
              <p>{detailsContent.familyDetails.religion}</p>
            </div>

            <div className="family-section">
              <h3>Family Values</h3>
              <p>
              Our family follows the traditions of the Hindu religion and belongs to the Kadvapatidar 42 Samaj. We value harmony, respect, and mutual understanding. Education and professional growth are highly encouraged, and we support each other&apos;s aspirations wholeheartedly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Expectation Modal */}
      {showExpectation && (
        <div className="modal-overlay" onClick={() => setShowExpectation(false)}>
          <div className="expectation-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setShowExpectation(false)} style={{ margin: "20px" }}>×</span>

            <h2>Expectations</h2>

            <div className="expectation-section">
              <h3>Qualities</h3>
              <ul>
                {expectationContent.qualities.map((quality, i) => (
                  <li key={i}>{quality}</li>
                ))}
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="expectation-section">
              <h3>Lifestyle</h3>
              <ul>
                {expectationContent.lifestyle.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="expectation-section">
              <h3>Preferences</h3>
              <ul>
                <li><strong>Age Range:</strong> {expectationContent.preferences.ageRange}</li>
                <li><strong>Height Range:</strong> {expectationContent.preferences.heightRange}</li>
                <li><strong>Education:</strong> {expectationContent.preferences.education}</li>
                <li><strong>Occupation:</strong> {expectationContent.preferences.occupation}</li>
              </ul>
            </div>

            <div className="section-divider"></div>

            <div className="expectation-section">
              <h3>Values</h3>
              <ul>
                {expectationContent.values.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Images */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>×</span>
            <img src={selectedImage} alt="Full View" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}
