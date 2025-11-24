const blogData = [
  {
    // Blog 1 Details
    id: 1,
    slug: "The-lessons-from-Gita", // Use a URL-friendly unique identifier
    title: "Bhagavad Gita ",
    author: "Vedavyasa",
    date: "500 BCE – 200 CE",
    summary: "This blog covers the lessons from the Bhagavad gita.",
    imageUrl: "/bhagavad-gita.jpg",
  },
  {
    // Blog 2 Details
    id: 2,
    slug: "medical-myth-and-the-actual-facts",
    title: "Medical Myths",
    author: "Buddhi Sagar Neupane",
    date: "2024-01-15",
    summary: "The myths about medical field that you think as a fact.",
    imageUrl: "/medical-myth.webp",
  },
  {
    // Blog 3 Details
    id: 3,
    slug: "deploying-react-on-netlify",
    title: "Netlify",
    author: "Buddhi Sagar Neupane",
    date: "2025-11-01",
    summary: "A step-by-step guide to deploying a React application for free.",

    imageUrl: "/netlify.jpeg",
  },
];

export default blogData;

export const blogDetailsData = [
  {
    id: 1,
    title: "Lessons From the Bhagavad Gita: Managing Duty and Stress ",
    author: "Vedavyasa",
    date: "500 BCE – 200 CE",
    summary:
      "The bhagavad gita offers profound insights into managing duty and stress through its teachings on selflessness, mindfulness, and detachment. By embracing these principles, individuals can navigate life's challenges with greater resilience and inner peace.",
    content: [
      {
        type: "question",
        question: "What is the Bhagavad Gita?",
        content:
          "A book that imparts spiritual wisdom and guidance on how to live a righteous life, fulfill one's duties, and attain spiritual enlightenment. This is the conversation takes place on the battlefield just before the Kurukshetra War, where Arjuna is filled with doubt and moral dilemma about fighting in the war. My personal believed is that this single book holds the enough knowledge to live a purposeful, peaceful and a better life that one can imagine.",
      },
      {
        type: "list",
        question: "The First lesson - Fear, Dilema and the Truth",
        items: [
          "The feeling to lose anything, you have attachments is fear. Eg.fear to loss money, loved ones, status, comfort, What will happen next, death, friends, relaionships, society, expectations, career,  jobs and many more... ",
          "A dilemma is life’s way of showing that sometimes both choices feel wrong. In the battle field of life, Our mind is the warrior and the dilemma is the enemy- Gita teaches us clarity comes from action, not hesitation.",
          "The purpose of life is to find the turth (God) and Live accordingly.",
        ],
      },
      {
        type: "list",
        question: "The Second Lesson -Two side of world",
        items: [
          "Events You Cannot Control such as Other people’s opinions or actions, Natural disasters or accidents, Past mistakes (you can only learn, not undo), Global events (economy, politics, pandemics).",
          "Events You Can Control such as Your effort in work/study, How you react to criticism, Time management & habits, Words you speak and the duty you perform.",
          "Krishna’s teaching in the Gita is basically this: Act where you have control, but let go of attachment to results. Focus on duty (karma), not the outcome.",
        ],
      },
      {
        type: "list",
        question: "The Third lesson - Three Qualities of Environment",
        items: [
          "The first quality satva(purity/Harmony). This repesents clarity, wisdom, and goodness which makes us honest compassion and self-discipline",
          "The Second quality Rajas(Activity/Passion). This represents energy, desire, and movement which motivates achievement but can also create stress or greed.",
          "The Third quality (inertia/Darkness). This represents heaviness, laziness and ignorance which leads to harmful habits and darkness in life.",
          "Krishna says Every object, person, and situation on Earth has mix of these three gunas (Qualities). Understanding them helps us choose wisely , act mindfully, and rise above negativity.",
        ],
      },
      {
        type: "list",
        question: "The Fourth Lesson - Three paths of life",
        items: [
          "Karma Yoga (Path of Action) means Selfless action without attachments to results and Doing your duty sincerely.",
          "Bhakti Yoha (Path of Devotion) means love and surrender to the Divine where hearts finds peace and union.",
          "jnana Yoga (Path of Knowledge) means Wisdom, self-realization, and understanding the truth.",
          "Life can be lived through action, devotion, or knowledge, or a mix of all three. The Gita teaches balance and conscious choice of the path.",
        ],
      },
      {
        type: "question",
        question: "How to find's one duty?",
        content:
          "When the outcomes doesn't matter, The work you are doing is your duty. You have to find it for yourself.",
      },
      {
        type: "question",
        question: "How to deal with Stress ?",
        content:
          "The future is unpredictible. If you think you can predict, You have the power to change future (do your duty). If you can not predict think positive. All things are time bounded and it's like weather loop (summer after winter and winter after summer) and the same loop (good things after bad things and bad things after good things). Accept the eternal truth as it is.",
      },
      {
        type: "question",
        question: "How to Find peace",
        content: "Devotion is the way to find peace.",
      },
      {
        type: "question",
        question: "How to choose dream?",
        content:
          "Always Dream big in life. Big Dream requires passions and the persistance.",
      },
      {
        type: "question",
        question: "How to deal with Obstacles",
        content:
          "If you focus on your goal, You will overcome all your obstacles but If you focus on your obstacles, you will never reach to your goal.",
      },
      {
        type: "question",
        question: "How to achieve goals in life ?",
        content:
          "There is no Substitute for hardwork. Hardwork is the key of success",
      },
    ],
  },

  {
    id: 2,
    title: "Top 5 Medical Myths You Probably Believe (And Why They’re Wrong)",
    author: "Buddhi Sagar Neupane",
    date: "2024-01-15",
    summary: "The myths about medical field that you think as a fact.",
    content: [
      {
        type: "list",
        question: "Cold Weather Causes Colds",
        items: [
          "You get sick If you have close contact with others (infected person).",
          "You will get sick because Viruses spread easily in dry air.",
          "Viruses cause colds, not temperature.",
        ],
      },
      {
        type: "list",
        question: "Cracking Knuckles Causes Arthritis",
        items: [
          "Cracking your knuckles releases gas bubbles in joints. Does NOT damage bones or cartilage.",
          "In reality, No scientific proof and Studies show ZERO link between cracking and arthritis.",
        ],
      },
      {
        type: "list",
        question: "You Must Drink 8 Glasses of Water Daily",
        items: [
          "In reality, Hydration depends on your body and climate. ",
          "You get water from fruits, food, drinks.",
          "If you have signs such as Light colored urine, Normal energy and No dry mouth than just listen to your body not numbers.",
        ],
      },
      {
        type: "list",
        question: "Sugar Causes Hyperactivity in Kids",
        items: [
          "In reality, Multiple studies show no strong connection. ",
          "Kids get hyper due to Excitement, Environment, Sleep cycle, Playtime.",
          "Sugar affects health, but not directly hyperactivity.",
        ],
      },
      {
        type: "list",
        question: "Antibiotics Cure Viral Infections",
        items: [
          "In reality, Antibiotics only work against bacteria. ",
          "Antibiotics do not treat cold, flu, COVID, viral fever.",
          "Using antibiotics unnecessarily can cause, Antibiotic resistance, Gut problems, Weaker immunity.",
          "Only take antibiotics when prescribed by a doctor.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Deploy React project on Netlify.",
    author: "Buddhi Sagar Neupane",
    date: "2025-11-01",
    summary: "A step-by-step guide to deploying a React application for free.",
    content: [
      {
        type: "list",
        question: "What You Need Before Deployment",
        items: [
          "A React project created with create-react-app, Vite, or similar.",
          "Node.js + npm installed.",
          "A production build ready.",
          "Netlify account (free).",
        ],
      },
      {
        type: "list",
        question: "Build Your React Project",
        items: [
          "For Create React App: npm run build",
          "For Vite: npm run build",
        ],
      },
      {
        type: "list",
        question: "Deploy Method 1: Drag & Drop (Fastest)",
        items: [
          "Login to Netlify",
          "Click Add new site → Deploy manually ",
          "Drag and drop your build or dist folde",
        ],
      },
      {
        type: "list",
        question: "Deploy Method 2: Through GitHub / Git",
        items: [
          "Go to Netlify",
          "Click Add new site from Git",
          "Connect GitHub",
          "Select your repo",
          "For Create React App, Set: Build command: npm run build and Publish directory: build ",
          "For Vite, Set: Build command: npm run build Publish directory: dist",
          "Than Deploy - every time you push to GitHub, Netlify updates automatically",
        ],
      },
      {
        type: "list",
        question: "Fixing React Router 404 Issue",
        items: [
          "If your app uses React Router you may see something like -Page not found when refreshing",
          "To Fix this, Go to Site Settings → Build & Deploy → Redirects",
          "Create a _redirects file inside public folder",
          "Add: /*    /index.html   200 ",
          "This tells Netlify to serve React routes correctly.",
        ],
      },
      {
        type: "list",
        question: "Add Environment Variables",
        items: [
          "If your project uses keys, Go to Site settings → Environment variables",
          "Add: REACT_APP_API_KEY = your_key",
          "Never commit secret key to Github.",
        ],
      },
      {
        type: "list",
        question: "Common Errors & Fixes",
        items: [
          "If your project uses keys, Go to Site settings → Environment variables",
          "Add: REACT_APP_API_KEY = your_key",
          "Never commit secret key to Github.",
        ],
      },
      {
        type: "list",
        question: "Add Environment Variables",
        items: ["Missing dependencies → run:", "npm install"],
      },
    ],
  },
];
