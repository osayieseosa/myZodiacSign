const year = document.getElementById('year')
const image = document.getElementById('img')
const heading = document.getElementById('heading')
const paragraph = document.getElementById('about')
const zodiac = document.getElementById('zodiac')

document.getElementById('myForm').addEventListener('submit', 
function(e) {
   e.preventDefault()
   const user = document.getElementById('user').value

   const zodiacArray = [
      {
         img:'aries.png',
         name: 'Aries',
         about: `${user}'s courageous spirit and boundless enthusiasm light up every room, inspiring everyone with your honesty and infectious passion.`
      },
   
      {
         img:'virgo.png',
         name: 'Virgo',
         about: `${user}'s loyal dedication and analytical mind are matched only by ${user}'s kindness and hard work, making ${user} a pillar of support and wisdom for those around.`
      },
   
      {
         img:'tarus.png',
         name: 'Tarus',
         about: `${user}'s unwavering reliability and patient devotion create a sanctuary of stability and love, making everyone feel cherished and secure.`
      },
   
      {
         img:'gemini.png',
         name: 'Gemini',
         about: `${user}'s gentle curiosity and affectionate nature bring joy and wonder to every conversation, making ${user} a delightful and insightful friend`
      },
   
      {
         img:'cancer.png',
         name: 'Cancer',
         about: `${user}'s tenacious loyalty and compassionate heart envelop ${user}'s loved ones in a comforting embrace, making them feel deeply understood and valued.`
      },
   
      {
         img:'leo.png',
         name: 'Leo',
         about: `${user}'s creative brilliance and generous soul shine brightly, spreading warmth and happiness to all who are lucky enough to know ${user}.`
      },
   
      {
         img:'leo.png',
         name: 'Leo',
         about:`${user}'s creative brilliance and generous soul shine brightly, spreading warmth and happiness to all who are lucky enough to know ${user}.`
      },
   
      {
         img:'libra.png',
         name: 'Libra',
         about: `${user}'s cooperative spirit and diplomatic grace create harmony and balance, making everyone feel heard, appreciated, and at peace.`
      },
   
      {
         img:'scorpio.png',
         name: 'Scorpio',
         about: `${user}'s resourceful bravery and passionate intensity makes ${user} a steadfast friend and protector, bringing depth and loyalty to every relationship.`
      },
   
      {
         img:'sagittarius.png',
         name: 'Sagittarius',
         about: `${user}'s generous heart and idealistic outlook, coupled with ${user}'s infectious sense of humor, light up the lives of everyone ${user} meet.`
      },
   
      {
         img:'capricorn.png',
         name: 'Capricorn',
         about: `${user}'s responsible nature and disciplined approach, combined with ${user}'s reliable support, make ${user} a cornerstone of strength and guidance.`
      },
   
      {
         img:'aquarius.png',
         name: 'Aquarius',
         about: `${user}'s progressive vision and original ideas, along with ${user}'s independent spirit, inspire and uplift those around with ${user}'s humanitarian heart.`
      },
   
      {
         img:'pisces.png',
         name: 'Pisces',
         about: `${user}'s compassionate soul and artistic imagination, paired with ${user}'s gentle wisdom, create a world of empathy and beauty that touches everyone ${user} encounters.`
      },
   ]
   let month = year.value.split('-')[1]
   let day = year.value.split('-')[2]

   if(month == 3 && day >= 21 || month == 4 && day <= 19){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'aries')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 4 && day >= 20 || month == 5 && day <= 20){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'tarus')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 5 && day >= 21 || month == 6 && day <= 20){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'gemini')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 6 && day >= 21 || month == 7 && day <= 22){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'cancer')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 7 && day >= 23 || month == 8 && day <= 22){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'leo')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 8 && day >= 23 || month == 9 && day <= 22){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'virgo')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 9 && day >= 23 || month == 10 && day <= 22){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'libra')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 10 && day >= 23 || month == 11 && day <= 21){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'scorpio')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'

   }else if(month == 11 && day >= 23 || month == 12 && day <= 21){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'sagittarius')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 12 && day >= 22 || month == 1 && day <= 19){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'capricorn')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 1 && day >= 20 || month == 2 && day <= 18){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'aquarius')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }else if(month == 2 && day >= 19 || month == 3 && day <= 20){

      let sign = zodiacArray.find(sign => sign.name.toLowerCase() === 'pisces')

      image.src = sign.img
      image.alt = sign.name
      heading.textContent = sign.name
      paragraph.textContent = sign.about
      zodiac.style.display = 'block'
   }
}
)