# 🌸 GuaSha Magic Mirror  

**Concept:**  
An AI-powered smart mirror that analyzes facial symmetry, skin tone, and lymphatic flow during Gua Sha or skincare routines.  

Built on the **MagicMirror²** framework with **OpenCV** and **Mediapipe**, this module bridges beauty, health, and technology — offering real-time visual feedback and affirmations to enhance your self-care ritual.  

---

## 🧠 Features
- 🪞 Facial tension detection (symmetry + puffiness)
- 🌿 Glow and redness monitoring via color segmentation
- ✨ Daily affirmations + breathing reminders
- 📊 Progress tracking over time (optional data logs)
- 💡 Smart lighting and humidity integration (optional IoT mode)

---

## 🧩 Architecture
| Layer | Description |
|-------|--------------|
| Frontend | MagicMirror² module (JS, CSS) |
| Backend | Python service with OpenCV + Mediapipe |
| Communication | WebSocket or Flask REST bridge |
| Optional | TensorFlow Lite model for expression scoring |

---

## ⚙️ Example Workflow
1. User initiates a Gua Sha session.  
2. Camera feed is processed with **face_analysis.py**.  
3. Detected symmetry, color, and tension data are sent to **MMM-GuaSha.js**.  
4. Mirror UI displays guidance like “Massage right jawline gently” or “Beautiful balance today!”  

---

## 💻 Technologies Used
- **MagicMirror² Framework**  
- **JavaScript, Node.js, HTML, CSS**  
- **Python, OpenCV, Mediapipe, TensorFlow Lite (optional)**  

---

## 🧘 Future Add-ons
- Real-time emotion tracking  
- Smart skincare scheduling  
- Cloud-based progress visualization dashboard  

---

## 📜 License
This project is licensed under the GNU GPL-2.0 License.
