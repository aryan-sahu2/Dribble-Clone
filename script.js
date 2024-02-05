  const cardData = [
    {
        name: 'Alice Johnson',
        title: 'UX/UI Designer',
        imgSrc: 'https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=436x543&vertical=center',
        tags: ['Web Design', 'User Experience']
    },
    {
      name: 'Emma Turner',
      title: 'Brand Strategist',
      imgSrc: 'https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=273x340&vertical=center',
      tags: ['Brand Development', 'Market Analysis']
    },
    {
      name: 'Jackson Lee',
      title: 'Digital Illustrator',
      vidSrc: 'https://vod-progressive.akamaized.net/exp=1706279151~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4252%2F22%2F571262335%2F2699860838.mp4~hmac=7a42d7d348e90b58f2dd2cbffecb6b0668d44879bdb609d761c7701c1ba10627/vimeo-prod-skyfire-std-us/01/4252/22/571262335/2699860838.mp4',
      tags: ['Digital Painting', 'Character Design']
    },
    {
      name: 'Vladimir Gruev',
      title: 'Graphic Designer',
      imgSrc: 'https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=273x340&vertical=center',
      tags: ['Print Design', 'Illustration']
    },
    {
      name: 'Daniele Buffa',
      title: 'Art Director',
      vidSrc: 'https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373',
      tags: ['Creative Direction', 'Visual Arts']
    },
    {
      name: 'Sophia White',
      title: 'Art Director',
      imgSrc: 'https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=436x543&vertical=center',
      tags: ['Creative Direction', 'Artistic Strategy']
    },
    {
      name: 'Henry Taylor',
      title: 'Web Developer',
      imgSrc: 'https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=273x340&vertical=center',
      tags: ['Front-end Development', 'Responsive Design']
    },
    {
      name: 'Isabella Rodriguez',
      title: 'Digital Marketing Specialist',
      imgSrc: 'https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=273x340&vertical=center',
      tags: ['Social Media Marketing', 'Content Strategy']
    },
    {
      name: 'Liam Turner',
      title: 'UX Researcher',
      imgSrc: 'https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=273x340&vertical=center',
      tags: ['Usability Testing', 'User Research']
    },
    {
      name: 'Emma Vir',
      title: 'Brand Strategist',
      imgSrc: 'https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=273x340&vertical=center',
      tags: ['Brand Development', 'Market Analysis']
    },
    {
      name: 'Jackson Lee',
      title: 'Digital Illustrator',
      imgSrc: 'https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=273x340&vertical=center',
      tags: ['Digital Painting', 'Character Design']
    },
  ];

  const boxData = [
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12544344/file/original-1f4035bc4b526573b3b943abd2f2b3cb.png?resize=640x480&vertical=center',
      caption: 'Zeus Illustration',
      authorLogoSrc: 'https://cdn.dribbble.com/users/942818/avatars/small/9096c3b0180d0dfedf0a9fefecc30e9b.jpg?1537187146',
      authorName: 'Hellsjells',
      likeNumber: '198',
      isPro: true,
      viewNumber: '56.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12623252/file/original-a244986587da0caf5bc6425f7a3ac8b0.jpg?resize=640x480&vertical=center',
      caption: 'Some goat in a church',
      authorLogoSrc: 'https://cdn.dribbble.com/users/42659/avatars/small/729d1b0be99397dcecf5330727e18fb4.png?1565080316',
      authorName: 'Peter Voth',
      likeNumber: '140',
      isPro: false,
      viewNumber: '32.2k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12529315/file/original-ac89e6e663f84c85873e2203fa5f61be.jpg?crop=0x2-1333x1002&resize=640x480&vertical=center',
      caption: 'Past Lives',
      authorLogoSrc: 'https://cdn.dribbble.com/users/77553/avatars/small/_.jpg?1389134465',
      authorName: 'Sam Dunn',
      likeNumber: '169',
      isPro: false,
      viewNumber: '55.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12664717/file/original-eef9b74077cc3125fe6c16f87cc649cc.jpg?crop=215x100-2377x1722&resize=640x480&vertical=center',
      caption: 'Shows I wish I went to #2',
      authorLogoSrc: 'https://cdn.dribbble.com/users/210795/avatars/small/e1a7554340cf87d0a791995933d2ace5.jpeg?1655854176',
      authorName: 'Sebbastian Abboud',
      likeNumber: '39',
      isPro: true,
      viewNumber: '4.1k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12606723/file/original-c9b710930ca7eda7c156af3b3f61a8a4.png?resize=640x480&vertical=center',
      caption: 'Limited Edition Pt. ll',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1247975/avatars/small/7b9a3bf4fda1996d6e9536ade6d949b6.png?1576617778',
      authorName: 'Damian Orellana',
      likeNumber: '98',
      isPro: true,
      viewNumber: '32.5k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12568133/file/original-b5e19805df0bf8d7b7691cf3cc1e36d4.gif',
      caption: 'Chiefs PlayOff Football',
      authorLogoSrc: 'https://cdn.dribbble.com/users/274743/avatars/small/d34f8ad5badcc2c0d50ec9677ecaa63e.jpg?1544810202',
      authorName: 'Alex Anderson',
      likeNumber: '192',
      isPro: false,
      viewNumber: '51k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12654807/file/original-32f355411cb9558f0ac77ab0547255d8.jpg?resize=640x480&vertical=center',
      caption: 'Yoga',
      authorLogoSrc: 'https://cdn.dribbble.com/users/2196582/avatars/small/ba824c7530b3cfe68df1b85be37c539a.jpg?1637830985',
      authorName: 'Kopirin',
      likeNumber: '146',
      isPro: true,
      viewNumber: '23.1k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12645350/file/original-df964776e74a551d4678fed4048bd1da.jpg?resize=640x480&vertical=center',
      caption: 'The Sounds Of Spring',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1193653/avatars/small/6a14bb6ab8e3c7c2122d0af8271a7d4e.png?1674630416',
      authorName: 'Jordan Wilson',
      likeNumber: '122',
      isPro: true,
      viewNumber: '18.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12604447/file/original-200d5d9fac56ed748042617f9c182d82.jpg?crop=102x0-1542x1080&resize=640x480&vertical=center',
      caption: 'Characters for the new mushroom brand',
      authorLogoSrc: 'https://cdn.dribbble.com/users/3113663/avatars/small/dcbf1db5e3d7b105ddad162aec88279d.jpg?1671115528',
      authorName: 'OVCHARKA INDUSTRIES',
      likeNumber: '152',
      isPro: true,
      viewNumber: '39.2k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12630797/file/original-b47525fb77363f2ded68bde203ffa02d.jpg?resize=640x480&vertical=center',
      caption: 'Chiefs Travel Netherlands Icons',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1322388/avatars/small/3dee634693824f6d71252f8d56bc917d.jpg?1609764965',
      authorName: 'Alex Krugli',
      likeNumber: '120',
      isPro: true,
      viewNumber: '26.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12587016/file/original-4fb360069cbc53b132e7e24e68c37a96.png?resize=640x480&vertical=center',
      caption: 'Back to the Future',
      authorLogoSrc: 'https://cdn.dribbble.com/users/15687/avatars/small/3c467725100c037f0781f583af65a2dd.jpg?1515580842',
      authorName: 'Roman Klco',
      likeNumber: '168',
      isPro: true,
      viewNumber: '55.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12660842/file/original-662a081a780531f55b9d8aa7c9c33eaa.png?resize=640x480&vertical=center',
      caption: 'Travel and Monument Icons',
      authorLogoSrc: 'https://cdn.dribbble.com/users/472667/avatars/small/bf4ef6a50b3a0b8f1c4e3d56bbe4cac1.jpg?1681254858',
      authorName: 'Ramy Wafaa',
      likeNumber: '68',
      isPro: true,
      viewNumber: '7.3k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12555421/file/original-c24a7723bf3967fb739d99b300f961c0.png?resize=640x480&vertical=center',
      caption:"'You're not Crazy-Rework",
      authorLogoSrc: 'https://cdn.dribbble.com/users/1037/avatars/small/845ff4b0089438c6518f392d59f55b1f.png?1673276678',
      authorName: 'Rik Catlow',
      likeNumber: '141',
      isPro: true,
      viewNumber: '53.5k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12684044/file/original-e782c45d2bd0e4632a88bafb1e206f0e.png?crop=0x0-1600x1200&resize=640x480&vertical=center',
      caption: 'Little Train (Part 1)',
      authorLogoSrc: 'https://cdn.dribbble.com/users/466099/avatars/small/e5fe943c06b5c5a5eea23ac6aabc4ff9.png?1636156687',
      authorName: 'Gaspart',
      likeNumber: '31',
      isPro: true,
      viewNumber: '4.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12643772/file/still-a258bbef171d736b3604391d2268b491.png?resize=640x480&vertical=center',
      caption: 'Oregon State Park Landscapes',
      authorLogoSrc: 'https://cdn.dribbble.com/users/620539/avatars/small/7e10348c1586341c57e15297f249a02a.jpg?1649354395',
      authorName: 'Erikas',
      likeNumber: '64',
      isPro: true,
      viewNumber: '12k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12610412/file/original-e5ad715cba181287621877178c4bb6c4.jpg?crop=0x31-1600x1231&resize=640x480&vertical=center',
      caption: 'Berries',
      authorLogoSrc: 'https://cdn.dribbble.com/users/257123/avatars/small/7e95d7052f811c82d7acfa666644f032.jpg?1702985155',
      authorName: 'Kemal Sanli',
      likeNumber: '86',
      isPro: true,
      viewNumber: '22.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12622359/file/original-c0f8e3e68413a8a7a05131d102073ee1.jpg?crop=0x0-808x606&resize=640x480&vertical=center',
      caption: 'Patagonia (Store Mural)',
      authorLogoSrc: 'https://cdn.dribbble.com/users/47000/avatars/small/1525224_680808335275224_974015795_n.jpg?1390912914',
      authorName: 'Pavlov Visuals',
      likeNumber: '246',
      isPro: true,
      viewNumber: '38.1k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12569469/file/original-de0700a6c188b05cc72e849aa26a26d5.jpg?resize=640x480&vertical=center',
      caption: 'Glyph beer 26',
      authorLogoSrc: 'https://cdn.dribbble.com/users/544452/avatars/small/17a0e71107b92034348c54475349786c.jpg?1693955518',
      authorName: 'Ethan Fender',
      likeNumber: '133',
      isPro: true,
      viewNumber: '29.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12508175/file/original-0e6d76ccf61c12ca4a193e248215d804.png?resize=640x480&vertical=center',
      caption: 'Generate websites for free',
      authorLogoSrc: 'https://cdn.dribbble.com/users/2142885/avatars/small/70c3740cb74a239f8ce4673579bed939.png?1694116934',
      authorName: 'Umso',
      likeNumber: '31',
      isPro: true,
      viewNumber: '4.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12067422/file/original-51e29171c9abe410d2a84f9f41e4a345.jpg?crop=45x83-1962x1521&resize=640x480&vertical=center',
      caption: 'Mushrooms',
      authorLogoSrc: 'https://cdn.dribbble.com/users/730703/avatars/small/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
      authorName: 'Folio  Illustration Agnecy',
      likeNumber: '103',
      isPro: true,
      viewNumber: '19.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12067422/file/original-51e29171c9abe410d2a84f9f41e4a345.jpg?crop=45x83-1962x1521&resize=640x480&vertical=center',
      caption: 'Mushrooms',
      authorLogoSrc: 'https://cdn.dribbble.com/users/730703/avatars/small/eee24de7146f290f73f64ef9373cf0a5.jpg?1536163934',
      authorName: 'Folio  Illustration Agnecy',
      likeNumber: '103',
      isPro: true,
      viewNumber: '19.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/11972310/file/original-276cf5e95d09c15b0bed474499e2f933.jpg?resize=640x480&vertical=center',
      caption: 'Landscape',
      authorLogoSrc: 'https://cdn.dribbble.com/users/650400/avatars/small/954de9ba6f51ddfc7224a81acc418dde.jpg?1662442308',
      authorName: 'Isaac LeFever',
      likeNumber: '117',
      isPro: true,
      viewNumber: '29.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12595034/file/original-4c33378bf89f8ed9b625d9115f373626.png?resize=640x480&vertical=center',
      caption: 'Trsce branding design',
      authorLogoSrc: 'https://cdn.dribbble.com/users/3020225/avatars/small/dca621eb9a63cba93a93bb0105958185.png?1579079964',
      authorName: 'Maracato Studio',
      likeNumber: '113',
      isPro: true,
      viewNumber: '39.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12570024/file/original-9b82d9dbd70f197aba46c4d214adc366.png?resize=640x480&vertical=center',
      caption: 'Things',
      authorLogoSrc: 'https://cdn.dribbble.com/users/130631/avatars/small/901e10c588ecc352b6ff2aac13398b7b.png?1672247809',
      authorName: 'Kevin Moran',
      likeNumber: '151',
      isPro: true,
      viewNumber: '32.5k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12545100/file/still-d43919311450e58aa288487afaefc29f.png?resize=640x480&vertical=center',
      caption: 'Knucks ©24 - Screens',
      authorLogoSrc: 'https://cdn.dribbble.com/users/141098/avatars/small/25daaa66aa8cdedc82b439a55808621c.png?1669381478',
      authorName: 'Unseen Studio',
      likeNumber: '324',
      isPro: true,
      viewNumber: '80.4k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12551148/file/original-9a99b17bff26e50b231274a7c84672b0.jpg?resize=640x480&vertical=center',
      caption: 'Ope Camp Flag',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1948587/avatars/small/90301769cbfbbf2c991cc21ba7506c44.jpg?1515420782',
      authorName: 'Joe Hansen',
      likeNumber: '140',
      isPro: true,
      viewNumber: '63k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12664085/file/original-0a9c7406360142c99d52d84f3bb99d0d.png?resize=640x480&vertical=center',
      caption: 'Morning Commute',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1738394/avatars/small/2c007a7692990a4f1ec1d2542453b778.png?1536613412',
      authorName: 'Spencer Gabor',
      likeNumber: '65',
      isPro: true,
      viewNumber: '7.3k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12475995/file/original-1bc2b890201f0026e8ee4834cbed2fb3.jpg?resize=640x480&vertical=center',
      caption: 'Flora',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1629266/avatars/small/542236023d877a5b38e351ece1530f1d.jpg?1701344489',
      authorName: 'Mary Maka',
      likeNumber: '245',
      isPro: true,
      viewNumber: '70.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12662430/file/original-3516aee0ee2c745d000fd35512545d11.jpg?resize=640x480&vertical=center',
      caption: 'Ammons Poems Website',
      authorLogoSrc: 'https://cdn.dribbble.com/users/418188/avatars/small/427ef1baf4b90c9ccdd2a25fa272fe73.jpg?1635929741',
      authorName: 'tubik',
      likeNumber: '122',
      isPro: true,
      viewNumber: '12.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12662105/file/original-123b074356491c7901de62ef810f0f07.jpg?resize=640x480&vertical=center',
      caption: 'MEISENPRESS Halftone Processing Kit',
      authorLogoSrc: 'https://cdn.dribbble.com/users/23569/avatars/small/7ab7b6277a4b2df87ed3a557678e6882.jpg?1503318755',
      authorName: 'Emir Ayouni',
      likeNumber: '115',
      isPro: true,
      viewNumber: '15.4k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12575734/file/original-c715e518f1a7f428e3f7edd1e447edb4.jpg?resize=640x480&vertical=center',
      caption: 'PATCH DESIGN FOR NOAH KAHAK 2024',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1849724/avatars/small/3433a71450b268d083555f80df8f4679.jpg?1649210828',
      authorName: 'cmpt_rules',
      likeNumber: '103',
      isPro: true,
      viewNumber: '40.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12497749/file/original-e3c570245c50212f6fb73c213dd9e3b0.png?crop=0x2-1080x812&resize=640x480&vertical=center',
      caption: "Don't be so hard on yourself",
      authorLogoSrc: 'https://cdn.dribbble.com/users/488314/avatars/small/53daa2516579204895c83255932f63e6.png?1605170548',
      authorName: 'EniSaurus',
      likeNumber: '250',
      isPro: true,
      viewNumber: '74.2k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12645779/file/original-abab66ecf014bd1ad90d52fd06ec4ffb.jpg?resize=640x480&vertical=center',
      caption: 'Box Top Concept - Which do you prefer?',
      authorLogoSrc: 'https://cdn.dribbble.com/users/11431/avatars/small/52e67e2a8800a39e9480836edc908990.jpg?1530628781',
      authorName: 'Ross Bruggink',
      likeNumber: '92',
      isPro: true,
      viewNumber: '20.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12570069/file/original-1d99cc4076a80deafc8d293de6385f6e.png?resize=640x480&vertical=center',
      caption: 'Wonka Playing Cards (Faces)',
      authorLogoSrc: 'https://cdn.dribbble.com/users/42659/avatars/small/729d1b0be99397dcecf5330727e18fb4.png?1565080316',
      authorName: 'Peter Voth',
      likeNumber: '177',
      isPro: true,
      viewNumber: '49.2k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12470993/file/original-a2eb1877ffe44616c2372062494882e2.jpg?resize=640x480&vertical=center',
      caption: 'Creative Stickers',
      authorLogoSrc: 'https://cdn.dribbble.com/users/508142/avatars/small/1cffa29a3f16e934e3b310ce18ad2c6d.jpg?1696372002',
      authorName: 'Tyler Pate',
      likeNumber: '174',
      isPro: true,
      viewNumber: '57.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12620228/file/original-835c85e0838b15d42bfe8da51198f821.png?resize=640x480&vertical=center',
      caption: 'TG Sponsored Post',
      authorLogoSrc: 'https://cdn.dribbble.com/users/210795/avatars/small/e1a7554340cf87d0a791995933d2ace5.jpeg?1655854176',
      authorName: 'Sebastian Abboud',
      likeNumber: '97',
      isPro: true,
      viewNumber: '27.6k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12640640/file/original-4e17b118eea26ac9e8d25e3ad7b8518f.jpg?crop=0x99-2000x1599&resize=640x480&vertical=center',
      caption: 'Tarrot Card #05: The Heirophant',
      authorLogoSrc: 'https://cdn.dribbble.com/users/3562273/avatars/small/8a3da46c0d5e9f93f40d01d8a5304201.jpg?1670151570',
      authorName: 'Angie Mathot',
      likeNumber: '106',
      isPro: true,
      viewNumber: '24.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12660441/file/original-ae16536e2db2b562f3ba795f6dca3707.png?resize=640x480&vertical=center',
      caption: 'BBC SCIENCE FOCUS QUIZ',
      authorLogoSrc: 'https://cdn.dribbble.com/users/94598/avatars/small/9f0e85a60a6a572cb69e700121b90d3f.jpg?1418705475',
      authorName: 'James Olstien',
      likeNumber: '35',
      isPro: true,
      viewNumber: '10.1k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12582905/file/original-2d887b287d58e101c80e2c5fb05a39cf.jpg?crop=0x697-2048x2233&resize=640x480&vertical=center',
      caption: 'Weird',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1008875/avatars/small/0a1ed5e8cf9a5b66164b7acf40834aff.jpg?1694886369',
      authorName: 'Razvan Vezetu',
      likeNumber: '177',
      isPro: true,
      viewNumber: '36.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12553339/file/original-00898bed2ea638c2998f85441e4ec034.jpg?resize=640x480&vertical=center',
      caption: 'Mr. Burns Devouring His Smithers',
      authorLogoSrc: 'https://cdn.dribbble.com/users/716122/avatars/small/771451c0bb7d81445652734f78b91adf.jpeg?1669522381',
      authorName: 'Mick Champayne 🍾',
      likeNumber: '226',
      isPro: true,
      viewNumber: '66.8k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12652794/file/original-894f3695b966ec09fb2e3b91013c9a54.png?resize=640x480&vertical=center',
      caption: 'Geometric Boy Logo',
      authorLogoSrc: 'https://cdn.dribbble.com/users/677572/avatars/small/cd94b72f04f84b0dcf1c1ee3f6bdf2b9.png?1634627780',
      authorName: 'Lucian Radu',
      likeNumber: '147',
      isPro: true,
      viewNumber: '21.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12567472/file/original-10960de57317fb2ab0f5d46c1201268f.png?resize=640x480&vertical=center',
      caption: 'The Mokes',
      authorLogoSrc: 'https://cdn.dribbble.com/users/752561/avatars/small/67da8800e10557842605d67141eec36c.jpg?1529089518',
      authorName: 'Jay Master',
      likeNumber: '176',
      isPro: true,
      viewNumber: '58.9k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12641372/file/original-210a8cd9e6fe7ad7e6b02d0f754740f1.gif',
      caption: 'Smalltribute About Page',
      authorLogoSrc: 'https://cdn.dribbble.com/users/27547/avatars/small/4fcd4e590875971421a29752885ed604.jpg?1493839816',
      authorName: 'Gil',
      likeNumber: '187',
      isPro: true,
      viewNumber: '24.3k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12507109/file/original-d547243eb0a6d32914fd50a02f1347e5.png?resize=640x480&vertical=center',
      caption: 'Juicy Bonus',
      authorLogoSrc: 'https://cdn.dribbble.com/users/127057/avatars/small/9aa05a0a1032448b8cf0fb07acbcecc7.png?1476347702',
      authorName: 'ForSureLetters',
      likeNumber: '166',
      isPro: true,
      viewNumber: '56.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12197499/file/original-b29288332c7d14001e934ec9f4c8a20b.jpg?resize=640x480&vertical=center',
      caption: 'Ode to Farm',
      authorLogoSrc: 'https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024',
      authorName: 'Coric Design',
      likeNumber: '97',
      isPro: true,
      viewNumber: '21.7k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12493833/file/original-abdd3f47b38534254f3a9bf4cc88f4dc.jpg?resize=640x480&vertical=center',
      caption: 'Sandman',
      authorLogoSrc: 'https://cdn.dribbble.com/users/1322388/avatars/small/3dee634693824f6d71252f8d56bc917d.jpg?1609764965',
      authorName: 'Alex Krugli',
      likeNumber: '152',
      isPro: true,
      viewNumber: '75.4k'
    },
    {
      imgSrc: 'https://cdn.dribbble.com/userupload/12531691/file/original-cd06f020b88b2601874f8defb5f7fba1.png?resize=640x480&vertical=center',
      caption: 'Oregon State Park Mini Scenes',
      authorLogoSrc: 'https://cdn.dribbble.com/users/620539/avatars/small/7e10348c1586341c57e15297f249a02a.jpg?1649354395',
      authorName: 'Erikas',
      likeNumber: '342',
      isPro: true,
      viewNumber: '81.7k'
    },
  ];

  const smallCardData=[
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12515159/file/original-4b98ea63a70345d6f0973f8292da1544.jpg?format=webp&resize=200x150&vertical=center',
      text:'Mobile',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12471582/file/original-c39497d70eb69e00063854a0ed6c60b2.png?crop=0x0-4000x3000&format=webp&resize=200x150&vertical=center',
      text:'Branding',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12653845/file/still-0c85154d131ca28f49b7bcd920b68071.png?format=webp&resize=200x150&vertical=center',
      text:'Web Design',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12361575/file/original-590066c4c9fde6cbdc4d96556ae5c9cc.png?format=webp&resize=200x150&vertical=center',
      text:'Typography',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12644952/file/original-095584d558e19a314f3f71f3cdf0ce12.jpg?format=webp&resize=200x150&vertical=center',
      text:'Print',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12516961/file/still-b2287de3122e74465a37a6cb2a001d55.png?format=webp&resize=200x150&vertical=center',
      text:'Product Design',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12671224/file/still-3560bafae42835bd9736653a94cfb3b0.png?format=webp&resize=200x150&vertical=center',
      text:'Animation',
    },
    {
      imgSrc:'https://cdn.dribbble.com/userupload/12569822/file/original-c57ebb47756f3d53de19346de2eabcac.jpg?format=webp&resize=200x150&vertical=center',
      text:'Illustration',
    },
  ]


  // <div class="elem">
  //  <img src="https://cdn.dribbble.com/userupload/12515159/file/original-4b98ea63a70345d6f0973f8292da1544.jpg?format=webp&resize=200x150&vertical=center" alt="">
  //  <div class="text">
  //  <p>Mobile</p>
  //  </div>
  // </div>


