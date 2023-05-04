// Toast function
    function toast({ title = "", message = "", type = "info", duration = 2000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
            main.removeChild(toast);
            clearTimeout(autoRemoveId);
        }
        };

        const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
        main.appendChild(toast);
    }
    }

    function showToast() {
        toast({
        title: "Xin lỗi!",
        message: "Chức năng này vẫn còn đang xây dựng.",
        });
    }

    //current day, month
    const dayMonth = document.querySelector('.weather__currentday')
    var date = new Date()
    dayMonth.innerHTML = `${date.getDate()} THÁNG ${date.getMonth() + 1}`

    //timing
    let section = document.querySelector("section"),
  icons = document.querySelector(".icons");
  icons.onclick = ()=>{
    section.classList.toggle("dark");
  }
  // creating a function and calling it in every seconds
  setInterval(()=>{
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
    hour = hour == 0 ? hour = 12 : hour; // if hour value is  0 than it value will be 12
    // adding 0 to the front of all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
  }, 1000); // 1000 milliseconds = 1s


    //tab ui 
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const tabs = $$('.page-control')
        const panes = $$('.content')

        tabs.forEach((tab, index) => {
            const pane = panes[index]

            tab.onclick = function() {

            $('.page-control.active').classList.remove('active')
            $('.content.active').classList.remove('active')

            this.classList.add('active')
            pane.classList.add('active')
            }
        })

        //toggle button
        let toggles = document.querySelectorAll('.toggle')
        let toggleBtn = document.querySelectorAll('.toggle-btn')
        let wrapperBtn = document.querySelectorAll('.devices-wrapper')

        toggleBtn.forEach((toggle,index) => {
            toggle.onclick = function() {
                toggles[index].classList.toggle('active')
                wrapperBtn[index].classList.toggle('active')
            }
        })