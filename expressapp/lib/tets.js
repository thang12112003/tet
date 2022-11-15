const tetCookies = [
    "lì xì 100k",
    "lì xì 500k",
    "lì xì 1000k",
   ]
   exports.gettetFortune= () => {
    const idx =
   Math.floor(Math.random()*tetCookies.length)
    return tetCookies[idx]
   }