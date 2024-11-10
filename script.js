// script.js

// Smooth scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Show feature details dynamically
  function showFeatureDetails(feature) {
    const details = {
      connect: 'Agritech Connect facilitates direct communication between farmers and chemical engineers for personalized guidance on fertilizer use.',
      recommendations: 'Using data from soil testing, crop needs, and local conditions, the platform provides tailored fertilizer recommendations.',
      support: 'On-farm support from experts, including assessments and problem-solving for unique challenges.',
      technology: 'Our user-friendly web platform enables easy information sharing, data management, and efficient communication.'
    };
  
    document.getElementById('feature-details').innerText = details[feature] || 'Select a feature to learn more.';
  }
  