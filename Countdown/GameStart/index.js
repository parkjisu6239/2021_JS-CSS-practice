timeLeft = 5;

        function countdown() {
            timeLeft--;
            document.querySelector(".number").innerHTML = String( timeLeft );
            if (timeLeft > 0) {
                setTimeout(countdown, 1000);
            }
        };

        setTimeout(countdown, 1000);