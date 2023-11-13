    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            document.querySelector('.quote').innerHTML = data.slip.advice
            document.querySelector('#advice-number').innerHTML += data.slip.id})

        .catch(err => console.log(err))
        

