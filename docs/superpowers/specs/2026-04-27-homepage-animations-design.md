# Homepage Animations — Design Spec
**Date:** 2026-04-27  
**Scope:** `index.html` + `services.css` (no structural changes)

## Objetivo
Añadir animaciones atractivas de estilo tecnológico a la página principal sin alterar la estructura HTML ni el layout existente.

## Componentes

### 1. Canvas de partículas (fondo)
- `<canvas id="particle-canvas">` fijo, `pointer-events:none`, `z-index:0`, opacidad 0.45
- 60 partículas flotando hacia arriba con color cyan `0,240,255` o azul `0,87,255`
- Fade-in/out en nacimiento y muerte de cada partícula
- Lógica en `script.js` o `<script>` inline en `index.html`

### 2. Header — slide-down al cargar
- `animation: slideDown 0.6s cubic-bezier(0.4,0,0.2,1) both`
- Logo con `glowPulse` pulsante en 3s loop

### 3. Hero — fade-up en cascada + typewriter
- Tag superior: `fadeUp` con delay 0.2s
- `<h2>`: `fadeUp` delay 0.4s; contiene un `<span id="typewriter-target">` que rota frases: "profesionales" → "de confianza" → "a domicilio" (typewriter JS)
- Párrafo: `fadeUp` delay 0.6s
- `div.hero-glow`: radial gradient cyan detrás del hero, animación `breathe` 4s loop

### 4. Tarjetas de servicios — scroll reveal en cascada
- IntersectionObserver (threshold 0.15) sobre cada `.service`
- Al entrar: `cardReveal` (fade + translateY) con delay escalonado (0ms, 150ms, 300ms)
- `::before` pseudo-element: línea superior de 2px cyan que se desliza de izquierda a derecha al revelar
- Hover: `translateY(-5px)` + `box-shadow` cyan suave + ícono con `scale(1.1) rotate(-4deg)`

### 5. Blog cards — scroll reveal con scale
- IntersectionObserver sobre cada `.rb-card`
- Al entrar: `scaleReveal` (scale 0.93→1 + fade) con delay escalonado (0ms, 120ms, 240ms)
- Hover: `translateY(-4px)` (ya existe, se mantiene)

## Implementación técnica
- Animaciones de entrada: CSS `@keyframes` + clase `.revealed` añadida por JS
- Partículas: vanilla JS sobre `<canvas>`
- Typewriter: vanilla JS, sin dependencias
- Compatibilidad: `IntersectionObserver` (todos los navegadores modernos)
- Respeto al tema: las animaciones usan variables CSS existentes (`--acc-cyan`, etc.)
- No se modifica la estructura HTML más allá de añadir `<canvas>`, el `<span>` typewriter y atributos `data-delay`

## Archivos modificados
- `index.html` — añadir canvas, spans, keyframes en `<style>`, scripts de partículas/typewriter/observer
- `services.css` — añadir keyframes globales reutilizables (`slideDown`, `fadeUp`, `glowPulse`, `breathe`, `cardReveal`, `scaleReveal`)
