import json
from pathlib import Path

placeDetails = {
  "inverness-castle-viewpoint": {
    "title": "Inverness Castle Experience",
    "area": "Inverness",
    "image": "/images/attractions/inverness/castle-view.jpg",
    "shortDescription": "A striking red sandstone castle perched on a cliff above the River Ness, now fully open as the Inverness Castle Experience.",
    "heading": "A modern Highland storytelling experience on one of Inverness’s oldest power sites.",
    "history": [
      "A fortification has stood on this site since at least the 6th century CE. The present building was constructed in two phases: the south tower as a courthouse in the 1830s and the north tower as a prison in the 1840s.",
      "The castle site has witnessed enormous Scottish history. Robert the Bruce destroyed an earlier version in 1308 to stop English use. Jacobite forces blew it up in 1746 before the Battle of Culloden. Mary Queen of Scots was famously refused entry in 1562.",
      "The Flora MacDonald statue outside commemorates the Highland woman who helped Bonnie Prince Charlie escape after Culloden.",
      "After years of renovation, the Inverness Castle Experience opened to the public. It now houses immersive exhibitions, a 360° storytelling theatre, whisky tasting, a bistro and rooftop panoramic views."
    ],
    "bestFor": ["First-time visitors", "Views", "Highland storytelling"],
    "bestTime": "Late morning on a weekday, outside July–August. Clear autumn weather is excellent for rooftop views. Allow around 2 hours minimum.",
    "localTip": "Visit the Great Glen Roof Terrace for unobstructed views south towards Ben Wyvis and north over the city. Book tickets online in advance. After visiting, walk down the hill to the Castle Tavern for a pint with a view back up to the castle.",
    "commonMistake": "Expecting a traditional castle with original rooms. This is a modern, theatrical visitor experience, not a historic interior tour. Also, do not confuse the free exterior grounds with the paid Experience inside.",
    "suggestedRoute": "Start at the castle → walk down to the River Ness → cross Ness Bridge → walk along the west bank → visit Inverness Cathedral → return via the east bank past Old High Church.",
    "transportNote": "10-minute walk from Inverness train/bus station. Signposted throughout the city centre. Paid car parks are available on Bridge Street and nearby streets. No dedicated castle car park."
  },

  "river-ness-walk": {
    "title": "River Ness Walk & Ness Islands",
    "area": "Inverness",
    "image": "/images/attractions/inverness/river-ness.jpg",
    "shortDescription": "A relaxed, mostly flat riverside promenade from the city centre to the wooded Ness Islands.",
    "heading": "One of Inverness’s most loved free walks.",
    "history": [
      "The River Ness runs just 6 miles from Loch Dochfour, the northern tip of Loch Ness, through the heart of Inverness before meeting the Beauly Firth.",
      "The name Inverness comes from the Scottish Gaelic Inbhir Nis, meaning mouth of the Ness.",
      "The Ness Islands were historically used for feasts given by Inverness magistrates to visiting judges, where fresh salmon was the centrepiece dish.",
      "The Victorian footbridges connecting the islands date from the 1800s, with one iron bridge dating from 1837."
    ],
    "bestFor": ["Easy walking", "Families", "Free activity"],
    "bestTime": "Spring and early summer for birdsong and wildflowers. Morning walks are quiet and atmospheric. Pleasant year-round because the paths are mostly paved.",
    "localTip": "Walk upstream along one bank and return along the other for different views. Look out for salmon and seals, especially in autumn. The Ness Walk Kiosk near Infirmary Bridge does excellent ice cream and waffles in summer.",
    "commonMistake": "Walking one bank and turning back. The full loop via Ness Islands takes around 1–2 hours and is far more rewarding. The islands have some uneven surfaces from tree roots, worth knowing for prams or wheelchairs.",
    "suggestedRoute": "Start at Ness Bridge → walk south along the west bank on Ness Walk → cross into Ness Islands via the Victorian footbridges → loop through the islands → return along the east bank past the War Memorial → back to Ness Bridge.",
    "transportNote": "Starts 5 minutes’ walk from Inverness city centre and station. Free parking at Bught Park. The full circular route is around 1.8 miles and mostly flat."
  },

  "victorian-market": {
    "title": "Victorian Market",
    "area": "Inverness",
    "image": "/images/attractions/inverness/victorian-market.jpg",
    "shortDescription": "An ornate Victorian covered shopping arcade with independent shops, a food hall and preserved cast-iron architecture.",
    "heading": "A historic indoor stop in the heart of Inverness.",
    "history": [
      "The market originally opened in 1870 as the New Market.",
      "It was completely destroyed by fire in 1889, then rebuilt by Inverness Town Council and reopened on 8 September 1891.",
      "The main entrance on Academy Street features a sandstone arch in neoclassical style designed by William Lawrie.",
      "Look closely at the Church Street entrance stonework; it still bears marks from old fish merchants who sharpened their knives on it.",
      "The market has been continuously trading for more than 130 years. The building is also famously dog-friendly, a tradition linked to a story from the fire when a dog reportedly ran back to guard its owner’s shop."
    ],
    "bestFor": ["Food", "Shopping", "Rainy day"],
    "bestTime": "Tuesday to Friday around lunchtime. Avoid Sunday if you want all shops open.",
    "localTip": "The food hall is the real highlight. Go for lunch on a weekday when it is lively but not overwhelming. Use the Church Street entrance for a quieter way in.",
    "commonMistake": "Walking in, looking around briefly and leaving. There are two intersecting corridors plus a central hall, so it is bigger than it first appears.",
    "suggestedRoute": "Enter via Academy Street → browse the food hall → exit onto Union Street → short walk to Eastgate Shopping Centre → return through the market via Queensgate entrance.",
    "transportNote": "Directly opposite Inverness train station. Multiple bus stops within 150m. No transport needed if staying centrally."
  },

  "inverness-cathedral": {
    "title": "Inverness Cathedral",
    "area": "Inverness",
    "image": "/images/attractions/inverness/inverness-cathedral.jpg",
    "shortDescription": "A Gothic Revival cathedral on the west bank of the River Ness, built from red Tarradale sandstone.",
    "heading": "More impressive inside than many visitors expect.",
    "history": [
      "Construction began in 1862 under Bishop Robert Eden, with the foundation stone laid in 1866 by the Archbishop of Canterbury.",
      "The cathedral was designed by local architect Alexander Ross and opened for worship in 1869, though debt meant it was not formally consecrated until 1874.",
      "It was built for the Scottish Episcopal Church and serves the Diocese of Moray, Ross and Caithness.",
      "The twin western towers were designed to have tall spires, but funds ran out, giving the building its distinctive flat-topped look.",
      "Inside, the nave columns are Peterhead granite, the altar is Caen stone, and the stained glass windows were made by the famous Hardman studio in Birmingham.",
      "Among the treasures inside are five Russian icons gifted by Tsar Alexander II to Bishop Eden in 1866, and a 15th-century Italian painting of the Madonna and Child."
    ],
    "bestFor": ["Architecture", "Culture", "River walk"],
    "bestTime": "Weekday mornings when the cathedral is quiet and services are not running. Open year-round.",
    "localTip": "Do not skip the interior. Ask about the Russian icons if a guide is available. The cathedral café is a good coffee stop after a riverside walk.",
    "commonMistake": "Only seeing the exterior from the riverside and moving on. The interior is far more impressive than the plain exterior suggests.",
    "suggestedRoute": "Combine with River Ness Walk. Cathedral → Eden Court grounds → Ness Islands → return past the castle.",
    "transportNote": "5-minute walk from Ness Bridge along Ardross Street. Limited metered street parking and pay-and-display nearby on Ness Walk."
  },

  "eden-court": {
    "title": "Eden Court Theatre",
    "area": "Inverness",
    "image": "/images/attractions/inverness/eden-court.jpg",
    "shortDescription": "Scotland’s largest combined arts centre with theatres, cinemas, galleries, studios and a café.",
    "heading": "The best cultural and rainy-day backup in Inverness.",
    "history": [
      "The original Eden Court Theatre opened in 1976.",
      "It underwent a major £23 million renovation and reopened in 2007.",
      "The new building incorporates the Victorian-era Bishop’s Palace, dating to the 1880s, and the original theatre building.",
      "A notable architectural feature is the six wind towers on the roof, part of a stack-assisted natural ventilation system and one of the first of its kind in the UK.",
      "The venue hosts West End musicals, ballet, children’s shows, ceilidhs, comedy nights and art house cinema."
    ],
    "bestFor": ["Evening", "Rainy day", "Culture"],
    "bestTime": "Year-round. Winter for evening performances; summer for outdoor events in the riverside gardens. Cinema is useful on rainy days.",
    "localTip": "Check the programme before visiting. A ceilidh here is one of the best Highland evenings you can have.",
    "commonMistake": "Assuming it is just a theatre and missing the art gallery, café and smaller studio events, many of which are free or inexpensive.",
    "suggestedRoute": "Combine with Inverness Cathedral and the River Ness Walk. Evening visits pair well with dinner on Ness Walk or in the city centre.",
    "transportNote": "10-minute walk from the city centre along the river. Parking available in the cathedral car park on Ness Walk."
  },

  "culloden-battlefield": {
    "title": "Culloden Battlefield",
    "area": "Inverness",
    "image": "/images/attractions/inverness/culloden-battlefield.jpg",
    "shortDescription": "The site of the last pitched battle fought on British soil, where the Jacobite Rising ended in 1746.",
    "heading": "A deeply important Highland history site.",
    "history": [
      "The Battle of Culloden took place on 16 April 1746 and ended the Jacobite Rising of 1745.",
      "The Jacobite army of around 5,000 men, exhausted, hungry and poorly positioned, faced the Duke of Cumberland’s government force of nearly 9,000 trained soldiers.",
      "The battle lasted approximately 40 minutes. Between 1,500 and 2,000 Jacobites were killed, many buried on the battlefield beneath clan grave markers.",
      "The defeat led directly to the brutal suppression of Highland culture. Kilts were banned, clan systems were dismantled and Gaelic culture was suppressed.",
      "The modern visitor centre opened in 2007 and includes an award-winning museum, immersive 360° battle theatre, interactive exhibitions, Leanach Cottage, clan grave markers, a memorial cairn and Highland cattle grazing the moorland."
    ],
    "bestFor": ["History", "Culture", "Half-day trip"],
    "bestTime": "April for anniversary commemorations, especially around the 16th. Autumn for atmosphere and fewer crowds.",
    "localTip": "Take a guided tour if possible. Do the 360° battle theatre before walking the moor. Bring layers because the moor can be cold and windy even in summer.",
    "commonMistake": "Walking the moor without visiting the visitor centre first. Without context, the moor can feel like just an open field with flags. Parking also fills fast in summer.",
    "suggestedRoute": "Combine with Clava Cairns one mile away for a full half-day of history, then return into Inverness for lunch.",
    "transportNote": "5 miles east of Inverness off the B9006, around 13 minutes by car. Stagecoach Route 27 runs from Inverness bus station. Battlefield is free to walk; visitor centre admission charged."
  },

  "clava-cairns": {
    "title": "Clava Cairns",
    "area": "Inverness",
    "image": "/images/attractions/inverness/clava-cairns.jpg",
    "shortDescription": "A Bronze Age cemetery of burial cairns, standing stones and passage graves dating back around 4,000 years.",
    "heading": "A free, atmospheric ancient site close to Culloden.",
    "history": [
      "Clava Cairns, formally Balnuaran of Clava, was built around 2000 BC.",
      "It is the type-site for roughly 50 similar cairns found only around the Inverness and Moray Firth area.",
      "The site includes two passage graves at either end and a sealed ring cairn in the centre, each surrounded by a stone circle.",
      "The outer cairn passages and the tallest standing stones align with the midwinter sunset, showing a sophisticated understanding of astronomy.",
      "Stones were deliberately chosen by colour: red sandstone at the south-west entrances and white quartz towards the north-east.",
      "Only one or two high-status individuals were buried in each cairn. The site was reused around 1000 BC when smaller monuments were added.",
      "Outlander fans visit because Diana Gabaldon has cited these cairns as inspiration for the time-travel portal in her novels, although the television show was not filmed here."
    ],
    "bestFor": ["Ancient history", "Atmosphere", "Photography"],
    "bestTime": "Early morning, dusk or around the winter solstice on 21 December.",
    "localTip": "Go early or at dusk for the best atmosphere. The nearby Culloden Viaduct is a strong photo stop a short walk from the car park.",
    "commonMistake": "Assuming it is an Outlander filming location. It was inspiration, not a filming site. Also, walking from Culloden is not recommended because there is no proper footpath.",
    "suggestedRoute": "Drive from Culloden Battlefield to Clava Cairns, then continue to Cawdor Castle for a full history day.",
    "transportNote": "6 miles east of Inverness off the B9006. Free parking on-site, not suitable for coaches. Best by car or taxi. Entry free and open 24/7."
  },

  "cawdor-castle": {
    "title": "Cawdor Castle",
    "area": "Inverness",
    "image": "/images/attractions/inverness/cawdor-castle.jpg",
    "shortDescription": "A beautifully preserved 14th-century castle still inhabited by the Cawdor family, with gardens and woodland.",
    "heading": "A polished castle-and-gardens day trip from Inverness.",
    "history": [
      "The heart of Cawdor Castle is a medieval tower built in the late 14th century, with additions made over the following centuries.",
      "The Cawdor family legend says the site was chosen by a donkey. The Thane of Cawdor was reportedly told in a dream to let a donkey wander and build where it rested.",
      "The donkey stopped beneath a holly tree, and the tower was built around it. The dead holly tree is still visible in the castle basement today.",
      "The Cawdor, or Campbell, family have continuously inhabited the castle for over 600 years.",
      "Shakespeare links Cawdor to Macbeth, but the association is fictional. Macbeth predates the castle by centuries, and historians believe Duncan was killed near Elgin in 1040 rather than at Cawdor.",
      "The castle includes furnished rooms, rare tapestries and a drawbridge."
    ],
    "bestFor": ["Castles", "Gardens", "Day trip"],
    "bestTime": "May and June for the gardens at their peak. Castle opening is seasonal, normally April to October.",
    "localTip": "Do not rush the gardens. The walled flower garden, wild garden and Big Wood nature trail are major parts of the visit. The restaurant and shops are better quality than many castle gift shops.",
    "commonMistake": "Rushing straight to the castle and skipping the gardens. Also, arriving for Macbeth and missing the real history.",
    "suggestedRoute": "Clava Cairns → Cawdor Castle → Nairn beach and lunch in Nairn for a strong eastern Inverness day.",
    "transportNote": "15 miles east of Inverness, around 25 minutes by car via the A96. No direct public bus. Taxi or hire car recommended."
  }
}

Path("src/data/placeDetails.js").write_text(
    "export const placeDetails = " + json.dumps(placeDetails, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8"
)
