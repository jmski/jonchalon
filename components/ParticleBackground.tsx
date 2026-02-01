'use client';
import { useEffect, useRef, useState } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
  speed?: number;
  className?: string;
  musicReactive?: boolean;
  audioElement?: HTMLAudioElement | null;
}

export default function ParticleBackground({
  particleCount = 50,
  speed = 2,
  className = '',
  musicReactive = false,
  audioElement = null,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize audio context for music reactivity
    const initAudioContext = () => {
      if (musicReactive && !audioContextRef.current) {
        try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          const audioCtx = new AudioContextClass();
          audioContextRef.current = audioCtx;

          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 256;
          analyserRef.current = analyser;

          const bufferLength = analyser.frequencyBinCount;
          dataArrayRef.current = new Uint8Array(bufferLength);

          // Connect audio element to analyser if provided
          if (audioElement && audioCtx.state !== 'closed') {
            const source = audioCtx.createMediaElementSource(audioElement);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
          }

          setIsAudioReady(true);
        } catch (e) {
          console.warn('Audio context not available:', e);
        }
      }
    };

    // Initialize audio on first user interaction
    const handleUserInteraction = () => {
      initAudioContext();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    if (musicReactive) {
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
    }

    // Particle class
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      baseRadius: number;
      baseVx: number;
      baseVy: number;
      hue: number;
    }

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseVx = (Math.random() - 0.5) * speed;
      const baseVy = (Math.random() - 0.5) * speed;
      const baseRadius = Math.random() * 2 + 0.5;

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: baseVx,
        vy: baseVy,
        radius: baseRadius,
        opacity: Math.random() * 0.5 + 0.2,
        baseRadius,
        baseVx,
        baseVy,
        hue: Math.random() * 360,
      });
    }

    // Get average frequency for beat detection
    const getBeatIntensity = (): number => {
      if (!analyserRef.current || !dataArrayRef.current) return 0;

      (analyserRef.current.getByteFrequencyData as any)(dataArrayRef.current);
      let sum = 0;

      // Focus on lower frequencies for bass/beat
      const lowFreqBins = Math.floor(dataArrayRef.current.length * 0.25);
      for (let i = 0; i < lowFreqBins; i++) {
        sum += dataArrayRef.current[i];
      }

      return sum / lowFreqBins / 255; // Normalized 0-1
    };

    // Get mid-range frequency (energy/melody)
    const getMidFrequency = (): number => {
      if (!analyserRef.current || !dataArrayRef.current) return 0;

      (analyserRef.current.getByteFrequencyData as any)(dataArrayRef.current);
      let sum = 0;
      const start = Math.floor(dataArrayRef.current.length * 0.25);
      const end = Math.floor(dataArrayRef.current.length * 0.75);

      for (let i = start; i < end; i++) {
        sum += dataArrayRef.current[i];
      }

      return sum / (end - start) / 255; // Normalized 0-1
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const beatIntensity = musicReactive && isAudioReady ? getBeatIntensity() : 0;
      const midFrequency = musicReactive && isAudioReady ? getMidFrequency() : 0;

      particles.forEach((particle, index) => {
        // Apply music reactivity
        if (musicReactive && isAudioReady) {
          // Particles expand on bass
          particle.radius = particle.baseRadius * (1 + beatIntensity * 2);

          // Particles accelerate on energy
          const energyMultiplier = 1 + midFrequency * 0.5;
          particle.vx = particle.baseVx * energyMultiplier;
          particle.vy = particle.baseVy * energyMultiplier;

          // Rotate hue based on beat
          particle.hue = (particle.hue + beatIntensity * 5) % 360;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Determine particle color
        let particleColor: string;
        if (musicReactive && isAudioReady) {
          // Use hue rotation for music reactive mode
          const saturation = 80 + beatIntensity * 20;
          const lightness = 50 + midFrequency * 10;
          particleColor = `hsla(${particle.hue}, ${saturation}%, ${lightness}%, ${particle.opacity})`;
        } else {
          // Use cyan/gold/pink color scheme in normal mode
          const colors = [
            `rgba(0, 217, 255, ${particle.opacity})`, // Cyan
            `rgba(255, 215, 0, ${particle.opacity})`, // Gold
            `rgba(255, 0, 110, ${particle.opacity})`, // Pink
          ];
          particleColor = colors[index % colors.length];
        }

        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for music reactive mode
        if (musicReactive && isAudioReady && beatIntensity > 0.3) {
          ctx.strokeStyle = particleColor;
          ctx.lineWidth = beatIntensity * 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius + beatIntensity * 3, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw connections to nearby particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            let connectionColor: string;
            if (musicReactive && isAudioReady) {
              connectionColor = `hsla(${particle.hue}, 80%, 50%, ${particle.opacity * 0.3 * (1 + beatIntensity)})`;
            } else {
              connectionColor = `rgba(0, 217, 255, ${particle.opacity * 0.3})`;
            }

            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.5 + (musicReactive && isAudioReady ? beatIntensity : 0) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateCanvasSize);
      if (musicReactive) {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };
  }, [particleCount, speed, musicReactive, audioElement, isAudioReady]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        opacity: 0.5,
        mixBlendMode: 'screen',
      }}
    />
  );
}
