function openModal(id) {
  document.getElementById(id).style.display = "block";

}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  let modal = document.getElementById("appointmentModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");

  // dictionary
  const translations = {
    en: {
      heroTitle: "Excellence in Healthcare",
      heroDesc: "Comprehensive medical care with cutting-edge technology and compassionate professionals. Your health is our priority.",
      whyChoose: "Why Choose MediCare Plus?",
      services: "Our Medical Specialties",
      doctors: "Meet Our Expert Doctors",
      features: "Patient-Centric Features",
      pp:"National Accreditation Board for Hospitals & Healthcare Providers certified facility"
    },
    hi: {
      heroTitle: "स्वास्थ्य सेवा में उत्कृष्टता",
      heroDesc: "उन्नत तकनीक और दयालु पेशेवरों के साथ संपूर्ण चिकित्सा देखभाल। आपका स्वास्थ्य हमारी प्राथमिकता है।",
      whyChoose: "मेडीकेयर प्लस क्यों चुनें?",
      services: "हमारी चिकित्सा विशेषताएँ",
      doctors: "हमारे विशेषज्ञ डॉक्टरों से मिलें",
      features: "रोगी-केंद्रित सुविधाएँ",
      pp:"राष्ट्रीय अस्पताल एवं स्वास्थ्य सेवा प्रदाता प्रत्यायन बोर्ड द्वारा प्रमाणित सुविधा"
    }
  };

  let currentLang = "en";

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    langBtn.textContent = currentLang === "en" ? "हिंदी" : "EN";

    // Hero Section
    document.querySelector(".hero-content h1").textContent = translations[currentLang].heroTitle;
    document.querySelector(".hero-content p").textContent = translations[currentLang].heroDesc;

    // Trust Section Title
    document.querySelector(".trust-section .section-title").textContent = translations[currentLang].whyChoose;

    // Services Section
    document.querySelector(".services .section-title").textContent = translations[currentLang].services;
    document.querySelector(".services .pp").textContent = translations[currentLang].services;

    // Doctors Section
    document.querySelector(".doctors .section-title").textContent = translations[currentLang].doctors;

    // Features Section
    document.querySelector(".features .section-title").textContent = translations[currentLang].features;
  });
});