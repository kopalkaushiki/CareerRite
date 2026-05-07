export const streamsData = [
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'Build, design, and innovate in the world of technology and infrastructure.',
    path: [
      { title: 'Class 11-12 (PCM)', description: 'Focus on Physics, Chemistry, and Mathematics with strong foundation' },
      { title: 'JEE Main & Advanced', description: 'Prepare for Joint Entrance Examination for engineering colleges' },
      { title: 'B.Tech Degree', description: '4-year undergraduate program in chosen engineering specialization' },
      { title: 'Higher Studies/Job', description: 'Pursue M.Tech, MBA or join industry as an engineer' }
    ],
    exams: [
      {
        name: 'JEE Main',
        description: 'National level entrance exam for NITs, IIITs, and other engineering colleges',
        youtubeLink: 'https://www.youtube.com/results?search_query=JEE+Main+preparation'
      },
      {
        name: 'JEE Advanced',
        description: 'Advanced level exam for admission into IITs',
        youtubeLink: 'https://www.youtube.com/results?search_query=JEE+Advanced+preparation'
      },
      {
        name: 'BITSAT',
        description: 'Entrance exam for BITS Pilani campuses',
        youtubeLink: 'https://www.youtube.com/results?search_query=BITSAT+preparation'
      },
      {
        name: 'VITEEE',
        description: 'Entrance exam for Vellore Institute of Technology (VIT)',
        youtubeLink: 'https://www.youtube.com/results?search_query=VITEEE+preparation'
      },
      {
        name: 'SRMJEEE',
        description: 'Joint Engineering Entrance Exam for SRM Group of Institutes',
        youtubeLink: 'https://www.youtube.com/results?search_query=SRMJEEE+preparation'
      },
      {
        name: 'WBJEE / State CETs',
        description: 'State-level entrance exams like WBJEE, MHT-CET, KCET for regional colleges',
        youtubeLink: 'https://www.youtube.com/results?search_query=State+Engineering+Entrance+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'Indian Institute of Technology, Delhi', location: 'New Delhi' },
      { rank: 2, name: 'Indian Institute of Technology, Bombay', location: 'Mumbai' },
      { rank: 3, name: 'Indian Institute of Technology, Madras', location: 'Chennai' },
      { rank: 4, name: 'Indian Institute of Technology, Kanpur', location: 'Kanpur' },
      { rank: 5, name: 'Indian Institute of Technology, Kharagpur', location: 'Kharagpur' },
      { rank: 6, name: 'Indian Institute of Technology, Roorkee', location: 'Roorkee' },
      { rank: 7, name: 'National Institute of Technology, Trichy', location: 'Tiruchirappalli' },
      { rank: 8, name: 'Birla Institute of Technology and Science, Pilani', location: 'Pilani' },
      { rank: 9, name: 'Indian Institute of Technology, Guwahati', location: 'Guwahati' },
      { rank: 10, name: 'Delhi Technological University', location: 'New Delhi' },
      { rank: 11, name: 'Vellore Institute of Technology', location: 'Vellore' },
      { rank: 12, name: 'Manipal Institute of Technology', location: 'Manipal' },
      { rank: 13, name: 'SRM Institute of Science and Technology', location: 'Chennai' },
      { rank: 14, name: 'Punjab Engineering College', location: 'Chandigarh' },
      { rank: 15, name: 'National Institute of Technology, Surathkal', location: 'Surathkal' }
    ]
  },
  {
    name: 'Medical',
    icon: '⚕️',
    description: 'Serve humanity through healthcare, research, and medical sciences.',
    path: [
      { title: 'Class 11-12 (PCB)', description: 'Study Physics, Chemistry, and Biology with dedication' },
      { title: 'NEET Exam', description: 'National Eligibility cum Entrance Test for medical colleges' },
      { title: 'MBBS Degree', description: '5.5-year undergraduate program including internship' },
      { title: 'Specialization', description: 'Pursue MD/MS in chosen medical specialty or start practice' }
    ],
    exams: [
      {
        name: 'NEET',
        description: 'Single entrance examination for MBBS and BDS courses across India',
        youtubeLink: 'https://www.youtube.com/results?search_query=NEET+preparation'
      },
      {
        name: 'AIIMS (if separate)',
        description: 'Entrance exam for AIIMS institutions (now part of NEET)',
        youtubeLink: 'https://www.youtube.com/results?search_query=AIIMS+preparation'
      },
      {
        name: 'JIPMER (if separate)',
        description: 'Entrance exam for JIPMER (now part of NEET)',
        youtubeLink: 'https://www.youtube.com/results?search_query=JIPMER+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'All India Institute of Medical Sciences, Delhi', location: 'New Delhi' },
      { rank: 2, name: 'Christian Medical College, Vellore', location: 'Vellore' },
      { rank: 3, name: 'Armed Forces Medical College, Pune', location: 'Pune' },
      { rank: 4, name: 'Maulana Azad Medical College', location: 'New Delhi' },
      { rank: 5, name: 'King George Medical University', location: 'Lucknow' },
      { rank: 6, name: 'Jawaharlal Institute of Postgraduate Medical Education', location: 'Puducherry' },
      { rank: 7, name: 'Grant Medical College', location: 'Mumbai' },
      { rank: 8, name: 'Kasturba Medical College, Manipal', location: 'Manipal' },
      { rank: 9, name: 'Institute of Medical Sciences, BHU', location: 'Varanasi' },
      { rank: 10, name: 'BJ Medical College', location: 'Ahmedabad' },
      { rank: 11, name: 'Madras Medical College', location: 'Chennai' },
      { rank: 12, name: 'Osmania Medical College', location: 'Hyderabad' },
      { rank: 13, name: 'Calcutta Medical College', location: 'Kolkata' },
      { rank: 14, name: 'Government Medical College, Chandigarh', location: 'Chandigarh' },
      { rank: 15, name: 'Government Medical College, Thiruvananthapuram', location: 'Thiruvananthapuram' }
    ]
  },
  {
    name: 'Law',
    icon: '⚖️',
    description: 'Uphold justice, protect rights, and shape the legal framework of society.',
    path: [
      { title: 'Class 11-12 (Any Stream)', description: 'Complete 12th standard from any stream' },
      { title: 'CLAT/Other Law Exams', description: 'Clear Common Law Admission Test or other entrance exams' },
      { title: 'LLB/BA LLB', description: '3-year LLB or 5-year integrated BA LLB program' },
      { title: 'Practice/Specialization', description: 'Join law practice, corporate law, or pursue LLM' }
    ],
    exams: [
      {
        name: 'CLAT',
        description: 'Common Law Admission Test for admission into National Law Universities',
        youtubeLink: 'https://www.youtube.com/results?search_query=CLAT+preparation'
      },
      {
        name: 'AILET',
        description: 'All India Law Entrance Test for NLU Delhi',
        youtubeLink: 'https://www.youtube.com/results?search_query=AILET+preparation'
      },
      {
        name: 'LSAT India',
        description: 'Law School Admission Test for various law colleges',
        youtubeLink: 'https://www.youtube.com/results?search_query=LSAT+India+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'National Law School of India University', location: 'Bangalore' },
      { rank: 2, name: 'National Law University, Delhi', location: 'New Delhi' },
      { rank: 3, name: 'NALSAR University of Law', location: 'Hyderabad' },
      { rank: 4, name: 'West Bengal National University of Juridical Sciences', location: 'Kolkata' },
      { rank: 5, name: 'Gujarat National Law University', location: 'Gandhinagar' },
      { rank: 6, name: 'National Law University, Jodhpur', location: 'Jodhpur' },
      { rank: 7, name: 'Symbiosis Law School, Pune', location: 'Pune' },
      { rank: 8, name: 'Indian Law Society Law College', location: 'Pune' },
      { rank: 9, name: 'Faculty of Law, University of Delhi', location: 'New Delhi' },
      { rank: 10, name: 'Government Law College, Mumbai', location: 'Mumbai' },
      { rank: 11, name: 'National Law Institute University, Bhopal', location: 'Bhopal' },
      { rank: 12, name: 'Rajiv Gandhi National University of Law', location: 'Patiala' },
      { rank: 13, name: 'Army Institute of Law', location: 'Mohali' },
      { rank: 14, name: 'Jindal Global Law School', location: 'Sonipat' },
      { rank: 15, name: 'ILS Law College', location: 'Pune' }
    ]
  },
  {
    name: 'Architecture',
    icon: '🏛️',
    description: 'Design spaces, buildings, and create functional and aesthetic structures.',
    path: [
      { title: 'Class 11-12 (PCM)', description: 'Focus on Physics, Chemistry, and Mathematics' },
      { title: 'NATA/JEE Paper 2', description: 'Clear National Aptitude Test or JEE Paper 2 for Architecture' },
      { title: 'B.Arch Degree', description: '5-year Bachelor of Architecture program' },
      { title: 'Practice/Higher Studies', description: 'Start architectural practice or pursue M.Arch' }
    ],
    exams: [
      {
        name: 'NATA',
        description: 'National Aptitude Test in Architecture for B.Arch admissions',
        youtubeLink: 'https://www.youtube.com/results?search_query=NATA+preparation'
      },
      {
        name: 'JEE Paper 2',
        description: 'JEE Main Paper 2 for B.Arch and B.Planning courses',
        youtubeLink: 'https://www.youtube.com/results?search_query=JEE+Paper+2+preparation'
      },
      {
        name: 'CEED',
        description: 'Common Entrance Examination for Design (for M.Des)',
        youtubeLink: 'https://www.youtube.com/results?search_query=CEED+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'Indian Institute of Technology, Kharagpur', location: 'Kharagpur' },
      { rank: 2, name: 'School of Planning and Architecture, Delhi', location: 'New Delhi' },
      { rank: 3, name: 'Centre for Environmental Planning and Technology', location: 'Ahmedabad' },
      { rank: 4, name: 'School of Planning and Architecture, Bhopal', location: 'Bhopal' },
      { rank: 5, name: 'Sir JJ College of Architecture', location: 'Mumbai' },
      { rank: 6, name: 'Indian Institute of Engineering Science and Technology', location: 'Howrah' },
      { rank: 7, name: 'Chandigarh College of Architecture', location: 'Chandigarh' },
      { rank: 8, name: 'Birla Institute of Technology, Mesra', location: 'Ranchi' },
      { rank: 9, name: 'National Institute of Technology, Calicut', location: 'Calicut' },
      { rank: 10, name: 'BM College of Architecture', location: 'Pune' },
      { rank: 11, name: 'College of Architecture, Trivandrum', location: 'Thiruvananthapuram' },
      { rank: 12, name: 'Mysore School of Architecture', location: 'Mysore' },
      { rank: 13, name: 'L S Raheja School of Architecture', location: 'Mumbai' },
      { rank: 14, name: 'Rizvi College of Architecture', location: 'Mumbai' },
      { rank: 15, name: 'Vastu Kala Academy', location: 'New Delhi' }
    ]
  },
  {
    name: 'Defense',
    icon: '🪖',
    description: 'Serve the nation with honor, courage, and commitment in armed forces.',
    path: [
      { title: 'Class 11-12 (PCM)', description: 'Complete 12th with Physics, Chemistry, and Mathematics' },
      { title: 'NDA/CDS Exam', description: 'Clear National Defense Academy or Combined Defense Services exam' },
      { title: 'Training Academy', description: 'Complete training at NDA, IMA, AFA, or Naval Academy' },
      { title: 'Commission & Service', description: 'Get commissioned as an officer and serve the nation' }
    ],
    exams: [
      {
        name: 'NDA',
        description: 'National Defense Academy entrance exam for Army, Navy, and Air Force',
        youtubeLink: 'https://www.youtube.com/results?search_query=NDA+preparation'
      },
      {
        name: 'CDS',
        description: 'Combined Defense Services exam for IMA, AFA, INA, and OTA',
        youtubeLink: 'https://www.youtube.com/results?search_query=CDS+preparation'
      },
      {
        name: 'AFCAT',
        description: 'Air Force Common Admission Test for flying and technical branches',
        youtubeLink: 'https://www.youtube.com/results?search_query=AFCAT+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'National Defense Academy', location: 'Pune' },
      { rank: 2, name: 'Indian Military Academy', location: 'Dehradun' },
      { rank: 3, name: 'Indian Naval Academy', location: 'Ezhimala' },
      { rank: 4, name: 'Air Force Academy', location: 'Hyderabad' },
      { rank: 5, name: 'Officers Training Academy, Chennai', location: 'Chennai' },
      { rank: 6, name: 'Officers Training Academy, Gaya', location: 'Gaya' },
      { rank: 7, name: 'Defense Services Staff College', location: 'Wellington' },
      { rank: 8, name: 'College of Defense Management', location: 'Secunderabad' },
      { rank: 9, name: 'Army War College', location: 'Mhow' },
      { rank: 10, name: 'Naval War College', location: 'Goa' },
      { rank: 11, name: 'Air Force War College', location: 'Prayagraj' },
      { rank: 12, name: 'Rashtriya Indian Military College', location: 'Dehradun' },
      { rank: 13, name: 'Sainik Schools', location: 'Various Locations' },
      { rank: 14, name: 'Military College of Telecommunication Engineering', location: 'Mhow' },
      { rank: 15, name: 'College of Military Engineering', location: 'Pune' }
    ]
  },
  {
    name: 'MBA',
    icon: '📊',
    description: 'Lead businesses, manage operations, and drive organizational growth.',
    path: [
      { title: 'Graduation (Any Stream)', description: 'Complete bachelor degree in any discipline' },
      { title: 'CAT/XAT/Other MBA Exams', description: 'Clear management entrance examinations' },
      { title: 'MBA Degree', description: '2-year Master of Business Administration program' },
      { title: 'Career Growth', description: 'Join corporate sector, consulting, or start entrepreneurship' }
    ],
    exams: [
      {
        name: 'CAT',
        description: 'Common Admission Test for IIMs and other top B-schools',
        youtubeLink: 'https://www.youtube.com/results?search_query=CAT+preparation'
      },
      {
        name: 'XAT',
        description: 'Xavier Aptitude Test for XLRI and other management institutes',
        youtubeLink: 'https://www.youtube.com/results?search_query=XAT+preparation'
      },
      {
        name: 'GMAT',
        description: 'Graduate Management Admission Test for international MBA programs',
        youtubeLink: 'https://www.youtube.com/results?search_query=GMAT+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'Indian Institute of Management, Ahmedabad', location: 'Ahmedabad' },
      { rank: 2, name: 'Indian Institute of Management, Bangalore', location: 'Bangalore' },
      { rank: 3, name: 'Indian Institute of Management, Calcutta', location: 'Kolkata' },
      { rank: 4, name: 'Indian Institute of Management, Lucknow', location: 'Lucknow' },
      { rank: 5, name: 'Indian Institute of Management, Indore', location: 'Indore' },
      { rank: 6, name: 'XLRI Xavier School of Management', location: 'Jamshedpur' },
      { rank: 7, name: 'Indian Institute of Management, Kozhikode', location: 'Kozhikode' },
      { rank: 8, name: 'SP Jain Institute of Management and Research', location: 'Mumbai' },
      { rank: 9, name: 'Indian Institute of Management, Shillong', location: 'Shillong' },
      { rank: 10, name: 'Faculty of Management Studies, Delhi', location: 'New Delhi' },
      { rank: 11, name: 'Indian Institute of Management, Ranchi', location: 'Ranchi' },
      { rank: 12, name: 'Indian Institute of Management, Udaipur', location: 'Udaipur' },
      { rank: 13, name: 'Symbiosis Institute of Business Management', location: 'Pune' },
      { rank: 14, name: 'National Institute of Industrial Engineering', location: 'Mumbai' },
      { rank: 15, name: 'Management Development Institute', location: 'Gurgaon' }
    ]
  },
  {
    name: 'Design',
    icon: '🎨',
    description: 'Create visual experiences, products, and innovative designs.',
    path: [
      { title: 'Class 11-12 (Any Stream)', description: 'Complete 12th standard, preferably with Arts/Commerce' },
      { title: 'Design Entrance Exams', description: 'Clear NID, UCEED, CEED, or other design exams' },
      { title: 'B.Des/M.Des', description: '4-year Bachelor or 2-year Master of Design program' },
      { title: 'Design Career', description: 'Join design firms, startups, or work as freelance designer' }
    ],
    exams: [
      {
        name: 'NID DAT',
        description: 'National Institute of Design Design Aptitude Test',
        youtubeLink: 'https://www.youtube.com/results?search_query=NID+DAT+preparation'
      },
      {
        name: 'UCEED',
        description: 'Undergraduate Common Entrance Examination for Design',
        youtubeLink: 'https://www.youtube.com/results?search_query=UCEED+preparation'
      },
      {
        name: 'CEED',
        description: 'Common Entrance Examination for Design (Postgraduate)',
        youtubeLink: 'https://www.youtube.com/results?search_query=CEED+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'National Institute of Design, Ahmedabad', location: 'Ahmedabad' },
      { rank: 2, name: 'Indian Institute of Technology, Bombay (IDC)', location: 'Mumbai' },
      { rank: 3, name: 'National Institute of Design, Bangalore', location: 'Bangalore' },
      { rank: 4, name: 'National Institute of Fashion Technology, Delhi', location: 'New Delhi' },
      { rank: 5, name: 'School of Design, MIT', location: 'Pune' },
      { rank: 6, name: 'Indian Institute of Technology, Delhi (DOD)', location: 'New Delhi' },
      { rank: 7, name: 'Srishti Institute of Art, Design and Technology', location: 'Bangalore' },
      { rank: 8, name: 'Pearl Academy', location: 'New Delhi' },
      { rank: 9, name: 'Symbiosis Institute of Design', location: 'Pune' },
      { rank: 10, name: 'National Institute of Fashion Technology, Mumbai', location: 'Mumbai' },
      { rank: 11, name: 'DJ Academy of Design', location: 'Coimbatore' },
      { rank: 12, name: 'Arch Academy of Design', location: 'Jaipur' },
      { rank: 13, name: 'Welingkar Institute of Management', location: 'Mumbai' },
      { rank: 14, name: 'Industrial Design Centre, IIT Bombay', location: 'Mumbai' },
      { rank: 15, name: 'Footwear Design and Development Institute', location: 'Noida' }
    ]
  },
  {
    name: 'Arts & Humanities',
    icon: '📚',
    description: 'Explore literature, history, philosophy, and social sciences.',
    path: [
      { title: 'Class 11-12 (Arts/Humanities)', description: 'Study History, Political Science, Literature, etc.' },
      { title: 'College Entrance/Admission', description: 'Clear college-specific entrance tests or merit-based admission' },
      { title: 'BA/MA Degree', description: '3-year Bachelor or 2-year Master degree in chosen subject' },
      { title: 'Career Options', description: 'Teaching, civil services, journalism, writing, research, etc.' }
    ],
    exams: [
      {
        name: 'DUET',
        description: 'Delhi University Entrance Test for various undergraduate and postgraduate courses',
        youtubeLink: 'https://www.youtube.com/results?search_query=DUET+preparation'
      },
      {
        name: 'CUET',
        description: 'Common University Entrance Test for central universities',
        youtubeLink: 'https://www.youtube.com/results?search_query=CUET+preparation'
      },
      {
        name: 'TISS NET',
        description: 'TISS National Entrance Test for social work and related programs',
        youtubeLink: 'https://www.youtube.com/results?search_query=TISS+NET+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'University of Delhi', location: 'New Delhi' },
      { rank: 2, name: 'Jawaharlal Nehru University', location: 'New Delhi' },
      { rank: 3, name: 'St. Stephens College', location: 'New Delhi' },
      { rank: 4, name: 'Hindu College', location: 'New Delhi' },
      { rank: 5, name: 'Lady Shri Ram College for Women', location: 'New Delhi' },
      { rank: 6, name: 'Presidency University', location: 'Kolkata' },
      { rank: 7, name: 'Jadavpur University', location: 'Kolkata' },
      { rank: 8, name: 'University of Calcutta', location: 'Kolkata' },
      { rank: 9, name: 'Christ University', location: 'Bangalore' },
      { rank: 10, name: 'Loyola College', location: 'Chennai' },
      { rank: 11, name: 'Madras Christian College', location: 'Chennai' },
      { rank: 12, name: 'St. Xaviers College, Mumbai', location: 'Mumbai' },
      { rank: 13, name: 'Fergusson College', location: 'Pune' },
      { rank: 14, name: 'Tata Institute of Social Sciences', location: 'Mumbai' },
      { rank: 15, name: 'Miranda House', location: 'New Delhi' }
    ]
  },
  {
    name: 'Science & Research',
    icon: '🔬',
    description: 'Advance knowledge through scientific research and innovation.',
    path: [
      { title: 'Class 11-12 (Science)', description: 'Strong foundation in Physics, Chemistry, Biology/Mathematics' },
      { title: 'Entrance Exams', description: 'JEE Advanced, NEET, IISER Aptitude Test, or other science exams' },
      { title: 'B.Sc/M.Sc/PhD', description: 'Pursue research-oriented programs in chosen field' },
      { title: 'Research Career', description: 'Join research institutes, universities, or R&D departments' }
    ],
    exams: [
      {
        name: 'IISER Aptitude Test',
        description: 'Entrance exam for Indian Institutes of Science Education and Research',
        youtubeLink: 'https://www.youtube.com/results?search_query=IISER+aptitude+test+preparation'
      },
      {
        name: 'JEE Advanced',
        description: 'For admission into IISc and research-oriented programs',
        youtubeLink: 'https://www.youtube.com/results?search_query=JEE+Advanced+preparation'
      },
      {
        name: 'CSIR NET',
        description: 'Council of Scientific and Industrial Research NET for research positions',
        youtubeLink: 'https://www.youtube.com/results?search_query=CSIR+NET+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'Indian Institute of Science', location: 'Bangalore' },
      { rank: 2, name: 'Indian Institute of Science Education and Research, Pune', location: 'Pune' },
      { rank: 3, name: 'Indian Institute of Science Education and Research, Kolkata', location: 'Kolkata' },
      { rank: 4, name: 'Tata Institute of Fundamental Research', location: 'Mumbai' },
      { rank: 5, name: 'Indian Association for the Cultivation of Science', location: 'Kolkata' },
      { rank: 6, name: 'Homi Bhabha Centre for Science Education', location: 'Mumbai' },
      { rank: 7, name: 'Indian Statistical Institute', location: 'Kolkata' },
      { rank: 8, name: 'Jawaharlal Nehru Centre for Advanced Scientific Research', location: 'Bangalore' },
      { rank: 9, name: 'National Centre for Biological Sciences', location: 'Bangalore' },
      { rank: 10, name: 'Centre for Cellular and Molecular Biology', location: 'Hyderabad' },
      { rank: 11, name: 'Institute of Chemical Technology', location: 'Mumbai' },
      { rank: 12, name: 'Indian Institute of Science Education and Research, Mohali', location: 'Mohali' },
      { rank: 13, name: 'Indian Institute of Science Education and Research, Bhopal', location: 'Bhopal' },
      { rank: 14, name: 'Harish-Chandra Research Institute', location: 'Allahabad' },
      { rank: 15, name: 'Institute of Mathematical Sciences', location: 'Chennai' }
    ]
  },
  {
    name: 'Others',
    icon: '🌟',
    description: 'Explore diverse career paths including commerce, agriculture, and specialized fields.',
    path: [
      { title: 'Class 11-12 (Commerce/Science)', description: 'Complete 12th in Commerce or Science stream' },
      { title: 'Entrance/Admission Tests', description: 'Clear relevant entrance exams based on chosen field' },
      { title: 'Specialized Degree', description: 'Pursue degree in CA, Agriculture, Hotel Management, etc.' },
      { title: 'Career Path', description: 'Enter profession based on specialization and certification' }
    ],
    exams: [
      {
        name: 'CA Foundation',
        description: 'Chartered Accountancy Foundation exam',
        youtubeLink: 'https://www.youtube.com/results?search_query=CA+Foundation+preparation'
      },
      {
        name: 'ICAR AIEEA',
        description: 'All India Entrance Examination for Agriculture',
        youtubeLink: 'https://www.youtube.com/results?search_query=ICAR+AIEEA+preparation'
      },
      {
        name: 'NCHMCT JEE',
        description: 'National Council for Hotel Management Joint Entrance Exam',
        youtubeLink: 'https://www.youtube.com/results?search_query=NCHMCT+JEE+preparation'
      }
    ],
    colleges: [
      { rank: 1, name: 'Shri Ram College of Commerce', location: 'New Delhi' },
      { rank: 2, name: 'Indian Agricultural Research Institute', location: 'New Delhi' },
      { rank: 3, name: 'Institute of Hotel Management, Mumbai', location: 'Mumbai' },
      { rank: 4, name: 'National Institute of Design', location: 'Ahmedabad' },
      { rank: 5, name: 'National Academy of Agricultural Research Management', location: 'Hyderabad' },
      { rank: 6, name: 'National Institute of Fashion Technology', location: 'New Delhi' },
      { rank: 7, name: 'Indian Statistical Institute', location: 'Kolkata' },
      { rank: 8, name: 'Symbiosis Centre for Media and Communication', location: 'Pune' },
      { rank: 9, name: 'National Academy of Broadcasting and Multimedia', location: 'New Delhi' },
      { rank: 10, name: 'Gokhale Institute of Politics and Economics', location: 'Pune' },
      { rank: 11, name: 'Institute of Rural Management Anand', location: 'Anand' },
      { rank: 12, name: 'Indian Institute of Forest Management', location: 'Bhopal' },
      { rank: 13, name: 'National Dairy Research Institute', location: 'Karnal' },
      { rank: 14, name: 'Central Food Technological Research Institute', location: 'Mysore' },
      { rank: 15, name: 'National Institute of Pharmaceutical Education and Research', location: 'Mohali' }
    ]
  }
]



