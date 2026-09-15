const fs = require("fs");
const path = require("path");

const rootDir = "C:\\Users\\User\\.gemini\\antigravity\\scratch\\skill-computer-academy";

const navToolbar = `
<!-- Stitch Screen Switcher -->
<div id="stitch-switcher" style="position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 99999; background: rgba(0, 67, 51, 0.96); backdrop-filter: blur(16px); padding: 8px 18px; border-radius: 9999px; box-shadow: 0 12px 30px -4px rgba(0,0,0,0.35); display: flex; align-items: center; gap: 14px; border: 1px solid rgba(169, 241, 214, 0.35); font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 13px;">
  <span style="font-weight: 700; display: flex; align-items: center; gap: 6px; color: #a9f1d6; letter-spacing: 0.02em;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    STITCH SCREENS
  </span>
  <div style="height: 16px; width: 1px; background: rgba(255,255,255,0.2);"></div>
  <a href="index.html" style="color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 9999px; font-weight: 600; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'">🏠 Home</a>
  <a href="course-details.html" style="color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 9999px; font-weight: 600; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'">📚 Course Details</a>
  <a href="student-dashboard.html" style="color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 9999px; font-weight: 600; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'">🎓 Student Dashboard</a>
  <a href="logo.html" style="color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 9999px; font-weight: 600; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'">🎨 Logo</a>
</div>
`;

function processHtml(filePath, activePage) {
  let content = fs.readFileSync(filePath, "utf-8");
  
  // Link navigation targets
  content = content.replace(/data-path="home"\s+href="#"/g, 'data-path="home" href="index.html"');
  content = content.replace(/data-path="courses"\s+href="#"/g, 'data-path="courses" href="course-details.html"');
  content = content.replace(/data-path="login"\s+href="#"/g, 'data-path="login" href="student-dashboard.html"');
  
  // Inject switcher before </body>
  content = content.replace("</body>", navToolbar + "</body>");
  return content;
}

// 1. Home
const homeHtml = processHtml(path.join(rootDir, "home_skill_computer_academy", "code.html"), "home");
fs.writeFileSync(path.join(rootDir, "index.html"), homeHtml, "utf-8");
fs.writeFileSync(path.join(rootDir, "home.html"), homeHtml, "utf-8");

// 2. Course Details
const courseHtml = processHtml(path.join(rootDir, "course_details_computer_basics", "code.html"), "course");
fs.writeFileSync(path.join(rootDir, "course-details.html"), courseHtml, "utf-8");

// 3. Student Dashboard
const dashHtml = processHtml(path.join(rootDir, "student_dashboard_skill_computer_academy", "code.html"), "dash");
fs.writeFileSync(path.join(rootDir, "student-dashboard.html"), dashHtml, "utf-8");

// 4. Logo page
const logoSvg = fs.readFileSync(path.join(rootDir, "skill_computer_academy_logo", "code.html"), "utf-8");
const logoPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Skill Computer Academy - Brand Assets & Logo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"/>
</head>
<body class="bg-[#f7f9fb] text-[#191c1e] font-['Plus_Jakarta_Sans',sans-serif] min-h-screen p-8">
  <div class="max-w-4xl mx-auto flex flex-col gap-8">
    <header class="flex items-center justify-between pb-6 border-b border-gray-200">
      <div>
        <h1 class="text-3xl font-extrabold text-[#004333]">Brand & Identity Assets</h1>
        <p class="text-gray-600 mt-1">Skill Computer Academy - Official Vector Logo & Variations</p>
      </div>
      <a href="index.html" class="px-4 py-2 bg-[#004333] text-white font-semibold rounded-lg hover:bg-[#0a5c48] transition">← Back to Academy</a>
    </header>

    <div class="grid grid-cols-1 gap-6">
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-4">
        <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Full Logo on Light Background</span>
        <div class="w-full max-w-md py-4">
          ${logoSvg}
        </div>
      </div>

      <div class="bg-[#004333] p-8 rounded-2xl shadow-md border border-gray-800 flex flex-col items-center gap-4">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">Full Logo on Institutional Dark Teal</span>
        <div class="w-full max-w-md py-4 p-4 rounded-xl bg-white/10 backdrop-blur">
          ${logoSvg}
        </div>
      </div>
    </div>
  </div>
  ${navToolbar}
</body>
</html>`;
fs.writeFileSync(path.join(rootDir, "logo.html"), logoPage, "utf-8");

console.log("Pages generated successfully!");
