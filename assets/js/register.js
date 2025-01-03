document.addEventListener("DOMContentLoaded", () => {
    // 註冊功能
    document.querySelector('.register form').onsubmit = function (e) {
        e.preventDefault(); // 阻止表單提交

        // 獲取輸入值
        const email = document.querySelector('.register input[name="email"]').value.trim();
        const password = document.querySelector('.register input[name="password"]').value.trim();
        const phone = document.querySelector('.register input[name="phone"]').value.trim();
        const gender = document.querySelector('.register input[name="gender"]:checked')?.value;
        const bday = document.querySelector('.register input[name="bday"]').value.trim();
        const q1 = document.querySelector('.register input[name="q1"]').value.trim();
        const q2 = document.querySelector('.register input[name="q2"]').value.trim();

        // 檢查是否填寫完整
        if (!email || !password || !phone || !gender || !bday || !q1 || !q2) {
            alert('請完整填寫所有欄位！');
            return;
        }

        // 檢查是否已註冊
        if (localStorage.getItem(email)) {
            alert('此電子郵件已被註冊！');
            return;
        }

        // 儲存資料至 LocalStorage
        const userInfo = { email, password, phone, gender, bday, q1, q2 };
        localStorage.setItem(email, JSON.stringify(userInfo));

        alert('註冊成功！請使用帳號登入。');
        e.target.reset(); // 清空表單
    };

    // 登入功能
    document.querySelector('.login form').onsubmit = function (e) {
        e.preventDefault(); // 阻止表單提交

        // 獲取輸入值
        const email = document.querySelector('.login input[name="email"]').value.trim();
        const password = document.querySelector('.login input[name="password"]').value.trim();

        // 檢查是否填寫完整
        if (!email || !password) {
            alert('請輸入帳號和密碼！');
            return;
        }

        // 從 LocalStorage 中獲取會員資訊
        const userInfo = JSON.parse(localStorage.getItem(email));

        if (!userInfo) {
            alert('帳號不存在！');
            return;
        }

        // 驗證密碼
        if (userInfo.password === password) {
            alert(`登入成功！歡迎回來，${userInfo.email}`);
            // 跳轉到會員頁面
            window.location.href = "../pages/member.html";
        } else {
            alert('密碼錯誤！');
        }
    };
});
