<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Topper Study Hub - Card Design</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Poppins',sans-serif}
body{background:#f5f7fb;min-height:100vh;display:flex;justify-content:center;align-items:flex-start;padding:20px}
.container{width:100%;max-width:950px}
.screen{display:none}.active{display:block}

/* LOGIN */
.login-card{background:#fff;width:100%;max-width:420px;margin:40px auto;padding:32px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.08)}
.logo{width:56px;height:56px;background:linear-gradient(135deg,#6a5af9,#8a7cff);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:700;margin:0 auto 16px}
.login-card h2{text-align:center;font-size:22px;font-weight:700;color:#1a1c25}
.sub{text-align:center;color:#8a8fa3;font-size:13px;margin:6px 0 24px}
.input-group{margin-bottom:16px}
.input-group label{font-size:13px;font-weight:500;color:#4b4f63;margin-bottom:6px;display:block}
.input-group input{width:100%;padding:12px 14px;border:1.5px solid #e8eaf1;border-radius:10px;background:#f9fafb;outline:none;font-size:14px}
.input-group input:focus{border-color:#6a5af9;background:#fff}
.btn-primary{width:100%;padding:13px;background:#1a1c25;color:#fff;border:none;border-radius:10px;font-weight:600;cursor:pointer;margin-top:8px}
.google-btn{width:100%;padding:12px;background:#fff;border:1.5px solid #e8eaf1;border-radius:10px;display:flex;align-items:center;justify-content:center;gap:10px;font-size:14px;font-weight:500;cursor:pointer;margin-top:16px}

/* DASHBOARD */
.dash-header{background:#fff;padding:18px 22px;border-radius:16px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 4px 20px rgba(0,0,0,0.05);margin-bottom:20px}
.logout{background:#ffebee;color:#e53935;padding:8px 14px;border-radius:8px;border:none;font-size:12px;font-weight:600;cursor:pointer}
.section-title{font-size:14px;font-weight:600;color:#1a1c25;margin:20px 4px 10px}
.class-scroll{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px}
.class-card{min-width:95px;padding:14px 10px;background:#fff;border-radius:12px;text-align:center;cursor:pointer;border:2px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,0.05);transition:0.2s;font-size:13px;font-weight:500}
.class-card.active{border-color:#6a5af9;background:#f0efff;color:#6a5af9;font-weight:700}
.subject-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.sub-card{background:#fff;padding:18px 14px;border-radius:14px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.05);border:2px solid transparent;transition:0.2s}
.sub-card.active{border-color:#6a5af9;background:#f5f3ff}
.sub-card.icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:10px;background:#f0f1f5}
.sub-card h4{font-size:13px;font-weight:600}
.sub-card p{font-size:11px;color:#8a8fa3;margin-top:3px}
.material-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.mat-card{padding:20px;border-radius:16px;color:#fff;cursor:pointer;transition:0.2s}
.mat-card:hover{transform:translateY(-3px)}
.mat-1{background:linear-gradient(135deg,#00c6a0,#00a884)}.mat-2{background:linear-gradient(135deg,#5b7cfa,#6a5af9)}.mat-3{background:linear-gradient(135deg,#ff8a4c,#ff6b6b)}
.content-area{background:#fff;padding:22px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.05);margin-top:10px}
.back{border:none;background:#f0f1f5;padding:7px 12px;border-radius:8px;font-size:12px;cursor:pointer;margin-bottom:14px}
.ch-list{list-style:none}
.ch-list li{padding:12px 14px;background:#f9fafb;border-radius:10px;margin-bottom:8px;font-size:13px;color:#333}
@media(max-width:600px){.material-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="container">

<div id="login" class="screen active">
  <div class="login-card">
    <div class="logo">T</div>
    <h2>Topper Study Hub</h2>
    <p class="sub">Email se login karke padhai shuru karein</p>
    <div class="input-group"><label>Email Address</label><input type="email" id="email" placeholder="student@gmail.com"></div>
    <div class="input-group"><label>Password</label><input type="password" id="pass" placeholder="••••••••"></div>
    <button class="btn-primary" onclick="doLogin()">Email se Login karein →</button>
    <button class="google-btn" onclick="doLogin()"><img src="https://www.svgrepo.com/show/475656/google-color.svg" width="18"> Google se continue karein</button>
  </div>
</div>

<div id="dashboard" class="screen">
  <div class="dash-header">
    <div><h3 id="welcome">Hi, Topper 👋</h3><span style="font-size:12px;color:#8a8fa3">Class <b id="cLabel">11</b> Portal</span></div>
    <button class="logout" onclick="doLogout()">Logout</button>
  </div>
  <p class="section-title">1. कक्षा चुनें (Select Class)</p>
  <div class="class-scroll" id="classScroll"></div>
  <p class="section-title">2. विषय चुनें (Select Subject)</p>
  <div class="subject-grid" id="subGrid"></div>
  <p class="section-title">3. अध्ययन सामग्री (Study Material)</p>
  <div class="material-grid">
    <div class="mat-card mat-1" onclick="openMat('notes')"><h4>📄 Chapters & Notes</h4><p id="noteCount">16 Chapters</p></div>
    <div class="mat-card mat-2" onclick="openMat('objective')"><h4>❓ Objective Questions</h4><p>MCQs & Quiz</p></div>
    <div class="mat-card mat-3" onclick="openMat('subjective')"><h4>📝 Subjective Questions</h4><p>Long & Short Answers</p></div>
  </div>
</div>

<div id="content" class="screen">
  <div class="content-area">
    <button class="back" onclick="showScreen('dashboard')">← Back to Dashboard</button>
    <h3 id="cTitle" style="font-size:16px;margin-bottom:14px;color:#1a1c25"></h3>
    <div id="cBody"></div>
  </div>
</div>

</div>

<!-- AAPKA DATA.JS YAHAN LOAD HOGA -->
<script src="data.js"></script>
<script>
const icons={science:"🔬",mathematics:"📐",social_science:"🌍",hindi:"✍️",english:"📖",physics:"⚛️",chemistry:"🧪",biology:"🧬"};
let curClass=11,curSub="physics";

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active')}
function doLogin(){
  const email=document.getElementById('email').value;
  if(!email){alert("Please email daalein");return}
  localStorage.setItem('login','true');
  localStorage.setItem('email',email);
  initDash();showScreen('dashboard');
}
function doLogout(){localStorage.clear();showScreen('login')}

function initDash(){
  document.getElementById('welcome').innerText="Hi, "+(localStorage.getItem('email')||'Topper').split('@')[0]+" 👋";
  document.getElementById('cLabel').innerText=curClass;

  // Class Cards
  const cs=document.getElementById('classScroll');cs.innerHTML="";
  [6,7,8,9,10,11,12].forEach(c=>{
    let d=document.createElement('div');
    d.className=`class-card ${c==curClass?'active':''}`;
    d.innerText=`Class ${c}`;
    d.onclick=()=>{curClass=c;initDash()};
    cs.appendChild(d)
  });

  // Subject Cards - using your data.js functions
  const sg=document.getElementById('subGrid');sg.innerHTML="";
  const subs=getSubjects(curClass);
  let isFirst=true;
  for(let k in subs){
    if(isFirst){curSub=k;isFirst=false}
    let card=document.createElement('div');
    card.className=`sub-card ${k==curSub?'active':''}`;
    card.innerHTML=`<div class="icon">${icons[k]||'📚'}</div><h4>${getSubjectName(k,'en').toUpperCase()}</h4><p>${getChapterCount(curClass,k)} Chapters • ${getSubjectName(k,'hi')}</p>`;
    card.onclick=()=>{curSub=k;initDash();updateCount()};
    sg.appendChild(card)
  }
  updateCount();
}

function updateCount(){
  document.getElementById('noteCount').innerText=getChapterCount(curClass,curSub)+" Chapters loaded";
}

function openMat(type){
  showScreen('content');
  const chapters=getChapters(curClass,curSub);
  const subName=getSubjectName(curSub,'en');
  document.getElementById('cTitle').innerText=`${subName} - ${type.toUpperCase()} (Class ${curClass})`;
  let html="";
  if(type==='notes'){
    html=`<ul class="ch-list">${chapters.map(c=>`<li>📘 ${c}</li>`).join('')}</ul>`;
  }else if(type==='objective'){
    html=`<p style="font-size:13px;color:#666;margin-bottom:12px">Class ${curClass} ${subName} ke liye Objective Questions</p><ul class="ch-list">${chapters.slice(0,5).map((c,i)=>`<li>Q${i+1}. ${c.split(':')[1]||c} se related MCQ?</li>`).join('')}<li>... aur 95+ questions</li></ul>`;
  }else{
    html=`<ul class="ch-list">${chapters.slice(0,5).map((c,i)=>`<li>Q${i+1}. ${c} - iski vyakhya kijiye? (5 marks)</li>`).join('')}</ul>`;
  }
  document.getElementById('cBody').innerHTML=html;
}

window.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('login')==='true'){initDash();showScreen('dashboard')}
});
</script>
</body>
</html>
