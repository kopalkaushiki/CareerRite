// Career quiz: 20 questions. Each option adds weighted points to one or more streams.
// Stream keys map to the stream names used in streamsData.js
export const STREAM_KEYS = {
  eng: 'Engineering',
  med: 'Medical',
  law: 'Law',
  arch: 'Architecture',
  def: 'Defense',
  mba: 'MBA',
  des: 'Design',
  art: 'Arts & Humanities',
  sci: 'Science & Research',
}

// Short "why this fits you" line for each stream, shown on the result card
export const STREAM_TRAITS = {
  Engineering: 'You like logic, building things and solving technical problems step by step.',
  Medical: 'You are drawn to science and to helping people, and you stay calm under pressure.',
  Law: 'You enjoy reasoning, debating and standing up for fairness and rights.',
  Architecture: 'You think visually and spatially and like turning ideas into real spaces.',
  Defense: 'You value discipline, courage and serving the nation, and you handle pressure well.',
  MBA: 'You are a natural leader who likes strategy, people and growing businesses.',
  Design: 'You are creative, visual and want freedom to shape how things look and feel.',
  'Arts & Humanities': 'You love ideas, language, culture and understanding people and society.',
  'Science & Research': 'You are curious, patient and love discovering how the world works.',
}

export const questions = [
  {
    q: 'You have a free weekend. What would you enjoy most?',
    options: [
      { text: 'Building a gadget or coding a small project', w: { eng: 3, sci: 1 } },
      { text: 'Learning how the human body works or volunteering at a clinic', w: { med: 3, sci: 1 } },
      { text: 'Debating or reading about current affairs', w: { law: 3, art: 1, mba: 1 } },
      { text: 'Sketching, designing or making something creative', w: { des: 3, arch: 2 } },
    ],
  },
  {
    q: 'Which school subject do you enjoy the most?',
    options: [
      { text: 'Maths and Physics', w: { eng: 3, sci: 2, arch: 1 } },
      { text: 'Biology and Chemistry', w: { med: 3, sci: 2 } },
      { text: 'English, History or Civics', w: { law: 2, art: 3 } },
      { text: 'Economics or Business Studies', w: { mba: 3, law: 1 } },
    ],
  },
  {
    q: 'Which school project would you pick?',
    options: [
      { text: 'Build a working robot or app', w: { eng: 3 } },
      { text: 'Make a model of an eco-friendly city', w: { arch: 3, des: 1 } },
      { text: 'Run a mock company or organise a school fest', w: { mba: 3 } },
      { text: 'Do an experiment and write up the findings', w: { sci: 3, med: 1 } },
    ],
  },
  {
    q: 'Which work environment can you picture yourself in?',
    options: [
      { text: 'A hospital or a laboratory', w: { med: 3, sci: 2 } },
      { text: 'A creative studio or design office', w: { des: 3, arch: 2, art: 1 } },
      { text: 'A courtroom or government office', w: { law: 3, def: 1 } },
      { text: 'Out in the field, in uniform, with strict discipline', w: { def: 3, arch: 1 } },
    ],
  },
  {
    q: 'People often say you are good at...',
    options: [
      { text: 'Solving logical problems', w: { eng: 3, sci: 2 } },
      { text: 'Convincing others and arguing your point', w: { law: 3, mba: 2 } },
      { text: 'Leading and taking charge', w: { def: 3, mba: 2 } },
      { text: 'Imagining new ideas visually', w: { des: 3, arch: 2, art: 1 } },
    ],
  },
  {
    q: 'Which of these sounds most exciting?',
    options: [
      { text: 'Discovering something nobody knew before', w: { sci: 3 } },
      { text: 'Saving someone\'s life', w: { med: 3 } },
      { text: 'Designing a building that defines a skyline', w: { arch: 3, des: 1 } },
      { text: 'Serving the nation in uniform', w: { def: 3 } },
    ],
  },
  {
    q: 'How do you feel about studying for many years?',
    options: [
      { text: 'Happy to study 6+ years to become a real expert', w: { med: 3, sci: 2, law: 1 } },
      { text: 'I would rather start working sooner and learn practical skills', w: { eng: 1, des: 2, mba: 1 } },
      { text: 'I am ready for tough physical and exam-based selection', w: { def: 3 } },
      { text: 'Fine, if I can build a creative portfolio along the way', w: { des: 2, arch: 2, art: 2 } },
    ],
  },
  {
    q: 'Which headline would you love to be part of?',
    options: [
      { text: '"New app changes how millions travel"', w: { eng: 3, mba: 1 } },
      { text: '"New vaccine clears trials"', w: { med: 2, sci: 3 } },
      { text: '"Landmark judgment protects citizens\' rights"', w: { law: 3 } },
      { text: '"Startup becomes a billion-dollar company"', w: { mba: 3, eng: 1 } },
    ],
  },
  {
    q: 'In a group project, you naturally...',
    options: [
      { text: 'Research and fact-check everything', w: { sci: 3, law: 1, art: 1 } },
      { text: 'Present and persuade the audience', w: { law: 2, mba: 2, art: 1 } },
      { text: 'Design the look and visuals', w: { des: 3, arch: 1 } },
      { text: 'Make sure everyone follows the plan and stays disciplined', w: { def: 2, law: 1, mba: 1 } },
    ],
  },
  {
    q: 'Which of these would stress you the least?',
    options: [
      { text: 'Handling an emergency with injuries', w: { med: 3, def: 1 } },
      { text: 'Spending hours debugging or solving puzzles', w: { eng: 3, sci: 2 } },
      { text: 'Tough physical training and early mornings', w: { def: 3 } },
      { text: 'Writing long essays or stories', w: { art: 3, law: 1 } },
    ],
  },
  {
    q: 'What matters most to you in a career?',
    options: [
      { text: 'Helping people directly', w: { med: 3, law: 1, art: 1 } },
      { text: 'High earnings and fast growth', w: { mba: 3, eng: 1, law: 1 } },
      { text: 'Creative freedom', w: { des: 3, art: 2, arch: 1 } },
      { text: 'Respect and stability through service', w: { def: 2, law: 2, sci: 1 } },
    ],
  },
  {
    q: 'How would you describe the way you think?',
    options: [
      { text: 'Systematic, step by step', w: { eng: 3, sci: 1 } },
      { text: 'Big picture and strategic', w: { mba: 3, law: 1, def: 1 } },
      { text: 'Visual and spatial', w: { arch: 3, des: 2 } },
      { text: 'Empathetic and people-focused', w: { med: 2, art: 2, law: 1 } },
    ],
  },
  {
    q: 'What kind of film or documentary do you like best?',
    options: [
      { text: 'Space, science and invention', w: { sci: 3, eng: 2 } },
      { text: 'Courtroom or political drama', w: { law: 3, art: 1 } },
      { text: 'War, adventure and heroism', w: { def: 3 } },
      { text: 'Art, architecture and design', w: { des: 2, arch: 2, art: 2 } },
    ],
  },
  {
    q: 'How comfortable are you with maths-heavy work?',
    options: [
      { text: 'I love it', w: { eng: 3, sci: 2, mba: 1 } },
      { text: 'Fine in moderation', w: { mba: 2, arch: 2, med: 1 } },
      { text: 'I prefer very little maths', w: { art: 3, law: 2, des: 1 } },
      { text: 'Only practical, everyday maths', w: { arch: 2, def: 1, med: 1 } },
    ],
  },
  {
    q: 'Which skill would you most like to master?',
    options: [
      { text: 'Programming or building machines', w: { eng: 3 } },
      { text: 'Public speaking and negotiation', w: { law: 2, mba: 3 } },
      { text: 'Drawing or 3D modelling', w: { des: 3, arch: 3 } },
      { text: 'Diagnosing illnesses', w: { med: 3 } },
    ],
  },
  {
    q: 'Which problem would you rather tackle?',
    options: [
      { text: 'Climate change and clean energy', w: { sci: 3, eng: 2, arch: 1 } },
      { text: 'Access to healthcare for everyone', w: { med: 3, mba: 1 } },
      { text: 'Gaps in justice and unfair laws', w: { law: 3, art: 1 } },
      { text: 'Border security and disaster response', w: { def: 3, eng: 1 } },
    ],
  },
  {
    q: 'How do you handle pressure?',
    options: [
      { text: 'I stay calm and decide quickly in emergencies', w: { med: 2, def: 3 } },
      { text: 'I do my best creative work close to deadlines', w: { des: 2, art: 1, mba: 1 } },
      { text: 'I break the problem into logical parts', w: { eng: 2, sci: 1, law: 1 } },
      { text: 'I prefer a steady, well-researched approach', w: { sci: 3, arch: 1 } },
    ],
  },
  {
    q: 'What would you most enjoy reading?',
    options: [
      { text: 'Biographies of scientists and inventors', w: { sci: 3, eng: 2 } },
      { text: 'Business case studies', w: { mba: 3 } },
      { text: 'History, literature or philosophy', w: { art: 3, law: 1 } },
      { text: 'Design and architecture magazines', w: { des: 2, arch: 3 } },
    ],
  },
  {
    q: 'What does your dream workday look like?',
    options: [
      { text: 'Treating patients and solving medical cases', w: { med: 3 } },
      { text: 'Meeting clients and closing deals', w: { mba: 3, law: 1 } },
      { text: 'Building prototypes in a lab or workshop', w: { eng: 3, sci: 2 } },
      { text: 'Drawing up plans and visuals for a project', w: { arch: 3, des: 2 } },
    ],
  },
  {
    q: 'Ten years from now, you see yourself as...',
    options: [
      { text: 'A respected doctor or lawyer', w: { med: 2, law: 3 } },
      { text: 'Leading a company or a large team', w: { mba: 3, def: 1 } },
      { text: 'An officer serving the country', w: { def: 3 } },
      { text: 'A researcher or inventor creating something new', w: { sci: 3, eng: 2 } },
      { text: 'An artist, writer or designer with my own voice', w: { des: 2, art: 3, arch: 1 } },
    ],
  },
]

// Highest possible score per stream, used to turn raw scores into a match %
const maxByStream = Object.keys(STREAM_KEYS).reduce((acc, key) => {
  acc[key] = questions.reduce(
    (sum, q) => sum + Math.max(0, ...q.options.map((o) => o.w[key] || 0)),
    0
  )
  return acc
}, {})

// answers: array of chosen option index per question (null if skipped)
export function computeResults(answers) {
  const scores = Object.fromEntries(Object.keys(STREAM_KEYS).map((k) => [k, 0]))
  answers.forEach((choice, i) => {
    const option = questions[i]?.options[choice]
    if (!option) return
    for (const [key, pts] of Object.entries(option.w)) scores[key] += pts
  })
  return Object.keys(STREAM_KEYS)
    .map((key) => ({
      stream: STREAM_KEYS[key],
      match: Math.round((scores[key] / maxByStream[key]) * 100),
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3)
}

export { maxByStream }
