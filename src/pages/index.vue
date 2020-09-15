//pages/index.vue
<template>
  <div class="c-page">
    <div class="c-container">
      <div class="c-expands">
        <div class="c-expand">
          <h2 class="c-heading__lv1">About</h2>
          <div class="c-expands">
            <div class="c-expand -medium">
              <p class="about__name">福間 拓郎（Fukuma Takuro）</p>
              <p>1990年生まれ福岡県在住、映像を作ってます。</p>
            </div>
            <div class="c-expand -medium">
              <h3 class="c-heading__lv2">Reel</h3>
              <div class="c-project__iframe">
               <iframe src="https://player.vimeo.com/video/457703892" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow=autoplay></iframe>
              </div>
            </div>
            <div class="c-expand -medium">
              <h3 class="c-heading__lv2">Position</h3>
              <p>Offline Editor / Online Editor<br>
              Motion Designer<br>
              Color Grader</p>
            </div>
            <div class="c-expand -medium">
              <h3 class="c-heading__lv2">Skill</h3>
              <p>Adobe Premiere Pro / After Effects<br>
              Adobe Illustrator / Photoshop<br>
              BMD   DaVinci Resolve</p>
            </div>
          </div>
        </div>
         <div class="c-expand">
          <h2 class="c-heading__lv1">Portfolio</h2>
          <ul class="c-project__items -x2">
            <li class="c-project__item">
              <a href="https://vimeo.com/457761709" target="_blank" rel="noopener">
                <div class="c-project__item-image">
                  <img src="~/assets/img/project_thumbs-yatai.jpg" width="960" height="180" alt="Fukuoka Yataiのサムネイル画像">
                  <div class="c-project__item-image-noise"></div>
                </div>
                <h3 class="c-project__item-title">Fukuoka Yatai</h3>
              </a>
            </li>
            <li class="c-project__item">
              <a href="https://vimeo.com/457760623" target="_blank" rel="noopener">
                <div class="c-project__item-image">
                  <img src="~/assets/img/project_thumbs-itoshimagram.jpg" width="960" height="180" alt="Itoshimagramのサムネイル画像">
                  <div class="c-project__item-image-noise"></div>
                </div>
                <h3 class="c-project__item-title">Itoshimagram</h3>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-expand">
          <h2 class="c-heading__lv1">Works</h2>
          <ul class="c-project__items -x2">
            <li class="c-project__item">
              <a href="https://vimeo.com/457763213" target="_blank" rel="noopener">
                <div class="c-project__item-image">
                  <img src="~/assets/img/project_thumbs-fcc.jpg" width="960" height="180" alt="大人の英会話学校のサムネイル画像">
                  <div class="c-project__item-image-noise"></div>
                </div>
                <h3 class="c-project__item-title">大人の英会話学校</h3>
                <p class="c-project__item-title-sub">福岡コミュニケーションセンター</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-expand">
          <h2 class="c-heading__lv1">Contact</h2>
          <p class="contact__heading">Get in touch</p>
          <div class="contact__link-wrap">
            <p class="contact__link"><a href="mailto:asonedaywillberefreshing@gmail.com">asonedaywillberefreshing@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://takurofukuma.microcms.io/api/v1/careers',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    )
    return data
  }
}
</script>

<style lang="scss" scoped>
  .about__name {
    margin-bottom: 10px;
    font-size: 1.6rem;
    @include mq('max') {
      margin-bottom: 5px;
      font-size: 1.4rem;
    }
  }
  .c-project__iframe {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      width: 100% !important;
      height: 100% !important;
    }
  }
  .c-project__items {
    @include mq('min') {
      display: flex;
      flex-wrap: wrap;
      margin: -10px 0 0 -10px;
      &.-x2 {
        .c-project__item {
          width: calc(50% - 10px);
        }
      }
    }
  }
  .c-project__item {
    @include mq('min') {
      margin: 10px 0 0 10px;
    }
    @include mq('max') {
      &:not(:first-child) {
        margin-top: 15px;
      }
    }
  }
  .c-project__item-image {
    position: relative;
    margin-bottom: 15px;
    @include mq('max') {
      margin-bottom: 10px;
    }
  }
	.c-project__item-image-noise {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("~@/assets/img/noise.png");
		animation: noise_anima 1s steps(10) infinite;
	}
	@keyframes noise_anima {
		from { background-position: 0 0; }
		to { background-position: 123px 456px; }
	}
  .c-project__item-title {
    font-weight: bold;
  }
  .c-project__item-title-sub {
    font-size: 1rem;
    color: #868686;
  }
  .contact__heading {
    margin-bottom: 40px;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    @include mq('max') {
      margin-bottom: 20px;
      font-size: 1.3rem;
    }
  }
  .contact__link-wrap {
    text-align: center;
  }
  .contact__link {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1;
    font-family: -apple-system,BlinkMacSystemFont,sans-serif;
    @include mq('max') {
      font-size: 1.6rem;
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -.125em;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
    }
    &:before {
      transform: scaleX(1);
    }
     &:after {
       transform: scaleX(0);
     }
     @include mq('min') {
      &:hover {
        &:before {
          transform-origin: 100% 50% 0;
          transform: scaleX(0);
          transition: transform .6s cubic-bezier(.25,.46,.45,.94) 0s;
        }
        &:after {
          transform-origin: 0 50% 0;
          transform: scaleX(1);
          transition: transform .45s cubic-bezier(.25,.46,.45,.94) .15s;
        }
      }
    }
  }
  .contact__text {
    text-align: center;
  }
</style>
