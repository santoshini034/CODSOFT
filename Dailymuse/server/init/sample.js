const sample = [
    {
      "heading": "Exploring the Mountains",
      "image": "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-14",
      "Liked": 120,
      "information": "A thrilling journey through the rugged mountain trails.",
      "dtype": "travel"
    },
    {
      "heading": "Delicious Vegan Recipes",
      "image": "https://plus.unsplash.com/premium_photo-1664647731578-5dcc62390ea9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fHww",
      "date": "2025-01-12",
      "Liked": 87,
      "information": "Quick and easy vegan dishes for the whole family.",
      "dtype": "food"
    },
    {
      "heading": "10 Tips for Time Management",
      "image": "https://plus.unsplash.com/premium_photo-1664301564023-4bd6b9a8c7c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGltZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-10",
      "Liked": 45,
      "information": "Master your schedule with these practical strategies.",
      "dtype": "productivity"
    },
    {
      "heading": "Beachside Bliss",
      "image": "https://media.istockphoto.com/id/1442179368/photo/maldives-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=rRpu6W9p7NC3Z7Q0LvRyhXYt8i0j7Wjx-Gp3ipOWvho=",
      "date": "2025-01-09",
      "Liked": 143,
      "information": "The best destinations for a relaxing beach vacation.",
      "dtype": "travel"
    },
    {
      "heading": "The Art of Minimalist Living",
      "image": "https://plus.unsplash.com/premium_photo-1701170256335-6201e8facd3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbGlzdCUyMGxpdmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "date": "2025-01-07",
      "Liked": 98,
      "information": "How to declutter and simplify your life.",
      "dtype": "lifestyle"
    },
    {
      "heading": "Mastering Landscape Photography",
      "image": "https://plus.unsplash.com/premium_photo-1707516183475-f07ebd5a5f59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHxlbnwwfHwwfHx8MA%3D%3D",
      "date": "2025-01-05",
      "Liked": 76,
      "information": "Capture stunning landscapes with these pro tips.",
      "dtype": "photography"
    },
    {
      "heading": "Best Fitness Apps of 2025",
      "image": "https://images.unsplash.com/photo-1727848643098-fd5d1da5c0df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0dG5lc3N8ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-03",
      "Liked": 65,
      "information": "Top-rated apps to help you stay fit and healthy.",
      "dtype": "fitness"
    },
    {
      "heading": "Cozy Winter Fashion Trends",
      "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwZmFzaGlvbiUyMHRyZW5kc3xlbnwwfHwwfHx8MA%3D%3D",
      "date": "2025-01-01",
      "Liked": 92,
      "information": "Stay warm and stylish this winter season.",
      "dtype": "fashion"
    },
    {
      "heading": "How to Start a Small Business",
      "image": "https://plus.unsplash.com/premium_photo-1661740422528-611c1ae26094?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      "date": "2024-12-30",
      "Liked": 71,
      "information": "A step-by-step guide for aspiring entrepreneurs.",
      "dtype": "business"
    },
    {
      "heading": "DIY Home Decor Ideas",
      "image": "https://media.istockphoto.com/id/1185077526/photo/cute-and-warm-christmas-decoration-set-with-vintage-beer-bottles-and-wine-bottles-filled-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=T0wRy2pSWyEpOc9RKKkUxXewKPhHL5dbgJB_zUUwWHA=",
      "date": "2024-12-28",
      "Liked": 84,
      "information": "Creative and budget-friendly decor projects.",
      "dtype": "home"
    },
    {
      "heading": "Exploring the Great Outdoors",
      "image": "https://media.istockphoto.com/id/1130964201/photo/nepal-couple-and-the-ice-lake-with-the-view-on-annapurna-chain.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mc8D0DsvhpQ5Et3vXo4ebvNQ6ieybXIDBRSJ5RJIME=",
      "date": "2025-01-10",
      "Liked": 120,
      "information": "A guide to hiking trails across the country.",
      "dtype": "travel"
    },
    {
      "heading": "Tech Trends in 2025",
      "image": "https://media.istockphoto.com/id/2165761854/photo/new-2025-year-progress-bar-on-digital-lcd-display-with-reflection.webp?a=1&b=1&s=612x612&w=0&k=20&c=GRT924SLYlCMuSVSXzSdJxEQzB3PbmsYn5N7HkvF0Vk=",
      "date": "2025-01-12",
      "Liked": 215,
      "information": "The latest in AI and robotics innovations.",
      "dtype": "technology"
    },
    {
      "heading": "The Best Homemade Pizza Recipes",
      "image": "https://plus.unsplash.com/premium_photo-1675103909152-4aa4efcb5598?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVzdCUyMGhvbWUlMjBtYWRlJTIwcGl6emElMjByZWNpcGV8ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-13",
      "Liked": 150,
      "information": "Tips and tricks for crafting the perfect pizza.",
      "dtype": "food"
    },
    {
      "heading": "Top 10 Destinations for Solo Travelers",
      "image": "https://plus.unsplash.com/premium_photo-1661311933661-2c5fe55f8759?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9wJTIwMTBkZXN0aW5hdGlvbiUyMGZvciUyMHNvbG8lMjB0cmF2ZWxsZXJzfGVufDB8fDB8fHww",
      "date": "2025-01-08",
      "Liked": 300,
      "information": "Explore the world on your own terms.",
      "dtype": "travel"
    },
    {
      "heading": "Meditation for Beginners",
      "image": "https://media.istockphoto.com/id/1334071264/photo/young-woman-in-yoga-pose-using-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vz5D-ZJg1_PGO79F8cX2rhxwzpsaNwf13orOTUY_ZCk=",
      "date": "2025-01-07",
      "Liked": 90,
      "information": "Learn how to meditate and find inner peace.",
      "dtype": "wellness"
    },
    {
      "heading": "The Future of Electric Vehicles",
      "image": "https://media.istockphoto.com/id/1477067152/photo/electric-car-power-charging.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qb6NoEivbPGyf-YnRAEa6tfsZDWDwx6MSu0UCym3e9c=",
      "date": "2025-01-06",
      "Liked": 180,
      "information": "An in-depth look at EVs and their impact on the environment.",
      "dtype": "technology"
    },
    {
      "heading": "Healthy Meal Prep Ideas",
      "image": "https://plus.unsplash.com/premium_photo-1700053460784-2993baeca13c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoeSUyMG1lYWwlMjBwcmVwJTIwaWRlYXN8ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-11",
      "Liked": 250,
      "information": "Meal prep ideas to save time and eat healthier.",
      "dtype": "food"
    },
    {
      "heading": "Yoga Poses for Beginners",
      "image": "https://media.istockphoto.com/id/1067864452/photo/group-of-young-women-practicing-yoga-lesson-doing-mountain-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=sxOio5qXRnfrG2qaYfSdvtu4gHqN0FAlFc_EZmpnnsk=",
      "date": "2025-01-09",
      "Liked": 75,
      "information": "Simple yoga poses to start your fitness journey.",
      "dtype": "wellness"
    },
    {
      "heading": "Top Photography Tips for Beginners",
      "image": "https://plus.unsplash.com/premium_photo-1726812164212-754e703553ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9wJTIwUGhvdG9ncmFwaHklMjBUaXBzJTIwZm9yJTIwQmVnaW5uZXJzfGVufDB8fDB8fHww",
      "date": "2025-01-14",
      "Liked": 95,
      "information": "Master the basics of photography with these tips.",
      "dtype": "photography"
    },
    {
      "heading": "5-Minute Morning Workouts",
      "image": "https://plus.unsplash.com/premium_photo-1664444389139-f883bf3791e6?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2025-01-05",
      "Liked": 140,
      "information": "Quick and effective exercises to kickstart your day.",
      "dtype": "wellness"
    },
    {
      "heading": "The History of Modern Art",
      "image": "https://media.istockphoto.com/id/1756215519/photo/serene-view-of-namobuddha-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=BEG9x_q03OeMxNboa2HNxqkrjHVLKCva-HP5aYTBQ0w=",
      "date": "2025-01-02",
      "Liked": 65,
      "information": "Dive into the fascinating world of modern art.",
      "dtype": "art"
    },
    {
      "heading": "Best Beaches to Visit in 2025",
      "image": "https://plus.unsplash.com/premium_photo-1697729577313-5e8afad6a8b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVzdCUyMGJlYWNoZXMlMjB0byUyMHZpc2l0JTIwaW4lMjAyMDI1fGVufDB8fDB8fHww",
      "date": "2025-01-03",
      "Liked": 220,
      "information": "Relax and unwind at these stunning beaches.",
      "dtype": "travel"
    },
    {
      "heading": "Building a Successful Career in Tech",
      "image": "https://media.istockphoto.com/id/1189050210/photo/ambitious-business-man-climbing-stairs-to-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=KVPsbvn0l7e9dAIHITKw0edWZFGQU1iQkyXjfLE1AJw=",
      "date": "2025-01-01",
      "Liked": 185,
      "information": "Insights and advice for aspiring tech professionals.",
      "dtype": "career"
    },
    {
      "heading": "The Science Behind Coffee",
      "image": "https://media.istockphoto.com/id/1223505749/photo/a-cup-of-coffee-with-caffeine-molecule-created-by-coffee-beans.webp?a=1&b=1&s=612x612&w=0&k=20&c=iUKEQFiRKaVMXdvvr8MHn0ZQFDJ8A7pxc1E9arysQXY=",
      "date": "2025-01-13",
      "Liked": 110,
      "information": "Why coffee is so loved worldwide.",
      "dtype": "food"
    },
    {
      "heading": "How to Start a Garden at Home",
      "image": "https://plus.unsplash.com/premium_photo-1678836292816-fdf0ac484cf1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG93JTIwdG8lMjBzdGFydCUyMGElMjBnYXJkZW4lMjBhdCUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
      "date": "2025-01-12",
      "Liked": 240,
      "information": "Tips for growing your own plants and vegetables.",
      "dtype": "gardening"
    },
    {
      "heading": "Virtual Reality in Gaming",
      "image": "https://media.istockphoto.com/id/1334401071/photo/young-man-playing-video-game-by-wearing-vr-or-virtual-reality-goggles-and-holding-joysticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=qM83YiM3Iy0ICt588W-MJ9S0T2h5Md9mIFCZfGObw8U=",
      "date": "2025-01-04",
      "Liked": 300,
      "information": "The evolution and future of VR in games.",
      "dtype": "technology"
    },
    {
      "heading": "The Magic of Minimalist Living",
      "image": "https://media.istockphoto.com/id/514734134/photo/gravity.webp?a=1&b=1&s=612x612&w=0&k=20&c=27NJNUsBm2-rIp6COK79-hSMn9YHUk-GolYv4moVZ2c=",
      "date": "2025-01-11",
      "Liked": 95,
      "information": "Declutter your life and focus on what matters.",
      "dtype": "lifestyle"
    },
    {
      "heading": "The Role of AI in Healthcare",
      "image": "https://media.istockphoto.com/id/1396801868/photo/a-young-african-american-doctor-works-on-hud-or-graphic-display-in-front-of-her.webp?a=1&b=1&s=612x612&w=0&k=20&c=abQlkE-qVjd1UgHuAaAmBj2jKTp9kafuXId4rNPK2iA=",
      "date": "2025-01-13",
      "Liked": 310,
      "information": "How AI is transforming the healthcare industry.",
      "dtype": "technology"
    },
    {
      "heading": "Exploring the Depths of the Ocean",
      "image": "https://media.istockphoto.com/id/1410569901/photo/rays-of-lights-in-caves-and-tunnels.webp?a=1&b=1&s=612x612&w=0&k=20&c=As6WXu45gdrHOk6DgIet-aTJGz_40bU4hbfiKL1VGGU=",
      "date": "2025-01-08",
      "Liked": 105,
      "information": "Uncover the mysteries of the underwater world.",
      "dtype": "nature"
    },
    {
      "heading": "The Evolution of Fashion in the 21st Century",
      "image": "https://media.istockphoto.com/id/2060608306/photo/innovative-woman-with-robotic-hand-interacting-with-drone-in-ornate-historic-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=K1SzQJuS5Pc4ujo_CLs707Ei1Qg9qacZLV2FReETccg=",
      "date": "2025-01-07",
      "Liked": 85,
      "information": "Trends and transformations in modern fashion.",
      "dtype": "fashion"
    }      
  ]

module.exports = sample;