import Image from "next/image";
import ContactForm from "./components/ContactForm";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FaqAccordion from "./components/FaqAccordion";

const CORE_SERVICES = [
  {
    title: "Medical",
    desc: "Responsive and expert medical care with digital monitoring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        <path d="M8 12h2l1-3 2 6 1-3h2" />
      </svg>
    ),
  },
  {
    title: "Home Security and Monitoring",
    desc: "Your eyes, your safety, our priority.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Financial Planning & Investing",
    desc: "Smart financial planning builds wealth and security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Estate Planning",
    desc: "Secure your legacy with smart estate planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: "Nutrition",
    desc: "Healthy nutrition fuels body, mind, and life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M12 20c-3.5 0-6-3-6-7 0-3 1.5-6 4-6 1.5 0 2 1 4 1s2.5-1 4-1c2.5 0 4 3 4 6 0 4-2.5 7-6 7" />
        <path d="M12 8c0-3-1-5-3-6" />
      </svg>
    ),
  },
  {
    title: "Chartered Accountant (Tax Planning & Filing)",
    desc: "Expert tax planning, seamless filing, stress-free finances.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Yoga",
    desc: "Balance and wellness through yoga.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5l-3 8" />
        <path d="M12 12l3 8" />
        <path d="M5 11l7 1 7-1" />
      </svg>
    ),
  },
  {
    title: "Online Community",
    desc: "Connect, share, grow together in online community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="18" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: "Senior Proofing Home and Appliance",
    desc: "Safe homes, senior-friendly spaces, worry-free living.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Home Attendants & Nurses",
    desc: "Caring hands, trusted home attendants and nurses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 22v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
  },
];

