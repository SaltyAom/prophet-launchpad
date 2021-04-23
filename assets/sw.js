let cacheName = 'v1'
let filesToCache = [
  '/index.html',
  '/assets/sound/sà-wàt-dee kráp.mp3.mp3',
  '/assets/sound/tân sà-maa-chík.mp3.mp3',
  '/assets/sound/chom-rom kon chôp mĕe.mp3.mp3',
  '/assets/sound/wan prá wan jâo mâi wáyn gan lóie.mp3.mp3',
  '/assets/sound/yàak jà doo dtàe mĕe.mp3.mp3',
  '/assets/sound/táng dèk táng pôo yài.mp3.mp3',
  '/assets/sound/dtà-gohn hăa săn-hăa.mp3.mp3',
  '/assets/sound/dtà-gohn hăa săn-hăa dtàe mĕe.mp3.mp3',
  '/assets/sound/mâi kâo jai.mp3.mp3',
  '/assets/sound/mâi kâo jai loie jing jing loie.mp3.mp3',
  '/assets/sound/hôie.mp3.mp3',
  '/assets/sound/táng wan loie wan nîa.mp3.mp3',
  '/assets/sound/tam ngaan mee dtàe mĕe plòh maa táng wan loie.mp3.mp3',
  '/assets/sound/sòng bpai hâi láew gôr yang jà hâi doo èek.mp3.mp3',
  '/assets/sound/măai kwaam wâa ngai nîa kon jang-wàt năi kon jang-wàt à-rai pûak tân nîa.mp3.mp3',
  '/assets/sound/hôie dtaai láew.mp3.mp3',
  '/assets/sound/doo tam-má-tam moh mâng dí doo bpràt… bpà-ràt-yom kòm jai kòm gì-làyt dtan-hăa.mp3.mp3',
  '/assets/sound/doo gan mâng rĕu bplào.mp3.mp3',
  '/assets/sound/doo dtàe mĕe.mp3.mp3',
  '/assets/sound/wan-prá-yài ná.mp3.mp3',
  '/assets/sound/mĕe rá ngóp gan táng wan táng keun loie.mp3.mp3',
  '/assets/sound/mâi kâo jai loie pûak tân bpen yang ngai.mp3.mp3',
  '/assets/sound/jàt maa ao bàep-bêrm nâ keu leu nâ.mp3.mp3',
  '/assets/sound/bpen à-rai gan.mp3.mp3',
  '/assets/sound/pŏm mâi kâo jai jing loie.mp3.mp3',
  '/assets/sound/hóie kon têe năi pûak tân bpen kon j…e jor rĕu bpee à-rai kráp pŏm mâi kâo jai.mp3.mp3',
  '/assets/sound/tam ngaan táng wan lá mĕe plòh táng wan loie.mp3.mp3',
  '/assets/sound/pŏm mâi kâo jai loie jing jing.mp3.mp3',
  '/assets/sound/dtaai láew pûak tân muay goo maa lá laa gòn doo mĕe bpai gòn pŏm jà doo muay.mp3.mp3',
  '/assets/sound/jà-rern nai tam.mp3.mp3',
  '/assets/sound/tân pôo jà-rern sêung mâak bpai dûay bpan-yaa.mp3.mp3',
  '/assets/sound/gôr bpen oh gàat an-dee têe pŏm jà ao bayn CLH hâa-săam maa tàai tam-má.mp3.mp3',
  '/assets/sound/née bpen gaan sŏn tam-má ná pôo jà-rern.mp3.mp3',
  '/assets/sound/tam-má grà-dtùk jì-dòk rá chaa jai.mp3.mp3',
  '/assets/sound/man bpen yàang née dtông mee ù-bpà-gon.mp3.mp3',
  '/assets/sound/yìp òk maa yìp òk maa.mp3.mp3',
  '/assets/sound/hĕn láew yang têe hĕn née keu pláat-dtìk têe kwăeng pâa.mp3.mp3',
  '/assets/sound/mee hĕe meen-má-née.mp3.mp3',
  '/assets/sound/née bpen gaan sà-daeng hâi doo ná tân pôo jà-rern.mp3.mp3',
  '/assets/sound/bàep née rîak wâa chon chìng dtee-chìng.mp3.mp3',
  '/assets/sound/tâa taang yàang née rîak wâa grà dâo kôo.mp3.mp3',
  '/assets/sound/grà dâo-kon-née têe grà dâo-kon-née tee.mp3.mp3',
  '/assets/sound/man dee măi.mp3.mp3',
  '/assets/sound/tâa yàang née rîak wâa dòot nom.mp3.mp3',
  '/assets/sound/dòot nom nòi.mp3.mp3',
  '/assets/sound/dòot kwăa dòot sáai.mp3.mp3',
  '/assets/sound/bàep née rîak wâa lia hĕe.mp3.mp3',
  '/assets/sound/prór hĕe man hŏm dee.mp3.mp3',
  '/assets/sound/goo mee sŏng-hĕe.mp3.mp3',
  '/assets/sound/dàp-bêrn hĕe.mp3.mp3',
  '/assets/sound/hĕe-hŏm hĕe-a-long  hĕe-a-long mâak loie nâa lia.mp3.mp3',
  '/assets/sound/krai jà bpai lia hĕe măa lia hĕe kon…aai goo mâi róo dtàe goo chôp lia hĕe kon.mp3.mp3',
  '/assets/sound/tâa meung chôp lia hĕe măa meung gôr lia bpai bpai.mp3.mp3',
  '/assets/sound/ngîan wói.mp3.mp3',
  '/assets/sound/ngîan jing jà-ríng.mp3.mp3',
  '/assets/sound/trong née kor hĕe hĕe trong nun kor …hĕe nun kor hĕe took took tée kor hĕe hĕe.mp3.mp3',
  '/assets/sound/where are you.mp3.mp3'
]

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(evt.request).then((response) => {
        let fetchPromise = fetch(evt.request).then((networkResponse) => {
          if (evt.request.url.startsWith('http')) cache.put(evt.request, networkResponse.clone())
          return networkResponse
        })
        return response || fetchPromise
      })
    })
  )
})

self.addEventListener('activate', (evt) => {
  const cacheWhitelist = [cacheName]

  evt.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
