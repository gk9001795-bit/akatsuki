<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Topper Study Hub - All Classes</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Poppins',sans-serif}
body{background:#f5f7fb;min-height:100vh;display:flex;justify-content:center;padding:20px}
.container{width:100%;max-width:1000px}
.screen{display:none}.active{display:block}
.login-card{background:#fff;max-width:420px;margin:50px auto;padding:32px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08)}
.logo{width:56px;height:56px;background:linear-gradient(135deg,#6a5af9,#8a7cff);border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:700;margin:0 auto 16px}
.btn-primary{width:100%;padding:13px;background:#1a1c25;color:#fff;border:none;border-radius:10px;font-weight:600;cursor:pointer;margin-top:10px}
.google-btn{width:100%;padding:12px;background:#fff;border:1.5px solid #e8eaf1;border-radius:10px;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;margin-top:14px}
.input-group{margin-bottom:14px}.input-group label{font-size:13px;font-weight:500;margin-bottom:6px;display:block}.input-group input{width:100%;padding:12px;border:1.5px solid #e8eaf1;border-radius:10px;background:#f9fafb;outline:none}
.dash-header{background:#fff;padding:18px 22px;border-radius:16px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 4px 20px rgba(0,0,0,.05);margin-bottom:20px}
.logout{background:#ffebee;color:#e53935;padding:8px 14px;border-radius:8px;border:none;font-weight:600;cursor:pointer}
.class-scroll{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px}
.class-card{min-width:90px;padding:14px;background:#fff;border-radius:12px;text-align:center;cursor:pointer;border:2px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,.05);font-size:13px}
.class-card.active{border-color:#6a5af9;background:#f0efff;color:#6a5af9;font-weight:700}
.subject-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}
.sub-card{background:#fff;padding:16px;border-radius:14px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,.05);border:2px solid transparent}
.sub-card.active{border-color:#6a5af9;background:#f5f3ff}
.mat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:14px}
.mat-card{padding:18px;border-radius:14px;color:#fff;cursor:pointer}
.content-area{background:#fff;padding:22px;border-radius:16px;margin-top:10px;box-shadow:0 4px 20px rgba(0,0,0,.05)}
.back{background:#f0f1f5;border:none;padding:7px 12px;border-radius:8px;cursor:pointer;margin-bottom:12px}
.ch-list{list-style:none}.ch-list li{padding:12px;background:#f9fafb;border-radius:10px;margin-bottom:8px;font-size:13px;line-height:1.5}
.badge{font-size:10px;padding:2px 7px;border-radius:20px;background:#eef2ff;color:#6a5af9;margin-left:6px}
@media(max-width:600px){.mat-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="container">

<div id="login" class="screen active">
  <div class="login-card">
    <div class="logo">T</div>
    <h2 style="text-align:center">Topper Study Hub</h2>
    <p style="text-align:center;color:#8a8fa3;font-size:13px;margin:6px 0 20px">Class 6 to 12 - All Subjects (Hindi + English)</p>
    <div class="input-group"><label>Email</label><input type="email" id="email" placeholder="student@gmail.com"></div>
    <div class="input-group"><label>Password</label><input type="password" placeholder="••••••••"></div>
    <button class="btn-primary" onclick="doLogin()">Login → Dashboard</button>
    <button class="google-btn" onclick="doLogin()"><img src="https://www.svgrepo.com/show/475656/google-color.svg" width="18"> Google Login</button>
  </div>
</div>

<div id="dashboard" class="screen">
  <div class="dash-header">
    <div><h3 id="welcome">Dashboard</h3><span style="font-size:12px;color:#888">Class <b id="cLabel">11</b> • <span id="sLabel">PHYSICS</span></span></div>
    <button class="logout" onclick="doLogout()">Logout</button>
  </div>

  <h4 style="font-size:14px;margin:14px 4px">1. कक्षा चुनें</h4>
  <div class="class-scroll" id="classScroll"></div>

  <h4 style="font-size:14px;margin:20px 4px 10px">2. विषय चुनें</h4>
  <div class="subject-grid" id="subGrid"></div>

  <h4 style="font-size:14px;margin:20px 4px 10px">3. Study Material</h4>
  <div class="mat-grid">
    <div class="mat-card" style="background:linear-gradient(135deg,#00c6a0,#00a884)" onclick="openMat('notes')"><b>📄 Notes</b><p style="font-size:11px;margin-top:4px" id="noteCount">0 Chapters</p><p style="font-size:10px;opacity:.8;margin-top:8px">Baad me aap notes yahan add karoge</p></div>
    <div class="mat-card" style="background:linear-gradient(135deg,#5b7cfa,#6a5af9)" onclick="openMat('objective')"><b>❓ Objective</b><p style="font-size:11px;margin-top:4px">MCQs Bank</p><p style="font-size:10px;opacity:.8;margin-top:8px">Baad me tayyar karenge</p></div>
    <div class="mat-card" style="background:linear-gradient(135deg,#ff8a4c,#ff6b6b)" onclick="openMat('subjective')"><b>📝 Subjective</b><p style="font-size:11px;margin-top:4px">Q & A</p><p style="font-size:10px;opacity:.8;margin-top:8px">Baad me tayyar karenge</p></div>
  </div>
</div>

<div id="content" class="screen">
  <div class="content-area">
    <button class="back" onclick="showScreen('dashboard')">← Dashboard</button>
    <h3 id="cTitle"></h3>
    <div id="cBody" style="margin-top:14px"></div>
  </div>
</div>

</div>

<script>
// ====== AAPKA PURA DATA - 6 TO 12 - HINDI + ENGLISH ======
const ncertData = {
6: {
 science: ["Chapter 1: Food: Where Does It Come From? (भोजन: यह कहाँ से आता है?)","Chapter 2: Components of Food (भोजन के घटक)","Chapter 3: Fibre to Fabric (तंतु से वस्त्र तक)","Chapter 4: Sorting Materials into Groups (वस्तुओं का समूह बनाना)","Chapter 5: Separation of Substances (पदार्थों का पृथक्करण)","Chapter 6: Changes Around Us (हमारे चारों ओर के परिवर्तन)","Chapter 7: Getting to Know Plants (पौधों को जानिए)","Chapter 8: Body Movements (शरीर में गति)","Chapter 9: The Living Organisms and Their Surroundings (सजीव एवं उनका परिवेश)","Chapter 10: Motion and Measurement of Distances (गति एवं दूरियों का मापन)","Chapter 11: Light, Shadows and Reflections (प्रकाश, छायाएँ एवं परावर्तन)","Chapter 12: Electricity and Circuits (विद्युत तथा परिपथ)","Chapter 13: Fun with Magnets (चुंबकों द्वारा मनोरंजन)","Chapter 14: Water (जल)","Chapter 15: Air Around Us (हमारे चारों ओर वायु)","Chapter 16: Garbage In, Garbage Out (कचरा संग्रहण एवं निपटान)"],
 mathematics: ["Chapter 1: Knowing Our Numbers (अपनी संख्याओं की जानकारी)","Chapter 2: Whole Numbers (पूर्ण संख्याएँ)","Chapter 3: Playing with Numbers (संख्याओं के साथ खेलना)","Chapter 4: Basic Geometrical Ideas (आधारभूत ज्यामिति अवधारणाएँ)","Chapter 5: Understanding Elementary Shapes (प्रारंभिक आकारों को समझना)","Chapter 6: Integers (पूर्णांक)","Chapter 7: Fractions (भिन्न)","Chapter 8: Decimals (दशमलव)","Chapter 9: Data Handling (आँकड़ों का प्रबंधन)","Chapter 10: Mensuration (क्षेत्रमिति)","Chapter 11: Algebra (बीजगणित)","Chapter 12: Ratio and Proportion (अनुपात और समानुपात)","Chapter 13: Symmetry (सममिति)","Chapter 14: Practical Geometry (प्रायोगिक ज्यामिति)"],
 social_science: ["History Chapter 1: What, Where, How and When? (क्या, कहाँ, कैसे और कब?)","History Chapter 2: On the Trail of the Earliest People","Geography Chapter 1: The Earth in the Solar System (सौरमंडल में पृथ्वी)","Geography Chapter 2: Globe: Latitudes and Longitudes","Civics Chapter 1: Understanding Diversity (विविधता की समझ)","Civics Chapter 2: Diversity and Discrimination"],
 hindi: ["Chapter 1: कलम का सिपाही","Chapter 2: झाँसी की रानी","Chapter 3: भारत माता","Chapter 4: झरना","Chapter 5: राधा"],
 english: ["Chapter 1: Who Did Patrick's Homework?","Chapter 2: How the Dog Found Himself a New Master?","Chapter 3: Taro's Reward","Chapter 4: An Indian-American Woman in Space","Chapter 5: A Different Kind of School"]
},
7: {
 science: ["Chapter 1: Nutrition in Plants (पादपों में पोषण)","Chapter 2: Nutrition in Animals (प्राणियों में पोषण)","Chapter 3: Fibre to Fabric (रेशों से वस्त्र तक)","Chapter 4: Heat (ऊष्मा)","Chapter 5: Acids, Bases and Salts (अम्ल, क्षारक और लवण)","Chapter 6: Physical and Chemical Changes","Chapter 7: Weather, Climate and Adaptations","Chapter 8: Winds, Storms and Cyclones","Chapter 9: Soil (मृदा)","Chapter 10: Respiration in Organisms","Chapter 11: Transportation in Animals and Plants","Chapter 12: Reproduction in Plants","Chapter 13: Motion and Time","Chapter 14: Electric Current and its Effects","Chapter 15: Light (प्रकाश)"],
 mathematics: ["Chapter 1: Integers (पूर्णांक)","Chapter 2: Fractions and Decimals (भिन्न एवं दशमलव)","Chapter 3: Data Handling (आँकड़ों का प्रबंधन)","Chapter 4: Simple Equations (सरल समीकरण)","Chapter 5: Lines and Angles (रेखा एवं कोण)","Chapter 6: The Triangle and its Properties","Chapter 7: Congruence of Triangles","Chapter 8: Comparing Quantities","Chapter 9: Rational Numbers","Chapter 10: Practical Geometry"],
 social_science: ["History Chapter 1: Tracing Changes Through a Thousand Years","History Chapter 2: New Kings and Kingdoms","Geography Chapter 1: Environment (पर्यावरण)","Geography Chapter 2: Inside Our Earth","Civics Chapter 1: On Equality (समानता)"],
 hindi: ["Chapter 1: हम पंछी उन्मुक्त गगन के","Chapter 2: हिमालय की बेटियाँ","Chapter 3: कठपुतली"],
 english: ["Chapter 1: Three Questions","Chapter 2: A Gift of Chappals","Chapter 3: Gopal and the Hilsa Fish"]
},
8: {
 science: ["Chapter 1: Crop Production and Management (फसल उत्पादन एवं प्रबंध)","Chapter 2: Microorganisms: Friend and Foe (सूक्ष्मजीव: मित्र एवं शत्रु)","Chapter 3: Synthetic Fibres and Plastics","Chapter 4: Materials: Metals and Non-Metals","Chapter 5: Coal and Petroleum","Chapter 6: Combustion and Flame","Chapter 7: Conservation of Plants and Animals","Chapter 8: Cell – Structure and Functions","Chapter 9: Reproduction in Animals","Chapter 10: Reaching the Age of Adolescence"],
 mathematics: ["Chapter 1: Rational Numbers (परिमेय संख्याएँ)","Chapter 2: Linear Equations in One Variable","Chapter 3: Understanding Quadrilaterals","Chapter 4: Practical Geometry","Chapter 5: Data Handling","Chapter 6: Squares and Square Roots"],
 social_science: ["History Chapter 1: How, When and Where","Geography Chapter 1: Resources","Civics Chapter 1: The Indian Constitution"],
 hindi: ["Chapter 1: ध्वनि","Chapter 2: लाख की चूड़ियाँ","Chapter 3: बस की यात्रा"],
 english: ["Chapter 1: The Best Christmas Present in the World","Chapter 2: The Tsunami"]
},
9: {
 science: ["Chapter 1: Matter in Our Surroundings (हमारे आस-पास के पदार्थ)","Chapter 2: Is Matter Around Us Pure?","Chapter 3: Atoms and Molecules (परमाणु एवं अणु)","Chapter 4: Structure of the Atom","Chapter 5: The Fundamental Unit of Life","Chapter 6: Tissues (ऊतक)","Chapter 7: Diversity in Living Organisms","Chapter 8: Motion (गति)","Chapter 9: Force and Laws of Motion","Chapter 10: Gravitation","Chapter 11: Work and Energy","Chapter 12: Sound","Chapter 13: Why Do We Fall Ill?","Chapter 14: Natural Resources","Chapter 15: Improvement in Food Resources"],
 mathematics: ["Chapter 1: Number Systems (संख्या पद्धति)","Chapter 2: Polynomials (बहुपद)","Chapter 3: Coordinate Geometry","Chapter 4: Linear Equations in Two Variables","Chapter 5: Introduction to Euclid's Geometry"],
 social_science: ["History Chapter 1: The French Revolution (फ्रांसीसी क्रांति)","Geography Chapter 1: India – Size and Location","Civics Chapter 1: What is Democracy?","Economics Chapter 1: The Story of Village Palampur"],
 hindi: ["Chapter 1: दो बैलों की कथा","Chapter 2: ल्हासा की ओर"],
 english: ["Chapter 1: The Fun They Had","Chapter 2: The Sound of Music"]
},
10: {
 science: ["Chapter 1: Chemical Reactions and Equations","Chapter 2: Acids, Bases and Salts","Chapter 3: Metals and Non-Metals","Chapter 4: Carbon and Its Compounds","Chapter 5: Life Processes","Chapter 6: Control and Coordination","Chapter 7: How Do Organisms Reproduce?","Chapter 8: Heredity","Chapter 9: Light – Reflection and Refraction","Chapter 10: The Human Eye","Chapter 11: Electricity","Chapter 12: Magnetic Effects of Electric Current"],
 mathematics: ["Chapter 1: Real Numbers (वास्तविक संख्याएँ)","Chapter 2: Polynomials (बहुपद)","Chapter 3: Pair of Linear Equations","Chapter 4: Quadratic Equations (द्विघात समीकरण)","Chapter 5: Arithmetic Progressions","Chapter 6: Triangles","Chapter 7: Coordinate Geometry"],
 social_science: ["History Chapter 1: The Rise of Nationalism in Europe","Geography Chapter 1: Resources and Development","Civics Chapter 1: Power Sharing","Economics Chapter 1: Development"],
 hindi: ["Chapter 1: सूरदास – पद","Chapter 2: राम-लक्ष्मण-परशुराम संवाद"],
 english: ["Chapter 1: A Letter to God","Chapter 2: Nelson Mandela"]
},
11: {
 physics: ["Chapter 1: Physical World (भौतिक जगत)","Chapter 2: Units and Measurements (मात्रक और मापन)","Chapter 3: Motion in a Straight Line (सरल रेखा में गति)","Chapter 4: Motion in a Plane (समतल में गति)","Chapter 5: Laws of Motion (गति के नियम)","Chapter 6: Work, Energy and Power (कार्य, ऊर्जा और शक्ति)","Chapter 7: System of Particles and Rotational Motion","Chapter 8: Gravitation (गुरुत्वाकर्षण)","Chapter 9: Mechanical Properties of Solids","Chapter 10: Mechanical Properties of Fluids","Chapter 11: Thermal Properties of Matter","Chapter 12: Thermodynamics (ऊष्मागतिकी)","Chapter 13: Kinetic Theory","Chapter 14: Oscillations (दोलन)","Chapter 15: Waves (तरंगें)"],
 chemistry: ["Chapter 1: Some Basic Concepts of Chemistry (रसायन विज्ञान की कुछ मूल अवधारणाएँ)","Chapter 2: Structure of Atom (परमाणु की संरचना)","Chapter 3: Classification of Elements and Periodicity","Chapter 4: Chemical Bonding and Molecular Structure","Chapter 5: Thermodynamics","Chapter 6: Equilibrium (साम्यावस्था)","Chapter 7: Redox Reactions","Chapter 8: Organic Chemistry – Some Basic Principles","Chapter 9: Hydrocarbons (हाइड्रोकार्बन)"],
 biology: ["Chapter 1: The Living World (जीव जगत)","Chapter 2: Biological Classification (जीव जगत का वर्गीकरण)","Chapter 3: Plant Kingdom (वनस्पति जगत)","Chapter 4: Animal Kingdom (प्राणी जगत)","Chapter 5: Morphology of Flowering Plants","Chapter 6: Anatomy of Flowering Plants","Chapter 7: Structural Organisation in Animals","Chapter 8: Cell: The Unit of Life (कोशिका)","Chapter 9: Biomolecules (जैव अणु)","Chapter 10: Cell Cycle and Cell Division"],
 mathematics: ["Chapter 1: Sets (समुच्चय)","Chapter 2: Relations and Functions (संबंध एवं फलन)","Chapter 3: Trigonometric Functions (त्रिकोणमितीय फलन)","Chapter 4: Principle of Mathematical Induction","Chapter 5: Complex Numbers and Quadratic Equations","Chapter 6: Linear Inequalities","Chapter 7: Permutations and Combinations","Chapter 8: Binomial Theorem","Chapter 9: Sequences and Series","Chapter 10: Straight Lines","Chapter 11: Conic Sections","Chapter 12: Introduction to Three Dimensional Geometry","Chapter 13: Limits and Derivatives","Chapter 14: Mathematical Reasoning","Chapter 15: Statistics (सांख्यिकी)","Chapter 16: Probability (प्रायिकता)"],
 english: ["Chapter 1: The Portrait of a Lady","Chapter 2: We're Not Afraid to Die...","Chapter 3: Discovering Tut","Chapter 4: Landscape of the Soul","Chapter 5: The Ailing Planet"],
 hindi: ["Chapter 1: नमक का दारोगा","Chapter 2: मियाँ नसीरुद्दीन","Chapter 3: अपू के साथ ढाई साल"]
},
12: {
 physics: ["Chapter 1: Electric Charges and Fields (विद्युत आवेश तथा क्षेत्र)","Chapter 2: Electrostatic Potential and Capacitance (स्थिर वैद्युत विभव तथा धारिता)","Chapter 3: Current Electricity (विद्युत धारा)","Chapter 4: Moving Charges and Magnetism","Chapter 5: Magnetism and Matter","Chapter 6: Electromagnetic Induction","Chapter 7: Alternating Current","Chapter 8: Electromagnetic Waves","Chapter 9: Ray Optics and Optical Instruments","Chapter 10: Wave Optics","Chapter 11: Dual Nature of Radiation and Matter","Chapter 12: Atoms (परमाणु)","Chapter 13: Nuclei (नाभिक)","Chapter 14: Semiconductor Electronics"],
 chemistry: ["Chapter 1: Solutions (विलयन)","Chapter 2: Electrochemistry (विद्युत रसायन)","Chapter 3: Chemical Kinetics (रासायनिक बलगतिकी)","Chapter 4: The d- and f-Block Elements","Chapter 5: Coordination Compounds","Chapter 6: Haloalkanes and Haloarenes","Chapter 7: Alcohols, Phenols and Ethers","Chapter 8: Aldehydes, Ketones and Carboxylic Acids","Chapter 9: Amines (ऐमीन)","Chapter 10: Biomolecules (जैव अणु)"],
 biology: ["Chapter 1: Reproduction in Organisms (जीवों में जनन)","Chapter 2: Sexual Reproduction in Flowering Plants","Chapter 3: Human Reproduction (मानव जनन)","Chapter 4: Reproductive Health","Chapter 5: Principles of Inheritance and Variation","Chapter 6: Molecular Basis of Inheritance","Chapter 7: Evolution (विकास)","Chapter 8: Human Health and Disease","Chapter 9: Strategies for Enhancement in Food Production","Chapter 10: Microbes in Human Welfare","Chapter 11: Biotechnology: Principles and Processes","Chapter 12: Biotechnology and its Applications"],
 mathematics: ["Chapter 1: Relations and Functions (संबंध एवं फलन)","Chapter 2: Inverse Trigonometric Functions","Chapter 3: Matrices (आव्यूह)","Chapter 4: Determinants (सारणिक)","Chapter 5: Continuity and Differentiability","Chapter 6: Application of Derivatives","Chapter 7: Integrals (समाकलन)","Chapter 8: Application of Integrals","Chapter 9: Differential Equations","Chapter 10: Vector Algebra","Chapter 11: Three Dimensional Geometry","Chapter 12: Linear Programming","Chapter 13: Probability"],
 english: ["Chapter 1: The Last Lesson","Chapter 2: Lost Spring","Chapter 3: Deep Water","Chapter 4: The Rattrap","Chapter 5: Indigo","Chapter 6: Poets and Pancakes"],
 hindi: ["Chapter 1: भक्तिन","Chapter 2: बाजार दर्शन","Chapter 3: काले मेघा पानी दे","Chapter 4: पहलवान की ढोलक"]
}
};

// ===== FUTURE KE LIYE PLACEHOLDER - AAP BAAD ME NOTES DOGE =====
const notesData = {}; // isme aap har chapter ka note doge
const objectiveData = {}; // isme MCQ doge

// ===== LOGIC =====
const subjectNames = {science:"Science",mathematics:"Mathematics",social_science:"SST",hindi:"Hindi",english:"English",physics:"Physics",chemistry:"Chemistry",biology:"Biology"};
let curClass=11,curSub="physics";
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active')}
function doLogin(){let e=document.getElementById('email').value;if(!e){alert("Email dalo");return}localStorage.setItem('login','true');localStorage.setItem('email',e);initDash();showScreen('dashboard')}
function doLogout(){localStorage.clear();showScreen('login')}
function initDash(){
  document.getElementById('cLabel').innerText=curClass;
  document.getElementById('welcome').innerText="Hi, "+(localStorage.getItem('email')||'Topper').split('@')[0];
  const cs=document.getElementById('classScroll');cs.innerHTML="";
  [6,7,8,9,10,11,12].forEach(c=>{let d=document.createElement('div');d.className=`class-card ${c==curClass?'active':''}`;d.innerText=`Class ${c}`;d.onclick=()=>{curClass=c; let subs=Object.keys(ncertData[curClass]); curSub=subs[0]; initDash()};cs.appendChild(d)});
  const sg=document.getElementById('subGrid');sg.innerHTML="";
  for(let k in ncertData[curClass]){
    let card=document.createElement('div');card.className=`sub-card ${k==curSub?'active':''}`;
    card.innerHTML=`<div style="font-size:20px">${k=='physics'?'⚛️':k=='chemistry'?'🧪':k=='biology'?'🧬':k=='mathematics'?'📐':k=='science'?'🔬':'📚'}</div><h4 style="font-size:13px;margin-top:6px">${(subjectNames[k]||k).toUpperCase()}</h4><p style="font-size:11px;color:#888">${ncertData[curClass][k].length} Ch <span class="badge">HI+EN</span></p>`;
    card.onclick=()=>{curSub=k;initDash()};
    sg.appendChild(card)
  }
  document.getElementById('sLabel').innerText=(subjectNames[curSub]||curSub).toUpperCase();
  document.getElementById('noteCount').innerText=ncertData[curClass][curSub].length+" Chapters (HI+EN)";
}
function openMat(type){
  showScreen('content');
  const ch=ncertData[curClass][curSub];
  document.getElementById('cTitle').innerText=`Class ${curClass} - ${(subjectNames[curSub]||curSub).toUpperCase()} - ${type.toUpperCase()}`;
  let html="";
  if(type==='notes'){
    html=`<p style="font-size:12px;color:#666;margin-bottom:10px">Total ${ch.length} chapters - Hindi + English me</p><ul class="ch-list">${ch.map(c=>`<li>📘 ${c} <br><span style="font-size:11px;color:#6a5af9">Notes: Aap jab doge tab yahan show hoga</span></li>`).join('')}</ul>`;
  }else if(type==='objective'){
    html=`<p style="font-size:12px;color:#666;margin-bottom:10px">Objective bank abhi khali hai - aap notes doge to auto ban jayega</p><ul class="ch-list">${ch.slice(0,3).map(c=>`<li>❓ ${c} - Sample MCQ?</li>`).join('')}</ul>`;
  }else{
    html=`<ul class="ch-list">${ch.slice(0,3).map(c=>`<li>📝 ${c} - Subjective Question?</li>`).join('')}</ul>`;
  }
  document.getElementById('cBody').innerHTML=html;
}
if(localStorage.getItem('login')==='true'){initDash();showScreen('dashboard')}else{showScreen('login')}
window.onload=()=>{initDash()};
</script>
</body>
</html>
