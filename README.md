# Pomofocus

A focus timer built for ADHD users, focusing on task initiation, flexible attention, and reduced cognitive friction.

---

## Problem Statement

- Well known focus timers or pomodoro apps are not tailored for people with ADHD.
- Most focus timers make users feel punished when tasks aren’t completed, with features like session resets, progress loss, or loud challenges that affect people with ADHD more strongly.

---

## Core Principles

- Low friction: start sessions easily without extra decisions.  
- Flexible focus: support different session lengths, including custom timers.
- Positive Reinforcement: encourage progress without punishing unfinished tasks.   
- ADHD-FIrst UX: minimal distractions, less buttons, straightforward actions, gentle notifications, and clear visual cues. 

---

## Features

### Phase 1
-  Preset page with three buttons (Microfocus, focus, hyperfocus)
-  Add custom timer buton

## Phase 2
- Timer Page with huge timer and bar timer
- Pause button
- End button
- Back to presets button 


### Future
-  Add ADHD-centric UX
-  Add visual themes
-  Make it applicable for mobile devices, and android/apple watches.
-  Preset music and custom music.
-  Adaptive notifications, momentum trackind and session analytics for enhanced ADHD-support

---

## Tech Stack

- Frontend:  React
- Styling:  Tailwind
- Backend: Node.js
- DB: PostgreSQL

---

## Architecture & Design Decisions

### State Management
-  Used React Context to share the timer duration across components (buttons, timer display, custom input).

### Component Structure
-  ModeButtons - handles preset and custom timers.
-  TimerDisplay = shows countdown and current session.
-  CustimTimerInput - allows entering custom durations.
-  App - wraps everything inside ``Duration Provider`` for shared state.
-  Components are modular, reusable, and focused on a single responsibility. 

---

## What I Learned

-  Typing props are important also. 
-  
-  

---

## Screenshots / Demo

-  <img width="1914" height="855" alt="image" src="https://github.com/user-attachments/assets/0a5be06a-f8f9-4e49-abcd-6492d34cd157" />


---


