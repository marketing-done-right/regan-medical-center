
// Meta tags
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");
document.head.appendChild(metaCharset);

const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(metaViewport);

// Font Awesome
const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
document.head.appendChild(faLink);
// Inject MCDatepicker CSS

const jqueryScript = document.createElement("script");
jqueryScript.src = "https://code.jquery.com/jquery-3.7.1.js"
jqueryScript.integrity = "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
jqueryScript.crossOrigin = "anonymous";

// Load jQuery UI after jQuery is ready
jqueryScript.onload = function () {
  const jqueryUiCss = document.createElement("link");
  jqueryUiCss.rel = "stylesheet";
  jqueryUiCss.href = "https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css";
  document.head.appendChild(jqueryUiCss);

  const jqueryUiScript = document.createElement("script");
  jqueryUiScript.src = "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js";
  jqueryUiScript.onload = function () {
    // Initialize datepicker after everything is loaded
    $(function () {
      $("#datepicker").datepicker({
        dateFormat: "mm-dd-yy",
        duration: "fast"
      }).attr("placeholder", "mm-dd-yy");
    });
  };
  document.head.appendChild(jqueryUiScript);
};

document.head.appendChild(jqueryScript);


// Inject style
const style = document.createElement("style");
style.textContent = `
  /* --- Entire CSS from your file --- */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { margin: 0; font-family: "Helvetica Neue", Arial, sans-serif; background: #f3f6fa; height: 100vh; }

  .chat-btn { position: fixed; bottom: 20px; right: 20px; width: 64px; height: 64px; background-color: #012f45; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 6px 14px rgba(0,0,0,0.25); z-index: 1000; transition: transform 0.3s ease, box-shadow 0.3s ease; isolation: isolate; }
  .chat-btn:hover { transform: scale(1.08); box-shadow: 0 8px 20px rgba(0,0,0,0.35); }
  .chat-btn i { color: white; font-size: 24px; transition: transform 0.3s ease; }
  .chat-btn.active { display: none; }
  .chat-btn:hover::before { display: block; }
  .chat-btn::before { transition: all .5s ease; display: none; content: ""; position: absolute; inset: 0; border-radius: 50%; background: #ffaf95; animation: scale-soft 2.5s cubic-bezier(0,0,0,0) infinite; z-index: -1; }
  .chat-btn::after { content: ""; position: absolute; inset: 0; border-radius: 50%; animation: pulse-soft 3.2s cubic-bezier(0,0,0,0) infinite; z-index: -1; }
 
  @keyframes scale-soft { 0% { opacity: .6; transform: scale(.8); } 100% { opacity: 0; transform: scale(1.5); } }
  @keyframes pulse-soft { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(1,47,69,.55); } 70% { transform: scale(1.06); box-shadow: 0 0 0 18px rgba(1,47,69,0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(1,47,69,0); } }

  .popup { position: fixed; bottom: 20px; right: 20px; width: 430px; background: #fff; border-radius: 12px; box-shadow: 0 3px 3px -2px transparent,0 3px 4px 0 transparent,0 1px 8px 0 rgba(0,0,0,.12); overflow: hidden; opacity: 0; transform: translateY(20px) scale(0.95); visibility: hidden; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); z-index: 999; }
  .popup.active { opacity: 1; transform: translateY(0) scale(1); visibility: visible; }
  .v-application , .chat-button { display: none !important; opacity:0;z-index: 0;
    position: relative;} 
    .v-application{
        display:none !important;
    }
    .chat-button{ 
        display:none !important;
    }
   .v-application, .v-application--is-ltr,  .pp-app, .elevation-3{
       display:none !important;
   }
  .popup-header { background: #012f45; padding: 32px; color: white; text-align: left; height: 162px; position: relative; }
  .popup-header h3 { margin:0 0 6px; font-size:20px; line-height:2rem; font-weight:600; transition: opacity 0.3s ease; }
  .popup-header p { font-size:14px; font-weight:500; line-height:1.4285714286rem; letter-spacing: normal; font-family: AkkuratLL, Helvetica, Arial, sans-serif; transition: opacity 0.3s ease; }
  .popup-header .close { position: absolute; top:32px; right:32px; font-size:40px; cursor:pointer; color:white; transition: transform 0.3s ease, opacity 0.3s ease; }
  .popup-header .close:hover { transform: rotate(90deg); }
  .popup-header .back-btn { position: absolute; top:32px; left:32px; font-size:24px; cursor:pointer; color:white; opacity:0; transform: translateX(-10px); transition: all 0.3s ease; pointer-events: none; }
  .popup-header .back-btn.active { opacity: 0; transform: translateX(0); pointer-events: auto; }

  .popup-content { position: relative; margin:-42px 2em 2em 2em; background:#fff; border-radius:10px; box-shadow:0 3px 3px -2px transparent,0 3px 4px 0 transparent,0 1px 8px 0 rgba(0,0,0,.12); overflow:hidden; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); min-height:147px; }

  .popup-options { padding:24px 0px; opacity:1; max-height:300px; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
  .popup-options.hide { opacity:0; max-height:0; padding-top:0; padding-bottom:0; margin-bottom:0; }

  .popup-option { display:flex; justify-content:space-between; align-items:center; padding:12px 16px; margin-bottom:8px; font-size:16px; font-weight:500; background:#f6f6f6; color:#545454; cursor:pointer; transition: all 0.3s ease; border-radius:5px; transform: translateY(0); }
  .popup-option:last-child { margin-bottom:; }
  .popup-option:hover { background:#e8f4fd; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(1,47,69,0.1); }
  .popup-option i { margin-right:10px; color:#012f45; }
  .popup-option .right { color:#999; transition: transform 0.3s ease; }
  .popup-option:hover .right { transform: translateX(5px); }

  .content-section { padding:0 24px; opacity:0; max-height:0; overflow:hidden; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
  .content-section.active { opacity:1; max-height:250px; padding:24px; position:relative; z-index:9999; }

  .call-content { text-align:center; }
  .call-content .phone-icon { font-size:48px; color:#012f45; margin-bottom:16px; animation:pulse 2s infinite; }
  .call-content h4 { font-size:20px; color:#333; margin-bottom:8px; }
  .call-content p { color:#666; margin-bottom:20px; line-height:1.5; }

  .locations-list { text-align:left; max-height:250px; overflow-y:auto; padding-right:8px;padding-bottom:20px; }
  #appointmentContent { overflow:auto; }
  .locations-list::-webkit-scrollbar, #appointmentForm::-webkit-scrollbar { width:4px; }
  .locations-list::-webkit-scrollbar-track, #appointmentForm::-webkit-scrollbar-track { background:#f1f1f1; border-radius:4px; }
  .locations-list::-webkit-scrollbar-thumb, #appointmentForm::-webkit-scrollbar-thumb { background:#012f45; border-radius:4px; }
  .locations-list::-webkit-scrollbar-thumb:hover, #appointmentForm::-webkit-scrollbar-thumb:hover { background:#024d6a; }
  .location-item { padding-top:12px !important; padding-bottom:12px !important; border-bottom:1px solid #d6d6d6; }
  .location-item:last-child { margin-bottom:0; }
  .location-item h5 { font-size:16px; font-weight:600; color:#333; margin:0 0 8px 0; }
  .location-item .address { font-size:14px; color:#666; line-height:1.4; margin:0 0 8px 0; }
  .location-call-btn { align-items:center; color:rgb(6,120,137); display:flex; flex:1 0 auto; justify-content:inherit; line-height:normal; position:relative; transition:inherit; transition-property:opacity; text-decoration:none; font-size:16px; }
  .location-call-btn i { margin-right:8px; font-size:12px; }

  .schedule-content { text-align:center; }
  .schedule-content .calendar-icon { font-size:48px; color:#012f45; margin-bottom:16px; }
  .schedule-content h4 { font-size:20px; color:#333; margin-bottom:8px; }
  .schedule-content p { color:#666; margin-bottom:20px; line-height:1.5; }
  .schedule-btn { background:#012f45; color:white; border:none; padding:12px 24px; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer; transition: all 0.3s ease; text-decoration:none; display:inline-block; }
  .schedule-btn:hover { background:#024d6a; transform: translateY(-2px); box-shadow:0 4px 12px rgba(1,47,69,0.3); }

  .popup-form { padding:0; }
  .popup-form label { display:block; margin-bottom:6px; font-size:14px; color:#333; font-weight:500; }
  .popup-form input, .popup-form textarea, .popup-form select { width:100%; padding:12px; margin-bottom:16px; border:2px solid #e0e0e0; border-radius:8px; font-size:14px; transition: all 0.3s ease; font-family:inherit; }
  .popup-form input:focus, .popup-form textarea:focus, .popup-form select:focus { outline:none; border-color:#012f45; box-shadow:0 0 0 3px rgba(1,47,69,0.1); }
  .popup-form button { width:100%; padding:12px; background:#012f45; color:#fff; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer; transition: all 0.3s ease; }
  .popup-form button:hover { background:#024d6a; transform: translateY(-2px); box-shadow:0 4px 12px rgba(1,47,69,0.3); }
  .radio-group { display:flex; gap:10px; align-items:center; margin-bottom:16px; }
  .radio-group label { margin:0; }
  .radio-group input[type="radio"] { width:20px; height:20px; border-radius:50%; border:2px solid #012f45; margin:0; }
  .radio-group input[type="radio"]:checked { background-color:#012f45; }
  .radio-group input[type="radio"]:checked + label { color:#012f45; }
  .d-none{display:none;}
  .popup-a{color:#545454;text-decoration: none;}
  @keyframes pulse { 0%,100%{ transform: scale(1); } 50%{ transform: scale(1.05); } }
  @keyframes slideInRight { from { transform: translateX(100%); opacity:0; } to { transform: translateX(0); opacity:1; } }
  @keyframes slideOutLeft { from { transform: translateX(0); opacity:1; } to { transform: translateX(-100%); opacity:0; } }

  @media (min-width:992px){ .locations-list,.content-section.active{ max-height:400px; } .popup-options{ padding:24px 24px; } }
  @media (max-width:480px){ .popup{ width:calc(100vw - 40px); right:20px; } .popup-options,.content-section{ width:calc(100% - 28px); margin:0px 12px; } }

  #successContent p{ font-size:14px; color:#666; line-height:1.4; margin:8px 0 8px 0; }
  rif;
	color: #546E7A;
}
.wrapper {
	max-width: 100%;
	
	margin-left: auto;
	margin-right: auto;

}
label {
	font-size: 0.75rem;
	font-weight: 400;
	display: block;
	margin-bottom: 0.5rem;
	color: #B0BEC5;
	border: 1px solid #ECEFF1;
	padding: 0.5rem 0.75rem;
	border-radius: 0.5rem;
}
input {
	font-family: 'Roboto', sans-serif;
	display:block;
	border: none;
	border-radius: 0.25rem;
	border: 1px solid transparent;
	line-height: 1.5rem;
	padding: 0;
	font-size: 1rem;
	color: #607D8B;
	width: 100%;
	margin-top: 0.5rem;
}
input:focus {outline: none;}
#ui-datepicker-div {
	display: none;
	background-color: #fff;
	box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
	margin-top: 0.25rem;
	border-radius: 0.5rem;
	padding: 0.5rem;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.ui-datepicker-calendar thead th {
	padding: 0.25rem 0;
	text-align: center;
	font-size: 0.75rem;
	font-weight: 400;
	color: #78909C;
}
.ui-datepicker-calendar tbody td {
	width: 2.5rem;
	text-align: center;
	padding: 0;
}
.ui-datepicker-calendar tbody td a {
	display: block;
	border-radius: 0.25rem;
	line-height: 2rem;
	transition: 0.3s all;
	color: #546E7A;
	font-size: 0.875rem;
	text-decoration: none;
}
.ui-datepicker-calendar tbody td a:hover {	
	background-color: #E0F2F1;
}
.ui-datepicker-calendar tbody td a.ui-state-active {
	background-color: #009688;
	color: white;
}
.ui-datepicker-header a.ui-corner-all {
	cursor: pointer;
	position: absolute;
	top: 0;
	width: 2rem;
	height: 2rem;
	margin: 0.5rem;
	border-radius: 0.25rem;
	transition: 0.3s all;
}
.ui-datepicker-header a.ui-corner-all:hover {
	background-color: #ECEFF1;
}
.ui-datepicker-header a.ui-datepicker-prev {	
	left: 0;	
	background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDEzIDEzIj48cGF0aCBmaWxsPSIjNDI0NzcwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI4OCA2LjI5NkwzLjIwMiAyLjIxYS43MS43MSAwIDAgMSAuMDA3LS45OTljLjI4LS4yOC43MjUtLjI4Ljk5OS0uMDA3TDguODAzIDUuOGEuNjk1LjY5NSAwIDAgMSAuMjAyLjQ5Ni42OTUuNjk1IDAgMCAxLS4yMDIuNDk3bC00LjU5NSA0LjU5NWEuNzA0LjcwNCAwIDAgMS0xLS4wMDcuNzEuNzEgMCAwIDEtLjAwNi0uOTk5bDQuMDg2LTQuMDg2eiIvPjwvc3ZnPg==");
	background-repeat: no-repeat;
	background-size: 0.5rem;
	background-position: 50%;
	transform: rotate(180deg);
}
.ui-datepicker-header a.ui-datepicker-next {
	right: 0;
	background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDEzIDEzIj48cGF0aCBmaWxsPSIjNDI0NzcwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI4OCA2LjI5NkwzLjIwMiAyLjIxYS43MS43MSAwIDAgMSAuMDA3LS45OTljLjI4LS4yOC43MjUtLjI4Ljk5OS0uMDA3TDguODAzIDUuOGEuNjk1LjY5NSAwIDAgMSAuMjAyLjQ5Ni42OTUuNjk1IDAgMCAxLS4yMDIuNDk3bC00LjU5NSA0LjU5NWEuNzA0LjcwNCAwIDAgMS0xLS4wMDcuNzEuNzEgMCAwIDEtLjAwNi0uOTk5bDQuMDg2LTQuMDg2eiIvPjwvc3ZnPg==');
	background-repeat: no-repeat;
	background-size: 10px;
	background-position: 50%;
}
.ui-datepicker-header a>span {
	display: none;
}
.ui-datepicker-title {
	text-align: center;
	line-height: 2rem;
	margin-bottom: 0.25rem;
	font-size: 0.875rem;
	font-weight: 500;
	padding-bottom: 0.25rem;
}
.ui-datepicker-week-col {
	color: #78909C;
	font-weight: 400;
	font-size: 0.75rem;
}
`;
document.head.appendChild(style);