const MISSION_PILLARS = [
  {
    title: "Trusted Providers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Tech Forward",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Community Engagement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const COMMUNITY_CARDS = [
  {
    title: "Share Your Journey",
    desc: "Connect with caregivers, share experiences, and find solace in stories of resilience and compassion.",
    icon: (
      <svg width="138" height="143" viewBox="0 0 138 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.4371 1.2797C71.0799 0.957488 70.6239 0.778725 70.1513 0.775637C69.6787 0.772548 69.2205 0.945337 68.8595 1.26285L1.8697 60.3113C1.65117 60.5063 1.47638 60.7488 1.35764 61.0217C1.2389 61.2947 1.1791 61.5914 1.18245 61.8911L1.37753 127.021C1.40362 135.733 11.6894 142.525 24.7919 142.483L69.1367 142.339C69.1921 142.339 69.244 142.339 69.2958 142.32C69.3477 142.302 69.3858 142.32 69.4308 142.32C69.9556 142.318 70.4583 142.1 70.8283 141.712C71.1983 141.324 71.4052 140.8 71.4036 140.253L71.3252 114.083C77.0314 109.743 108.31 84.789 97.7545 68.7703C94.7306 64.1843 90.9136 61.607 86.4108 61.1102C79.0319 60.3057 71.9995 65.4214 69.1626 67.8222C66.2496 65.5553 59.0733 60.7667 51.5887 61.6266C47.0647 62.1527 43.2247 64.6216 40.1723 68.9644C38.2464 71.708 37.5642 74.9518 38.146 78.6057C40.4486 93.0844 62.6719 110.549 67.3637 114.093L67.436 138.224L24.7553 138.363C14.2339 138.397 5.32992 133.199 5.31138 127.012L5.11917 62.8363L70.1248 5.55203L133.192 62.399L133.385 126.592C133.403 132.78 124.53 138.035 114.009 138.069L88.4372 138.152C87.9263 138.176 87.444 138.405 87.0911 138.79C86.7383 139.175 86.5421 139.688 86.5437 140.22C86.5453 140.753 86.7445 141.264 87.0997 141.647C87.4548 142.03 87.9385 142.256 88.4496 142.276L114.032 142.193C127.138 142.151 137.379 135.292 137.353 126.58L137.158 61.4497C137.156 61.1538 137.092 60.8619 136.972 60.5938C136.852 60.3257 136.678 60.0877 136.461 59.896L71.4371 1.2797ZM42.0536 77.9411C41.6481 75.3851 42.0777 73.2587 43.3696 71.4068C45.7364 68.0387 48.6439 66.1275 52.0023 65.7349C52.4536 65.6801 52.9075 65.6521 53.3618 65.6512C60.7001 65.6274 67.8292 71.9901 67.9125 72.0583C68.2836 72.3945 68.7618 72.5747 69.2537 72.5638C69.7455 72.5528 70.2159 72.3516 70.5729 71.9992C70.6523 71.9234 78.4006 64.3705 85.9906 65.2175C89.334 65.5849 92.1146 67.5136 94.485 71.1076C101.805 82.2133 79.8087 102.49 69.3458 110.495C64.2932 106.618 44.0284 90.3787 42.0536 77.9411Z" fill="white" fillOpacity="0.51" />
        <path d="M85.9687 65.4159C82.2414 65 78.4544 66.6477 75.5705 68.4321C72.6925 70.2129 70.7478 72.1094 70.7114 72.1442L70.7105 72.1432C70.3182 72.5292 69.8011 72.7521 69.2582 72.7642C68.7175 72.7762 68.1931 72.5787 67.7859 72.2133L67.4383 71.9175C66.7896 71.3786 65.2772 70.1828 63.2567 68.9926C60.6427 67.453 57.2014 65.9372 53.7013 65.8547L53.3624 65.8509C52.9162 65.8518 52.47 65.8795 52.0267 65.9333L52.0258 65.9333C48.8391 66.306 46.0544 68.0735 43.7544 71.2132L43.5337 71.5215C42.2758 73.3247 41.8524 75.3969 42.251 77.9095L42.3553 78.4873C42.9426 81.3919 44.4976 84.5031 46.6063 87.6171C48.8539 90.9359 51.7215 94.2445 54.689 97.2891C60.5298 103.282 66.7446 108.241 69.3451 110.242C74.5726 106.229 82.5945 99.2233 88.4268 91.8407C91.3663 88.1198 93.7411 84.3143 94.9268 80.758C96.0749 77.3146 96.1012 74.1296 94.48 71.4733L94.3181 71.218C92.0439 67.7697 89.4075 65.8943 86.2735 65.454L85.9687 65.4159ZM137.553 126.579C137.566 131.021 134.961 134.97 130.728 137.804C126.494 140.638 120.618 142.372 114.032 142.394L88.4417 142.477L88.4417 142.476C87.8767 142.453 87.3435 142.204 86.9533 141.783C86.5633 141.363 86.3459 140.802 86.3441 140.221C86.3424 139.639 86.5565 139.079 86.9439 138.655C87.3316 138.232 87.8632 137.979 88.4282 137.952L114.008 137.869C119.238 137.852 124.051 136.537 127.548 134.466C131.05 132.391 133.193 129.585 133.184 126.593L132.992 62.4879L70.1222 5.81961L5.31929 62.9258L5.51123 127.011C5.52037 130.003 7.68077 132.796 11.1959 134.847C14.7045 136.896 19.5247 138.18 24.7547 138.163L67.2349 138.025L67.1635 114.191C64.7442 112.36 58.0842 107.145 51.7155 100.589C48.4954 97.2742 45.3458 93.6137 42.8562 89.8714C40.5234 86.3648 38.7622 82.7758 38.0717 79.3254L37.9485 78.6373C37.3594 74.9379 38.0501 71.64 40.0091 68.8493L40.2998 68.4441C43.3317 64.3137 47.1193 61.9451 51.566 61.428L51.9213 61.3917C55.5874 61.0555 59.1564 62.0311 62.1715 63.3692C65.196 64.7115 67.6752 66.4249 69.1567 67.5662C70.5999 66.3569 73.0268 64.5303 75.9959 63.084C79.0496 61.5965 82.692 60.5037 86.4328 60.9115L86.8597 60.9648C91.2481 61.5817 94.9682 64.1808 97.9218 68.6604L98.1652 69.0434C100.604 73.0208 100.572 77.5101 99.0704 82.061C97.5221 86.7543 94.406 91.5328 90.7925 95.9327C83.6305 104.653 74.4722 111.933 71.5258 114.18L71.6039 140.253C71.6054 140.775 71.4323 141.28 71.117 141.683L70.973 141.85C70.5663 142.276 70.0116 142.518 69.431 142.52C69.407 142.52 69.3861 142.518 69.3724 142.516L69.349 142.512C69.2648 142.539 69.1849 142.539 69.1371 142.539L24.7926 142.683C18.209 142.705 12.3217 141.009 8.07113 138.202C3.82076 135.396 1.19058 131.464 1.17726 127.022L0.982186 61.892C0.978717 61.5648 1.04477 61.2407 1.17465 60.9421L1.28338 60.724C1.40344 60.513 1.55649 60.3229 1.73677 60.162L1.73775 60.161L68.7272 1.11318L68.7272 1.1122L68.8811 0.98963C69.2511 0.71899 69.695 0.572423 70.1524 0.575346L70.3477 0.58643C70.7994 0.631446 71.2273 0.82124 71.571 1.13129L136.596 59.7477L136.595 59.7477C136.832 59.9582 137.023 60.2186 137.154 60.5115C137.286 60.8051 137.355 61.125 137.357 61.4483L137.553 126.579Z" stroke="#4A90E2" strokeOpacity="0.3" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    title: "Enhance Social Wellbeing",
    desc: "Join us as we host fun online events such as cooking classes, antakshari, and trivia games.",
    icon: (
      <svg width="133" height="133" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M66.2553 111.143C68.4819 111.143 70.5049 110.23 71.9728 108.762C73.4408 107.294 74.3536 105.272 74.3536 103.045V59.2102C74.3536 56.9835 73.4407 54.9606 71.9728 53.4926C70.5049 52.0247 68.4819 51.1119 66.2553 51.1119C64.0287 51.1119 62.0057 52.0247 60.5378 53.4926C59.0698 54.9606 58.157 56.9835 58.157 59.2102V103.045C58.157 105.272 59.0699 107.294 60.5378 108.762C62.0057 110.23 64.0287 111.143 66.2553 111.143ZM5.70582 127.777C5.54546 127.839 5.39744 127.858 5.26792 127.827C5.13839 127.802 5.00888 127.728 4.89169 127.611C4.7745 127.494 4.70665 127.364 4.67581 127.235C4.64497 127.105 4.66348 126.957 4.72515 126.797L12.768 106.406C13.4403 104.698 13.724 102.958 13.6068 101.231C13.4958 99.5044 12.99 97.8083 12.0895 96.1924C9.59164 91.6838 7.63643 86.8359 6.32275 81.7414C5.05219 76.8134 4.3737 71.6201 4.3737 66.248C4.3737 49.1638 11.3001 33.6949 22.4953 22.5001C33.6897 11.3057 49.159 4.37854 66.2432 4.37854C83.3274 4.37854 98.7963 11.3049 109.991 22.5001C121.185 33.6945 128.113 49.1638 128.113 66.248C128.113 83.3322 121.186 98.8012 109.991 109.996C98.7966 121.19 83.3274 128.117 66.2432 128.117C60.8711 128.117 55.6778 127.439 50.7498 126.175C45.6551 124.861 40.8073 122.906 36.2988 120.408C34.6829 119.513 32.9866 119.008 31.2597 118.891C29.539 118.78 27.7934 119.057 26.085 119.736L5.68817 127.778L5.70582 127.777ZM22.7158 125.779L7.30261 131.861C6.34661 132.237 5.34124 132.317 4.37903 132.12C3.42303 131.922 2.53482 131.447 1.80093 130.719L1.79476 130.713C1.06696 129.986 0.592042 129.091 0.394674 128.135C0.197305 127.179 0.277488 126.168 0.653717 125.212L8.69656 104.821C9.13446 103.711 9.3195 102.601 9.2455 101.515C9.17765 100.436 8.85076 99.3625 8.27716 98.3264C5.60653 93.5032 3.51568 88.3037 2.10316 82.8268C0.73391 77.5102 0 71.9531 0 66.2542C0 47.9605 7.41363 31.3942 19.4037 19.4037C31.3937 7.41316 47.9605 0 66.2542 0C84.5479 0 101.114 7.41363 113.105 19.4037C125.095 31.3937 132.515 47.9605 132.515 66.2542C132.515 84.5542 125.101 101.114 113.105 113.105C101.115 125.095 84.5479 132.508 66.2542 132.508C60.5552 132.508 54.9981 131.781 49.6816 130.405C44.2045 128.993 39.0052 126.902 34.182 124.231C33.152 123.658 32.0788 123.337 30.9933 123.263C29.9078 123.195 28.7976 123.374 27.6873 123.812L22.71 125.773L22.7158 125.779ZM66.2537 16.9738C62.8059 16.9738 59.6788 18.3739 57.4214 20.6313C55.164 22.8887 53.7639 26.0158 53.7639 29.4636C53.7639 32.9114 55.164 36.0385 57.4214 38.2959C59.685 40.5533 62.8059 41.9534 66.2537 41.9534C69.7015 41.9534 72.8286 40.5533 75.086 38.2959C77.3435 36.0385 78.7435 32.9114 78.7435 29.4636C78.7435 26.0158 77.3434 22.8887 75.086 20.6313C72.8286 18.3738 69.7015 16.9738 66.2537 16.9738ZM71.9836 23.7399C70.5156 22.272 68.4927 21.3653 66.2537 21.3653C64.0148 21.3653 61.9918 22.272 60.5239 23.7399C59.056 25.2078 58.1493 27.2308 58.1493 29.4697C58.1493 31.7087 59.056 33.7316 60.5239 35.1996C61.9918 36.6675 64.0148 37.5742 66.2537 37.5742C68.4927 37.5742 70.5156 36.6675 71.9836 35.1996C73.4515 33.7316 74.3582 31.7087 74.3582 29.4697C74.3582 27.2308 73.4515 25.2078 71.9836 23.7399ZM66.2537 115.535C62.8182 115.535 59.6913 114.129 57.4277 111.865C55.1641 109.602 53.7579 106.481 53.7579 103.046V59.2108C53.7579 55.7753 55.1642 52.6484 57.4277 50.3848C59.6913 48.1212 62.8122 46.715 66.2537 46.715C69.6892 46.715 72.8161 48.1212 75.0797 50.3848C77.3433 52.6484 78.7495 55.7693 78.7495 59.2108V103.046C78.7495 106.481 77.3433 109.608 75.0797 111.865C72.8161 114.129 69.6952 115.535 66.2537 115.535Z" fill="white" fillOpacity="0.51" />
        <path d="M66.2539 0.200195C84.2074 0.200195 100.492 7.36206 112.399 18.9883L112.963 19.5449C124.917 31.4989 132.314 48.0155 132.314 66.2539C132.314 84.2136 125.153 100.492 113.521 112.399L112.963 112.963C101.009 124.917 84.4924 132.309 66.2539 132.309C60.9272 132.309 55.7251 131.67 50.7285 130.461L49.7314 130.212C44.6122 128.892 39.7363 126.977 35.1846 124.549L34.2793 124.057C33.3567 123.543 32.398 123.226 31.4248 123.104L31.0068 123.063H31.0059C30.0289 123.002 29.0343 123.135 28.04 123.47L27.6143 123.626L22.6367 125.587L22.3525 125.699L22.3574 125.704L7.22949 131.675C6.3096 132.037 5.34324 132.113 4.41895 131.924H4.41992C3.61757 131.758 2.86339 131.389 2.21387 130.829L1.94141 130.577L1.93652 130.572C1.32365 129.959 0.897539 129.224 0.673828 128.436L0.59082 128.095C0.424987 127.291 0.463039 126.447 0.717773 125.632L0.839844 125.285L8.88281 104.895C9.27452 103.901 9.46932 102.905 9.46094 101.922L9.44531 101.502C9.38409 100.529 9.11833 99.5645 8.66016 98.6289L8.45215 98.2295C5.95606 93.7215 3.96747 88.884 2.56836 83.7979L2.29688 82.7773C0.931725 77.4766 0.200195 71.9356 0.200195 66.2539C0.200279 48.3003 7.36194 32.0157 18.9883 20.1084L19.5449 19.5449C31.4989 7.59046 48.0155 0.20028 66.2539 0.200195ZM66.2432 4.17871C49.3718 4.17871 34.07 10.9126 22.8838 21.835L22.3535 22.3584C11.1223 33.5891 4.17383 49.1087 4.17383 66.248C4.17383 71.3002 4.77229 76.1952 5.89746 80.8613L6.12891 81.791C7.36455 86.5829 9.16599 91.1575 11.4512 95.4375L11.915 96.2891V96.29C12.7463 97.7818 13.2342 99.3405 13.3818 100.927L13.4072 101.244V101.245C13.5151 102.835 13.2771 104.437 12.7012 106.018L12.582 106.333L4.53906 126.724L4.53809 126.725C4.48491 126.863 4.45535 127.005 4.46191 127.144L4.48145 127.281C4.5111 127.406 4.56692 127.528 4.65332 127.642L4.75 127.752C4.88621 127.888 5.0475 127.985 5.22168 128.021V128.021H5.22461C5.2266 128.022 5.22847 128.023 5.23047 128.023V128.022C5.40876 128.063 5.59596 128.034 5.77734 127.964L5.77539 127.959L26.1582 119.922H26.1592C27.8408 119.254 29.5563 118.98 31.2461 119.089V119.09C32.8362 119.198 34.4016 119.641 35.9023 120.422L36.2021 120.583C40.4423 122.932 44.9818 124.803 49.7441 126.113L50.7002 126.368C55.6443 127.637 60.8543 128.317 66.2432 128.317C83.1148 128.317 98.4163 121.583 109.603 110.66L110.133 110.138C121.364 98.907 128.312 83.3874 128.312 66.248C128.312 49.3767 121.579 34.0748 110.656 22.8887L110.133 22.3584C98.9021 11.1272 83.3826 4.17871 66.2432 4.17871ZM66.2539 46.915C69.4224 46.9151 72.3247 48.1306 74.5107 50.1182L74.9385 50.5264C77.1663 52.7543 78.5498 55.8252 78.5498 59.2109V103.046C78.5497 106.214 77.3331 109.116 75.3457 111.297L74.9385 111.724C72.7106 113.952 69.6397 115.335 66.2539 115.335C63.0854 115.335 60.1832 114.119 57.9971 112.132L57.5693 111.724C55.3415 109.496 53.9581 106.425 53.958 103.046V59.2109C53.958 56.0425 55.1736 53.1402 57.1611 50.9541L57.5693 50.5264C59.7973 48.2984 62.8681 46.915 66.2539 46.915ZM66.2549 50.9121C64.1152 50.9122 62.1594 51.7345 60.6846 53.0762L60.3965 53.3516C58.8931 54.855 57.9571 56.9277 57.957 59.21V103.045C57.957 105.185 58.7795 107.14 60.1211 108.615L60.3965 108.904C61.8998 110.407 63.9728 111.343 66.2549 111.343C68.3948 111.343 70.3512 110.521 71.8262 109.179L72.1143 108.904C73.6177 107.401 74.5537 105.327 74.5537 103.045V59.21C74.5537 57.0703 73.7312 55.1145 72.3896 53.6396L72.1143 53.3516C70.6108 51.8481 68.5373 50.9121 66.2549 50.9121ZM66.2539 17.1738C69.4345 17.1739 72.3377 18.3844 74.5186 20.3662L74.9443 20.7725C77.1657 22.9939 78.5439 26.0712 78.5439 29.4639C78.5439 32.6444 77.3333 35.5477 75.3516 37.7285L74.9443 38.1543C72.7229 40.3756 69.6464 41.7529 66.2539 41.7529C63.0734 41.7529 60.1757 40.5426 57.9902 38.5605L57.5625 38.1543C55.3413 35.9329 53.9639 32.8563 53.9639 29.4639C53.9639 26.2833 55.1746 23.3801 57.1562 21.1992L57.5625 20.7725C59.7839 18.5511 62.8613 17.1738 66.2539 17.1738ZM66.2539 21.165C64.1031 21.165 62.1462 21.982 60.6709 23.3232L60.3828 23.5986C58.879 25.1025 57.9492 27.1755 57.9492 29.4697C57.9492 31.6206 58.7661 33.5774 60.1074 35.0527L60.3828 35.3408C61.8867 36.8446 63.9598 37.7744 66.2539 37.7744C68.4045 37.7744 70.3607 36.9572 71.8359 35.6162L72.125 35.3408C73.6288 33.837 74.5586 31.7639 74.5586 29.4697C74.5586 27.3189 73.7416 25.362 72.4004 23.8867L72.125 23.5986C70.6212 22.0948 68.548 21.1651 66.2539 21.165Z" stroke="#4A90E2" strokeOpacity="0.3" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    title: "Learn and Grow",
    desc: "Explore tips and resources tailored for caregivers, empowering you to navigate challenges and provide better care.",
    icon: (
      <svg width="84" height="144" viewBox="0 0 84 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M83.3684 41.0526H72.9474C67.4262 41.0547 61.9873 42.391 57.0938 44.9477C52.2003 47.5044 47.9971 51.2059 44.8421 55.7368V34.2632C44.8004 25.1615 41.1554 16.4469 34.7048 10.0258C28.2541 3.60472 19.5228 -9.5758e-05 10.4211 1.90781e-09H1.90781e-09V10.4211C-9.5758e-05 19.5228 3.60472 28.2541 10.0258 34.7048C16.4469 41.1554 25.1615 44.8004 34.2632 44.8421H38.5263V90.3158C35.3693 85.8358 31.1837 82.1785 26.3208 79.6509C21.4578 77.1233 16.0595 75.7991 10.5789 75.7895H1.90781e-09V86.3684C-9.5758e-05 95.4702 3.60472 104.201 10.0258 110.652C16.4469 117.103 25.1615 120.748 34.2632 120.789H38.5263V137.684H10.5789V144H72.7895V137.684H44.8421V85.8947H49.1053C58.1796 85.8532 66.8705 82.23 73.2871 75.8134C79.7037 69.3968 83.3269 60.7059 83.3684 51.6316V41.0526ZM6.31579 10.4211V6.31579H10.5789C17.9783 6.35724 25.0627 9.315 30.2949 14.5472C35.5271 19.7794 38.4849 26.8638 38.5263 34.2632V38.5263H34.2632C26.8366 38.4846 19.7284 35.5051 14.4917 30.2389C9.25507 24.9726 6.31567 17.8478 6.31579 10.4211ZM34.2632 114.474C26.8366 114.432 19.7284 111.452 14.4917 106.186C9.25507 100.92 6.31567 93.7951 6.31579 86.3684V82.1053H10.5789C18.0055 82.147 25.1137 85.1265 30.3504 90.3927C35.587 95.659 38.5264 102.784 38.5263 110.211V114.474H34.2632ZM77.0526 51.6316C77.0112 59.0309 74.0534 66.1154 68.8212 71.3475C63.5891 76.5797 56.5046 79.5375 49.1053 79.5789H44.8421V75.4737C44.8421 68.0197 47.8032 60.871 53.074 55.6003C58.3447 50.3295 65.4934 47.3684 72.9474 47.3684H77.2105L77.0526 51.6316Z" fill="white" fillOpacity="0.51" />
        <path d="M10.4209 0.200195C19.187 0.200103 27.6078 3.56311 33.9561 9.57715L34.5635 10.168C40.7762 16.3523 44.3716 24.6761 44.6279 33.417L44.6426 34.2637V56.374L45.0059 55.8516C48.0444 51.4877 52.0613 47.8972 56.7324 45.3662L57.1865 45.125C61.8996 42.6626 67.1214 41.339 72.4336 41.2568L72.9473 41.2529H83.168V51.6318C83.1277 60.3712 79.7462 68.7526 73.7354 75.0674L73.1455 75.6719C66.7662 82.0511 58.1261 85.653 49.1045 85.6943H44.6426V137.884H72.5898V143.8H10.7793V137.884H38.7266V120.59H34.2637C25.4979 120.55 17.0929 117.147 10.7725 111.104L10.168 110.511C3.78419 104.098 0.2001 95.417 0.200195 86.3682V75.9893H10.5781L11.0889 75.9941C16.1918 76.0795 21.2102 77.3111 25.7734 79.5967L26.2285 79.8281C31.063 82.341 35.2247 85.9768 38.3633 90.4307L38.7266 90.9473V44.6426H34.2637C25.4977 44.6023 17.093 41.1995 10.7725 35.1562L10.168 34.5635C3.78419 28.1503 0.2001 19.4698 0.200195 10.4209V0.200195H10.4209ZM6.11621 86.3682L6.12402 87.0684C6.2967 94.0612 9.05419 100.744 13.8623 105.824L14.3496 106.327C19.4587 111.465 26.3368 114.442 33.5615 114.661L34.2617 114.674H38.7266V110.211L38.7178 109.511C38.5451 102.518 35.788 95.8346 30.9795 90.7539L30.4922 90.252C25.3831 85.114 18.5051 82.1372 11.2803 81.918L10.5801 81.9053H6.11621V86.3682ZM72.9473 47.168C65.4403 47.168 58.2409 50.1507 52.9326 55.459C47.6244 60.7672 44.6426 67.9666 44.6426 75.4736V79.7793H49.1064C56.3254 79.7388 63.2467 76.9418 68.4629 71.9766L68.9629 71.4893C74.2309 66.2212 77.2096 59.0885 77.2529 51.6387L77.4102 47.376L77.418 47.168H72.9473ZM38.7266 34.2617C38.686 27.0428 35.8891 20.1214 30.9238 14.9053L30.4365 14.4062C25.3317 9.30141 18.4759 6.3455 11.2773 6.12793L10.5801 6.11621H6.11621V10.4209L6.12402 11.1211C6.29673 18.114 9.05418 24.7964 13.8623 29.877L14.3496 30.3799C19.4587 35.5178 26.3368 38.4946 33.5615 38.7139L34.2617 38.7266H38.7266V34.2617Z" stroke="#4A90E2" strokeOpacity="0.3" strokeWidth="0.4" />
      </svg>
    ),
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <h4 className="text-sm font-semibold uppercase tracking-widest text-[#4A90E2]">
          {eyebrow}
        </h4>
      )}
      <h2 className="mt-3 text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF2FB] via-white to-white" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          {/* Left collage */}
          <div className="order-2 grid grid-cols-2 gap-6 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src="/care41/home_page_hero_1.png"
                    alt="Senior care"
                    fill
                    sizes="(max-width: 1024px) 45vw, 280px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <h3 className="text-lg font-semibold text-zinc-900">Health</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    In-home healthcare spanning medical, nutrition and fitness.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src="/care41/home_page_hero_2.png"
                    alt="Senior with pet"
                    fill
                    sizes="(max-width: 1024px) 45vw, 280px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <h3 className="text-lg font-semibold text-zinc-900">Community</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Connecting caregivers and loved ones with peers and experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#222222] sm:text-4xl md:text-[42px] md:leading-[50px]">
              Comprehensive Caregiving
              <br />
              Services For Families
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">
              Everything you need to ensure your loved one&apos;s wellbeing
              <br className="hidden sm:block" />
              and your peace of mind.
            </p>
            <div className="mt-8">
              <ContactForm idPrefix="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
              Core Services We Offer for Comprehensive Care
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
              Tap into the power of tech and human care to ensure your loved
              one&apos;s joy, security, and vitality. Speak to us to learn
              about all available services.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="group relative h-[300px] overflow-hidden rounded-xl bg-[#EAEDF3] p-6 shadow-md transition-all duration-300 hover:bg-[#6CC57C] hover:text-white hover:shadow-lg"
              >
                <div className="relative z-10">
                  <h3 className="pb-2 text-[20px] font-semibold leading-[1.3] text-[#404040] group-hover:text-white md:text-[22px]">
                    {svc.title}
                  </h3>
                  <p className="max-w-[85%] text-[14px] font-medium leading-[1.5] text-[#565656] duration-300 group-hover:text-white">
                    {svc.desc}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 flex h-28 w-28 items-center justify-center text-[#B2C2E1] transition-all duration-300 group-hover:scale-110 group-hover:text-[#83D591] [&_svg]:h-full [&_svg]:w-full">
                  {svc.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission:"
            title={
              <>
                Bring joy, vitality, and security
                <br className="hidden sm:block" /> to families with aging loved ones
              </>
            }
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {MISSION_PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center gap-5 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF2FB] text-[#4A90E2]">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Hear From Our Members" />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
              Interact With Peers and Professionals On a Variety of Topics
            </h2>
            <p className="mt-4 max-w-[835px] text-base font-medium leading-snug text-[#565656]">
              From online yoga sessions to nutrition advice, learn from experts and engage with fellow members. Available to all family members.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2 lg:flex-row xl:gap-5">
            {COMMUNITY_CARDS.map((c) => (
              <div
                key={c.title}
                className="mx-auto flex w-full flex-col overflow-hidden rounded-lg shadow-md xl:h-[27.82vh]"
              >
                <div className="relative mr-0 h-full w-full bg-[#4A90E2] px-10 pb-14 pl-5 pt-8 text-white xl:pl-10">
                  <h3 className="mb-4 text-xl font-bold">{c.title}</h3>
                  <p className="w-4/5 text-xs leading-snug opacity-80">{c.desc}</p>
                  <div className="pointer-events-none absolute -bottom-3 -right-2">
                    {c.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src="/care41/home_contact_old_couple.png"
                alt="Contact Person Image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
                Take the First Step to Set Up a Personalized Caregiving Solution
                for Your Family.
              </h2>
              <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">
                We appreciate you taking the time to send us a request. A Care41
                Account Manager will be in touch shortly.
              </p>
              <div className="mt-8">
                <ContactForm idPrefix="cta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Here Are Some FAQs That Come to Mind for Our Clients"
            subtitle="Our Account Management Team is available 24/7 to address any questions or concerns you may have."
          />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
