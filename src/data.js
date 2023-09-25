const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F68%2FTaj_Mahal%252C_Agra%252C_India.jpg&tbnid=xVpEUBg5v1MnYM&vet=12ahUKEwiC5P-UyMaBAxXHa2wGHd-rDh0QMygBegQIARB2..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAgra&docid=nK5Y7LwfeKAB_M&w=3840&h=2525&q=agra%20images&ved=2ahUKEwiC5P-UyMaBAxXHa2wGHd-rDh0QMygBegQIARB2",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F41%2FEast_facade_Hawa_Mahal_Jaipur_from_ground_level_%2528July_2022%2529_-_img_01.jpg&tbnid=iLkbzmF4yTE6PM&vet=12ahUKEwig_J_DyMaBAxV8SmwGHbrGCnoQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJaipur&docid=73Pw7QTkt7OtyM&w=3345&h=2509&q=jaipur%20images&ved=2ahUKEwig_J_DyMaBAxV8SmwGHbrGCnoQMygAegQIARB0",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbeach-goa-india-5393913.jpg&tbnid=L98SYzO4h1mIXM&vet=12ahUKEwjSzunfyMaBAxW7QmwGHTk3DYoQMygJegUIARCHAQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fgoa.html&docid=npkvnhS12ch9eM&w=800&h=532&q=goa%20images&ved=2ahUKEwjSzunfyMaBAxW7QmwGHTk3DYoQMygJegUIARCHAQ",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.in%2FTourism-g297685-Varanasi_Varanasi_District_Uttar_Pradesh-Vacations.html&psig=AOvVaw3A6eCgkMFiIl1bzkncNAB3&ust=1695759074528000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiU0_zIxoEDFQAAAAAdAAAAABAE",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F96%2FDarjeelingTrainFruitshop_%25282%2529.jpg%2F1200px-DarjeelingTrainFruitshop_%25282%2529.jpg&tbnid=D1xhtZ_LGITopM&vet=12ahUKEwiRkpOiycaBAxUsXmwGHS7SD7MQMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDarjeeling&docid=wY7hpQg_9EfdUM&w=1200&h=784&itg=1&q=darjeeling%20images&ved=2ahUKEwiRkpOiycaBAxUsXmwGHS7SD7MQMygDegQIARB6",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FFort_Jaisalmer_at_sunset.jpg&tbnid=WDKHn-6me8tLwM&vet=12ahUKEwjp7pG6ycaBAxWha2wGHZtWA48QMygGegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJaisalmer_Fort&docid=482KA2knihuL8M&w=2560&h=1920&q=jaisalmer%20images&ved=2ahUKEwjp7pG6ycaBAxWha2wGHZtWA48QMygGegUIARCAAQ",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599328431991-365a583f09f5%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8a29jaGl8ZW58MHx8MHx8fDA%253D%26w%3D1000%26q%3D80&tbnid=9JOrbmetvoKH0M&vet=12ahUKEwie7OTOycaBAxWDX2wGHfdXAnkQMygHegUIARCCAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fkochi&docid=AVaNPy3mEaCxLM&w=1000&h=1333&q=kochi%20images&ved=2ahUKEwie7OTOycaBAxWDX2wGHfdXAnkQMygHegUIARCCAQ",
		price: "68,595",
	},
];

export default data;
