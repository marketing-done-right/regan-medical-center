document.addEventListener("DOMContentLoaded", function() {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div id="popup"
         style="position:fixed; top:0; left:0; width:100%; height:100%;
                background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center;
                z-index:9999;">
      <div id="popupBox"
           style="background:#fff; padding:25px 35px; border-radius:12px; text-align:center; max-width:420px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <h2 style="margin-bottom:10px; color:#c0392b;">Temporary Closure – Five Forks Office</h2>
        <p style="margin:6px 0;">Closed due to a water leak.</p>
        <p style="margin:6px 0;">Expected to reopen <strong>Friday, Oct 31, 2025</strong>.</p>
        <p style="margin:10px 0;">Please visit our <strong>Grayson Hwy</strong> office, open all weekend.</p>
        <button id="closePopup"
                style="margin-top:15px; padding:8px 18px; border:none; background:#333; color:#fff;
                       border-radius:6px; cursor:pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  const popupOverlay = popup.querySelector('#popup');
  const popupBox = popup.querySelector('#popupBox');
  const closeButton = popup.querySelector('#closePopup');

  // Close when the button is clicked
  closeButton.addEventListener('click', () => popup.remove());

  // Close popup when clicking outside the box
  popupOverlay.addEventListener('click', (e) => {
    if (!popupBox.contains(e.target)) {
      popup.remove();
    }
  });
});
