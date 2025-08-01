const subjectName = 'Psychology';
const examCode = 'WPS0/XPS01/YPS01';
const syllabusType = 'IAL';
const refName = subjectName;
const refsyllabusType = syllabusType;

export const viewport = {
  themeColor: "#4e8cff",
}

export const metadata = {
  title: `${refsyllabusType} ${refName}`,
  description:
    `Browse a complete repository of ${refsyllabusType} ${refName} past papers, sorted by year and session. Perfect for timed practice or marking scheme review — your go-to resource for efficient, up-to-date exam preparation!`,
  icons: {
    icon: "/BlueSolo.svg",
    shortcut: "/BlueSolo.svg",
    apple: "/BlueSolo.svg",
  },
  openGraph: {
    title: `${refsyllabusType} ${refName}`,
    description:
      `Browse a complete repository of ${refsyllabusType} ${refName} past papers, sorted by year and session. Perfect for timed practice or marking scheme review — your go-to resource for efficient, up-to-date exam preparation!`,
    url: `https://www.eduvance-org.vercel.app/subjects/${refName}`,
    type: "website",
    images: [
      {
        url: "https://www.eduvance-org.vercel.app/tempbg.png",
        width: 1200,
        height: 630,
        alt: "Eduvance Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${refsyllabusType} ${refName}`,
    description:
      `Browse a complete repository of ${refsyllabusType} ${refName} past papers, sorted by year and session. Perfect for timed practice or marking scheme review — your go-to resource for efficient, up-to-date exam preparation!`,
    images: ["https://www.eduvance-org.vercel.app/tempbg.png"],
  },
};

export default function RootLayout({ children }) {
  return (<>{children}</>)
}