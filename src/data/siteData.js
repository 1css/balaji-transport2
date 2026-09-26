// Central content for Balaji Transports landing page.
// Image URLs are sourced from the original balajitransports.in site.

export const heroStats = [
  { id: 1, num: "25+", label: "Years Experience" },
  { id: 2, num: "5", label: "Branches In Karnataka" },
  { id: 3, num: "100mt", label: "Max Crane Capacity" },
];

// Background media per hero slide. If `video` is set (non-empty), the slide
// plays that video muted/looped as its full-bleed background. Otherwise it
// falls back to `image`. Leave `video` as "" to use the image only.
export const heroSlidesMedia = {
  intro: {
    video: "/video1.mp4",
    image: "",
  },
  stats: {
    video: "/video3.mp4",
    image: "/Background2.jpeg",
  },
  branches: {
    video: "/video2.mp4",
    image: "/Background2.jpeg",
  },
};

export const heroHighlight = {
  kicker: "we have transported",
  num: "100+",
  unit: "Millions",
  title: "of steel accross karnataka",
  description:
    "From rake to road, we've hauled well over 100+ metric tonnes of steel for distributors, retailers and manufacturers state-wide.",
};

export const cargoProducts = [
  "CR Full Hard Coil",
  "CRCA Leader End",
  "Galvannealed Coils Finish",
  "GI Coils",
  "GI Sheets",
  "HR Black Coil",
  "HR Pickled/Oiled Coil",
  "HR Pickled/Oiled Sheet",
  "HRCTLF",
  "Roughing Mill Plate",
  "S_NOFPCF",
  "STLSTRCTL",
  "TMT Coils",
  "TMTBF",
  "WRCF",
];

export const services = [
  {
    id: 1,
    title: "Trailers Transportation",
    image: "/truck.jpeg",
    description:
      "Efficient trailer services all over Karnataka, backed by a large, well-maintained fleet.",
    points: [
      "12-Wheeler Trailer",
      "14-Wheeler Trailer",
      "16-Wheeler Trailer",
      "18-Wheeler Trailer",
      "20-Wheeler Trailer",
    ],
    productHeading: "Steel Product",
    productList: [
      "Plates Up To 40 Feet",
      "Coil, HR and CR",
      "Wire Rod",
      "TMT Bars",
      "Billets",
      "Slabs",
    ],
  },
  {
    id: 2,
    title: "Balaji Crane Services",
    image: "/crane2.png",
    description:
      "Crane facilities all over Karnataka for any kind of heavy-lift industrial requirement.",
    points: [
      "Heavy Cranes — 100mt, 80mt, 50mt & 30mt",
      "Hydra Cranes — 15mt, 14mt & 12mt",
      "Kalmar cranes",
      "Forklifts",
    ],
  },
];

// Fleet gallery: real fleet photos from balajitransports.in, supplemented
// with free-to-use stock photography (Pexels License — free for commercial
// use, no attribution required) as realistic stand-ins. Swap the "stock"
// entries for your own photography whenever you have it.
export const fleetPhotos = [
  {
    id: 1,
    type: "photo",
    size: "wide tall",
    image: "/truckgallery.jpeg",
    caption: "Multi-axle Trailer Fleet",
  },
  {
    id: 2,
    type: "photo",
    size: "",
    image: "/truck2.png",
    caption: "Heavy-Duty Crane",
  },
  {
    id: 3,
    type: "photo",
    size: "",
    image:
      "/truck3.png",
    caption: "Hydra Crane In Action",
  },
  // {
  //   id: 4,
  //   type: "photo",
  //   size: "",
  //   image:
  //     "https://images.pexels.com/photos/34585120/pexels-photo-34585120.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
  //   caption: "Forklift Loading",
  // },
  // {
  //   id: 5,
  //   type: "photo",
  //   size: "wide",
  //   image:
  //     "https://images.pexels.com/photos/34875545/pexels-photo-34875545.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop",
  //   caption: "Trailer Fleet On The Highway",
  // },
  {
    id: 6,
    type: "icon",
    size: "",
    icon: "bi-train-front",
    caption: "Rake & Siding Handling",
    sub: "SGWF Whitefield & Hosur (HSRA)",
  },
];

