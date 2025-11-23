const blogData = [
  {
    // Blog 1 Details
    id: 1,
    slug: "react-transliteration-guide", // Use a URL-friendly unique identifier
    title: "Bhagavad Gita ",
    author: "Vedavyasa",
    date: "500 BCE – 200 CE",
    summary:
      "This blog covers the steps to integrate Nepali transliteration...",
    imageUrl: "/bhagavad-gita.jpg",
  },
  {
    // Blog 2 Details
    id: 2,
    slug: "understanding-state-in-react",
    title: "School",
    author: "Priya Karki",
    date: "2025-11-15",
    summary:
      "A deep dive into how to manage component state using the useState Hook.",

    imageUrl: "/college.jpg",
  },
  {
    // Blog 3 Details
    id: 3,
    slug: "deploying-react-on-netlify",
    title: "College",
    author: "Rajesh Shah",
    date: "2025-11-01",
    summary: "A step-by-step guide to deploying a React application for free.",

    imageUrl: "/school.jpg",
  },
];

export default blogData;

export const blogDetailsData = [
  {
    id: 1,
    title: "Bhagavad Gita ",
    author: "Vedavyasa",
    date: "500 BCE – 200 CE",
    summary:
      "This blog covers the steps to integrate Nepali transliteration...",
    content: [
      {
        type: "paragraph",
        content:
          "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer. This dialogue takes place on the battlefield just before the Kurukshetra War, where Arjuna is filled with doubt and moral dilemma about fighting in the war.",
      },
    ],
  },
  {
    id: 2,
    title: "School",
    author: "Priya Karki",
    date: "2025-11-15",
    summary:
      "A deep dive into how to manage component state using the useState Hook.",
    content: [
      {
        type: "paragraph",
        content:
          "School is an institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is commonly compulsory. In these systems, students progress through a series of schools. The names for these schools vary by country (discussed in the Regional Variations section below) but generally include primary school for young children and secondary school for teenagers who have completed primary education.",
      },
    ],
  },
  {
    id: 3,
    title: "College",
    author: "Rajesh Shah",
    date: "2025-11-01",
    summary: "A step-by-step guide to deploying a React application for free.",
    content: [
      {
        type: "paragraph",
        content:
          "A college is an educational institution or a constituent part of one. A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education or a secondary school.",
      },
    ],
  },
];
