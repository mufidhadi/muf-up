import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, Play, CheckCircle2, Menu, X, Terminal as TerminalIcon, Sparkles, Trophy, Settings, Map, LogOut, ArrowRight, RefreshCw, Briefcase, Brain, Zap, ArrowUp, HelpCircle, BarChart2, Target, TrendingUp, Award, Code2, Cpu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ROADMAPS } from './constants';
import { Lesson } from './types';
import { AchievementModal } from './components/AchievementModal';
import { AchievementType } from './components/Certificate';
import { Branding } from './components/Branding';

const iconMap: Record<string, any> = {
  python: TerminalIcon,
  javascript: Globe,
  golang: Cpu,
  rust: Code2,
};

const colorMap: Record<string, { bg: string, text: string, lightBg: string }> = {
  python: { bg: 'bg-emerald-500', text: 'text-emerald-600', lightBg: 'bg-emerald-100' },
  javascript: { bg: 'bg-amber-500', text: 'text-amber-600', lightBg: 'bg-amber-100' },
  golang: { bg: 'bg-blue-500', text: 'text-blue-600', lightBg: 'bg-blue-100' },
  rust: { bg: 'bg-red-500', text: 'text-red-600', lightBg: 'bg-red-100' },
};

type ViewState = 'home' | 'roadmap' | 'welcome' | 'learning' | 'thankyou' | 'evaluation';

