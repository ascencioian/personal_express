const heart = document.getElementsByClassName("fa-heart");
const retweet = document.getElementsByClassName("fa-retweet");
const trash = document.getElementsByClassName("fa-trash");
const star = document.getElementsByClassName("fa-star");

//heart 
Array.from(heart).forEach(function (element) {
    element.addEventListener('click', function () {
        const tweet = this.parentNode.parentNode.childNodes[1].innerText
        const heart = parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
        fetch('loves', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'tweet': tweet,
                'heart': heart
            })
        })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(data => {
                window.location.reload(true)
            })
    });
});

//retweet
Array.from(retweet).forEach(function (element) {
    element.addEventListener('click', function () {
        const tweet = this.parentNode.parentNode.childNodes[1].innerText
        const retweet = parseFloat(this.parentNode.parentNode.childNodes[10].innerText)
        fetch('retweets', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'tweet': tweet,
                'retweet': retweet
            })
        })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(data => {
                window.location.reload(true)
            })
    });
});

Array.from(star).forEach(function(element) {
    element.addEventListener('click', function(){
      const tweet = this.parentNode.parentNode.childNodes[1].innerText
      const star = parseFloat(this.parentNode.parentNode.childNodes[14].innerText)

      //childnode tool
      const parent = this.parentNode.parentNode.childNodes
      for(let i=0; i<parent.length; i++){
        console.log(parent[i])
      }

      fetch('color', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'tweet': tweet,
            'retweet': retweet
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true) // promise request is resolved from server. reload page to update
      })
    });
});


// event listener for deleting when clicking trash can
Array.from(trash).forEach(function (element) {
    element.addEventListener('click', function () {
        const tweet = this.parentNode.parentNode.childNodes[1].innerText 
        fetch('tweets', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'tweet': tweet,
            })
        }).then(function (response) {
            window.location.reload()
        })
    });
});