const bgColor = document.querySelector('#change-bgColor')
// Use a function to generate a random color
function getRandomColor() {
  const brightChannel = () => Math.floor(Math.random() * 128) + 128; // Adjust the range for brightness

  const red = brightChannel().toString(16);
  const green = brightChannel().toString(16);
  const blue = brightChannel().toString(16);
  // console.log(red, green,blue)
  return `#${red}${green}${blue}`;
}

bgColor.style.transition= `all ease 3s`;
  
setInterval(() => {
  bgColor.style.backgroundColor= getRandomColor();
}, 2000);


const smallCardSet= document.querySelectorAll('.card-set')
smallCardSet.forEach(cards=>{
  smallCardData.map((cardData)=>{
    const smallCardElement= document.createElement(`div`);
    smallCardElement.classList.add('elem');

    const content= `
    <img src="${cardData.imgSrc}" alt="">
    <div class="text">
      <p>${cardData.text}</p>
    </div>
    `

    smallCardElement.innerHTML=content;
    cards.appendChild(smallCardElement)
  })
})

const cardSets = document.querySelectorAll('#card-set');

cardSets.forEach(cards=>{
    cardData.map((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
      
        let mediaElement = '';
        if (card.imgSrc) {
          mediaElement = `<img src="${card.imgSrc}" alt="">`;
        } else if (card.vidSrc) {
          mediaElement = `<video autoplay loop muted src="${card.vidSrc}"></video>`;
        }
      
        const content = `
          ${mediaElement}
          <div class="card-content">
            <h5 class='name'>${card.name}</h5>
            <h6 class="title">${card.title}</h6>
            <div class="button-tags">
              ${card.tags.map(tag => `<button>${tag}</button>`).join('')}
            </div>
          </div>
        `;
      
        cardElement.innerHTML = content;
        cards.appendChild(cardElement);
    });
})

function appendBox(data) {
  const boxesDiv = document.getElementById('boxes-div');

  data.forEach(item => {
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');

    const renderIsProTag = item.isPro ? `<h5 class="isPro">PRO</h5>` : '';

    const content = `
      <div class="img-container">
        <img src="${item.imgSrc}" alt="">
        <div class="hover-caption">
          <h4>${item.caption}</h4>
          <div class="icon-set">
            <i class="ri-bookmark-line"></i>
            <i class="ri-heart-3-line"></i>
          </div>
        </div>
      </div>
      <div class="post-details">
        <div class="author">
          <img src="${item.authorLogoSrc}" alt="">
          <h5>${item.authorName}</h5>
          ${renderIsProTag}
        </div>
        <div class="post-performance">
          <div class="likes">
            <i class="ri-heart-3-fill"></i>
            <h6>${item.likeNumber}</h6>
          </div>
          <div class="views">
            <i class="ri-eye-line"></i>
            <h6>${item.viewNumber}</h6>
          </div>
        </div>
      </div>
    `;

    boxElement.innerHTML = content;
    boxesDiv.appendChild(boxElement);
  });
}

// Call the function with boxData
appendBox(boxData);

  