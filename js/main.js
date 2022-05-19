const data = [
  {
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  {
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  {
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  {
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  {
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  {
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  {
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  {
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  {
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  {
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  {
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
];

const p1img = document.querySelectorAll('.user__img')
p1img[0].src=data[0].src
const p1fullname = document.querySelectorAll('.user__fullname')
p1fullname[0].textContent = data[0].first_name + ' ' + data[0].last_name
const p1email = document.querySelectorAll('.user__email')
p1email[0].textContent = data[0].email
const p1gender = document.querySelectorAll('.user__gender')
p1gender[0].textContent = data[0].gender
const p1adress = document.querySelectorAll('.user__address')
p1adress[0].textContent = data[0].ip_address

const p2img = document.querySelectorAll('.user__img')
p2img[1].src=data[1].src
const p2fullname = document.querySelectorAll('.user__fullname')
p2fullname[1].textContent = data[1].first_name + ' ' + data[1].last_name
const p2email = document.querySelectorAll('.user__email')
p2email[1].textContent = data[1].email
const p2gender = document.querySelectorAll('.user__gender')
p2gender[1].textContent = data[1].gender
const p2adress = document.querySelectorAll('.user__address')
p2adress[1].textContent = data[1].ip_address

const p3img = document.querySelectorAll('.user__img')
p3img[2].src=data[2].src
const p3fullname = document.querySelectorAll('.user__fullname')
p3fullname[2].textContent = data[2].first_name + ' ' + data[2].last_name
const p3email = document.querySelectorAll('.user__email')
p3email[2].textContent = data[2].email
const p3gender = document.querySelectorAll('.user__gender')
p3gender[2].textContent = data[2].gender
const p3adress = document.querySelectorAll('.user__address')
p3adress[2].textContent = data[2].ip_address

const p4img = document.querySelectorAll('.user__img')
p4img[3].src=data[3].src
const p4fullname = document.querySelectorAll('.user__fullname')
p4fullname[3].textContent = data[3].first_name + ' ' + data[3].last_name
const p4email = document.querySelectorAll('.user__email')
p4email[3].textContent = data[3].email
const p4gender = document.querySelectorAll('.user__gender')
p4gender[3].textContent = data[3].gender
const p4adress = document.querySelectorAll('.user__address')
p4adress[3].textContent = data[3].ip_address

const p5img = document.querySelectorAll('.user__img')
p5img[4].src=data[4].src
const p5fullname = document.querySelectorAll('.user__fullname')
p5fullname[4].textContent = data[4].first_name + ' ' + data[4].last_name
const p5email = document.querySelectorAll('.user__email')
p5email[4].textContent = data[4].email
const p5gender = document.querySelectorAll('.user__gender')
p5gender[4].textContent = data[4].gender
const p5adress = document.querySelectorAll('.user__address')
p5adress[4].textContent = data[4].ip_address

const p6img = document.querySelectorAll('.user__img')
p6img[5].src=data[5].src
const p6fullname = document.querySelectorAll('.user__fullname')
p6fullname[5].textContent = data[5].first_name + ' ' + data[5].last_name
const p6email = document.querySelectorAll('.user__email')
p6email[5].textContent = data[5].email
const p6gender = document.querySelectorAll('.user__gender')
p6gender[5].textContent = data[5].gender
const p6adress = document.querySelectorAll('.user__address')
p6adress[5].textContent = data[5].ip_address

const p7img = document.querySelectorAll('.user__img')
p7img[6].src=data[6].src
const p7fullname = document.querySelectorAll('.user__fullname')
p7fullname[6].textContent = data[6].first_name + ' ' + data[6].last_name
const p7email = document.querySelectorAll('.user__email')
p7email[6].textContent = data[6].email
const p7gender = document.querySelectorAll('.user__gender')
p7gender[6].textContent = data[6].gender
const p7adress = document.querySelectorAll('.user__address')
p7adress[6].textContent = data[6].ip_address

const p8img = document.querySelectorAll('.user__img')
p8img[7].src=data[7].src
const p8fullname = document.querySelectorAll('.user__fullname')
p8fullname[7].textContent = data[7].first_name + ' ' + data[7].last_name
const p8email = document.querySelectorAll('.user__email')
p8email[7].textContent = data[7].email
const p8gender = document.querySelectorAll('.user__gender')
p8gender[7].textContent = data[7].gender
const p8adress = document.querySelectorAll('.user__address')
p8adress[7].textContent = data[7].ip_address

const p9img = document.querySelectorAll('.user__img')
p9img[8].src=data[8].src
const p9fullname = document.querySelectorAll('.user__fullname')
p9fullname[8].textContent = data[8].first_name + ' ' + data[8].last_name
const p9email = document.querySelectorAll('.user__email')
p9email[8].textContent = data[8].email
const p9gender = document.querySelectorAll('.user__gender')
p9gender[8].textContent = data[8].gender
const p9adress = document.querySelectorAll('.user__address')
p9adress[8].textContent = data[8].ip_address

const p10img = document.querySelectorAll('.user__img')
p10img[9].src=data[9].src
const p10fullname = document.querySelectorAll('.user__fullname')
p10fullname[9].textContent = data[9].first_name + ' ' + data[9].last_name
const p10email = document.querySelectorAll('.user__email')
p10email[9].textContent = data[9].email
const p10gender = document.querySelectorAll('.user__gender')
p10gender[9].textContent = data[9].gender
const p10adress = document.querySelectorAll('.user__address')
p10adress[9].textContent = data[9].ip_address

const p11img = document.querySelectorAll('.user__img')
p11img[10].src=data[10].src
const p11fullname = document.querySelectorAll('.user__fullname')
p11fullname[10].textContent = data[10].first_name + ' ' + data[10].last_name
const p11email = document.querySelectorAll('.user__email')
p11email[10].textContent = data[10].email
const p11gender = document.querySelectorAll('.user__gender')
p11gender[10].textContent = data[10].gender
const p11adress = document.querySelectorAll('.user__address')
p11adress[10].textContent = data[10].ip_address
