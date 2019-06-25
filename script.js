onload = function() {
    if('speechSynthesis' in window) with(speechSynthesis){


        var playEle = document.querySelector('#play');



        playEle.addEventListener('click', onClickPlay);
        

        function onClickPlay() {
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                utterance.voice = getVoices()[0];
                playEle.className = 'played';
                speak(utterance);
        }
    }else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }
}
