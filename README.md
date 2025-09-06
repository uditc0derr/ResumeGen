# 📝 ResumeGen: The Live Resume Builder

Create a professional, polished resume with ease! 🚀 ResumeGen is a dynamic, client-side resume builder built with React that offers a seamless editing experience with a live preview that updates in real-time. Fill out your details, see the changes instantly, and export your resume as a pixel-perfect PDF.

## ✨ Features

-   **📄 Live Preview:** See your resume take shape as you type. No more guessing what the final document will look like!
-   **💾 Auto-Save:** Your progress is automatically saved to your browser's local storage, so you can pick up right where you left off.
-   **📥 PDF Export:** Generate a professional-quality PDF of your resume with a single click, ready for job applications.
-   **🧩 Comprehensive Sections:** Includes all the essential resume sections:
    -   👤 Personal & Contact Info
    -   📝 Professional Summary
    -   🏢 Work Experience
    -   🎓 Education
    -   🛠️ Skills (Technical & Soft)
    -   📁 Projects
    -   🏆 Achievements
    -   🏃 Extracurricular Activities
-   **✏️ Dynamic Forms:** Easily add, remove, and update multiple entries for experience, education, projects, and more.
-   **🗑️ Clear All:** Start fresh with a clean slate whenever you need to.
-   **📱 Responsive Design:** Build your resume on any device, whether it's a desktop, tablet, or mobile phone.

## 🛠️ Tech Stack

-   **Frontend:**
    -   **⚛️ React:** For building the interactive user interface.
    -   **⚡ Vite:** As the lightning-fast build tool and development server.
-   **Styling:**
    -   **💨 Tailwind CSS:** For a utility-first styling approach.
    -   **🎨 Inline CSS-in-JS:** Used for dynamic and component-specific styling.
-   **Key Libraries:**
    -   **📄 `react-to-print`:** For generating the print-friendly PDF output.
    -   **🖼️ `html2canvas` & `jspdf`:** Dependencies for handling canvas-based document generation.
    -   **✨ `lucide-react`:** For beautiful and consistent icons throughout the application.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or higher) and npm (or yarn) installed on your machine.

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/get-npm)

### ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/uditc0derr/ResumeGen.git](https://github.com/uditc0derr/ResumeGen.git)
    ```
2.  **Navigate to the frontend directory:**
    ```sh
    cd ResumeGen/frontend
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### ▶️ Running the Application

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