export const safetyPoints = [
  {
    id: 1,
    icon: "bi-person-check",
    title: "Trained & Verified Drivers",
    description:
      "Every driver goes through licence verification, route briefing and defensive-driving refreshers before being assigned a load.",
  },
  {
    id: 2,
    icon: "bi-broadcast-pin",
    title: "GPS-Enabled Fleet Tracking",
    description:
      "Our trailers and cranes are tracked in real time, so dispatch always knows where a shipment is and can react fast if something changes.",
  },
  {
    id: 3,
    icon: "bi-tools",
    title: "Routine Vehicle Inspections",
    description:
      "Scheduled maintenance and pre-trip safety checks on brakes, tyres and load-securing gear keep every vehicle road-ready.",
  },
  {
    id: 4,
    icon: "bi-shield-check",
    title: "Load Securing Standards",
    description:
      "Steel coils, sheets and TMT bars are chained, chocked and covered to fixed standards for every trip, regardless of distance.",
  },
  {
    id: 5,
    icon: "bi-headset",
    title: "24x7 Emergency Support",
    description:
      "A dedicated helpline stays reachable around the clock so drivers and clients can report and resolve issues on the road immediately.",
  },
  {
    id: 6,
    icon: "bi-clipboard-check",
    title: "Zero-Tolerance Safety Policy",
    description:
      "Overloading, unsafe driving and skipped safety checks are never acceptable — every branch is held to the same standard.",
  },
];

export const awards = [
  {
    id: 1,
    icon: "bi-trophy",
    title: "Best Logistics Partner",
    issuer: "JSW Steel — Toranagallu Works",
    description:
      "Recognised for consistent, on-time rake-to-road steel logistics performance across Karnataka.",
  },
  {
    id: 2,
    icon: "bi-award",
    title: "Safety Excellence Award",
    issuer: "Regional Transport Operators' Association",
    description:
      "Awarded for maintaining an outstanding fleet safety record and driver training standards.",
  },
  {
    id: 3,
    icon: "bi-star",
    title: "25 Years of Trusted Service",
    issuer: "Balaji Transports Milestone",
    description:
      "A quarter-century of uninterrupted logistics service to distributors, retailers and manufacturers.",
  },
  {
    id: 4,
    icon: "bi-graph-up-arrow",
    title: "Fleet Growth Recognition",
    issuer: "Karnataka Logistics Circle",
    description:
      "Acknowledged for steady fleet expansion and reliable capacity across five branches.",
  },
];

export const branches = [
  {
    id: 1,
    name: "Toranagallu Branch",
    address:
      "V.V Nagar, Truck Terminal Parking, Toranagallu, Sandur (T), Bellary - 583275",
    contact: "9448024258 (Babuwali)",
    mapUrl: "https://maps.app.goo.gl/U2cRGimdoKeDpMsu8",
  },
  {
    id: 2,
    name: "Whitefield Bangalore Branch",
    address:
      "Near Whitefield Satellite Goods Terminal, Sadarmangala Road, Whitefield, Bengaluru - 560067",
    contact: "9480030260 (Shashi), 9731645404 (Sridhar)",
    mapUrl: "https://maps.app.goo.gl/bt1JAYkYWdUozQCH8",
  },
  {
    id: 3,
    name: "Hosur Branch",
    address: "Near Railway Station, 2nd Cross, Krishnappa Nagar, Hosur - 635109",
    contact: "7676237675 (Umesh)",
    mapUrl: "https://maps.app.goo.gl/Uf9kP33oem23VJgE8",
  },
  {
    id: 4,
    name: "Maddur Branch",
    address: "Near Railway Station, Shivapura Circle, Maddur - 571428",
    contact: "8317432491 (Hanumantha)",
    mapUrl: "https://maps.app.goo.gl/gj4FsdosGmW2AAov9",
  },
];

export const team = [
  {
    id: 1,
    name: "G N Ramakrishna",
    role: "Founder",
    image: "/founder-ramakrishna.png",
  },
  {
    id: 2,
    name: "G R Balaji",
    role: "Co-Founder",
    image: "director-balaji.png",
  },
  {
    id: 3,
    name: "G R Raghu",
    role: "Co-Founder",
    image: "director-raghu.png",
  },
];

const clientAvatar =
  "https://balajitransports.in/images/62026756-user-icon-human-person-symbol-blue-circle-button-with-flat-web-icon-vector.jpg";

