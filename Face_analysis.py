# face_analysis.py — lightweight OpenCV + Mediapipe demo
import cv2
import mediapipe as mp

mp_face = mp.solutions.face_mesh
face_mesh = mp_face.FaceMesh(min_detection_confidence=0.5, min_tracking_confidence=0.5)

def analyze_frame(frame):
    results = face_mesh.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    if not results.multi_face_landmarks:
        return "Face not detected. Adjust lighting."

    landmarks = results.multi_face_landmarks[0].landmark
    asymmetry = abs(landmarks[93].x - landmarks[323].x)

    if asymmetry > 0.02:
        return "💆 Tension detected on right jawline — massage gently."
    else:
        return "✨ Facial balance looks great today!"

if __name__ == "__main__":
    cap = cv2.VideoCapture(0)
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        text = analyze_frame(frame)
        cv2.putText(frame, text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 182, 193), 2)
        cv2.imshow("GuaSha Mirror", frame)
        if cv2.waitKey(5) & 0xFF == 27:
            break
    cap.release()
    cv2.destroyAllWindows()
