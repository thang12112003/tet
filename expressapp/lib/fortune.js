const fortuneCookies = [
    "1+1.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
   ]
   exports.getFortune = () => {
    const idx =
   Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
   }
   
   