export const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    place: "Gulbarga",
    avatar: clientAvatar,
    quote:
      "I have been looking for a reputable logistics company in my area and I finally found one with Balaji Transports. The staff are very professional and they helped me move all my items without any damages. They delivered the container right on time as well. I highly recommend them to anyone looking for a good logistics company in Tumkur.",
  },
  {
    id: 2,
    name: "Somanna",
    place: "Madkeri",
    avatar: clientAvatar,
    quote:
      "I have been dealing with Balaji Transports for over 5 years and I am never disappointed with the service I receive. Balaji Transports is willing to go above and beyond for their customers and it shows with the positive feedback we receive with the end customers. The staff is always pleasant to deal with, prompt, professional and exceptionally knowledgeable.",
  },
  {
    id: 3,
    name: "Anand Shetty",
    place: "Tumkur",
    avatar: clientAvatar,
    quote:
      "I have been working with Balaji Transports 3+ years now. They are really wonderful. Great service & rates. I recommend it to anyone needing shipping and customs brokerage.",
  },
  {
    id: 4,
    name: "Mohammad Irfan",
    place: "Davangere",
    avatar: clientAvatar,
    quote:
      "Balaji Transports is a great trucking company. They are always on time, they offer flexible rates and they have a diverse fleet of trucks. They have helped me get my business up and running in no time.",
  },
];

// export const partners = [1, 3, 4, 5, 6, 8, 9].map((n) => ({
//   id: n,
//   image: `https://balajitransports.in/images/Partners/s${n}.jpg`,
// }));

export const partners = [
  { id: 1, image: "/APL.png" },
  { id: 2, image: "/gati.png" },
  { id: 3, image: "/jsw.PNG" },
  { id: 4, image: "/Meenakshi.png" },
  { id: 5, image: "/Ranka.png" },
  { id: 6, image: "/south.png" },
  { id: 7, image: "/tata.png" },
];

export const whatsappNumber = "919448275233"; // country code + number, no symbols

export const contactInfo = {
  phone: "+91 - 9448275233",
  email: "balaji.branch@gmail.com",
  mapLink: "https://maps.app.goo.gl/ZmvYxHgAapJpM3in8",
  address:
    "Plot No. 14, Near Vinayaka Petrol Bunk, Sathyamangala Industrial Area, Antharasanahalli - 572106",
  infoText:
    "Balaji Transports is known to satisfactorily cater to the demands of its customer base. It came into existence in 1988 and has, since then, been a known name in its field.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124216.37714684!2d77.122629!3d13.365083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02dc655555555%3A0xdde024391e7cc47b!2sBALAJI%20TRANSPORTS!5e0!3m2!1sen!2sin!4v1699699539569!5m2!1sen!2sin",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "brochures", label: "Brochures" },
  { id: "gallery", label: "Fleet" },
  { id: "safety", label: "Safety" },
  { id: "branches", label: "Branches" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact" },
];

export const careerInfo = {
  email: "balaji.branch@gmail.com",
  whatsapp: "9900909038",
  whatsappDisplay: "9900909038",
  location: "Karnataka",
};

