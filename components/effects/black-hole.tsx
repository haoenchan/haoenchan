"use client"

import { useEffect, useRef } from "react"

export function BlackHole({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({
    mx: 0, my: 0,
    scroll: 0, scrollVel: 0,
    targetX: 0, targetY: 0,
    cx: 0, cy: 0,
    t: 0,
    particles: [] as { theta: number; r: number; r0: number; wobble: number; speed: number; hue: number; life: number }[],
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const w = window.innerWidth, h = window.innerHeight
      canvas!.width = w * DPR; canvas!.height = h * DPR
      canvas!.style.width = w + "px"; canvas!.style.height = h + "px"
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    function onScroll() {
      const s = stateRef.current
      const newScroll = window.scrollY
      s.scrollVel = (newScroll - s.scroll) * 0.5 + s.scrollVel * 0.85
      s.scroll = newScroll
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    function onMouse(e: PointerEvent) {
      const s = stateRef.current
      s.mx = (e.clientX / window.innerWidth - 0.5) * 2
      s.my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("pointermove", onMouse)

    const s = stateRef.current
    s.particles = Array.from({ length: 260 }, () => {
      const r = 90 + Math.random() * 240
      return { theta: Math.random() * Math.PI * 2, r, r0: r, wobble: (Math.random() - 0.5) * 8, speed: 0.012 + (1 / r) * 0.9, hue: 30 + Math.random() * 25, life: Math.random() }
    })

    const EH_R = 60, PHOTON_R = EH_R * 1.25, DISK_INNER = PHOTON_R + 12, DISK_OUTER = 320
    const INCLINATION = 0.38, SKEW = -0.18, LENSE_STRENGTH = 8000

    function draw() {
      const w = window.innerWidth, h = window.innerHeight
      const st = stateRef.current
      st.t += 0.0125
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const sf = Math.min(st.scroll / maxScroll, 1)
      st.targetX = w * (0.65 - sf * 0.30) + st.mx * 40
      st.targetY = h * (0.45 + sf * 0.10) + st.my * 30 + Math.sin(st.t * 0.4) * 8
      st.cx += (st.targetX - st.cx) * 0.06
      st.cy += (st.targetY - st.cy) * 0.06
      st.scrollVel *= 0.92
      const cx = st.cx, cy = st.cy

      ctx!.clearRect(0, 0, w, h)

      const bgGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 520)
      bgGrad.addColorStop(0, `rgba(2,4,8,${0.55 * opacity})`)
      bgGrad.addColorStop(0.5, `rgba(2,4,8,${0.2 * opacity})`)
      bgGrad.addColorStop(1, "rgba(2,4,8,0)")
      ctx!.fillStyle = bgGrad
      ctx!.beginPath(); ctx!.arc(cx, cy, 520, 0, Math.PI * 2); ctx!.fill()

      ctx!.strokeStyle = `rgba(255, 180, 80, ${0.04 * opacity})`
      ctx!.lineWidth = 0.6
      const step = 90, reach = 600
      for (let gx = cx - reach; gx <= cx + reach; gx += step) {
        ctx!.beginPath()
        for (let gy = cy - reach; gy <= cy + reach; gy += 6) {
          const dx = gx - cx, dy = gy - cy, r2 = dx * dx + dy * dy
          const k = LENSE_STRENGTH / (r2 + 6000)
          const px = gx - dx * k, py = gy - dy * k
          if (gy === cy - reach) ctx!.moveTo(px, py); else ctx!.lineTo(px, py)
        }
        ctx!.stroke()
      }
      for (let gy = cy - reach; gy <= cy + reach; gy += step) {
        ctx!.beginPath()
        for (let gx = cx - reach; gx <= cx + reach; gx += 6) {
          const dx = gx - cx, dy = gy - cy, r2 = dx * dx + dy * dy
          const k = LENSE_STRENGTH / (r2 + 6000)
          const px = gx - dx * k, py = gy - dy * k
          if (gx === cx - reach) ctx!.moveTo(px, py); else ctx!.lineTo(px, py)
        }
        ctx!.stroke()
      }

      function drawParticles(filterBehind: boolean) {
        for (const p of st.particles) {
          p.theta += p.speed + st.scrollVel * 0.0008
          p.r -= 0.05
          p.life += 0.003
          if (p.r < DISK_INNER) {
            p.r = DISK_OUTER + Math.random() * 60; p.r0 = p.r
            p.theta = Math.random() * Math.PI * 2; p.life = 0
          }
          const xLocal = Math.cos(p.theta) * p.r
          const yLocal = Math.sin(p.theta) * p.r * INCLINATION + xLocal * SKEW
          const x = cx + xLocal, y = cy + yLocal + p.wobble * 0.15
          const isBehind = Math.sin(p.theta) < 0
          if (filterBehind !== isBehind) continue
          const norm = 1 - (p.r - DISK_INNER) / (DISK_OUTER - DISK_INNER)
          const dop = (Math.cos(p.theta) + 1) * 0.5
          const hue = 28 + dop * 25
          const lightness = 50 + norm * 35 + dop * 12
          const alpha = (0.22 + norm * 0.72 + dop * 0.06) * opacity
          const size = 0.6 + norm * 1.8
          ctx!.beginPath()
          ctx!.fillStyle = `hsla(${hue}, 100%, ${Math.min(95, lightness)}%, ${alpha})`
          ctx!.shadowBlur = 8
          ctx!.shadowColor = `hsla(${hue}, 100%, ${Math.min(85, lightness + 5)}%, ${alpha * 0.8})`
          ctx!.arc(x, y, size, 0, Math.PI * 2); ctx!.fill()
        }
        ctx!.shadowBlur = 0
      }

      drawParticles(true)

      const ehGrad = ctx!.createRadialGradient(cx, cy, EH_R * 0.6, cx, cy, EH_R)
      ehGrad.addColorStop(0, "rgba(0,0,0,1)"); ehGrad.addColorStop(1, "rgba(0,0,0,1)")
      ctx!.fillStyle = ehGrad
      ctx!.beginPath(); ctx!.arc(cx, cy, EH_R, 0, Math.PI * 2); ctx!.fill()

      const photonGrad = ctx!.createRadialGradient(cx, cy, EH_R, cx, cy, PHOTON_R + 4)
      photonGrad.addColorStop(0, `rgba(255,160,40,${0.0 * opacity})`)
      photonGrad.addColorStop(0.55, `rgba(255,180,60,${0.55 * opacity})`)
      photonGrad.addColorStop(0.80, `rgba(255,220,130,${0.92 * opacity})`)
      photonGrad.addColorStop(0.92, `rgba(255,250,210,${1.0 * opacity})`)
      photonGrad.addColorStop(1, `rgba(255,200,80,${0.0 * opacity})`)
      ctx!.fillStyle = photonGrad
      ctx!.beginPath(); ctx!.arc(cx, cy, PHOTON_R + 4, 0, Math.PI * 2); ctx!.fill()

      drawParticles(false)

      const haloR = DISK_OUTER + 120
      const haloGrad = ctx!.createRadialGradient(cx, cy, DISK_OUTER, cx, cy, haloR)
      haloGrad.addColorStop(0, `rgba(255,170,60,${0.07 * opacity})`)
      haloGrad.addColorStop(0.5, `rgba(255,140,40,${0.025 * opacity})`)
      haloGrad.addColorStop(1, "rgba(255,140,40,0)")
      ctx!.fillStyle = haloGrad
      ctx!.beginPath(); ctx!.arc(cx, cy, haloR, 0, Math.PI * 2); ctx!.fill()

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pointermove", onMouse)
    }
  }, [opacity])

  return <canvas ref={canvasRef} className="black-hole" style={{ width: "100%", height: "100%" }} />
}
