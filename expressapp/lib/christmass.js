const christmasCookies = [
    "gấu bông",
    "xe tăng",
    "bóng bay",
   ]
   exports.getchristmasFortune= () => {
    const idx =
   Math.floor(Math.random()*christmasCookies.length)
    return christmasCookies[idx]
   }