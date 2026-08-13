  (function() {
            'use strict';

            // ----- 1. Mobile Nav Toggle -----
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');

            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('open');
                const icon = this.querySelector('i');
                if (navMenu.classList.contains('open')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });

            document.querySelectorAll('#navMenu a').forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('open');
                    const icon = navToggle.querySelector('i');
                    icon.className = 'fas fa-bars';
                });
            });

            // ----- 2. Interactive Feature -----
            const messageDisplay = document.getElementById('messageDisplay');
            const showBtn = document.getElementById('showMessageBtn');
            const resetBtn = document.getElementById('resetMessageBtn');

            const messages = [
                '🌿 "A garden is a grand teacher." — Gertrude Jekyll',
                '🌸 "The love of gardening is a seed once sown that never dies."',
                '🌻 "To plant a garden is to believe in tomorrow." — Audrey Hepburn',
                '🌳 "The best time to plant a tree was 20 years ago. The second best time is now."',
                '🍃 "GreenLeaf Landscaping — your outdoor dream team!"',
                '🌱 "Nature always wears the colors of the spirit." — Ralph Waldo Emerson',
                '🌺 "Every flower is a soul blossoming in nature." — Gérard de Nerval'
            ];

            function showRandomMessage() {
                const randomIndex = Math.floor(Math.random() * messages.length);
                const msg = messages[randomIndex];
                messageDisplay.innerHTML = `<span style="font-weight:600;">${msg}</span>`;
                messageDisplay.classList.add('active');
                messageDisplay.style.transition = 'transform 0.2s';
                messageDisplay.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    messageDisplay.style.transform = 'scale(1)';
                }, 200);
            }

            function resetMessage() {
                messageDisplay.innerHTML = `<span style="color:#5a6f5a;">✨ Click the button to reveal a special message</span>`;
                messageDisplay.classList.remove('active');
                messageDisplay.style.transform = 'scale(1)';
            }

            showBtn.addEventListener('click', showRandomMessage);
            resetBtn.addEventListener('click', resetMessage);

            messageDisplay.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    showRandomMessage();
                }
            });

            // ----- 3. Smooth scroll -----
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset -
                            70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            console.log('%c🌿 GreenLeaf Landscaping', 'font-size:1.4rem; font-weight:bold; color:#2e7d32;');
            console.log('%cThanks for visiting! Let\'s grow something beautiful together.', 'font-size:1rem; color:#3e5a3e;');

        })();