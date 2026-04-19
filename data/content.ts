export const pageContent = {
  about:
    "Jose Rizal was born on June 19, 1861, in Calamba, Laguna. He grew up in a loving and educated family that helped shape his values, intelligence, and love for learning. From a young age, he showed exceptional talent in writing, drawing, and academics.",
  childhood:
    "Rizal's childhood was filled with meaningful experiences that influenced his future. His mother taught him his first lessons, and his environment in Calamba nurtured his imagination and creativity. Important events, such as the unjust imprisonment of his mother and the execution of GOMBURZA, awakened his sense of justice and patriotism.",
  education:
    "Rizal studied in Binan, Ateneo Municipal de Manila, and the University of Santo Tomas. He later traveled to Europe to continue his studies in medicine and ophthalmology. His education abroad exposed him to liberal ideas, human rights, and reform movements that shaped his vision for the Philippines.",
  dapitan:
    "In 1892, Rizal was exiled to Dapitan. Even in exile, he remained productive. He worked as a doctor, teacher, engineer, scientist, and community leader. He opened a school, treated patients, improved the town's water system, and helped develop the community.",
  trial:
    "Rizal was arrested and accused of rebellion, sedition, and conspiracy. Despite an unfair trial, he was sentenced to death. On December 30, 1896, he was executed at Bagumbayan. His martyrdom inspired Filipinos and strengthened the movement for freedom.",
  legacy:
    "Jose Rizal's legacy lives on through his writings, ideas, and example. He showed that education, courage, and truth can transform society. Today, he remains a symbol of patriotism, critical thinking, and peaceful reform."
};

// Public-domain media from Wikimedia Commons for static, attribution-friendly use.
export const mediaAssets = {
  rizalPortrait: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jose%20rizal%2001.jpg",
    alt: "Portrait of Dr. Jose Rizal",
    caption: "Public-domain portrait of Dr. Jose Rizal from Wikimedia Commons."
  },
  philippineFlag: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Philippines.svg",
    alt: "Flag of the Philippines",
    caption: "Public-domain image of the Philippine flag from Wikimedia Commons."
  }
};

export const works = [
  {
    title: "Noli Me Tangere",
    description:
      "A novel that exposed the abuses, corruption, and injustices of Spanish colonial rule."
  },
  {
    title: "El Filibusterismo",
    description:
      "A darker and more revolutionary sequel that reflected Rizal's growing disappointment with the lack of reform."
  },
  {
    title: "Mi Ultimo Adios",
    description:
      "His final poem, expressing love for country and willingness to die for freedom."
  }
];

export const readingLibrary = [
  {
    title: "Noli Me Tangere",
    format: "PDF",
    language: "Spanish edition scan",
    description:
      "A public-domain PDF edition of Rizal's landmark novel, embedded for direct reading on the site.",
    embedType: "pdf",
    embedSrc: "/reading/noli-me-tangere.pdf#toolbar=0&navpanes=0&view=FitH",
    openSrc: "/reading/noli-me-tangere.pdf",
    downloadSrc: "/reading/noli-me-tangere.pdf",
    sourceLabel: "Wikimedia Commons public-domain scan"
  },
  {
    title: "El Filibusterismo",
    format: "PDF",
    language: "Spanish edition scan",
    description:
      "A public-domain PDF edition of Rizal's sequel, available for inline reading and download.",
    embedType: "pdf",
    embedSrc: "/reading/el-filibusterismo.pdf#toolbar=0&navpanes=0&view=FitH",
    openSrc: "/reading/el-filibusterismo.pdf",
    downloadSrc: "/reading/el-filibusterismo.pdf",
    sourceLabel: "Wikimedia Commons public-domain scan"
  },
  {
    title: "Mi Ultimo Adios",
    format: "HTML",
    language: "Spanish text edition",
    description:
      "A local public-domain reading edition of Rizal's farewell poem, preserved from Project Gutenberg for reliable inline viewing.",
    embedType: "html",
    embedSrc: "/reading/mi-ultimo-adios.html",
    openSrc: "/reading/mi-ultimo-adios.html",
    downloadSrc: "/reading/mi-ultimo-adios.html",
    sourceLabel: "Project Gutenberg public-domain edition"
  }
] as const;
