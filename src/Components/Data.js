export default {
    users: [
      { username: "regular", accessLevel: 1, password: "password" },
      { username: "admin", accessLevel: 0, password: "password" },
      { username:"uma", accesLevel: 2, password: "123456"},
      { username:"rintu", accesLevel: 2, password: "123456"},
      { username:"harish", accesLevel: 2, password: "123456"}

    ],
    initProducts: [
      {
        image:"data:image/jpeg;base64,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",
        name: "shoes",
        stock: 10,
        price: 399.99,
        shortDesc: "Nike",
        description:"More support around the heel pairs with the foot-hugging feel of flyknit."
      },
      {
      image:"https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/MFS_Aug/AF/EmergingBrands/lekmi._SY530_QL85_.jpg",
      name:"Watches",
      stock:0,
      price:1429.9,
      shortDesc:"Lamkei Analog-Digital Men's watch",
      description:"Designed and Manufactured by Lamkei in Japan (Imported)"
      },
      {
        image:"https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_02._CB429518095_.jpg",
        name:"T-shirt",
        stock:8,
        price:500,
        shortDesc:"White t-shirt",
        description:"T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean."
      },
      {
        image:"https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_04._CB429518094_.jpg",
        name:"polos",
        stock:10,
        price:500,
        shortDesc:"Orange shirt",
        description:"T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean."
      },
      {
        image:"https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_10._CB429518094_.jpg",
        name:"Formal shirt",
        stock:8,
        price:800,
        shortDesc:"Blue formal shirt",
        description:"It is usually a long-sleeved garment with a collar and buttons down the entire length of the front, and it is fastened with buttons or snaps. ... "
      },
      {
        image:"https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_17._CB429518094_.jpg",
        name:"Jeans",
        stock:3,
        price:1500,
        shortDesc:"blue jeans",
        description:"dark wash straight leg jeans"
      },
    ]
  };