export const careerRoles = [
  {
    id: 1,
    slug: "drivers",
    icon: "bi-truck-front",
    title: "Drivers",
    description:
      "Licensed heavy-vehicle and trailer drivers for long-haul and intra-state steel logistics routes.",
    phone: "+91 -9900909038",
    whatsapp: "9900909038",
    email: "balaji.branch@gmail.com",
    details: {
      requirements: [
        {
          label: "Vehicle Type",
          value: "12 / 14 / 16 / 18 / 20-Wheeler Trailers",
        },
        { label: "Age", value: "21 – 58 years" },
        {
          label: "Licence",
          value: "Valid Heavy Motor Vehicle (HMV) Driving Licence",
        },
        {
          label: "Experience",
          value: "2+ years driving heavy trailers / steel cargo preferred",
        },
      ],
      documents: [
        "Driving Licence (Heavy Vehicle)",
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Recent Passport-Size Photo",
      ],
      location:
        "Toranagallu, Whitefield (Bengaluru), Hosur & Maddur — Karnataka",
    },
  },
  {
    id: 2,
    slug: "crane-hydra-operators",
    icon: "bi-gear-wide-connected",
    title: "Crane & Hydra Operators",
    description:
      "Experienced operators for heavy cranes, hydra cranes and forklifts across our branches.",
    phone: "+91 - 9900909038",
    whatsapp: "9900909038",
    email: "balaji.branch@gmail.com",
    details: {
      requirements: [
        {
          label: "Equipment Type",
          value: "Heavy Cranes (30–100mt), Hydra Cranes, Forklifts",
        },
        { label: "Age", value: "21 – 55 years" },
        { label: "Licence", value: "Valid Crane / Hydra Operator Licence" },
        {
          label: "Experience",
          value: "2+ years operating heavy-lift equipment preferred",
        },
      ],
      documents: [
        "Crane / Hydra Operator Licence",
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Recent Passport-Size Photo",
      ],
      location:
        "Toranagallu, Whitefield (Bengaluru), Hosur & Maddur — Karnataka",
    },
  },
  {
    id: 3,
    slug: "logistics-dispatch",
    icon: "bi-signpost-split",
    title: "Logistics & Dispatch",
    description:
      "Coordinators to plan routes, track shipments and keep rake and road movements on schedule.",
    phone: "+91 - 9900909038",
    whatsapp: "9900909038",
    email: "balaji.branch@gmail.com",
    details: {
      requirements: [
        {
          label: "Qualification",
          value: "Graduate / Diploma in Logistics or related field preferred",
        },
        { label: "Age", value: "21 – 45 years" },
        {
          label: "Skills",
          value: "Route planning, GPS tracking tools, MS Excel",
        },
        {
          label: "Experience",
          value: "1+ years in logistics / dispatch coordination preferred",
        },
      ],
      documents: [
        "Educational Certificates",
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Recent Passport-Size Photo",
      ],
      location: "Head Office, Tumakuru — Karnataka",
    },
  },
  {
    id: 4,
    slug: "branch-office-staff",
    icon: "bi-briefcase",
    title: "Branch & Office Staff",
    description:
      "Admin, accounts and customer-facing roles supporting our branches across Karnataka.",
    phone: "+91 - 9900909038",
    whatsapp: "9900909038",
    email: "balaji.branch@gmail.com",
    details: {
      requirements: [
        {
          label: "Qualification",
          value: "PUC / Graduate; basic computer knowledge",
        },
        { label: "Age", value: "20 – 45 years" },
        {
          label: "Skills",
          value: "Communication, record-keeping, customer coordination",
        },
        {
          label: "Experience",
          value: "Freshers welcome; prior admin/accounts experience a plus",
        },
      ],
      documents: [
        "Educational Certificates",
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Recent Passport-Size Photo",
      ],
      location: "All 5 Branches — Karnataka",
    },
  },
  {
    id: 5,
    slug: "vehicle-maintenance",
    icon: "bi-wrench-adjustable-circle",
    title: "Vehicle Maintenance",
    description:
      "Mechanics and technicians for preventive maintenance, repairs and pre-trip inspections across our trailer and crane fleet.",
    phone: "+91 - 9900909038",
    whatsapp: "9900909038",
    email: "balaji.branch@gmail.com",
    details: {
      requirements: [
        {
          label: "Vehicle Type",
          value: "Heavy Trailers, Cranes & Hydra Vehicles",
        },
        { label: "Age", value: "21 – 55 years" },
        {
          label: "Qualification",
          value:
            "ITI / Diploma in Automobile or Mechanical (or equivalent experience)",
        },
        {
          label: "Experience",
          value: "2+ years heavy-vehicle maintenance & repair preferred",
        },
      ],
      documents: [
        "ITI / Diploma Certificate (if applicable)",
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Recent Passport-Size Photo",
      ],
      location: "Tumakuru — Karnataka",
    },
  },
];

export const careerPerks = [
  { id: 1, icon: "bi-graph-up-arrow", text: "25+ years of stability and growth" },
  { id: 2, icon: "bi-geo-alt", text: "5 branches across Karnataka to grow with" },
  { id: 3, icon: "bi-people", text: "A safety-first, team-driven culture" },
];

// Downloadable brochures (PDFs live in /public/brochures). To replace a
// brochure, drop a new PDF + cover image in that folder and update the paths.
export const brochures = [
  {
    id: 1,
    tag: "Company Profile",
    icon: "bi-building",
    title: "Balaji Transports Company Profile",
    description:
      "Our story, fleet, safety standards, branch network and the steel products we move across Karnataka.",
    file: "/brochures/balaji-company-profile.pdf",
    cover: "/brochures/balaji-company-profile-cover.jpg",
    pages: 4,
    size: "1.9 MB",
    featured: true,
  },
  {
    id: 2,
    tag: "Service Brochure",
    icon: "bi-truck",
    title: "Trailers Transportation",
    description:
      "12 to 20-wheeler trailer options, typical cargo, how we work and how to book a vehicle.",
    file: "/brochures/balaji-trailer-transportation.pdf",
    cover: "/brochures/balaji-trailer-transportation-cover.jpg",
    pages: 2,
    size: "0.8 MB",
  },
  {
    id: 3,
    tag: "Service Brochure",
    icon: "bi-gear-wide-connected",
    title: "Balaji Crane Services",
    description:
      "Heavy cranes up to 100mt, hydra cranes, Kalmar reach stackers and forklifts for industrial lifting.",
    file: "/brochures/balaji-crane-services.pdf",
    cover: "/brochures/balaji-crane-services-cover.jpg",
    pages: 2,
    size: "0.9 MB",
  },
];
