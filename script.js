document.addEventListener('DOMContentLoaded', function () {
    // Мобильное меню
    var burgerBtn = document.getElementById('burger-btn');
    var navMenu = document.getElementById('nav-menu');

    burgerBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Переключение вопросов в FAQ
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        btn.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });

    // Простая маска телефона
    var phoneInputs = document.querySelectorAll('.phone-mask');
    phoneInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var nums = input.value.replace(/\D/g, '');
            if (nums.startsWith('8')) {
                nums = '7' + nums.slice(1);
            }
            if (nums.length > 0 && !nums.startsWith('7')) {
                nums = '7' + nums;
            }
            nums = nums.slice(0, 11);

            var formatted = '';
            if (nums.length > 0) formatted = '+7';
            if (nums.length > 1) formatted += ' (' + nums.slice(1, 4);
            if (nums.length >= 4) formatted += ') ' + nums.slice(4, 7);
            if (nums.length >= 7) formatted += '-' + nums.slice(7, 9);
            if (nums.length >= 9) formatted += '-' + nums.slice(9, 11);

            input.value = formatted;
        });
    });

    // Отправка основной формы заявки
    var mainForm = document.getElementById('main-form');
    var mainMsg = document.getElementById('main-form-msg');

    mainForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Заявка на демо отправлена');
        mainMsg.style.display = 'block';
        mainForm.reset();
    });

    // Работа онлайн-чата
    var openChat = document.getElementById('open-chat');
    var closeChat = document.getElementById('close-chat');
    var chatBox = document.getElementById('chat-box');
    var chatForm = document.getElementById('chat-form');
    var chatText = document.getElementById('chat-text');
    var chatMessages = document.getElementById('chat-messages');

    openChat.addEventListener('click', function () {
        if (chatBox.style.display === 'block') {
            chatBox.style.display = 'none';
        } else {
            chatBox.style.display = 'block';
        }
    });

    closeChat.addEventListener('click', function () {
        chatBox.style.display = 'none';
    });

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var text = chatText.value.trim();
        if (!text) return;

        var userDiv = document.createElement('div');
        userDiv.className = 'msg user-msg';
        userDiv.textContent = text;
        chatMessages.appendChild(userDiv);
        chatText.value = '';

        setTimeout(function () {
            var botDiv = document.createElement('div');
            botDiv.className = 'msg bot-msg';
            botDiv.textContent = 'Спасибо за вопрос! Оставьте телефон в форме заявки, и специалист подключится.';
            chatMessages.appendChild(botDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
    });

    // Модальное окно обратного звонка
    var openCall = document.getElementById('open-call');
    var closeCall = document.getElementById('close-call');
    var callModal = document.getElementById('call-modal');
    var callForm = document.getElementById('call-form');
    var callMsg = document.getElementById('call-form-msg');

    openCall.addEventListener('click', function () {
        callModal.style.display = 'flex';
    });

    closeCall.addEventListener('click', function () {
        callModal.style.display = 'none';
    });

    callForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Заказан обратный звонок');
        callMsg.style.display = 'block';
        callForm.reset();
    });

    // Баннер согласия на сбор Cookie
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookie = document.getElementById('accept-cookie');

    if (localStorage.getItem('cookieAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    acceptCookie.addEventListener('click', function () {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });

    // Открытие правовых документов (152-ФЗ)
    var legalModal = document.getElementById('legal-modal');
    var closeLegal = document.getElementById('close-legal');
    var legalTitle = document.getElementById('legal-title');
    var legalContent = document.getElementById('legal-content');

    var docs = {
        privacy: {
            title: 'Политика конфиденциальности',
            text: '<p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта CRM4Retail (Оператор — ООО «Хэдлайн-Ижевск»).</p><p>1. Собираемые данные: имя, контактный номер телефона, сведения о сфере деятельности компании, а также технические данные (файлы cookie, IP-адрес).</p><p>2. Цели сбора: проведение демонстрации системы CRM4Retail, консультация по вопросам внедрения и обратной связи с пользователем.</p><p>3. Оператор обязуется не передавать полученные персональные данные третьим лицам без согласия субъекта персональных данных, за исключением случаев, предусмотренных законодательством РФ.</p>'
        },
        consent: {
            title: 'Согласие на обработку персональных данных',
            text: '<p>Заполняя веб-формы на сайте CRM4Retail, в соответствии с Федеральным законом № 152-ФЗ «О персональных данных», я свободно, своей волей и в своем интересе даю согласие ООО «Хэдлайн-Ижевск» на автоматизированную и неавтоматизированную обработку моих персональных данных (имя, телефон, название/отрасль компании).</p><p>Согласие предоставляется для осуществления прямых контактов со мной по вопросам демонстрации и внедрения программного продукта CRM4Retail.</p><p>Согласие может быть отозвано мной в любой момент путем направления письменного уведомления на электронный адрес: hello@hlcompany.ru.</p>'
        },
        personal: {
            title: 'Положение об обработке персональных данных',
            text: '<p>Обработка персональных данных в ООО «Хэдлайн-Ижевск» осуществляется в строгом соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p><p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения.</p><p>Хранение персональных данных осуществляется на территории Российской Федерации в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки.</p>'
        },
        agreement: {
            title: 'Пользовательское соглашение',
            text: '<p>Настоящее Пользовательское соглашение регулирует отношения между ООО «Хэдлайн-Ижевск» (правообладатель сервиса CRM4Retail) и пользователем сети Интернет.</p><p>Вся представленная на сайте информация о тарифах, кейсах и функциональных возможностях носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями ст. 437 ГК РФ.</p><p>Использование материалов сайта без письменного согласия правообладателя не допускается.</p>'
        },
        cookie: {
            title: 'Политика использования файлов Cookie',
            text: '<p>Сайт использует файлы cookie и схожие технологии для обеспечения удобства пользователей, корректной работы форм обратной связи и сбора обезличенной аналитической статистики.</p><p>Файлы cookie представляют собой небольшие текстовые файлы, сохраняемые в браузере вашего устройства. Вы можете в любой момент отключить сохранение файлов cookie в настройках своего браузера.</p>'
        }
    };

    var legalLinks = document.querySelectorAll('.legal-link');
    legalLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var docKey = link.getAttribute('data-doc');
            if (docs[docKey]) {
                legalTitle.textContent = docs[docKey].title;
                legalContent.innerHTML = docs[docKey].text;
                legalModal.style.display = 'flex';
            }
        });
    });

    closeLegal.addEventListener('click', function () {
        legalModal.style.display = 'none';
    });
});