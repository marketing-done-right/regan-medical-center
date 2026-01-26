document.addEventListener("DOMContentLoaded", function() {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div id="popup"
         style="position:fixed; top:0; left:0; width:100%; height:100%;
                background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center;
                z-index:9999;">
      <div id="popupBox"
           style="background:#fff; padding:35px 40px; border-radius:12px; text-align:center; max-width:520px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <h2 style="margin-bottom:10px; color:#c0392b; font-size: 32px">
          <strong>Important Notice!</strong>
        </h2>
        <p style="margin:6px 0; font-size:15px">Due to inclement weather, our offices may experience closures.</p>
        <p style="margin:8px 0; font-size:15px;">
        Please call ahead before visiting or scheduling an appointment.
        </p>
        <button id="closePopup"
                style="margin-top:18px; padding:8px 20px; border:none; background:#333; color:#fff;
                       border-radius:6px; cursor:pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  const popupOverlay = popup.querySelector('#popup');
  const popupBox = popup.querySelector('#popupBox');
  const closeButton = popup.querySelector('#closePopup');

  closeButton.addEventListener('click', () => popup.remove());
  popupOverlay.addEventListener('click', (e) => {
    if (!popupBox.contains(e.target)) {
      popup.remove();
    }
  });
});