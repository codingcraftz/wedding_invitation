"use client";

import Gallery from "@/components/Gallery";
import Main from "@/components/Main";
import KAKAOMAP from "@/components/Map";
import { FaMusic, FaStop } from "react-icons/fa";
import { useRef, useState } from "react";
import Sub from "@/components/Sub";
import SubSecond from "@/components/SubSecond";
import WeddingCalendar from "@/components/WeddingCalendar";
import Account from "@/components/Account";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false); // 시작 버튼을 눌렀는지 여부
  const audioRef = useRef(null);

  const handleStart = () => {
    // 시작 버튼 클릭 시 오디오 재생 시도
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setIsStarted(true);
    }
  };

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-sm mx-auto bg-black shadow-md">
      <main className="flex flex-col flex-1 pb-6">
        <audio ref={audioRef} loop>
          <source src="/audio/wedding-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {!isStarted && (
          <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <button
              onClick={handleStart}
              className="bg-pink-500 text-white font-bold px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition"
            >
              청첩장 열기(음악 재생)
            </button>
          </div>
        )}
        {/* 재생/일시정지 버튼 */}
        {isStarted && (
          <div className="fixed bottom-4 right-4 flex items-center justify-center z-50">
            <button
              onClick={handleAudioToggle}
              className="bg-black text-white font-bold px-5 py-3 rounded-full shadow-lg transition font-sans text-lg border-2 border-gray-300"
            >
              {isPlaying ? (
                <div className="flex items-center gap-2">
                  <span>Pause</span>
                  <FaStop />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Play</span>
                  <FaMusic />
                </div>
              )}
            </button>
          </div>
        )}
        <Main />
        <Sub />
        <SubSecond />
        <Gallery />
        <WeddingCalendar />
        <KAKAOMAP />
        <Account />
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white text-center py-6 text-sm">
        <p>우리의 결혼식에 함께해주세요! 💕</p>
        <p className="mt-2">© 2024 청첩장</p>
      </footer>
    </div>
  );
}
