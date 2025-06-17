const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Giveaway",
    "heroHeadline": "Win Tickets to a <span class='highlight'>Toronto Blue Jays Game</span>!",
    "heroSubheadline": "Celebrate Canada Day by joining us for a chance to win tickets worth $100 to a thrilling Jays game this summer!",
    "promotionDates": "Promotion runs on July 1, 2025 with the winner announced on July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/f9r18xxxk1rme0cqfddv8b86hr.jpg",
    "heroCtaText": "Enter for Your Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll notify the winner via email after the draw on July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Win tickets to experience the excitement of a live Toronto Blue Jays game this summer! Perfect for baseball fans and families looking to make unforgettable memories at the ballpark.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/dcp41bpprhrme0cqfddr0ysf9m.jpg",
        "alt": "Blue Jays Tickets and Baseball"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/5p9wv07exsrmc0cqfddvw98z04.jpg",
        "alt": "Fans at Blue Jays game"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/8dxkbn0649rme0cqfde91kkks8.jpg",
        "alt": "Toronto Blue Jays Baseball Stadium"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Two tickets to an exciting Toronto Blue Jays game" },
      { "icon": "fas fa-smile", "text": "A memorable summer experience with family or friends" },
      { "icon": "fas fa-location-arrow", "text": "Enjoy the vibrant atmosphere of the ballpark downtown" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry at our booth on event day!" }
    ],
    "limitedTimeOfferText": "⚾ Celebrate Summer with Jays Tickets!",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st to enter the giveaway."
      },
      {
        "icon": "fas fa-edit",
        "title": "Complete the Survey",
        "description": "Fill out a quick and fun survey at our booth to enter the draw."
      },
      {
        "icon": "fas fa-envelope",
        "title": "Wait for the Draw",
        "description": "The winner will be announced via email on July 2nd."
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-ticket-alt", "text": "Amazing $100 Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win tickets to a Toronto Blue Jays game!",
    "entryCountText": "Join over 500+ baseball fans who already entered!",
    "socialSharePrompt": "Share the excitement with friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets this Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair Winner Selection",
      "text": "Winner selection is completely random and unbiased, using a certified random number generator to ensure fairness."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be notified by email only. Please check your inbox and spam folders after the draw on July 2, 2025."
    },
    "faq": [
      {
        "q": "Who can enter?",
        "a": "Open to all residents of Toronto aged 18 and over."
      },
      {
        "q": "When is the giveaway period?",
        "a": "Entry is open at the Canada Day event on July 1, 2025, and closes on July 2, 2025 at 11:59 PM." 
      },
      {
        "q": "How is the winner chosen?",
        "a": "One winner is chosen at random from all valid entries received during the event."
      },
      {
        "q": "When and how will the winner be notified?",
        "a": "The winner will be contacted by email on or around July 2, 2025."
      },
      {
        "q": "How many times can I enter?",
        "a": "Limit one entry per person/email during the giveaway period. Duplicate entries will be disqualified."
      },
      {
        "q": "Is my personal information safe?",
        "a": "We respect your privacy and only use your data for the purposes of this giveaway as detailed in our Privacy Policy."
      }
    ],
    "tips": [
      "Ensure your email is correct before submitting.",
      "Add shar@theskygroup.ca to your email contacts to receive notifications.",
      "Follow Sky Group on social media for winner updates."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CIA4RJJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T232758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHmnIxXBwbVSiQ653e2aLn%2Bfznvzfh%2FIw4phVrkgkC4VAiBzea5NBSVWawQ%2FLBd1BbnF6pLyjcc3%2BKu4DRauNwgPMyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJ1xrFMri6NzboV9CKtwDSFvZLluPPR0Cdmz9162zx5toPMGsTxctQ1dLgyARb4Yn6%2BHkq0qJ9faojWNjXBlmWgAGdo1UPHfGGvsQhPrxomW%2F3l9gwy4a9JDg%2BiMpMtTajLlaIjCNkIWTH1qYOmLj3nf1wgmi%2Fs%2FjIEunzXscaTuvJyQg5%2BGyPcQWTPY6Mw%2FRFRQNws5EJf%2Bc5L1acyOMtUi6imKKljQZowFFJOms6HIx7U05umUuq%2FxpAhDypBfXoEAwFokkbtGNEWEshVfMv2OnRYxSz5GQkdHT18kD9aO1WDlxFw7rk6TMxgyodu6s8pPzi6F8%2BRCIJvu7VITgoTpYO8VteToBeD47AW6HhfogCaR%2Byu9f9vpmU19VWjwM76abCk7ss%2F5%2F6J9X5mfALNKhvDEiVv%2BaeCDFggy66WR%2BEd4B1%2Bm3mpfT2SRbSKLDA1hjkY4Q3H%2FqdQ%2BVOFbwZocqtLHyIkstwGUuGov9aw801nzKOsaY6I%2FGb5tqQ%2FVrfMMjRFbIqr5ZiSg6EepC%2FbULS5hUo6sQIBJBiLphIchZpb6Xjew5YH4Ok%2Fh8H2OMQh8sxR31dvIn%2BorvlmW9zUJOxYfHt%2Fo05wuScDDg1R3J%2BI%2BmtAuFiKJ9Je8OV6BEL2EYz0eTp690FScwv7jCwgY6pgGhi38tXBpXkhQPhbFV4rscAPeIkF8z8tc29xinvY%2FAr1zrkBkr1N3FCKAt7rmpyBZ66AryoMXR3ghBMwzWo5Rh4HzdPmBFD8qkAaLPi0S3xBsTajGvfGaYomsoZacO0tSataWMioeMDgTb6lEYccuplyZ0sbmZnDWe%2F6MCNN7BBT6ZpwLfVkwePuQ7iCjc7vHKqzTsnAuMS%2FtzTumC5XNa2LOj2pYC&X-Amz-Signature=f86d7d164a7013361da38c54819b8b2095171c8f68ab5414626df64032b5ae49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets - Canada Day Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#0052CC", "#FF4500", "#FFC72C", "#E4002B", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-573",
    "repoUrl": "https://github.com/arslvn93/Giveaway-573",
    "tag": "Canada Day Blue Jays Giveaway 2025",
    "netlifyUrl": "http://Giveaway-573.netlify.app",
    "netlifyId": "1003313986"
  }
};