// Inject body
document.body.innerHTML += `
<!-- Floating Button -->
<div class="chat-btn pulse" id="chatBtn">
  <i class="fas fa-comment-dots"></i>
</div>

<!-- Popup -->
<div class="popup" id="popup">
  <div class="popup-header">
    <i class="fas fa-arrow-left back-btn" id="backBtn"></i>
    <h3 id="headerTitle">How can we help?</h3>
    <p id="headerSubtitle">Choose from the following options</p>
    <span class="close" id="closePopup">&times;</span>
  </div>

  <div class="popup-content">
    <!-- Options -->
    <div class="popup-options" id="optionsSection">
      <div class="popup-option" id="bookAppointment">
        <span><i class="fas fa-calendar-check"></i> Request Appointment Now</span>
        <i class="fas fa-chevron-right right"></i>
      </div>
      <div class="d-none" id="callUs"></div>
      <div class="d-none" id="textUs"></div>
      <a href="tel:678-344-8700" class="popup-a">
      <div class="popup-option" id="callUs1">
        <span><i class="fas fa-phone"></i>Call Us: 678-344-8700</span>
        <i class="fas fa-chevron-right right d-none"></i>
      </div>
      </a>
      <a href="sms:678-866-1676" class="popup-a">
      <div class="popup-option" id="textUs1">
      <span><i class="fas fa-message"></i> Text Us: 678-866-1676</span>
        <i class="fas fa-chevron-right right d-none"></i>
      </div>
      </a>
    </div>
     <!-- Text Us Content -->
    <div class="content-section call-content" id="textContent">
      <div class="locations-list">
        <div class="location-item">
          <h5>Five Forks, Lawrenceville</h5>
          <p class="address">2878 Five Forks Trickum Road, Suite 2A</p>
          <a href="sms:678-866-1676" class="location-call-btn"><i class="fas fa-message"></i> 678-866-1676</a>
        </div>
      </div>
    </div>
    <!-- Call Us Content -->
    <div class="content-section call-content" id="callContent">
      <div class="locations-list">
        <div class="location-item">
          <h5>Five Forks, Lawrenceville</h5>
          <p class="address">2878 Five Forks Trickum Road, Suite 2A</p>
          <a href="tel:678-344-8700" class="location-call-btn"><i class="fas fa-phone"></i> 678-344-8700</a>
        </div>
      </div>
    </div>

    <!-- Schedule Online Content -->
    <div class="content-section schedule-content" id="scheduleContent">
      <i class="fas fa-calendar-alt calendar-icon"></i>
      <h4>Schedule Online</h4>
      <p>Use our convenient online scheduling system to book your preferred time slot.</p>
      <a href="#" class="schedule-btn" onclick="alert('Redirecting to scheduling system...')"><i class="fas fa-external-link-alt"></i> Schedule Now</a>
    </div>

    <!-- Book Appointment Form -->
    <div class="content-section" id="appointmentContent">
      <form id="appointmentForm" method="POST" class="popup-form" action="form-handler.php">
        <label style="padding:0;border:none;position:relative;">First Name<i class="fa fa-asterisk" style="color:red;font-size:7px;padding-left:3px;position:absolute;top:3px; margin-left:3px;"></i></label>
        <input type="text" name="first_name" placeholder="First Name" required />
        <label style="padding:0;border:none;position:relative;">Last Name <i class="fa fa-asterisk" style="color:red;font-size:7px;padding-left:3px;position:absolute;top:3px; margin-left:3px;"></i></label>
        <input type="text" name="last_name" placeholder="Last Name" required />
        <label style="padding:0;border:none;position:relative;">Email <i class="fa fa-asterisk" style="color:red;font-size:7px;padding-left:3px;position:absolute;top:3px; margin-left:3px;"></i></label>
        <input type="email" name="email" placeholder="Email" required />
        <label style="padding:0;border:none;position:relative;">Phone Number <i class="fa fa-asterisk" style="color:red;font-size:7px;padding-left:3px;position:absolute;top:3px; margin-left:3px;"></i></label>
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <!--<div class="wrapper">
		      <input type="text" id="datepicker" autocomplete="off">
        </div>
      <label style="padding:0;border:none;">Select Location</label>
      <input type="text" name="dob" id="dob" required  placeholder="YYYY-MM-DD" onfocus="(this.type='date')" onblur="(this.type='text')"/> -->
        <select name="location">
          <option value="">Select Location</option>
          <option value="Five Forks, Lawrenceville">Five Forks, Lawrenceville</option>
          <option value="Hamilton Mill, Dacula">Hamilton Mill, Dacula</option>
          <option value="Johns Creek">Johns Creek</option>
          <option value="Suwanee">Suwanee</option>
          <option value="Grayson Hwy, Lawrenceville">Grayson Hwy, Lawrenceville</option>
          <option value="Five Forks Imaging Center">Five Forks Imaging Center</option>
          <option value="Hamilton Mill Imaging Center">Hamilton Mill Imaging Center</option>
        </select>
        <label style="padding:0;border:none;">Reason for Appointment</label>
        <textarea name="reason" placeholder="Reason for Appointment" ></textarea>
        <div class="radio-group">
          <label>Preferred Contact:</label>
          <input type="radio" name="contact_pref" value="Call" /> Call
          <input type="radio" name="contact_pref" value="Text" /> Text
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    <!-- Success Message -->
    <div class="content-section" id="successContent">
      <div style="text-align:center; padding:24px;">
        <i class="fas fa-check-circle" style="font-size:48px; color:green; margin-bottom:16px;"></i>
        <h4>Thank you!</h4>
        <p>Your appointment request has been submitted successfully. Our staff will contact you soon, usually within 30 minutes.</p>
        <button class="schedule-btn" id="successOkBtn">OK</button>
      </div>
    </div>

  </div>
</div>
`;

