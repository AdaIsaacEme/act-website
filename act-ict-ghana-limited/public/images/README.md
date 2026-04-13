# Image Requirements for ACT-ICT Ghana Limited Website

## Status: Images Required for Full Functionality

Please add the following images to the specified directories. All folder paths are relative to `public/images/`.

---

## 🔴 LOGO (REQUIRED IMMEDIATELY)

```
logo/
├── act-ict-logo.png          ← Drop your company logo here
                                 Dimensions: ~200x100px (transparent PNG recommended)
```

---

## 🎬 HERO SLIDES (Required)

```
hero/
├── slide-1.jpg               ← Main hero: "The Leading Technology Solutions Provider in Ghana"
├── slide-2.jpg               ← "Platinum Partner for Motorola Solutions"
├── slide-3.jpg               ← "Video Surveillance"
└── slide-4.jpg               ← NEW: "Trusted by Mining, Military & Government"
                                 All slides: 1920x1080px minimum
```

---

## 🏢 DIVISIONS (Required)

```
divisions/
├── act-ict.jpg               ← Main ACT-ICT division hero image
├── act-ict-1.jpg             ← Radio communications/TETRA systems
├── act-ict-2.jpg             ← Network infrastructure
├── act-ict-3.jpg             ← Video surveillance/CCTV
├── act-ict-4.jpg             ← Personnel & equipment tracking
├── act-ict-5.jpg             ← Fiber optic networks
│
├── act-global.jpg            ← Main ACTGlobal division hero image
├── act-global-1.jpg          ← Industrial LED lighting
├── act-global-2.jpg          ← Mobile work lamps/equipment
├── act-global-3.jpg          ← Safety equipment
├── act-global-4.jpg          ← Industrial supplies
├── act-global-5.jpg          ← Solar lighting trailers
└── act-global-6.jpg          ← Drone/aerostat systems
                                 Dimensions: 1600x1000px minimum
```

---

## 📁 PROJECTS (Existing + New)

### Existing Projects:
```
projects/
├── ug-medical-centre.jpg     ← 65,000 sqm hospital (UG Medical Centre)
├── weather-stations.jpg      ← MOFA weather station project
├── leaky-feeder.jpg          ← AngloGold underground connectivity
├── tetra-installation.jpg    ← TETRA radio network setup
├── weather-balloon.jpg       ← RT Tactical Aerostat system
└── perseus-fence.jpg         ← Perimeter intrusion detection (Perseus Mining)
```

### New Projects (Add These):
```
projects/
├── zambia-military-hospital.jpg    ← Zambia Maina Soko Military Hospital (350-bed facility)
├── newmont-aerostat.jpg             ← Newmont Ahafo SkyStar Aerostat system
├── anglogold-cctv.jpg               ← AngloGold Ashanti underground CCTV
├── mofa-weather-stations.jpg        ← MOFA weather stations (can reuse weather-stations.jpg)
├── ahafo-tetra.jpg                 ← Ahafo North TETRA network (can reuse tetra-installation.jpg)
└── gsr-cctv.jpg                    ← Golden Star Resources Prestea & Wassa CCTV
                                       Dimensions: 1280x720px minimum
```

---

## 🏢 PARTNERS (Logos - PNG with Transparency Preferred)

### Existing Partners:
```
partners/
├── motorola-solutions.png    ← Motorola Solutions (Platinum Partner)
├── cisco.png                 ← CISCO
├── beka-schreder.png         ← BEKA Schréder (LED lighting)
└── gm-afcon.png              ← GM Afcon
```

### New Partners (Add These):
```
partners/
├── avigilon.png              ← Avigilon (video surveillance)
├── axis.png                  ← Axis (CCTV)
├── continental.png           ← Continental (industrial supplies)
├── huawei.png                ← Huawei (networking)
├── moxa.png                  ← Moxa (industrial networking)
├── rt.png                    ← RT Aerostat (SkyStar systems)
├── schauenburg.png           ← Schauenburg (ventilation systems)
├── thuraya.png               ← Thuraya (satellite communications)
└── watergen.png              ← WaterGen (water systems)
                                 Dimensions: 200x100px minimum, transparent backgrounds
```

---

## 📖 ABOUT PAGE (Optional but Recommended)

```
about/
├── cisco-router-hack.jpg     ← Existing: Technical team photo or workspace
└── team-photo.jpg            ← NEW: Team photo (optional)
                                 Dimensions: 1600x1000px
```

---

## ⛏️ MINING PAGE (Optional - For Future)

```
mining/
├── surface-mining.jpg        ← Surface mining operations
└── underground-mining.jpg    ← Underground mine connectivity
                                 Dimensions: 1600x1000px
```

---

## 📋 Required Placeholder Directory Structure

```
public/
└── images/
    ├── logo/                    ← Create this folder
    ├── hero/                    ← Already exists
    ├── divisions/               ← Already exists
    ├── projects/                ← Already exists
    ├── partners/                ← Already exists
    ├── about/                   ← Already exists
    └── mining/                  ← Create this folder (future use)
```

---

## 🎨 Image Optimization Tips

1. **Use optimized formats**: JPG for photographs, PNG for logos (with transparency)
2. **Responsive images**: Provide at least 1.5x resolution for retina displays
3. **Compression**: Compress images using tools like TinyPNG, ImageOptim, or Squoosh
4. **Size limits**: Keep hero images under 200KB, logos under 50KB
5. **File naming**: Use lowercase, hyphens for spaces (e.g., `act-ict-logo.png`)

---

## ⚠️ Image Fallback Behavior

- **Logo**: Falls back to text "ACT-ICT GHANA LIMITED" in navy/electric blue
- **Hero slides**: Images appear with dark gradient overlay
- **Project/Division images**: Hidden with display:none if loading fails
- **Partner logos**: Card remains styled but without logo image

---

## 📞 Notes

- All images are sourced from your company materials
- Recommended image editors: Figma, Adobe XD, or Canva for quick edits
- Ensure brand consistency across all marketing materials
- Consider creating an image asset library for future website updates

Last Updated: 2026-04-12