export default function App() {
  const [activeRoadmapId, setActiveRoadmapId] = useState<string>(ROADMAPS?.[0]?.id || '');
  const activeRoadmap = ROADMAPS.find(r => r.id === activeRoadmapId) || ROADMAPS[0] || { id: '', curriculums: [] };
  const CURRICULUM_GROUPS = activeRoadmap?.curriculums || [];
  const allLessons = (CURRICULUM_GROUPS || []).flatMap(g => (g?.modules || []).flatMap(m => m?.lessons || []));
  
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [output, setOutput] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [showNextPrompt, setShowNextPrompt] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);
  
  // Gamification state
  const [achievement, setAchievement] = useState<{
    isOpen: boolean;
    type: AchievementType;
    title: string;
  }>({ isOpen: false, type: 'lesson', title: '' });

  const activeLesson = allLessons[activeLessonIndex];
  
  const completedInRoadmap = allLessons.filter(l => l && completedLessons.includes(l.id)).length;
  const hasStartedRoadmap = completedInRoadmap > 0;
  const isFinished = completedInRoadmap === allLessons.length && allLessons.length > 0;

  useEffect(() => {
    const savedProgress = localStorage.getItem('pylearn_progress');
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    
    const savedAnswers = localStorage.getItem('pylearn_quiz_answers');
    if (savedAnswers) setQuizAnswers(JSON.parse(savedAnswers));

    const savedName = localStorage.getItem('pylearn_username');
    if (savedName) setUserName(savedName);
    
    const savedRoadmap = localStorage.getItem('pylearn_roadmap');
    if (savedRoadmap) {
      setActiveRoadmapId(savedRoadmap);
      setCurrentView('roadmap');
    }
  }, []);

  useEffect(() => {
    // Sync quiz state when active lesson changes
    if (activeLesson && activeLesson.quiz) {
      const savedAnswer = quizAnswers[activeLesson.id];
      if (savedAnswer !== undefined) {
        setSelectedQuizOption(savedAnswer);
        setIsQuizSubmitted(true);
      } else {
        setSelectedQuizOption(null);
        setIsQuizSubmitted(false);
      }
    } else {
      setSelectedQuizOption(null);
      setIsQuizSubmitted(false);
    }
  }, [activeLesson?.id, quizAnswers]);

  const handleSelectRoadmap = (roadmapId: string) => {
    setActiveRoadmapId(roadmapId);
    localStorage.setItem('pylearn_roadmap', roadmapId);
    
    const roadmap = ROADMAPS.find(r => r.id === roadmapId) || ROADMAPS[0];
    const roadmapLessons = roadmap.curriculums.flatMap(g => g.modules.flatMap(m => m.lessons));
    const firstUncompletedIndex = roadmapLessons.findIndex(l => !completedLessons.includes(l.id));
    
    if (firstUncompletedIndex !== -1) {
      setActiveLessonIndex(firstUncompletedIndex);
    } else {
      setActiveLessonIndex(roadmapLessons.length - 1);
    }
    
    if (!userName) {
      setCurrentView('welcome');
    } else {
      setCurrentView('roadmap');
    }
  };

  const handleStartLearning = () => {
    if (userName.trim()) {
      localStorage.setItem('pylearn_username', userName.trim());
      handleContinueLearning();
    } else {
      alert('Silakan masukkan nama Anda terlebih dahulu.');
    }
  };

  const handleContinueLearning = () => {
    const firstUncompletedIndex = allLessons.findIndex(l => !completedLessons.includes(l.id));
    if (firstUncompletedIndex !== -1) {
      setActiveLessonIndex(firstUncompletedIndex);
    } else {
      setActiveLessonIndex(allLessons.length - 1);
    }
    setCurrentView('learning');
  };

  const handleResetProgress = () => {
    const currentRoadmapLessonIds = allLessons.map(l => l.id);
    const newCompletedLessons = completedLessons.filter(id => !currentRoadmapLessonIds.includes(id));
    const newQuizAnswers = { ...quizAnswers };
    currentRoadmapLessonIds.forEach(id => delete newQuizAnswers[id]);
    
    setCompletedLessons(newCompletedLessons);
    setQuizAnswers(newQuizAnswers);
    localStorage.setItem('pylearn_progress', JSON.stringify(newCompletedLessons));
    localStorage.setItem('pylearn_quiz_answers', JSON.stringify(newQuizAnswers));
    setActiveLessonIndex(0);
    setShowResetConfirm(false);
    setShowSettings(false);
    setCurrentView('roadmap');
  };

  const handleQuizSubmit = () => {
    if (selectedQuizOption !== null) {
      setIsQuizSubmitted(true);
      const newAnswers = { ...quizAnswers, [activeLesson.id]: selectedQuizOption };
      setQuizAnswers(newAnswers);
      localStorage.setItem('pylearn_quiz_answers', JSON.stringify(newAnswers));
    }
  };

  const toggleComplete = (id: string, showPrompt = true) => {
    const isCurrentlyCompleted = completedLessons.includes(id);
    
    // Prevent completion if quiz exists but not submitted
    if (!isCurrentlyCompleted && activeLesson.quiz) {
      if (!isQuizSubmitted) {
        return;
      }
    }

    let newCompleted: string[];
    if (isCurrentlyCompleted) {
      newCompleted = completedLessons.filter(l => l !== id);
      setCompletedLessons(newCompleted);
      localStorage.setItem('pylearn_progress', JSON.stringify(newCompleted));
      return;
    } else {
      newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);
      localStorage.setItem('pylearn_progress', JSON.stringify(newCompleted));
    }

    // Check for achievements
    const currentGroup = CURRICULUM_GROUPS.find(g => g.modules.some(m => m.lessons.some(l => l.id === id)));
    
    let achievementUnlocked = false;
    if (currentGroup) {
      const groupLessons = currentGroup.modules.flatMap(m => m.lessons);
      const isGroupComplete = groupLessons.every(l => newCompleted.includes(l.id));

      if (isGroupComplete) {
        const wasGroupComplete = groupLessons.every(l => completedLessons.includes(l.id));
        if (!wasGroupComplete) {
          setAchievement({ isOpen: true, type: 'curriculum', title: `Kurikulum ${currentGroup.title}` });
          achievementUnlocked = true;
        }
      }
    }

    const completedInRoadmap = allLessons.filter(l => newCompleted.includes(l.id)).length;
    const isAllComplete = completedInRoadmap === allLessons.length;
    
    if (showPrompt && !achievementUnlocked && (activeLessonIndex < allLessons.length - 1 || isAllComplete)) {
      if (!activeLesson.quiz || (activeLesson.quiz && isQuizSubmitted)) {
        setShowNextPrompt(true);
      }
    }
  };

  const runCode = (code: string) => {
    setOutput(['Menjalankan kode...', '> ' + (code.split('\n').pop() || '')]);
    setTimeout(() => {
      if (code.includes('print(')) {
        const match = code.match(/print\((["'])(.*?)\1\)/);
        if (match) setOutput(prev => [...prev, match[2]]);
        else setOutput(prev => [...prev, "Hasil eksekusi simulasi..."]);
      } else if (code.includes('console.log(')) {
        const match = code.match(/console\.log\((["'])(.*?)\1\)/);
        if (match) setOutput(prev => [...prev, match[2]]);
        else setOutput(prev => [...prev, "Hasil eksekusi simulasi..."]);
      } else if (code.includes('fmt.Println(')) {
        const match = code.match(/fmt\.Println\((["'])(.*?)\1\)/);
        if (match) setOutput(prev => [...prev, match[2]]);
        else setOutput(prev => [...prev, "Hasil eksekusi simulasi..."]);
      } else if (code.includes('println!(')) {
        const match = code.match(/println!\((["'])(.*?)\1\)/);
        if (match) setOutput(prev => [...prev, match[2]]);
        else setOutput(prev => [...prev, "Hasil eksekusi simulasi..."]);
      } else {
        setOutput(prev => [...prev, "Kode berhasil dijalankan (Simulasi)"]);
      }
    }, 500);
  };

  const proceedToNext = () => {
    if (activeLessonIndex < allLessons.length - 1) {
      setActiveLessonIndex(prev => prev + 1);
      setOutput([]);
    } else {
      setCurrentView('thankyou');
    }
  };

  const goToNextLesson = () => {
    if (!completedLessons.includes(activeLesson.id)) {
      setShowCompleteConfirm(true);
    } else {
      proceedToNext();
    }
  };

  const goToPrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(prev => prev - 1);
      setOutput([]);
    }
  };

  const selectLesson = (lessonId: string) => {
    const index = allLessons.findIndex(l => l.id === lessonId);
    if (index !== -1) {
      setActiveLessonIndex(index);
      setCurrentView('learning');
      setOutput([]);
    }
  };

  if (currentView === 'evaluation') {
    const totalLessons = allLessons.length;
    const completedCount = allLessons.filter(l => completedLessons.includes(l.id)).length;
    const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    const quizzesWithAnswers = Object.entries(quizAnswers).filter(([id]) => allLessons.some(l => l.id === id));
    const totalQuizzesTaken = quizzesWithAnswers.length;
    const correctAnswers = quizzesWithAnswers.filter(([id, ans]) => {
      const lesson = allLessons.find(l => l.id === id);
      return lesson?.quiz?.correctAnswerIndex === ans;
    }).length;
    const quizAccuracy = totalQuizzesTaken > 0 ? Math.round((correctAnswers / totalQuizzesTaken) * 100) : 0;
    const isFinished = completedCount === totalLessons && totalLessons > 0;

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-y-auto pb-20">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCurrentView('roadmap')}
            >
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <ArrowUp size={18} strokeWidth={3} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-800">muf-up</span>
            </div>
            <button 
              onClick={() => setCurrentView('roadmap')}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 font-bold text-sm transition-colors"
            >
              <Map size={18} />
              Kembali ke Roadmap
            </button>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Dashboard Evaluasi - {activeRoadmap.title}</h1>
            <p className="text-slate-600">Pantau progres belajarmu dan lihat seberapa jauh kamu telah melangkah di jalur ini.</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className={`w-12 h-12 ${colorMap[activeRoadmap.icon]?.lightBg || 'bg-slate-100'} ${colorMap[activeRoadmap.icon]?.text || 'text-slate-600'} rounded-2xl flex items-center justify-center mb-4`}>
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{progressPercent}%</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Progres Kurikulum</div>
              <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${colorMap[activeRoadmap.icon]?.bg || 'bg-slate-500'}`} style={{ width: `${progressPercent}%` }} />
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">{completedCount} dari {totalLessons} materi selesai</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className={`w-12 h-12 ${colorMap[activeRoadmap.icon]?.lightBg || 'bg-slate-100'} ${colorMap[activeRoadmap.icon]?.text || 'text-slate-600'} rounded-2xl flex items-center justify-center mb-4`}>
                <Target size={24} />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{quizAccuracy}%</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Akurasi Kuis</div>
              <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${colorMap[activeRoadmap.icon]?.bg || 'bg-slate-500'}`} style={{ width: `${quizAccuracy}%` }} />
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">{correctAnswers} jawaban benar dari {totalQuizzesTaken} kuis</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">
                {CURRICULUM_GROUPS.filter(g => g.modules.every(m => m.lessons.every(l => completedLessons.includes(l.id)))).length}
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Sertifikat Diraih</div>
              <div className="mt-4 flex gap-1">
                {CURRICULUM_GROUPS.map(g => {
                  const isComplete = g.modules.every(m => m.lessons.every(l => completedLessons.includes(l.id)));
                  return (
                    <div 
                      key={g.id} 
                      className={`h-2 flex-1 rounded-full ${isComplete ? 'bg-amber-400' : 'bg-slate-100'}`}
                      title={g.title}
                    />
                  );
                })}
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">Selesaikan setiap kurikulum untuk sertifikat</div>
            </motion.div>
          </div>

          {/* Detailed Progress & Certificates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <BookOpen size={20} className="text-emerald-500" />
                    Detail Materi
                  </h3>
                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                    {completedCount}/{totalLessons} Selesai
                  </span>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {CURRICULUM_GROUPS.map(group => (
                    <div key={group.id} className="border-b border-slate-50 last:border-0">
                      <div className="bg-slate-50/50 px-6 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {group.title}
                      </div>
                      {group.modules.flatMap(m => m.lessons).map(lesson => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const quizAns = quizAnswers[lesson.id];
                        const isCorrect = quizAns !== undefined && lesson.quiz?.correctAnswerIndex === quizAns;
                        
                        return (
                          <div key={lesson.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                {isCompleted ? <CheckCircle2 size={16} /> : <BookOpen size={16} />}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-700">{lesson.title}</div>
                              </div>
                            </div>
                            {lesson.quiz && (
                              <div className="flex items-center gap-2">
                                {quizAns !== undefined ? (
                                  isCorrect ? (
                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                                      <CheckCircle2 size={10} /> BENAR
                                    </span>
                                  ) : (
                                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md flex items-center gap-1">
                                      <X size={10} /> SALAH
                                    </span>
                                  )
                                ) : (
                                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">BELUM ADA</span>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100">
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <Award size={20} className="text-amber-500" />
                    Sertifikat Saya
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {CURRICULUM_GROUPS.map(group => {
                    const groupLessons = group.modules.flatMap(m => m.lessons);
                    const isGroupComplete = groupLessons.every(l => completedLessons.includes(l.id));
                    
                    return (
                      <div 
                        key={group.id} 
                        className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                          isGroupComplete 
                            ? 'bg-amber-50 border-amber-100' 
                            : 'bg-slate-50 border-slate-100 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isGroupComplete ? 'bg-amber-400 text-white shadow-lg shadow-amber-200' : 'bg-slate-200 text-slate-400'
                          }`}>
                            <Trophy size={24} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">{group.title}</div>
                            <div className="text-xs text-slate-500 font-medium">
                              {isGroupComplete ? 'Selesai & Tersedia' : 'Belum Selesai'}
                            </div>
                          </div>
                        </div>
                        {isGroupComplete && (
                          <button 
                            onClick={() => setAchievement({ isOpen: true, type: 'curriculum', title: `Kurikulum ${group.title}` })}
                            className="px-4 py-2 bg-white text-amber-600 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors shadow-sm"
                          >
                            Lihat Sertifikat
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Saran Belajar</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {progressPercent < 30 
                    ? "Kamu baru memulai! Fokuslah pada pemahaman konsep dasar dan jangan ragu untuk mencoba kode berkali-kali." 
                    : progressPercent < 70 
                      ? `Bagus! Kamu sudah mulai memahami logika ${activeRoadmap.title.split(' ')[0]}. Coba kerjakan kuis dengan lebih teliti untuk meningkatkan akurasi.`
                      : "Luar biasa! Kamu hampir menyelesaikan seluruh materi. Persiapkan dirimu untuk tantangan yang lebih kompleks."}
                </p>
                <button 
                  onClick={handleContinueLearning}
                  className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Lanjutkan Belajar
                </button>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy size={120} />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Sertifikat {activeRoadmap.title}</h3>
                <p className="text-slate-400 text-sm mb-6 relative z-10">
                  Selesaikan seluruh kurikulum untuk membuka sertifikat kelulusan resmi dari muf-up.
                </p>
                <div className="flex items-center justify-between relative z-10">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Status</div>
                  <div className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full">
                    {isFinished ? "Siap Diunduh" : "Sedang Berjalan"}
                  </div>
                </div>
                {isFinished && (
                  <button 
                    onClick={() => setAchievement({ isOpen: true, type: 'curriculum', title: activeRoadmap.title })}
                    className="w-full mt-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                  >
                    Lihat Sertifikat
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        <AchievementModal 
          isOpen={achievement.isOpen} 
          onClose={() => setAchievement(prev => ({ ...prev, isOpen: false }))}
          type={achievement.type}
          title={achievement.title}
          userName={userName}
        />
        
        <Branding className="py-12 text-center" />
      </div>
    );
  }

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-y-auto">
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <TerminalIcon size={18} />
              </div>
              <span className="font-black text-lg tracking-tight text-slate-800">DevPath</span>
            </div>
            {userName && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="font-bold text-sm text-slate-700 hidden sm:block">{userName}</span>
              </div>
            )}
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold mb-6"
            >
              <Sparkles size={16} />
              <span>Pilih Jalur Karirmu</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Mulai Perjalanan Belajarmu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Pilih roadmap yang ingin kamu pelajari. Kamu bisa mempelajari semuanya secara paralel dan progresmu akan tersimpan secara otomatis.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAPS.map((roadmap, index) => {
              const roadmapLessons = (roadmap?.curriculums || []).flatMap(g => (g?.modules || []).flatMap(m => m?.lessons || []));
              const completedInRoadmap = roadmapLessons.filter(l => l && completedLessons.includes(l.id)).length;
              const progress = roadmapLessons.length > 0 ? Math.round((completedInRoadmap / roadmapLessons.length) * 100) : 0;
              
              const Icon = iconMap[roadmap.icon] || Code2;
              const colorStyles = colorMap[roadmap.icon] || { bg: 'bg-slate-500', text: 'text-slate-600', lightBg: 'bg-slate-100' };

              return (
                <motion.div
                  key={roadmap.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleSelectRoadmap(roadmap.id)}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${colorStyles.lightBg} ${colorStyles.text} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>
                    {progress > 0 && (
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black text-slate-900">{progress}%</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Selesai</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{roadmap.title}</h3>
                  <p className="text-slate-600 mb-8 line-clamp-2">{roadmap.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                      <BookOpen size={16} />
                      <span>{roadmapLessons.length} Materi</span>
                    </div>
                    <div className={`flex items-center gap-2 ${colorStyles.text} font-bold group-hover:translate-x-2 transition-transform`}>
                      <span>Mulai Belajar</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                  
                  {progress > 0 && (
                    <div className="mt-6 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${colorStyles.bg}`} style={{ width: `${progress}%` }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </main>
        <Branding className="py-12 text-center" />
      </div>
    );
  }

  if (currentView === 'roadmap') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentView('home')}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                title="Kembali ke Beranda"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                  <ArrowUp size={18} strokeWidth={3} />
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-800">muf-up</span>
              </div>
            </div>
            {userName && (
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentView('evaluation')}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <BarChart2 size={16} />
                  <span className="hidden md:inline">Dashboard Evaluasi</span>
                  <span className="md:hidden">Evaluasi</span>
                </button>
                <span className="text-sm font-medium text-slate-600 hidden sm:block">Halo, {userName}</span>
                <button 
                  onClick={handleContinueLearning}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  {isFinished ? 'Lihat Materi Lagi' : 'Lanjutkan Belajar'}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-slate-50 to-slate-50 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-8 shadow-sm border border-emerald-200">
                <Sparkles size={16} />
                Platform Belajar {activeRoadmap.title} Interaktif
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Kuasai {activeRoadmap.title.split(' ')[0]}, Buka Peluang <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Karir Masa Depan</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                {activeRoadmap.description} Mulai perjalananmu dari pemula hingga mahir. Kurikulum terstruktur muf-up dirancang untuk membantumu memahami logika pemrograman, memecahkan masalah kompleks, dan membangun portofolio pertamamu.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {!userName ? (
                  <button 
                    onClick={() => setCurrentView('welcome')}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Mulai Belajar Gratis
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={handleContinueLearning}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                    >
                      {isFinished ? 'Lihat Materi Lagi' : hasStartedRoadmap ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
                      <ArrowRight size={20} />
                    </button>
                    <button 
                      onClick={() => setShowResetConfirm(true)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-red-600 border border-red-200 rounded-full font-bold hover:bg-red-50 transition-colors w-full sm:w-auto"
                    >
                      <RefreshCw size={18} />
                      Reset Progress
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Mengapa Belajar di muf-up?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Investasikan waktumu untuk menguasai skill yang paling dicari di industri teknologi saat ini.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Karir Menjanjikan</h3>
                <p className="text-slate-600 leading-relaxed">
                  {activeRoadmap.title.split(' ')[0]} adalah bahasa yang sangat dicari di industri teknologi saat ini. Kuasai {activeRoadmap.title.split(' ')[0]} untuk membuka berbagai peluang karir dengan gaji tinggi.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Logika & Problem Solving</h3>
                <p className="text-slate-600 leading-relaxed">
                  Belajar pemrograman bukan hanya tentang menulis kode, tapi melatih otakmu untuk berpikir terstruktur dan memecahkan masalah kompleks secara efisien.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Otomatisasi & Produktivitas</h3>
                <p className="text-slate-600 leading-relaxed">
                  Gunakan {activeRoadmap.title.split(' ')[0]} untuk mengotomatiskan tugas-tugas membosankan yang berulang. Hemat waktumu dan tingkatkan produktivitas di pekerjaan apa pun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Map size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Roadmap Kurikulum</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Langkah demi langkah materi yang akan kamu pelajari. Disusun secara sistematis agar mudah dipahami oleh pemula.
              </p>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {CURRICULUM_GROUPS.map((group, groupIndex) => (
              <div key={group.id} className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase shadow-md">
                    {group.title}
                  </div>
                </div>
                <div className="space-y-6">
                  {group.modules.map((module, moduleIndex) => {
                    const moduleLessons = module.lessons;
                    const completedInModule = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
                    const isModuleComplete = completedInModule === moduleLessons.length && moduleLessons.length > 0;
                    
                    return (
                      <motion.div 
                        key={module.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (groupIndex * 0.1) + (moduleIndex * 0.05) }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shrink-0 md:order-1 md:group-odd:-ml-5 md:group-even:-mr-5 shadow-sm z-10">
                          {isModuleComplete ? <CheckCircle2 size={20} className="text-emerald-600" /> : <BookOpen size={16} />}
                        </div>
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-lg text-slate-900 mb-2">{module.title}</h3>
                          <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                            <span>{moduleLessons.length} Materi</span>
                            {completedInModule > 0 && (
                              <span className="text-emerald-600 font-medium">{completedInModule}/{moduleLessons.length} Selesai</span>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {moduleLessons.map(lesson => (
                              <li key={lesson.id} className="flex items-start gap-2 text-sm">
                                <div className="mt-0.5 shrink-0">
                                  {completedLessons.includes(lesson.id) ? (
                                    <CheckCircle2 size={14} className="text-emerald-500" />
                                  ) : (
                                    <div className="w-3.5 h-3.5 border-2 border-slate-200 rounded-full" />
                                  )}
                                </div>
                                <span className={completedLessons.includes(lesson.id) ? 'text-slate-400 line-through' : 'text-slate-600'}>
                                  {lesson.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Reset Confirmation Modal */}
        <AnimatePresence>
          {showResetConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={() => setShowResetConfirm(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden p-6 text-center"
              >
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Reset Progress?</h3>
                <p className="text-slate-600 mb-6">
                  Semua progress belajar Anda akan dihapus dan Anda akan mengulang dari awal. Tindakan ini tidak dapat dibatalkan.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleResetProgress}
                    className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                  >
                    Ya, Reset
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Branding className="py-8 text-center" />
      </div>
    );
  }

  if (currentView === 'welcome') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Sparkles size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Selamat Datang di muf-up : {activeRoadmap.title}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Mulai perjalananmu menguasai {activeRoadmap.title.split(' ')[0]} dari dasar hingga mahir. 
            Kurikulum ini dirancang khusus untuk membantumu memahami konsep pemrograman dengan mudah, interaktif, dan menyenangkan.
          </p>
          
          <div className="max-w-md mx-auto mb-10 text-left">
            <label htmlFor="userName" className="block text-sm font-bold text-slate-700 mb-2">
              Nama Lengkap Anda (Untuk Sertifikat)
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all font-medium"
              onKeyDown={(e) => e.key === 'Enter' && handleStartLearning()}
            />
          </div>

          <button 
            onClick={handleStartLearning}
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-1"
          >
            Mulai Belajar Sekarang
            <ChevronRight size={20} />
          </button>
        </motion.div>
        
        <Branding className="absolute bottom-8 left-0 right-0 text-center" />
      </div>
    );
  }

  if (currentView === 'thankyou') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Luar Biasa! 🎉
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Kamu telah menyelesaikan seluruh kurikulum muf-up : {activeRoadmap.title}. Ini adalah pencapaian yang hebat! 
            Teruslah berlatih, bangun proyek-proyek keren, dan jadilah programmer {activeRoadmap.title.split(' ')[0]} yang handal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setAchievement({ isOpen: true, type: 'curriculum', title: activeRoadmap.title });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-md"
            >
              <Trophy size={18} />
              Lihat Sertifikat
            </button>
            <button 
              onClick={() => setCurrentView('learning')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              <BookOpen size={18} />
              Lihat Materi Lagi
            </button>
            <button 
              onClick={handleResetProgress}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-md"
            >
              Mulai dari Awal
            </button>
          </div>
        </motion.div>
        
        <AchievementModal 
          isOpen={achievement.isOpen} 
          onClose={() => setAchievement(prev => ({ ...prev, isOpen: false }))}
          type={achievement.type}
          title={achievement.title}
          userName={userName}
        />

        <Branding className="absolute bottom-8 left-0 right-0 text-center" />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="w-72 bg-white border-r border-slate-200 flex flex-col h-full z-40"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div 
                className="flex items-center gap-2 cursor-pointer" 
                onClick={() => setCurrentView('roadmap')}
              >
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <ArrowUp size={18} strokeWidth={3} />
                </div>
                <h1 className="font-bold text-xl tracking-tight">muf-up : {activeRoadmap.title.split(' ')[0]}</h1>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-4">
              {CURRICULUM_GROUPS.map((group, index) => (
                <div key={group.id} className={index > 0 ? 'mt-6' : ''}>
                  <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-slate-100 mb-4">
                    <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                      {group.title}
                    </h2>
                  </div>
                  <div className="px-4 space-y-4">
                    {group.modules.map(module => (
                      <div key={module.id} className="space-y-2 pl-2 border-l-2 border-slate-100">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">
                          {module.title}
                        </h3>
                        <div className="space-y-1">
                          {module.lessons.map(lesson => (
                            <button
                              key={lesson.id}
                              onClick={() => selectLesson(lesson.id)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all text-left ${
                                activeLesson.id === lesson.id 
                                  ? 'bg-emerald-50 text-emerald-700 font-medium' 
                                  : 'text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              {completedLessons.includes(lesson.id) ? (
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                              ) : (
                                <div className="w-4 h-4 border-2 border-slate-200 rounded-full shrink-0" />
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-4 mb-3">
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-slate-500">Progress Belajar</span>
                  <span className={colorMap[activeRoadmap.icon]?.text || 'text-slate-600'}>
                    {allLessons.length > 0 ? Math.round((completedInRoadmap / allLessons.length) * 100) : 0}%
                  </span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${colorMap[activeRoadmap.icon]?.bg || 'bg-slate-500'} transition-all duration-500`} 
                    style={{ width: `${allLessons.length > 0 ? (completedInRoadmap / allLessons.length) * 100 : 0}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentView('roadmap')}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    <Map size={16} />
                    Roadmap
                  </button>
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center p-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    title="Pengaturan"
                  >
                    <Settings size={16} />
                  </button>
                </div>
                <button 
                  onClick={() => setCurrentView('evaluation')}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg text-sm font-bold hover:bg-emerald-100 transition-colors"
                >
                  <BarChart2 size={16} />
                  Dashboard Evaluasi
                </button>
              </div>
              <Branding className="pt-4 pb-1 text-center" />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg">
                <Menu size={20} />
              </button>
            )}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BookOpen size={16} />
              <span className="hidden sm:inline">Kurikulum {activeRoadmap.title.split(' ')[0]}</span>
              <ChevronRight size={14} className="hidden sm:inline" />
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">{activeLesson.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white">
              <ArrowUp size={14} strokeWidth={3} />
            </div>
            <span className="font-bold text-sm text-slate-700 hidden sm:inline">muf-up</span>
          </div>
        </header>

        {/* Lesson Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12">
            <motion.div
              key={activeLesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{activeLesson.title}</h2>
                <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-600 leading-relaxed">
                  <ReactMarkdown>{activeLesson.content}</ReactMarkdown>
                </div>
              </div>

              {activeLesson.codeExample && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      <TerminalIcon size={16} className="text-emerald-600" />
                      Contoh Kode
                    </h4>
                    <button 
                      onClick={() => runCode(activeLesson.codeExample!)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors"
                    >
                      <Play size={12} fill="currentColor" />
                      JALANKAN
                    </button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-emerald-400 overflow-x-auto border border-slate-800 shadow-inner">
                      <pre><code>{activeLesson.codeExample}</code></pre>
                    </div>
                    <div className="bg-slate-100 rounded-xl p-4 font-mono text-sm text-slate-700 border border-slate-200 shadow-inner min-h-[100px]">
                      <div className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-bold">Output Terminal</div>
                      {output.length === 0 ? (
                        <div className="text-slate-400 italic">Klik jalankan untuk melihat hasil...</div>
                      ) : (
                        <div className="space-y-1">
                          {output.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeLesson.quiz && (
                <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <BookOpen size={20} className="text-emerald-600" />
                    Kuis Pemahaman
                  </h4>
                  <p className="text-slate-700 font-medium mb-4">{activeLesson.quiz.question}</p>
                  <div className="space-y-3">
                    {activeLesson.quiz.options.map((option, idx) => {
                      const isSelected = selectedQuizOption === idx;
                      const isCorrect = idx === activeLesson.quiz!.correctAnswerIndex;
                      
                      let buttonClass = "w-full text-left px-4 py-3 rounded-xl border-2 transition-all ";
                      
                      if (!isQuizSubmitted) {
                        buttonClass += isSelected 
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700" 
                          : "border-slate-200 hover:border-emerald-200 hover:bg-slate-50 text-slate-700";
                      } else {
                        if (isCorrect) {
                          buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                        } else if (isSelected && !isCorrect) {
                          buttonClass += "border-red-500 bg-red-50 text-red-700";
                        } else {
                          buttonClass += "border-slate-200 text-slate-500 opacity-50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isQuizSubmitted}
                          onClick={() => setSelectedQuizOption(idx)}
                          className={buttonClass}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {isQuizSubmitted && isCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
                            {isQuizSubmitted && isSelected && !isCorrect && <X size={18} className="text-red-500" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  {!isQuizSubmitted ? (
                    <button
                      disabled={selectedQuizOption === null}
                      onClick={handleQuizSubmit}
                      className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cek Jawaban
                    </button>
                  ) : (
                    <div className={`mt-6 p-4 rounded-xl ${selectedQuizOption === activeLesson.quiz.correctAnswerIndex ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                      <p className="font-bold flex items-center gap-2">
                        {selectedQuizOption === activeLesson.quiz.correctAnswerIndex ? (
                          <><CheckCircle2 size={20} /> Jawaban Benar! Luar biasa.</>
                        ) : (
                          <><X size={20} /> Jawaban Kurang Tepat. Coba pelajari lagi materinya.</>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button 
                  onClick={() => toggleComplete(activeLesson.id)}
                  disabled={!completedLessons.includes(activeLesson.id) && !!activeLesson.quiz && !isQuizSubmitted}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all w-full sm:w-auto ${
                    completedLessons.includes(activeLesson.id)
                      ? 'bg-emerald-100 text-emerald-700'
                      : (!completedLessons.includes(activeLesson.id) && !!activeLesson.quiz && !isQuizSubmitted)
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                  }`}
                >
                  <CheckCircle2 size={20} />
                  {completedLessons.includes(activeLesson.id) ? 'Selesai Pelajari' : 'Tandai Selesai'}
                </button>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={goToPrevLesson}
                    disabled={activeLessonIndex === 0}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} />
                    <span className="hidden sm:inline">Sebelumnya</span>
                  </button>
                  <button 
                    onClick={goToNextLesson}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
                  >
                    <span className="hidden sm:inline">
                      {activeLessonIndex === allLessons.length - 1 ? 'Selesai' : 'Selanjutnya'}
                    </span>
                    <span className="sm:hidden">Lanjut</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <AchievementModal 
        isOpen={achievement.isOpen} 
        onClose={() => {
          setAchievement(prev => ({ ...prev, isOpen: false }));
          if (activeLessonIndex < allLessons.length - 1 || isFinished) {
            setShowNextPrompt(true);
          }
        }}
        type={achievement.type}
        title={achievement.title}
        userName={userName}
      />

      {/* Next Lesson Prompt Modal */}
      <AnimatePresence>
        {showNextPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowNextPrompt(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8 text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isFinished ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                {isFinished ? <Trophy size={32} /> : <CheckCircle2 size={32} />}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {isFinished ? 'Selamat! Kamu Hebat! 🎉' : 'Materi Selesai!'}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {isFinished 
                  ? `Luar biasa! Kamu telah menyelesaikan seluruh materi dalam kurikulum ${activeRoadmap.title.split(' ')[0]} ini. Semua progresmu telah tercatat di dashboard.` 
                  : 'Kamu telah menyelesaikan materi ini dengan baik. Ingin langsung lanjut ke materi berikutnya?'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowNextPrompt(false)}
                  className="flex-1 px-4 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  {isFinished ? 'Tutup' : 'Tetap di Sini'}
                </button>
                <button
                  onClick={() => {
                    setShowNextPrompt(false);
                    if (isFinished) {
                      setCurrentView('evaluation');
                    } else {
                      proceedToNext();
                    }
                  }}
                  className={`flex-1 px-4 py-3.5 text-white rounded-xl font-bold transition-colors shadow-lg ${
                    isFinished 
                      ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-200' 
                      : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
                  }`}
                >
                  {isFinished ? 'Lihat Dashboard' : 'Lanjut Materi'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Complete Before Next Confirmation Modal */}
      <AnimatePresence>
        {showCompleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowCompleteConfirm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8 text-center"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Belum Selesai?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kamu belum menandai materi ini sebagai selesai. Apakah kamu ingin menandainya sekarang sebelum lanjut?
                {!!activeLesson.quiz && !isQuizSubmitted && (
                  <span className="block mt-2 text-red-500 text-sm font-bold">
                    * Kamu harus menjawab kuis terlebih dahulu sebelum bisa menandai materi ini selesai.
                  </span>
                )}
              </p>
              <div className="flex flex-col gap-3">
                <button
                  disabled={!!activeLesson.quiz && !isQuizSubmitted}
                  onClick={() => {
                    toggleComplete(activeLesson.id, false);
                    setShowCompleteConfirm(false);
                    proceedToNext();
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
                    !!activeLesson.quiz && !isQuizSubmitted
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                  }`}
                >
                  <CheckCircle2 size={18} />
                  Ya, Tandai Selesai & Lanjut
                </button>
                <button
                  onClick={() => {
                    setShowCompleteConfirm(false);
                    proceedToNext();
                  }}
                  className="w-full px-4 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Lanjut Tanpa Menandai
                </button>
                <button
                  onClick={() => setShowCompleteConfirm(false)}
                  className="w-full px-4 py-2 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
                >
                  Batal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowSettings(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Pengaturan</h3>
                <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="editUserName" className="block text-sm font-bold text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="editUserName"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                      localStorage.setItem('pylearn_username', e.target.value);
                    }}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all font-medium"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-700 mb-2">Reset Progress</h4>
                  <p className="text-sm text-slate-500 mb-4">
                    Hapus semua progress belajar dan mulai dari awal. Tindakan ini tidak dapat dibatalkan.
                  </p>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      setShowResetConfirm(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors"
                  >
                    <RefreshCw size={18} />
                    Reset Progress Belajar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowResetConfirm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden p-6 text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Reset Progress?</h3>
              <p className="text-slate-600 mb-6">
                Semua progress belajar Anda akan dihapus dan Anda akan mengulang dari awal. Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleResetProgress}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                >
                  Ya, Reset
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
