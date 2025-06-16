window.addEventListener("load", function () {
  // 데이터
  const ticketApiData = [
    {
      링크: "#",
      이미지:
      "//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
      alt: "맘마미아 포스터",
      티켓랭크: "#",
      제목: "뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      날짜: "2025.07.26 ~ 2025.10.25",
      빨간버튼: "단독판매",
      파란버튼: "좌석우위",
    },
    {
      링크: "#",
      이미지:
      "//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
      alt: "맘마미아 포스터",
      티켓랭크: "#",
      제목: "뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      날짜: "2025.07.26 ~ 2025.10.25",
      빨간버튼: "단독판매",
      파란버튼: "좌석우위",
    },
    {
      링크: "#",
      이미지:
      "//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
      alt: "맘마미아 포스터",
      티켓랭크: "#",
      제목: "뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      날짜: "2025.07.26 ~ 2025.10.25",
      빨간버튼: "단독판매",
      파란버튼: "좌석우위",
    },
    {
      링크: "#",
      이미지:
      "//ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
      alt: "맘마미아 포스터",
      티켓랭크: "#",
      제목: "뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>뮤지컬 <맘마미아!>",
      장소: "LG아트센터 서울 LG SIGNATURE 홀",
      날짜: "2025.07.26 ~ 2025.10.25",
      빨간버튼: "단독판매",
      파란버튼: "좌석우위",
    },
  ];

  // html 태그 만들고 배치하기
  const ticketPos = this.document.querySelector(".swiper .sw_ticket");
  let html = `
  <div class="swiper-slide">
    <a href="${ticketApiData[0].링크}" class="ticket_slide_item">
        <div class="ticket_image">
            <img
            src="${ticketApiData[0].이미지}" 
            alt="${ticketApiData[0].alt}"
            />
            <div class="ticket_rank">${ticketApiData[0].티켓랭크}</div>
        </div>
        <div class="ticket_info">
            <p class="ticket_item_title">
                ${ticketApiData[0].제목}
            </p>
            <p class="ticket_place">
                ${ticketApiData[0].장소}
            </p>
            <p class="ticket_day">${ticketApiData[0].날짜}</p>
            <div class="ticket_option">
                <span class="ticket_red">${ticketApiData[0].빨간버튼}</span>
                <span class="ticket_blue">${ticketApiData[0].파란버튼}</span>
            </div>
        </div>
    </a>
</div>
  `;

  html = "";
  for(let i = 0; i < ticketApiData.length; i++) {
    let tag = `
      <div class="swiper-slide">
    <a href="${ticketApiData[i].링크}" class="ticket_slide_item">
        <div class="ticket_image">
            <img src="${ticketApiData[i].이미지}" alt="${ticketApiData[i].alt}" />
            <div class="ticket_rank">${ticketApiData[i].티켓랭크}</div>
        </div>
        <div class="ticket_info">
            <p class="ticket_item_title">
                ${ticketApiData[i].제목}
            </p>
            <p class="ticket_place">
                ${ticketApiData[i].장소}
            </p>
            <p class="ticket_day">${ticketApiData[i].날짜}</p>
            <div class="ticket_option">
                <span class="ticket_red">${ticketApiData[i].빨간버튼}</span>
                <span class="ticket_blue">${ticketApiData[i].파란버튼}</span>
            </div>
        </div>
    </a>
</div>
    `;

    html = html + tag;
  }

  console.log("만들어진 태그 : ", html);

  ticketPos.innerHTML = html;


  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
