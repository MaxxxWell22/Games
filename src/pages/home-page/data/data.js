 const GAMES = [
  {
      background: 'https://images5.alphacoders.com/115/thumb-1920-1151708.jpg',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1668017884',
      title: 'Forza Horizon 5',
      genres: ['Гонки', 'Симулятор', 'Открытый мир'],
      price: 2343,
      video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
      id: 1,
      description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории.",
  },
  {
      background: 'https://pbs.twimg.com/media/E3tFPMGX0AML4O5.jpg',
      image: 'https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72',
      title: 'Battlefield 2042',
      genres: ['Экшен', 'Шутер', 'Война'],
      video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
      price: 2433,
      id: 2,
      description: 'Battlefield™ 2042 — это шутер от первого лица. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду.'
  },
  {
      background: 'https://images.alphacoders.com/115/thumb-1920-1152016.jpg',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202103/1012/MrFkXNqIim5naTegtJuGDTEb.png',
      title: 'Life is Strange True Colors',
      genres: ['Глубокий сюжет', 'Протагонистка'],
      video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
      price: 3021,
      id: 3,
      description: 'Алекс Чэнь от всех скрывает своё «проклятие» — способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает, Алекс использует её, чтобы узнать правду.'
  },
  {
      image: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg',
      title: 'Grand Theft Auto V',
      genres: ['Открытый мир', 'Экшен'],
      video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
      price: 789,
      id: 4,
      description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1670857612',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      video: 'https://www.youtube.com/embed/6wlvYh0h63k',
      genres: ['Тактика', 'Шутер'],
      price: 982,
      id: 5,
      description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
      image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/UK_ACV_DELUXE%20_EPIC_Store%20Landscape_2560x1440%20_2560x1440-0585cdaf65bee5ffce91881220ade66b',
      title: 'Assassin’s Creed Valhalla',
      genres: ['Паркур', 'РПГ', 'Открытый мир'],
      video: 'https://www.youtube.com/embed/ssrNcwxALS4',
      price: 2863,
      id: 6,
      description: 'Assassin’s Creed Valhalla — игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
      image: 'https://assets.reedpopcdn.com/Stray-Header.jpeg/BROK/thumbnail/1600x900/quality/100/Stray-Header.jpeg',
      title: 'Stray',
      genres: ['Приключения', 'Головоломка'],
      video: 'https://www.youtube.com/embed/kJawWyRUOBM',
      price: 1845,
      id: 7,
      description: 'Stray – приключенческая игра от третьего лица, действие которой разворачивается на неоновых улочках и в угрюмых, грязных подворотнях гибнущего кибергорода.'
  },
  {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/S7McgSEkos0RTjOxYG1pXmXM.jpg',
      title: 'God Of War Ragnarok',
      genres: ['Экшен', 'Приключения'],
      video: 'https://www.youtube.com/embed/EE-4GvjKcfs',
      price: 1675,
      id: 8,
      description: 'God Of War Ragnarok — это зрелищный экшен с видом от третьего лица, который продолжит историю последней части, в которой вас ждёт ещё более постаревший бог войны Кратос.'
  },
  {
      image: 'https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg',
      title: 'Elden Ring',
      genres: ['Экшен', 'РПГ'],
      video: 'https://www.youtube.com/embed/E3Huy2cdih0',
      price: 1845,
      id: 9,
      description: 'Elden Ring — игра с открытым миром; Этот открытый мир содержит различные опасности и области, которые можно исследовать, в том числе многоуровневые замки с запутанной планировкой.'
  },
  {
      image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale2_2560x1440-f5840bd8286204cb20ae573e160c29f3',
      title: 'A Plague Tale: Requiem',
      genres: ['Головоломка', 'Шутер'],
      video: 'https://www.youtube.com/embed/qIbzwb8vzNI',
      price: 2250,
      id: 10,
      description: 'A Plague Tale: Requiem - это приключенческая игра в сеттинге средневековой Европы. Вам предстоит помочь девушке Амиции и ее брату выжить в мире, раздираемом эпидемиями и войнами. '
  },
  {
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/368260/capsule_616x353.jpg?t=1654815570',
      title: 'Marvel’s Midnight Suns',
      genres: ['Тактическая игра', 'Приключенческая игра'],
      video: 'https://www.youtube.com/embed/WVZTsTXO3Nk',
      price: 2050,
      id: 11,
      description: 'Marvel\'s Midnight Suns — это кроссоверная игра, кастомизацию и прогресс RPG с тактической стратегией и боевой механикой революционно новой тактической игры на карте.'
  },
  {
      image: 'https://i.ytimg.com/vi/ZMLk9-tZ-_A/maxresdefault.jpg',
      title: 'Monster Hunter Rise',
      genres: ['Файтинг', 'Action/RPG', 'Шутер'],
      video: 'https://www.youtube.com/embed/TdCec2GRg-w',
      price: 1675,
      id: 12,
      description: 'Monster Hunter Rise - это игра из серии Monster Hunter. Игроков ждет путешествие в мир, полный монстров, в который можно взять нового для серии компаньона - собаку - который служит еще и транспортным средством.'
  },
  {
      image: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
      title: 'Red Dead Redemption 2',
      genres: ['Открытый мир', 'Развлечение'],
      video: 'https://www.youtube.com/embed/eaW0tYpxyp0',
      price: 2375,
      id: 13,
      description: 'Red Dead Redemption 2 представляет собой игру в жанре action-adventure с открытым миром; игрок управляет одним персонажем с возможностью переключения камеры на вид от первого или от третьего лица по своему выбору.'
  },
  {
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/capsule_616x353.jpg?t=1572306963',
      title: 'Hollow Knight: Silksong',
      genres: ['Метроидвания', 'Инди-игра', 'Файтинг'],
      video: 'https://www.youtube.com/embed/yQxwbZsL14Y',
      price: 1475,
      id: 14,
      description: 'Hollow Knight: Silksong - это дополнение для хардкорного платформера Hollow Knight,про историю девушки по имени Хорнет. Она отправляется в совершенно новое королевство, в котором «правят музыка и шелк».'
  },
  {
      image: 'https://www.gameinformer.com/sites/default/files/styles/full/public/2022/08/23/41e242a6/dikeyart.jpg',
      title: 'Dead Island 2',
      genres: ['Шутер', 'Приключенческая', 'Survival'],
      video: 'https://www.youtube.com/embed/AWFaj4IQ4ro',
      price: 1775,
      id: 15,
      description: 'Dead Island 2 — это cиквел экшена про выживание среди зомби, действие которого разворачивается в инфицированной Калифорнии, которая оцеплена войсками США.'
  }
]

export {GAMES}