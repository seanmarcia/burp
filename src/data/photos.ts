export interface Photo {
  id: number;
  filename: string;
  caption?: string;
}

export interface PhotoGroup {
  label: string;
  photos: Photo[];
}

const t = (filename: string) =>
  `${import.meta.env.BASE_URL}photos/${encodeURIComponent(filename)}`;

export const photoGroups: PhotoGroup[] = [
  {
    label: 'November 2024',
    photos: [
      { id: 173417179, filename: 'Nov 2024 Pins.jpeg', caption: 'Pins' },
      { id: 173416996, filename: 'Nov 2024 Bill speaking.jpeg', caption: 'Bill speaking' },
      { id: 173416995, filename: 'Nov 2024 crowd resized.jpeg', caption: 'The crowd' },
      { id: 173416994, filename: 'Nov 2024 Contest Winners.jpeg', caption: 'Contest winners' },
      { id: 173416993, filename: 'Nov 2024 Judging results.jpg', caption: 'Judging results' },
      { id: 173416991, filename: 'Nov 2024 Presentation.jpg', caption: 'Presentation' },
      { id: 173416990, filename: 'Nov 2024 Mark Vaudin with beer entry.jpg', caption: 'Mark Vaudin with beer entry' },
      { id: 173416989, filename: 'nov 2024 full band.jpg', caption: 'Full band' },
      { id: 173416987, filename: 'Nov 2024 beer engines.jpg', caption: 'Beer engines' },
      { id: 173416982, filename: 'Nov 2024 Band Playing.jpg', caption: 'Band playing' },
    ],
  },
  {
    label: 'September 2024',
    photos: [
      { id: 172700604, filename: 'Sep 2024 Dave and Mike examining beer.jpg', caption: 'Dave and Mike examining beer' },
      { id: 172700603, filename: 'Sep 2024 Wendy and group discussing beer.jpg', caption: 'Wendy and group discussing beer' },
      { id: 172700601, filename: 'Sep 2024 group tasting beers.jpg', caption: 'Group tasting beers' },
    ],
  },
  {
    label: 'July 2024',
    photos: [
      { id: 171585781, filename: 'July 2024 Sour beer winners.jpg', caption: 'Sour beer winners' },
      { id: 171585780, filename: 'July2024 Announcements .jpg', caption: 'Announcements' },
      { id: 171585779, filename: 'July 2024 enjoying the pool.jpg', caption: 'Enjoying the pool' },
      { id: 171585778, filename: 'July 2024 meeting.jpg', caption: 'Meeting' },
    ],
  },
  {
    label: 'June 2024',
    photos: [
      { id: 170944921, filename: '2024 June Announcements.jpg', caption: 'Announcements' },
      { id: 170944920, filename: '2024 June education session.jpg', caption: 'Education session' },
      { id: 170944919, filename: '2024 June Beer winners.jpg', caption: 'Beer winners' },
      { id: 170944790, filename: '2024 June discussing beer.jpg', caption: 'Discussing beer' },
      { id: 170944789, filename: '2024 June meeting.jpg', caption: 'Meeting' },
      { id: 170944788, filename: '2024 June general conversation.jpg', caption: 'General conversation' },
    ],
  },
  {
    label: 'Chili Cook-Off 2024',
    photos: [
      { id: 170330810, filename: '2024 Best Beer with Chili.JPG', caption: 'Best Beer with Chili' },
      { id: 170330809, filename: '2024 Chil Winners.JPG', caption: 'Chili winners' },
      { id: 170330035, filename: '2024 Chili Cook Off Yard.jpg', caption: 'Chili Cook-Off yard' },
      { id: 170330014, filename: '2024 Chili Cook off table.jpg', caption: 'Chili Cook-Off table' },
      { id: 170330012, filename: '2024 Scrawl at Chili Cook Off.jpg', caption: 'Scrawl at Chili Cook-Off' },
      { id: 170330011, filename: '2024 Chili Cook off-listening to band.jpg', caption: 'Listening to the band' },
      { id: 170330008, filename: '2024 Chili Cook Off.jpg', caption: 'Chili Cook-Off' },
    ],
  },
  {
    label: 'March 2024',
    photos: [
      { id: 168951294, filename: 'March 2024 meeting-2.jpg', caption: 'Meeting' },
      { id: 168951293, filename: 'March 2024 meeting.jpg', caption: 'Meeting' },
      { id: 168951292, filename: 'March 2024 Judging Stouts .jpg', caption: 'Judging stouts' },
      { id: 168951291, filename: 'March 2024 Education.jpg', caption: 'Education session' },
    ],
  },
  {
    label: 'Jambeeree 2024',
    photos: [
      { id: 167918527, filename: 'Jambeeree 2024.jpg', caption: 'Jambeeree 2024' },
      { id: 167918521, filename: 'Jambeeree tasting beers 2024.jpg', caption: 'Tasting beers' },
      { id: 167918520, filename: 'Jambeeree food tasting 2024.jpg', caption: 'Food tasting' },
    ],
  },
  {
    label: 'January 2024',
    photos: [
      { id: 167034669, filename: 'Jan 2024learning to judge with SOFB beers.jpg', caption: 'Learning to judge with SOFB beers' },
      { id: 167034667, filename: 'Jan 2024 meeting with BADASS.jpg', caption: 'Meeting with BADASS' },
      { id: 167034665, filename: 'Jan 2024 meeting with BADASS 2.jpg', caption: 'Meeting with BADASS' },
      { id: 167034664, filename: '2024 Jan meeting announcements.jpg', caption: 'Meeting announcements' },
      { id: 166956128, filename: 'Happy 75th Pops.jpg', caption: 'Happy 75th Pops!' },
      { id: 166956127, filename: 'flying.jpg' },
    ],
  },
  {
    label: 'December 2023',
    photos: [
      { id: 166417102, filename: 'Dec 2023 Contest Winners.jpg', caption: 'Contest winners' },
      { id: 166417101, filename: 'Dec 2023 Food and conversation.jpg', caption: 'Food and conversation' },
      { id: 166417100, filename: 'Dec 2023 Holiday Buffet.jpg', caption: 'Holiday buffet' },
      { id: 166417099, filename: 'Dec 2023 Sitting Around the table.jpg', caption: 'Sitting around the table' },
    ],
  },
  {
    label: 'Real Ale Festival 2023',
    photos: [
      { id: 165850714, filename: 'Tom and Bill with beer engines 2023.jpg', caption: 'Tom and Bill with beer engines' },
      { id: 165850713, filename: 'Winners relale 2023.jpg', caption: 'Winners' },
      { id: 165850712, filename: 'Pins at realale 2023.jpg', caption: 'Pins' },
      { id: 165850711, filename: 'More back yard realale 2023.jpg', caption: 'Back yard' },
      { id: 165850584, filename: 'Judging at Real Ale 2023.jpg', caption: 'Judging' },
      { id: 165850583, filename: 'front porch at realale 2023.jpg', caption: 'Front porch' },
      { id: 165850582, filename: 'education realale 2023.JPG', caption: 'Education session' },
      { id: 165850579, filename: 'downstairs judging at realale 2023.jpg', caption: 'Downstairs judging' },
      { id: 165850578, filename: 'best of show realale2023.jpg', caption: 'Best of Show' },
      { id: 165850577, filename: 'Beer engines 2023.jpg', caption: 'Beer engines' },
      { id: 165850576, filename: 'back yard realale 2023.jpg', caption: 'Back yard' },
    ],
  },
  {
    label: 'Oktoberfest 2023',
    photos: [
      { id: 165208676, filename: 'Winners of Oktoberfest beer competition2023.jpg', caption: 'Beer competition winners' },
      { id: 165208674, filename: 'Winers of Beer ID- cot 2023.jpg', caption: 'Beer ID winners' },
      { id: 165208669, filename: 'Some of the beers on tap-oct2023.jpg', caption: 'Beers on tap' },
      { id: 165208668, filename: 'October Gathering2023.jpg', caption: 'October gathering' },
      { id: 165207042, filename: 'Settle Inn 2023.jpg', caption: 'Settle Inn' },
      { id: 164637755, filename: 'education Oktoberfest.jpg', caption: 'Education session' },
      { id: 164637717, filename: 'Mike and Mindy Oktoberfest.jpg', caption: 'Mike and Mindy' },
      { id: 164637703, filename: 'more Oktoberfest.jpg', caption: 'More Oktoberfest' },
      { id: 164637701, filename: 'My what a BIG pretzel you have....jpg', caption: 'My, what a big pretzel you have!' },
      { id: 164637560, filename: 'Beer engines at real ale.jpg', caption: 'Beer engines' },
    ],
  },
  {
    label: 'Pool Party – July 2023',
    photos: [
      { id: 163234005, filename: 'Talking at Pool Party July 2023.jpg', caption: 'Conversation at the pool party' },
      { id: 163234003, filename: 'Pool Party july 2023.jpg', caption: 'Pool party' },
      { id: 163234002, filename: 'More talking at pool party July 20203.jpg', caption: 'More conversation' },
      { id: 163234001, filename: 'More Beer Tasting July 2023.jpg', caption: 'More beer tasting' },
      { id: 163234000, filename: 'Jim Busch with 3rd place medal July 2023.jpg', caption: 'Jim Busch with 3rd place medal' },
      { id: 163233999, filename: 'Beer Tasting July 2023.jpg', caption: 'Beer tasting' },
      { id: 163233998, filename: 'Andrew receiving medal July 2023.jpg', caption: 'Andrew receiving medal' },
      { id: 163233997, filename: 'Andrew receiving 1st place medal July 2023.jpg', caption: 'Andrew receiving 1st place medal' },
      { id: 163233996, filename: 'Andrew reading medal July 2023.jpg', caption: 'Andrew reading medal' },
      { id: 163233995, filename: 'Andrew displaying both medals July 2023.jpg', caption: 'Andrew displaying both medals' },
      { id: 163233993, filename: 'Andrew and Jim discussing recipe July 2023.jpg', caption: 'Andrew and Jim discussing recipe' },
      { id: 163233992, filename: 'Andrew and Greg relaxing in pool July 2023.jpg', caption: 'Andrew and Greg relaxing in pool' },
      { id: 163233991, filename: 'Andrew and Dan with medal July 2023.jpg', caption: 'Andrew and Dan with medal' },
      { id: 163233988, filename: 'Andrew 2nd Place July 2023.jpg', caption: 'Andrew – 2nd Place' },
    ],
  },
  {
    label: 'BURPOUT 2023',
    photos: [
      { id: 162800654, filename: 'Burp Out Pic.JPG', caption: 'BURPOUT 2023' },
      { id: 162749447, filename: 'Another campfire BURPOUT2023.jpg', caption: 'Campfire' },
      { id: 162749433, filename: 'BURPOUT Campfire2023.jpg', caption: 'Campfire' },
      { id: 162749426, filename: 'BURPOUT cooking for Saturday dinner 2023.jpg', caption: 'Cooking for Saturday dinner' },
      { id: 162749419, filename: 'BURPOUT Canopies in a row2023.jpg', caption: 'Canopies in a row' },
      { id: 162749399, filename: 'BURPOUT Keg Row 2023.jpg', caption: 'Keg Row' },
      { id: 162749395, filename: 'Camping at BURPOUT2023.jpg', caption: 'Camping' },
      { id: 161788622, filename: 'Burpout Dinner.jpg', caption: 'BURPOUT dinner' },
    ],
  },
  {
    label: 'Chili Cook-Off 2023 & SOFB',
    photos: [
      { id: 161846027, filename: '2023 Spirit of Free Beer Announcements.jpg', caption: 'Spirit of Free Beer announcements' },
      { id: 161846021, filename: '2023 Beer with Chili Winners.jpg', caption: 'Beer with Chili winners' },
      { id: 161846019, filename: '2023 Chili Cook Off winners.jpg', caption: 'Chili Cook-Off winners' },
      { id: 161846015, filename: '2023 Chili Cookoff 1.jpg', caption: 'Chili Cook-Off' },
    ],
  },
  {
    label: 'Scotland Trip 2023',
    photos: [
      { id: 161801712, filename: 'Ardgour Visit.jpg', caption: 'Bill & Wendy with Fergus Stokes, owner and brewer at Ardgour Ales in Scotland' },
      { id: 161788703, filename: 'Knoydart-2.JPG', caption: 'The Seven Men – a refreshing session pale ale enjoyed on our hike through the gorge to Steall Falls' },
      { id: 161788700, filename: 'Ardgour-4.jpg', caption: 'Prize-winning dry stout from Ardgour Ales in Scotland ("fat goat" in Gaelic)' },
      { id: 161788697, filename: 'Ardgour-2.jpg', caption: 'Prize-winning dry stout from Ardgour Ales in Scotland ("fat goat" in Gaelic)' },
    ],
  },
  {
    label: 'April 2023',
    photos: [
      { id: 161325045, filename: 'April Meeting 2023 colleen wendy Hilary.jpeg', caption: 'Colleen, Wendy & Hilary – rain at the April 2023 meeting' },
      { id: 161325044, filename: 'April 2023 Bob-Kathleen W.jpeg', caption: 'Beginning of the April 2023 meeting' },
      { id: 161325042, filename: 'April 2023 Matt P Greg M.jpeg', caption: 'Matt P. & Greg M. – rain at the April meeting' },
    ],
  },
  {
    label: 'BURPOUT 2022',
    photos: [
      { id: 159667920, filename: 'BURPOUT 2022.JPG', caption: 'BURPOUT 2022' },
    ],
  },
  {
    label: 'Historical',
    photos: [
      { id: 165207016, filename: 'Bruce Williams 1992.jpg', caption: 'Bruce Williams, 1992' },
    ],
  },
];

export const allPhotos: (Photo & { thumbnailUrl: string })[] = photoGroups.flatMap(g =>
  g.photos.map(p => ({ ...p, thumbnailUrl: t(p.filename) }))
);
