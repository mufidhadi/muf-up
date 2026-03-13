import React, { useRef } from 'react';
import { Download, Share2, Award, Star, Trophy, ArrowUp } from 'lucide-react';
import html2canvas from 'html2canvas';

export type AchievementType = 'lesson' | 'module' | 'curriculum';

interface CertificateProps {
  userName: string;
  type: AchievementType;
  title: string;
  onClose?: () => void;
}

export function Certificate({ userName, type, title, onClose }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const getAchievementText = () => {
    switch (type) {
      case 'lesson':
        return 'Telah menyelesaikan pelajaran:';
      case 'module':
        return 'Telah menguasai modul:';
      case 'curriculum':
        return 'Telah menyelesaikan seluruh kurikulum:';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'lesson':
        return <Star size={40} className="mx-auto mb-4" style={{ color: '#f59e0b' }} />;
      case 'module':
        return <Award size={48} className="mx-auto mb-4" style={{ color: '#f59e0b' }} />;
      case 'curriculum':
        return <Trophy size={56} className="mx-auto mb-4" style={{ color: '#f59e0b' }} />;
    }
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Sertifikat_muf-up_python_${userName.replace(/\s+/g, '_')}.png`;
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Gagal mengunduh sertifikat. Silakan coba lagi.');
    }
  };

  const handleShare = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        
        const file = new File([blob], 'sertifikat.png', { type: 'image/png' });
        
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Sertifikat muf-up : python',
            text: `Saya baru saja menyelesaikan ${title} di muf-up : python! 🚀🐍`,
            files: [file]
          });
        } else {
          // Fallback to download if Web Share API is not supported
          alert('Browser Anda tidak mendukung fitur berbagi langsung. Sertifikat akan diunduh.');
          handleDownload();
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error sharing certificate:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      {/* The Certificate Element to be captured */}
      <div 
        ref={certificateRef}
        className="w-full relative overflow-hidden"
        style={{ 
          aspectRatio: '1.414 / 1',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Decorative Border */}
        <div 
          className="w-full h-full flex flex-col relative"
          style={{
            border: '8px double rgba(217, 119, 6, 0.8)',
            backgroundColor: 'rgba(255, 251, 235, 0.3)',
            boxSizing: 'border-box'
          }}
        >
          
          {/* Background Watermark */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.05, color: '#0f172a' }}
          >
            <Trophy size={300} />
          </div>

          <div className="relative z-10 text-center w-full h-full flex flex-col justify-between p-6 sm:p-10">
            <div className="flex flex-col items-center justify-center flex-1">
              {getIcon()}
              
              <h1 
                className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-tight uppercase leading-normal"
                style={{ color: '#0f172a' }}
              >
                Sertifikat Penghargaan
              </h1>
              
              <hr 
                className="w-24 mx-auto mb-6"
                style={{ borderTop: '4px solid #f59e0b', borderRadius: '2px' }}
              />
              
              <p 
                className="text-xs sm:text-sm lg:text-base font-medium mb-4 uppercase tracking-widest"
                style={{ color: '#475569' }}
              >
                Diberikan dengan bangga kepada
              </p>
              
              <h2 
                className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 italic"
                style={{ color: '#047857' }}
              >
                {userName || 'Nama Peserta'}
              </h2>
              
              <p 
                className="text-xs sm:text-sm lg:text-base font-medium mb-2"
                style={{ color: '#475569' }}
              >
                {getAchievementText()}
              </p>
              
              <h3 
                className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 max-w-xl mx-auto leading-tight"
                style={{ color: '#0f172a' }}
              >
                {title}
              </h3>
            </div>
            
            <div className="flex justify-between items-end w-full px-2 sm:px-8 shrink-0">
              <div className="text-center pb-2">
                <div 
                  className="w-24 sm:w-32 lg:w-40 mb-2 mx-auto flex items-center justify-center gap-1"
                  style={{ borderBottom: '2px solid #94a3b8', paddingBottom: '4px' }}
                >
                  <div className="w-4 h-4 bg-emerald-600 rounded-sm flex items-center justify-center text-white">
                    <ArrowUp size={10} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-sm text-slate-700">muf-up</span>
                </div>
                <p 
                  className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase"
                  style={{ color: '#475569' }}
                >
                  Platform
                </p>
              </div>
              
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center relative z-20"
                style={{ 
                  backgroundColor: '#f59e0b', 
                  border: '4px solid #ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className="absolute inset-1 rounded-full"
                  style={{ border: '2px dashed #ffffff' }}
                ></div>
                <span 
                  className="font-bold text-[8px] sm:text-[10px] lg:text-xs text-center leading-none"
                  style={{ color: '#ffffff' }}
                >
                  MUF-UP<br/>VERIFIED
                </span>
              </div>
              
              <div className="text-center pb-2">
                <div 
                  className="w-24 sm:w-32 lg:w-40 mb-2 mx-auto"
                  style={{ borderBottom: '2px solid #94a3b8' }}
                >
                  <span 
                    className="text-xs sm:text-sm font-serif italic"
                    style={{ color: '#1e293b' }}
                  >
                    {new Date().toLocaleDateString('id-ID')}
                  </span>
                </div>
                <p 
                  className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase"
                  style={{ color: '#475569' }}
                >
                  Tanggal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
        >
          <Download size={20} />
          Unduh Gambar
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
        >
          <Share2 size={20} />
          Bagikan
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
          >
            Tutup
          </button>
        )}
      </div>
    </div>
  );
}
