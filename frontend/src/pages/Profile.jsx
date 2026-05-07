import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { streamsData } from '../data/streamsData'

const Profile = () => {
  const { user, updateUser, calculateProgress, addVisitedPage, logoutUser } = useUser()
  
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: user?.name || '',
    class: user?.class || '',
    goal: user?.goal || '',
    goalCollege: user?.goalCollege || '',
    selectedStream: user?.selectedStream || '',
    skills: user?.skills || '',
    marks10: user?.marks10 || '',
    marks12: user?.marks12 || '',
    competitiveExam: user?.competitiveExam || '',
    targetDegree: user?.targetDegree || ''
  })

  useEffect(() => {
    addVisitedPage('profile')
  }, [])

  // Update edit data if user changes
  useEffect(() => {
    if (user) {
      setEditData({
        name: user.name || '',
        class: user.class || '',
        goal: user.goal || '',
        goalCollege: user.goalCollege || '',
        selectedStream: user.selectedStream || '',
        skills: user.skills || '',
        marks10: user.marks10 || '',
        marks12: user.marks12 || '',
        competitiveExam: user.competitiveExam || '',
        targetDegree: user.targetDegree || ''
      })
    }
  }, [user])

  if (!user) return null

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveProfile = () => {
    updateUser(editData)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditData({
      name: user.name || '',
      class: user.class || '',
      goal: user.goal || '',
      goalCollege: user.goalCollege || '',
      selectedStream: user.selectedStream || '',
      skills: user.skills || '',
      marks10: user.marks10 || '',
      marks12: user.marks12 || '',
      competitiveExam: user.competitiveExam || '',
      targetDegree: user.targetDegree || ''
    })
    setIsEditing(false)
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        updateUser({ profilePhoto: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    updateUser({ profilePhoto: '' })
  }

  const handleLogout = () => {
    logoutUser()
  }

  const progress = calculateProgress()
  const displayStream = isEditing ? editData.selectedStream : user.selectedStream
  const currentStreamData = streamsData.find(s => s.name === displayStream)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile Dashboard</h1>

        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-10">
          
          {/* Profile Header & Photo */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 pb-8 border-b border-gray-100">
            <div className="flex flex-col items-center space-y-3">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center">
                  {user.profilePhoto ? (
                    <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-5xl font-semibold">
                      {user.name ? user.name.charAt(0).toUpperCase() : '?'}
                    </span>
                  )}
                </div>
                <label className="absolute bottom-1 right-1 bg-sky-500 text-white p-2.5 rounded-full cursor-pointer shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                </label>
              </div>
              {user.profilePhoto && (
                <button 
                  onClick={handleRemovePhoto}
                  className="text-xs text-red-500 hover:text-red-700 font-medium tracking-wide transition-colors"
                >
                  Remove Photo
                </button>
              )}
            </div>
            
            <div className="text-center md:text-left flex-grow mt-2">
              {isEditing ? (
                <div className="space-y-3 max-w-md mx-auto md:mx-0">
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 text-xl font-bold rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    placeholder="Your Name"
                  />
                  <select
                    name="class"
                    value={editData.class}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-gray-700 transition-all"
                  >
                    <option value="">Select Class</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="College">College</option>
                  </select>
                </div>
              ) : (
                <>
                  <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{user.name || 'User Name'}</h2>
                  <p className="text-lg text-sky-600 font-medium mt-1">{user.class ? `Class ${user.class}` : 'Class not set'}</p>
                </>
              )}
            </div>
            
            <div className="flex-shrink-0 pt-2">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  Edit Profile
                </button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={handleSaveProfile}
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-500 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Academic & Career Details */}
            <div className="space-y-8">
              
              {/* Academic Details */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-sky-100 text-sky-600 p-2 rounded-lg mr-3">📚</span>
                  Academic Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">10th Marks</label>
                    {isEditing ? (
                      <input type="text" name="marks10" value={editData.marks10} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="e.g. 95% or 9.5 CGPA" />
                    ) : (
                      <p className="text-gray-800 font-medium">{user.marks10 || '--'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">12th Marks</label>
                    {isEditing ? (
                      <input type="text" name="marks12" value={editData.marks12} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="e.g. 92%" />
                    ) : (
                      <p className="text-gray-800 font-medium">{user.marks12 || '--'}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Career Details */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">🎯</span>
                  Career Trajectory
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Selected Stream</label>
                    {isEditing ? (
                      <select name="selectedStream" value={editData.selectedStream} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none">
                        <option value="">Choose your path...</option>
                        {streamsData.map(stream => (
                          <option key={stream.name} value={stream.name}>{stream.icon} {stream.name}</option>
                        ))}
                      </select>
                    ) : (
                      <p className="text-gray-800 font-medium bg-gray-50 py-2 px-3 rounded-lg border border-gray-100">{user.selectedStream || 'Not chosen yet'}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Primary Goal Area</label>
                    {isEditing ? (
                      <select name="goal" value={editData.goal} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none">
                        <option value="">Select Goal Area</option>
                        <option value="Career Decision">Career Decision</option>
                        <option value="Exploring Options">Exploring Options</option>
                        <option value="Looking for Options">Looking for Options</option>
                        <option value="Skill Development">Skill Development</option>
                      </select>
                    ) : (
                      <p className="text-gray-800 font-medium">{user.goal || 'Not set'}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Aspirations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">🚀</span>
                  Aspirations
                </h3>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Dream College/Role</label>
                      {isEditing ? (
                        <input type="text" name="goalCollege" value={editData.goalCollege} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="e.g. IIT Bombay or SE" />
                      ) : (
                        <p className="text-gray-800 font-medium">{user.goalCollege || 'Not set'}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Target Degree</label>
                      {isEditing ? (
                        <select name="targetDegree" value={editData.targetDegree} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none">
                          <option value="">Select...</option>
                          <option value="B.Tech">B.Tech</option>
                          <option value="M.Tech">M.Tech</option>
                          <option value="B.Sc">B.Sc</option>
                          <option value="M.Sc">M.Sc</option>
                          <option value="MBBS">MBBS</option>
                          <option value="B.Arch">B.Arch</option>
                          <option value="BA LLB">BA LLB</option>
                          <option value="MBA">MBA</option>
                          <option value="B.Des">B.Des</option>
                          <option value="M.Des">M.Des</option>
                          <option value="B.A.">B.A.</option>
                          <option value="M.A.">M.A.</option>
                          <option value="PhD">PhD</option>
                          <option value="Diploma">Diploma</option>
                        </select>
                      ) : (
                        <p className="text-gray-800 font-medium">{user.targetDegree || 'Not set'}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Target Exam</label>
                      {isEditing ? (
                        <select name="competitiveExam" value={editData.competitiveExam} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none">
                          <option value="">Select an exam...</option>
                          {currentStreamData?.exams?.map(exam => (
                            <option key={exam.name} value={exam.name}>{exam.name}</option>
                          ))}
                        </select>
                      ) : (
                        <p className="text-gray-800 font-medium">{user.competitiveExam || 'Not set'}</p>
                      )}
                      {isEditing && !currentStreamData && <p className="text-xs text-red-400 mt-1">Select a stream first to see exams.</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Key Skills (comma separated)</label>
                    {isEditing ? (
                      <input type="text" name="skills" value={editData.skills} onChange={handleEditChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="e.g. Python, Public Speaking, Biology" />
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {user.skills ? user.skills.split(',').map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                            {skill.trim()}
                          </span>
                        )) : <p className="text-gray-800 font-medium">None added</p>}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Roadmap Timeline */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center relative z-10">
                  <span className="bg-emerald-100 text-emerald-600 p-2.5 rounded-xl mr-3 shadow-sm">🗺️</span>
                  Your Roadmap
                </h3>
                
                <div className="flex-grow relative z-10">
                  {(!displayStream || (!isEditing && !user.competitiveExam)) ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 border-dashed">
                      <div className="text-4xl mb-4">✨</div>
                      <h4 className="text-lg font-bold text-emerald-900 mb-2">Roadmap Locked</h4>
                      <p className="text-emerald-700/80 text-sm max-w-sm">
                        Select a <strong>Stream</strong> and a <strong>Target Exam</strong> to instantly generate your personalized step-by-step career roadmap.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6 mt-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
                      {currentStreamData?.path?.map((step, index) => {
                        const isExamStep = index === 1;
                        const isCollegeStep = index === 2;
                        const isFinalStep = index === currentStreamData.path.length - 1;
                        
                        const targetExam = isEditing ? editData.competitiveExam : user.competitiveExam;
                        const targetGoal = isEditing ? editData.goalCollege : user.goalCollege;
                        const targetDegree = isEditing ? editData.targetDegree : user.targetDegree;

                        // Dynamically override the exam step
                        let displayTitle = step.title;
                        let displayDesc = step.description;
                        let isGoalNode = false;

                        if (isExamStep && targetExam) {
                          displayTitle = `Target Exam: ${targetExam}`;
                          const examDetails = currentStreamData.exams?.find(e => e.name === targetExam);
                          if (examDetails) displayDesc = examDetails.description;
                        }

                        // Dynamically inject the Dream College/Role into the timeline
                        // If it's the College step, we can insert the goal here
                        if (isCollegeStep && (targetGoal || targetDegree)) {
                          const mainDest = targetDegree && targetGoal ? `${targetDegree} at ${targetGoal}` : (targetGoal || targetDegree);
                          displayTitle = `Goal Reached: ${mainDest}`;
                          displayDesc = `Successfully secure admission/role in ${targetGoal || 'your target institution'} to pursue ${targetDegree || step.title.toLowerCase()}.`;
                          isGoalNode = true;
                        }

                        return (
                          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white ${isGoalNode ? 'bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg text-xl z-10' : 'bg-emerald-500 shadow-md text-base'} text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                              {isGoalNode ? '🏆' : index + 1}
                            </div>
                            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border shadow-sm transition-all hover:shadow-md ${isGoalNode ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200' : 'bg-white border-gray-100 hover:border-emerald-200'}`}>
                              <h4 className={`font-bold text-lg ${isGoalNode ? 'text-amber-900' : 'text-gray-900'}`}>{displayTitle}</h4>
                              <p className={`text-sm mt-1 leading-relaxed font-medium ${isGoalNode ? 'text-amber-700' : 'text-gray-500'}`}>{displayDesc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>

          {/* Progress Section */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">📈</span>
              Exploration Progress
            </h3>
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 p-6 rounded-2xl border border-sky-100/50">
              <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                <span>Journey Completion</span>
                <span className="text-indigo-600">{progress}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-indigo-600/80 mt-3 font-semibold text-center">
                {user.visitedPages?.length || 0} pages explored in your career discovery journey
              </p>
            </div>
          </div>

          {/* Libraries */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">📚</span>
              Libraries
            </h3>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-gray-700 font-semibold">
                    Study material based on your <strong>stream</strong> and <strong>target exam</strong>.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Stream: <span className="font-bold text-gray-800">{user.selectedStream || '--'}</span> • Exam:{' '}
                    <span className="font-bold text-gray-800">{user.competitiveExam || '--'}</span>
                  </p>
                </div>
                <Link
                  to="/libraries"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-sky-600 transition-all shadow-md hover:shadow-lg text-center"
                >
                  Open Libraries
                </Link>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center md:justify-end pt-4">
            <button
              onClick={handleLogout}
              className="px-8 py-3 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-xl font-bold transition-all duration-300 shadow-sm border border-red-100 hover:border-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile



