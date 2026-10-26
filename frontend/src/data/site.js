// MP Industries — Site-wide constants
export const SITE = {
  name: "MP Industries",
  tagline: "Built for the machines that build India",
  founded: 1990,
  relaunched: 2017,
  yearsExperience: "35+",
  productCount: "69+",
  phonePrimary: "+91 9824155389",
  phoneSecondary: "+91 9824155380",
  whatsappNumber: "919824155389",
  email: "mpcementmixerparts@gmail.com",
  addressShort: "Ahmedabad, Gujarat, India",
  addressFull: "9D, E Subhash Industrial Estate, Near Sindhwai Mata Mandir, CTM Ramol Road, Ahmedabad, Gujarat 380026",
  domain: "https://www.mpindustries.in",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235253.99005580036!2d72.41492279726562!3d23.020205400000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const buildWhatsAppInquiryURL = ({ productName, name, phone, customPart }) => {
  let message = `Hi MP Industries! I am interested in ${productName}. My name is ${name} and my contact number is ${phone}. Please share more details.`;
  if (customPart) {
    message += " I also need a custom part specification.";
  }
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const whatsappChatURL = (text = "Hi MP Industries! I would like to discuss a requirement.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