// --- JS Code from your script ---
const chatBtn = document.getElementById("chatBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const backBtn = document.getElementById("backBtn");
const headerTitle = document.getElementById("headerTitle");
const headerSubtitle = document.getElementById("headerSubtitle");

const optionsSection = document.getElementById("optionsSection");
const callContent = document.getElementById("callContent");
const textContent = document.getElementById("textContent");
const scheduleContent = document.getElementById("scheduleContent");
const appointmentContent = document.getElementById("appointmentContent");

const callUs = document.getElementById("callUs");
const textUs = document.getElementById("textUs");
// const scheduleOnline = document.getElementById("scheduleOnline");
const bookAppointment = document.getElementById("bookAppointment");

const appointmentForm = document.getElementById("appointmentForm");

let currentSection = "options";


      // Toggle popup
      chatBtn.addEventListener("click", () => {
        const isActive = popup.classList.contains("active");
        if (isActive) {
          closePopupAnimation();
            const chatBtn = document.getElementsByClassName("chat-button")[0];
            const vApplication = document.getElementsByClassName("v-application")[0];
            
            if (chatBtn) chatBtn.style.display = "none";
            if (vApplication) vApplication.style.display = "none";

        } else {
          openPopupAnimation();
        }
      });

      function openPopupAnimation() {
        popup.classList.add("active");
        chatBtn.classList.add("active");

        resetToOptions();
      }

      function closePopupAnimation() {
        popup.classList.remove("active");
        chatBtn.classList.remove("active");
        // Reset after animation completes
        setTimeout(() => {
          if (!popup.classList.contains("active")) {
            resetToOptions();
          }
        }, 350);
      }

      closePopup.addEventListener("click", closePopupAnimation);

      // Back button
      backBtn.addEventListener("click", () => {
        resetToOptions();
      });

      function resetToOptions() {
        // Reset header
        headerTitle.textContent = "How can we help?";
        headerSubtitle.textContent = "Choose from the following options";

        // Hide back button
        backBtn.classList.remove("active");

        // Show options and hide content sections
        optionsSection.classList.remove("hide");
        callContent.classList.remove("active");
        textContent.classList.remove("active");
        scheduleContent.classList.remove("active");
        appointmentContent.classList.remove("active");
        chatBtn.classList.remove("chat-hide");

        currentSection = "options";
      }

      function showSection(section, title, subtitle) {
        if (currentSection === section) return;

        // Update header
        headerTitle.textContent = title;
        headerSubtitle.textContent = subtitle;

        // Show back button
        backBtn.classList.add("active");

        // Hide options with vertical collapse
        optionsSection.classList.add("hide");

        // Show the selected section with vertical expand after options collapse
        setTimeout(() => {
          switch (section) {
            case "call":
              callContent.classList.add("active");
              break;
            case "text":
              textContent.classList.add("active");
              break;
            case "schedule":
              scheduleContent.classList.add("active");
              break;
            case "appointment":
              appointmentContent.classList.add("active");
              break;
            case "success":
              successContent.classList.add("active");
              appointmentContent.classList.remove("active");
              break;
          }
        }, 200);

        currentSection = section;
      }
      
      // Option click handlers
      callUs.addEventListener("click", () => {
        showSection(
          "call",
          "Hello! 👋",
          "Please contact us at the following locations."
        );
        chatBtn.classList.add("chat-hide");
      });
      textUs.addEventListener("click", () => {
        showSection(
          "text",
          "Hello! 👋",
          "Please contact us at the following locations."
        );
        chatBtn.classList.add("chat-hide");
      });

      // scheduleOnline.addEventListener("click", () => {
      //   window.open("https://www.rmc.md/schedule-online", "_blank");
      //   //   showSection('schedule', 'Schedule Online', 'Book your preferred time');
      // });

      bookAppointment.addEventListener("click", () => {
        showSection(
          "appointment",
          "Request Appointment Now",
          "Fill out the form below"
        );
      });
      openPopupAnimation()
      bookAppointment.click();

      const submitBtn = appointmentForm.querySelector("button");

      appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
        submitBtn.disabled = true;
    
        // Collect form data
        const formData = new FormData(appointmentForm);
    
        // Send AJAX request with Fetch
        fetch("asset/js/form-handler.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              // ✅ Success — reset form and show success section
              appointmentForm.reset();
              showSection(
                  "success",
                  "Request Sent",
                  "Appointment request sent successfully!"
                );
            //   alert("🎉 Appointment request sent successfully!");
            } else {
              // ❌ Server error (PHP mail failed)
              alert("⚠️ " + (data.message || "Email failed to send."));
            }
          })
          .catch((error) => {
            // ⚠️ Network / fetch error
            console.error("Error:", error);
            alert("⚠️ Network error, please try again.");
          })
          .finally(() => {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          });
      });
    // appointmentForm.addEventListener("submit", (e) => {
    //   e.preventDefault();
    
    //   const submitBtn = appointmentForm.querySelector("button");
    //   const originalText = submitBtn.innerHTML;
    
    //   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
    //   submitBtn.disabled = true;
    
    //   setTimeout(() => {
    //     // Hide form and show success section
    //     appointmentContent.classList.remove("active");
    //     document.getElementById("successContent").classList.add("active");
    
    //     appointmentForm.reset();
    //     submitBtn.innerHTML = originalText;
    //     submitBtn.disabled = false;
    //   }, 1500);
    // });


