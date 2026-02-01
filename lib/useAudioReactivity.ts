import { useEffect, useRef, useState } from 'react';

interface AudioReactivityData {
  beatIntensity: number;
  midFrequency: number;
  highFrequency: number;
  isPlaying: boolean;
}

export function useAudioReactivity(
  audioElement: HTMLAudioElement | null,
  enabled: boolean = true
): AudioReactivityData {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const [audioData, setAudioData] = useState<AudioReactivityData>({
    beatIntensity: 0,
    midFrequency: 0,
    highFrequency: 0,
    isPlaying: false,
  });

  useEffect(() => {
    if (!enabled || !audioElement) return;

    const initAudioContext = () => {
      if (audioContextRef.current) return;

      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        audioContextRef.current = audioCtx;

        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        try {
          const source = audioCtx.createMediaElementSource(audioElement);
          source.connect(analyser);
          analyser.connect(audioCtx.destination);
        } catch (e) {
          // Audio source already initialized
        }
      } catch (e) {
        console.warn('Audio context not available:', e);
      }
    };

    const handlePlay = () => {
      initAudioContext();
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
    };

    const handleUpdate = () => {
      if (!analyserRef.current || !dataArrayRef.current) return;

      (analyserRef.current.getByteFrequencyData as any)(dataArrayRef.current);

      // Low frequencies (bass/beat)
      const lowEnd = Math.floor(dataArrayRef.current.length * 0.25);
      let lowSum = 0;
      for (let i = 0; i < lowEnd; i++) {
        lowSum += dataArrayRef.current[i];
      }
      const beatIntensity = lowSum / lowEnd / 255;

      // Mid frequencies
      const midStart = Math.floor(dataArrayRef.current.length * 0.25);
      const midEnd = Math.floor(dataArrayRef.current.length * 0.75);
      let midSum = 0;
      for (let i = midStart; i < midEnd; i++) {
        midSum += dataArrayRef.current[i];
      }
      const midFrequency = midSum / (midEnd - midStart) / 255;

      // High frequencies (treble)
      const highStart = Math.floor(dataArrayRef.current.length * 0.75);
      let highSum = 0;
      for (let i = highStart; i < dataArrayRef.current.length; i++) {
        highSum += dataArrayRef.current[i];
      }
      const highFrequency = highSum / (dataArrayRef.current.length - highStart) / 255;

      setAudioData({
        beatIntensity: Math.min(1, beatIntensity),
        midFrequency: Math.min(1, midFrequency),
        highFrequency: Math.min(1, highFrequency),
        isPlaying: !audioElement.paused,
      });
    };

    const animationId = setInterval(handleUpdate, 50);

    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('play', handleUpdate);

    return () => {
      clearInterval(animationId);
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('play', handleUpdate);
    };
  }, [audioElement, enabled]);

  return audioData;
}
