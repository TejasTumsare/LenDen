import React, { useEffect, useRef } from 'react';

const IntroBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Particle(x, y, distance) {
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random();
      this.opacity = (Math.random() * 5 + 2) / 10;
      this.distance = (2 / this.opacity) * distance;
      this.speed = this.distance * 0.00003;

      this.draw = function() {
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      };
      this.update = function() {
        this.angle += this.speed;
        const cosAngle = Math.cos(this.angle);
        const sinAngle = Math.sin(this.angle);
        this.position = {
          x: x + this.distance * cosAngle,
          y: y + this.distance * sinAngle,
        };
        this.draw();
      };
    }

    function Emitter(x, y) {
      this.position = { x: x, y: y };
      this.radius = 30;
      this.count = 1500;
      this.particles = [];

      for (let i = 0; i < this.count; i++) {
        this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
      }
    }

    Emitter.prototype = {
      draw: function() {
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      },
      update: function() {
        for (let i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      },
    };

    const emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      requestAnimFrame(loop);
    };

    loop();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle" style={{width:'100%'}} />;
};

export default IntroBg;