//  document.onkeydown = function(e) {
//   // Block F12
//   if (e.keyCode == 123) {
//     return false;
//   }

//   // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K
//   if (e.ctrlKey && e.shiftKey && 
//      (e.keyCode == 73 || // I
//       e.keyCode == 74 || // J
//       e.keyCode == 67 || // C
//       e.keyCode == 75)) { // K
//     return false;
//   }

//   // Block Ctrl+U (View Source)
//   if (e.ctrlKey && e.keyCode == 85) {
//     return false;
//   }

//   // Block Ctrl+S and Ctrl+Shift+S (Save / Save As)
//   if (e.ctrlKey && (e.keyCode == 83)) {
//     return false;
//   }

//   // Block Ctrl+O and Ctrl+Shift+O (Open file dialog in browser)
//   if (e.ctrlKey && (e.keyCode == 79)) {
//     return false;
//   }

//   // Block Ctrl+P (Print page)
//   if (e.ctrlKey && e.keyCode == 80) {
//     return false;
//   }

//   // Block Ctrl+A (Select all)
//   if (e.ctrlKey && e.keyCode == 65) {
//     return false;
//   }

//   // Block Ctrl+C (Copy)
//   if (e.ctrlKey && e.keyCode == 67) {
//     return false;
//   }

//   // Block Ctrl+X (Cut)
//   if (e.ctrlKey && e.keyCode == 88) {
//     return false;
//   }
// };

// Disable right-click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());
 



// Handle OK button in success message
document.getElementById("successOkBtn").addEventListener("click", () => {
  document.getElementById("successContent").classList.remove("active");
  closePopupAnimation(); // or resetToOptions() if you want to return to menu
});


      // Close popup when clicking outside
 document.addEventListener("click", (e) => {
  if (
    !popup.contains(e.target) && 
    !chatBtn.contains(e.target) &&
    !document.getElementById("ui-datepicker-div").contains(e.target) &&
    !document.querySelector(".ui-corner-all").contains(e.target)
  ) {
    if (popup.classList.contains("active")) {
      closePopupAnimation();
    }
  }
});
