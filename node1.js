const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json())

let items = [{ id: 1, url: 'https://live.staticflickr.com/3674/13796312054_4a2424e5a8_b.jpg', title: 'Jeans' }, { id: 2, url: 'https://i.pinimg.com/736x/3d/a7/c4/3da7c44f3a1991eb8be30cf2eabdfcf4.jpg', title: ' Skirts & Pants' }, { id: 3, url: 'https://i.ebayimg.com/images/g/Gw8AAOSwWCVi2bNd/s-l500.jpg', title: 'Low Rise Belted Jeans' }, { id: 4, url: 'https://cdn.shopify.com/s/files/1/0631/5855/0772/products/image_fdcc85a7-3fb1-4c4e-81d2-361ff403652a.png?v=1649215206', title: 'Low Rise Jeans' }, { id: 5, url: 'https://i.pinimg.com/originals/6b/6a/1d/6b6a1d51c1bf53ddab126fa8812611e0.jpg', title: 'Outfits' }, { id: 6, url: 'https://i.pinimg.com/736x/a7/4b/52/a74b52a81572ae651d60cabaf89ff2f1.jpg', title: ' White Skirt' }, { id: 7, url: 'https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png', title: 'Blue---' }, { id: 8, url: 'https://www.kindpng.com/picc/m/81-816202_blue-star-sparkle-png-transparent-png.png', title: 'Blue Sparkles---' }, { id: 9, url: 'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg', title: 'Yello Sparkles---' }, { id: 10, url: 'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg', title: 'Yello Sparkles,again---' }, { id: 11, url: 'https://image.pngaaa.com/145/727145-middle.png', title: 'Pink Sparkles---' }, { id: 12, url: 'https://cdn.shopify.com/s/files/1/0423/2629/4692/products/Y2KDELUXECOVERCHROME_2048x.png?v=1650898588', title: 'Silver Star---' }, { id: 13, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOG2Ju3tVhqeH-kdmywErOKFAyhDQmSmGkMmV7P6iD5jP3g5nXlVSw0s80nSLlWpAG-c&usqp=CAU', title: 'Pink Heart---' }, { id: 14, url: 'https://png.pngitem.com/pimgs/s/118-1187152_transparent-glowing-star-clipart-blue-transparent-background-stars.png', title: 'Blue Stars with Sparkles---' }, { id: 15, url: 'https://png.pngitem.com/pimgs/s/625-6250367_fanmade-cutie-mark-stars-by-durpy-dallas-stars.png', title: 'Blue Stars--- ' }, { id: 16, url: 'https://p.kindpng.com/picc/s/116-1168531_star-red-star-five-pointed-png-free-photo.png', title: 'Red Stars---' }, { id: 17, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbGUMZ7DMeY5h864tz9euU3ibOZSbHdISvA&usqp=CAU', title: 'Black Sparkles---' }, { id: 18, url: 'https://i.pinimg.com/736x/d8/bd/e4/d8bde4e31993a1094865e07f17d0aa91.jpg', title: 'Big Blue Star---' }, { id: 19, url: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/super-star-text-y2k-aesthetic-sticker-36806-9b25dc.png', title: 'Big Pink Star---' }, { id: 20, url: 'https://i.etsystatic.com/17330034/r/il/0df12c/2424157158/il_570xN.2424157158_gm5e.jpg', title: 'Strange Desert---' }, { id: 21, url: 'https://i.pinimg.com/originals/62/32/c0/6232c0297b746b4c4029f814e6c2d779.png', title: 'Cosmic' }, { id: 22, url: 'https://icon2.cleanpng.com/20180318/gyq/kisspng-star-yellow-clip-art-rising-star-cliparts-5aadec4cd3b379.3465608815213476608671.jpg', title: 'One Big Yello Start' }, { id: 23, url: 'https://www.vhv.rs/dpng/d/361-3617406_totally-spies-gadgets-compowder-compoudrier-totally-spies-hd.png', title: 'Video Phone' }, { id: 24, url: 'https://i.pinimg.com/originals/c0/c8/37/c0c83763dd8693c8161d3610d9c9d0d0.jpg', title: 'Black Hair Girl' }, { id: 25, url: 'https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-6.png', title: 'Heart' }, { id: 26, url: 'https://pngimg.com/uploads/butterfly/butterfly_PNG1016.png', title: 'Blue Butterfly' }, { id: 27, url: 'https://thumbs.dreamstime.com/b/tropical-bright-orange-butterfly-23288431.jpg', title: 'Yello Butterfly' }, { id: 28, url: 'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775246_q9HAv97MGxOIp5rPojwNfFvZIB4Fq10X.jpg', title: 'Purple Butterfly' }, { id: 29, url: 'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775262_w5lx6hYnkkvmy317UZWgodnccyp270Cu.jpg', title: 'Pink Butterfly' }, { id: 30, url: 'https://images.immediate.co.uk/production/volatile/sites/4/2022/09/Chimaera-Birdwing-4cee20f.jpg', title: 'Green Butterfly' }, { id: 31, url: 'https://a-z-animals.com/media/2021/08/wallacegoldenbirdwing-1024x683.jpg', title: 'Little Yello Butterfly' }, { id: 32, url: 'https://i.pinimg.com/originals/3a/01/6b/3a016b36807f47c5877ba19dbeef9409.jpg', title: 'Green&Blue Butterfly' }, { id: 33, url: 'https://media.istockphoto.com/id/1314812112/vector/sunset-sky-cartoon-summer-sunrise-with-pink-clouds-and-sunshine-evening-cloudy-heaven.jpg?s=612x612&w=0&k=20&c=5ICXJ0K3Uu06L9OpqINVu4bUXS3UcBWJHP3Ut8MqDWU=', title: 'Colorful Skies' }, { id: 34, url: 'https://static.vecteezy.com/system/resources/previews/014/992/117/original/sunset-cartoon-sky-with-clouds-sun-sunlight-background-design-free-vector.jpg', title: 'Another Sky' }]


app.post('/addnew', (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).json({ message: 'Bad request try again' })
  }

  items = [ req.body, ...items ];
  return res.json(items)
})

app.get('/', (request, response) => {

  if (request.query.limit && request.query.limit !== '0') {
    items = items.slice(0, +request.query.limit)
  }
  response.statusMessage = 'okayy'

  response.status(201).json(items)
})

app.listen(4000, (err) => {
  (err) ? console.log(err) : console.log('Listening port 4000');;
})