function talert(status, text, title, button, buttonFunc, buttonClose, link, input) {
    var notifications = document.getElementById("notifications");

    var talertDiv = document.createElement("div");
    talertDiv.className = `talert ${status}`;

    if(title != null) {
        var talertTitle = document.createElement("h5");
        talertTitle.innerHTML = title;
        talertDiv.appendChild(talertTitle);
    }
    if(text != null) {
        var talertText = document.createElement("p");
        talertText.innerHTML = text;
        talertDiv.appendChild(talertText);
    }
    if(button != null) {
        var talertButtonContainer = document.createElement("div");
        talertButtonContainer.className = "button-container";
        talertDiv.appendChild(talertButtonContainer);

        var talertButton = document.createElement("button");
        talertButton.innerHTML = button;

        if(link != null) {
            talertButton.onclick = function () {
                if (Array.isArray(link) && link[1] === 'blank') {
                    window.open(link[0], '_blank');
                } else {
                    window.location.href = link;
                }
            };
        }
        else {
            if(input != null) {
                var talertInput = document.createElement("input");
                talertDiv.appendChild(talertInput);
            }
            talertButton.onclick = function() {
                if(buttonFunc != null) {
                    if(input != null) {
                        buttonFunc(input);
                    }
                    else {
                        buttonFunc();
                    }
                }
                talertDiv.classList.add("remove");
                setTimeout(() => {
                    talertDiv.remove();
                }, 350);
            }
        }
        talertButtonContainer.appendChild(talertButton);
        if(buttonClose != null) {
            var talertButtonClose = document.createElement("button");
            talertButtonClose.innerHTML = buttonClose;
            talertButtonClose.onclick = function() {
                talertDiv.classList.add("remove");
                setTimeout(() => {
                    talertDiv.remove();
                }, 350);
            }
            talertButtonContainer.appendChild(talertButtonClose);
        }
    }

    talertDiv.style.visibility = 'hidden';
    notifications.appendChild(talertDiv);
    var talertHeight = talertDiv.offsetHeight;
    notifications.removeChild(talertDiv);
    talertDiv.style.visibility = '';

    var allTalerts = notifications.querySelectorAll(".talert");

    if (allTalerts.length > 0) {
        allTalerts.forEach(function(lastTalert) {
            lastTalert.style.transform = `translateY(-${talertHeight + 8}px)`;
            setTimeout(() => {
                lastTalert.style.transition = 'transform 0s, opacity 0.35s';
                lastTalert.style.transform = '';
                setTimeout(() => {
                    lastTalert.style.transition = 'transform 0.35s, opacity 0.35s';
                }, 350);
            }, 350);
        });
    }

    setTimeout(() => {
        notifications.appendChild(talertDiv);
        setTimeout(() => {
            talertDiv.classList.add("active")
        }, 50);
    }, 350);
    setTimeout(() => {
        talertDiv.classList.add("remove");
        setTimeout(() => {
            talertDiv.remove();
        }, 350);
    }, 7000);
}