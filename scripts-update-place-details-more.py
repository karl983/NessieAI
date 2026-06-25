import json
from pathlib import Path

p = Path("src/data/placeDetails.js")
s = p.read_text(encoding="utf-8")
raw = s.replace("export const placeDetails = ", "").rstrip().rstrip(";")
placeDetails = json.loads(raw)

placeDetails.update({
  "urquhart-castle": {
    "title": "Urquhart Castle",
    "area": "Loch Ness",
    "image": "/images/attractions/lochness/urquhart-castle.jpg",
    "shortDescription": "One of Scotland's largest and most dramatic castle ruins, perched on a rocky headland jutting into Loch Ness.",
    "heading": "A thousand years of turbulent Highland history in one of Scotland’s most iconic settings.",
    "history": [
      "A fortification has stood at Urquhart since at least the 6th century CE, when St Columba visited the Pictish nobleman Emchath at this site.",
      "The stone castle grew to prominence during the Wars of Scottish Independence, changing hands repeatedly between Scottish and English forces between 1296 and 1307, when Robert the Bruce finally recaptured it.",
      "For two centuries, the Lords of the Isles — the MacDonald clan — repeatedly raided and attacked Urquhart, making it one of the most besieged castles in Scotland.",
      "In 1509, King James IV granted the castle to John Grant of Freuchie, who rebuilt it substantially. The Grant Tower, still the most recognisable feature, rises over 40 feet and originally had five storeys.",
      "By 1692, with Jacobite risings destabilising the region, government troops blew up the gatehouse when they left to prevent the castle falling into Jacobite hands.",
      "The tower partly collapsed during a violent storm in 1715. The state took control in 1913, and the castle is now managed by Historic Environment Scotland."
    ],
    "bestFor": ["History", "Loch Ness views", "Photos"],
    "bestTime": "Early morning at opening time or late afternoon on weekdays. July and August are extremely busy, especially around midday when coach tours arrive.",
    "localTip": "Watch the short visitor-centre film before going outside, then climb Grant Tower for the best views down Loch Ness. The café terrace is worth lingering on for the view.",
    "commonMistake": "Not booking tickets online in summer. The car park fills and queues build quickly. Also, many visitors rush through in under an hour; allow at least 1.5–2 hours.",
    "suggestedRoute": "Inverness → A82 south → Urquhart Castle → Drumnadrochit for lunch → optional Fort Augustus.",
    "transportNote": "16–18 miles southwest of Inverness on the A82, around 30–40 minutes by car. Scottish Citylink 919 stops at the castle."
  },

  "loch-ness-cruise": {
    "title": "Loch Ness Cruise",
    "area": "Loch Ness",
    "image": "/images/attractions/lochness/lochness-cruise.jpg",
    "shortDescription": "A boat trip on Loch Ness is the best way to grasp the sheer scale of the loch.",
    "heading": "The loch is best understood from the water.",
    "history": [
      "Loch Ness was formed by glacial movement along the Great Glen Fault, one of Scotland’s major geological fractures.",
      "The loch is 23 miles long, up to 200 metres deep, and contains more freshwater than all the lakes of England and Wales combined.",
      "Loch Ness connects to the Caledonian Canal, designed by Thomas Telford and opened in 1822, linking the east and west coasts of Scotland through a chain of lochs.",
      "The Loch Ness Monster legend can be traced back to St Columba’s 6th-century account of a water beast on the River Ness.",
      "Modern Nessie mania began after a 1933 newspaper report described a whale-like creature. Several sonar surveys have searched the loch, but no definitive evidence has been found.",
      "The loch’s depth and dark, peat-stained water make it genuinely difficult to survey fully, which keeps the mystery alive."
    ],
    "bestFor": ["Boat trip", "Families", "First-time visitors"],
    "bestTime": "May to September for reliable boat services. Morning cruises tend to give better light for photography.",
    "localTip": "The Jacobite cruise from Inverness is the classic efficient Loch Ness day trip, combining coach, boat crossing and Urquhart Castle.",
    "commonMistake": "Booking a cruise without combining it with a land stop. The loch is impressive, but it is best understood with Urquhart Castle or Fort Augustus.",
    "suggestedRoute": "Inverness → Jacobite Cruise departure at Dochgarroch → Loch Ness cruise → Urquhart Castle → return to Inverness.",
    "transportNote": "Jacobite Cruises depart near Inverness, with city-centre coach pickup options. Scottish Citylink 919 serves the loch corridor."
  },

  "dores-beach": {
    "title": "Dores Beach",
    "area": "Loch Ness",
    "image": "/images/destinations/loch-ness.jpg",
    "shortDescription": "A quiet pebbly/sandy beach on the north-eastern shore of Loch Ness with one of the longest views down the loch.",
    "heading": "A local favourite close to Inverness.",
    "history": [
      "Dores is a small village that has long been a favourite local escape from Inverness, close to the city but completely different in atmosphere.",
      "The village sits on the B862, known as General Wade’s Military Road, built in the 18th century to move troops through the Highlands after the Jacobite risings.",
      "The Dores Inn, beside the beach, has served locals and travellers for many years and is well regarded for food.",
      "Dores Beach is also home to Steve Feltham, who gave up his job and home in 1991 to move to the loch shore and search for the Loch Ness Monster.",
      "Feltham holds the Guinness World Record for the longest dedicated search for Nessie."
    ],
    "bestFor": ["Local favourite", "Views", "Pub lunch"],
    "bestTime": "Early morning for mist and atmosphere, or late afternoon for the light. Summer evenings are excellent.",
    "localTip": "Book the Dores Inn in summer. If Steve Feltham is around at his converted van, he is friendly, knowledgeable and sells handmade Nessie models.",
    "commonMistake": "Treating Dores as a passing stop. It deserves at least 30–45 minutes because the view down the loch is one of the best.",
    "suggestedRoute": "Inverness → B862 south to Dores Beach → continue south to Falls of Foyers → loop back via B9006 or A82.",
    "transportNote": "9 miles south of Inverness, around 15 minutes by car. Stagecoach Route 16 runs limited services via Dores."
  },

  "falls-of-foyers": {
    "title": "Falls of Foyers",
    "area": "Loch Ness",
    "image": "/images/attractions/lochness/falls-of-foyers.jpg",
    "shortDescription": "A dramatic 140-foot two-stage waterfall in a steep wooded gorge on the south side of Loch Ness.",
    "heading": "A powerful natural stop with literary and industrial history.",
    "history": [
      "Falls of Foyers, Eas na Smùide in Scottish Gaelic, means the smoking falls.",
      "The waterfall has been a visitor attraction since the Victorian era.",
      "Robert Burns visited in 1787 and wrote Lines on the Fall of Fyers Near Loch-Ness, which can be read on carved stones along the path.",
      "Foyers became significant in 1896 when Britain’s first commercial hydroelectric power scheme was built here to power an aluminium smelter.",
      "The aluminium works closed in 1967, but the hydroelectric station has continued operating.",
      "Nearby Boleskine House was owned by occultist Aleister Crowley and later by Led Zeppelin guitarist Jimmy Page. The graveyard at Boleskine was also used as an Outlander filming location."
    ],
    "bestFor": ["Waterfall", "Scenery", "South Loch Ness"],
    "bestTime": "Autumn and winter after rain for maximum water volume. Avoid very dry summer spells if you want the falls at their strongest.",
    "localTip": "Visit after heavy rain. Continue beyond the first viewpoint if you can; the lower viewpoint and loch-shore route are more rewarding.",
    "commonMistake": "Only going to the upper viewpoint and turning back. Also, the path is steep and uneven with no disabled access.",
    "suggestedRoute": "Inverness → Dores Beach → Falls of Foyers → Fort Augustus → return via A82 past Urquhart Castle.",
    "transportNote": "About 20 miles south of Inverness on the B862, roughly 35 minutes by car. Stagecoach Route 16 is limited."
  },

  "fort-augustus": {
    "title": "Fort Augustus",
    "area": "Loch Ness",
    "image": "/images/attractions/lochness/fort-augustus.jpg",
    "shortDescription": "A charming village at the southern tip of Loch Ness where the Caledonian Canal meets the loch through five locks.",
    "heading": "The most photogenic village stop on Loch Ness.",
    "history": [
      "Fort Augustus was originally named Kilcumin, then renamed after the Duke of Cumberland, also known as Butcher Cumberland.",
      "The fort was built after the Battle of Culloden in 1746 to control the Great Glen and suppress further Jacobite activity.",
      "The Caledonian Canal, designed by Thomas Telford and completed in 1822, passes through the village via a staircase of five locks.",
      "The canal connects Loch Ness to Loch Oich and was designed to allow naval vessels to cross Scotland without rounding Cape Wrath.",
      "Although the canal was not the commercial success originally hoped for, it became a major tourist attraction, boosted by Queen Victoria’s cruise in 1873."
    ],
    "bestFor": ["Village stop", "Canal locks", "Lunch"],
    "bestTime": "June to August for the most boat traffic through the locks. Weekday lunchtimes can be lively.",
    "localTip": "Watch boats move through the five locks. The process can take 30–45 minutes and is genuinely fascinating.",
    "commonMistake": "Spending too long in tourist shops and missing the canal walk. The Great Glen Way path to Kytra Locks is a strong short walk.",
    "suggestedRoute": "Urquhart Castle → Fort Augustus lunch → canal locks → Falls of Foyers → Dores Beach.",
    "transportNote": "34 miles south of Inverness, around 50 minutes by car on the A82. Citylink 919 and Stagecoach 19 serve the village."
  },

  "loch-ness-viewpoints": {
    "title": "Loch Ness Viewpoints",
    "area": "Loch Ness",
    "image": "/images/attractions/lochness/lochness-viewpoint.jpg",
    "shortDescription": "Scattered pull-offs and elevated viewpoints on both sides of Loch Ness.",
    "heading": "The quieter south side often beats the obvious road.",
    "history": [
      "The B862 on the south side of Loch Ness follows General Wade’s Military Road, built after 1725 to allow British troops to move quickly through the Highlands.",
      "The road gives access to some of the highest and quietest viewpoints above Loch Ness.",
      "Suidhe Viewpoint above Fort Augustus sits at around 1,200 feet and offers panoramic views across Highland glens and multiple lochs.",
      "The south-side road is far less used than the A82 on the north shore, which makes it valuable for visitors who want quieter scenery."
    ],
    "bestFor": ["Photos", "Scenic drive", "Quiet route"],
    "bestTime": "Sunrise for misty loch views, golden hour for photography and autumn for colour.",
    "localTip": "Drive the B862 north from Fort Augustus towards Dores for a quieter, more scenic experience. Download offline maps because signal can be patchy.",
    "commonMistake": "Staying only on the A82 and missing the south-side road entirely. Do not rely blindly on sat-nav on narrow single-track sections.",
    "suggestedRoute": "Fort Augustus → Suidhe Viewpoint → Foyers → Dores → Inverness.",
    "transportNote": "Best accessed by car. Public transport on the south side is very limited."
  }
})

p.write_text("export const placeDetails = " + json.dumps(placeDetails, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
