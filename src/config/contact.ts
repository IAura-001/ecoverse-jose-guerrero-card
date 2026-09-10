export type ContactConfig = {
  fullName: string;
  company: string;
  jobTitle: string;
  description: string;

  phone: string;
  phoneDisplay: string;
  phoneActionDisplay: string;
  whatsapp: string;
  email: string;

  instagramEcoverse: {
    label: string;
    context: string;
    detail?: string;
    url: string;
  };

  instagramPersonal: {
    label: string;
    context: string;
    detail?: string;
    url: string;
  };

  reviews: {
    label: string;
    context: string;
    detail?: string;
    url: string;
  };

  officeLocation: {
    label: string;
    context: string;
    detail?: string;
    url: string;
  };

  website: {
    label: string;
    context: string;
    detail?: string;
    displayDomain: string;
    url: string;
  };

  features: {
    title: string;
    subtitle: string;
  }[];

  productionUrl: string;
};

// Single source of truth for card content.
export const contact: ContactConfig = {
  fullName: "José Guerrero",
  company: "ECOVERSE",
  jobTitle: "Ejecutivo de Ventas",
  description: "",

  phone: "+17867026294",
  phoneDisplay: "+1 (786) 702-6294",
  phoneActionDisplay: "+1 786-702-6294",
  whatsapp: "https://wa.me/17867026294",
  email: "",

 instagramEcoverse: {
  label: "Instagram ECOVERSE",
  context: "@ecoverseusa",
  url: "https://www.instagram.com/ecoverseusa?igsi=MmZ5ajMwbTY4d2R3",
},

instagramPersonal: {
  label: "",
  context: "",
  detail: "",
  url: "",
},

  reviews: {
    label: "Reseñas en Google",
    context: "Conoce la experiencia de nuestros clientes",
    url: "https://maps.app.goo.gl/LiujNRYbod8yVGJH6?g_st=com.google.maps.preview.copy",
  },

  officeLocation: {
    label: "Oficina Fort Myers",
    context: "11000 Metro Pkwy, Fort Myers, FL 33966",
    url: "https://www.google.com/maps/search/?api=1&query=11000+Metro+Pkwy+Fort+Myers+FL+33966",
  },

  website: {
    label: "Sitio oficial ECOVERSE",
    context: "Conoce nuestros productos",
    displayDomain: "ecoverseusa.com",
    url: "https://www.ecoverseusa.com",
  },

  features: [
    { title: "Agua alcalina", subtitle: "pH 10.5" },
    { title: "Tecnología", subtitle: "De calidad" },
    { title: "Salud y bienestar", subtitle: "Para tu hogar" },
    { title: "Sostenible", subtitle: "Y ecológico" },
  ],

  productionUrl: process.env.NEXT_PUBLIC_CARD_URL ?? "",
};